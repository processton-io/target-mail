import store from '../store';
import { createMetaManager } from 'vue-meta';
import routes from './routes';
import { createRouter, Router, createWebHistory, RouteLocationNormalized, NavigationFailure } from "vue-router";
import { sync } from 'vuex-router-sync';
import * as Sentry from '@sentry/vue';
import { nextTick } from 'vue';
import { consoleInfo } from '../library/ConsoleMessages';

// The middleware for every page of the application.
const globalMiddleware: string[] = ['locale', 'check-auth', 'notion-connection'];

// Load middleware modules dynamically.
const requireContext = import.meta.glob('../middleware/**/*.js', { eager: true });
const routeMiddleware = resolveMiddleware(requireContext);

const router = Router();

sync(store, router);

export default router;

const meta = createMetaManager();

export { meta };

function Router(): Router {
    const router = createRouter({
        history: createWebHistory(),
        routes
    });

    router.beforeEach(beforeEach);
    router.afterEach(afterEach);

    return router;
}

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function): Promise<void> {
    // Sentry tracking
    

    if (window.config?.sentry_dsn) {
        Sentry.configureScope((scope) => scope.setTransactionName((to?.name || 'Unknown route name').toString()));
    }

    let components: any[] = [];

    // External redirect
    if (to.matched.some((record) => record.meta.externalUrl)) {
        const url = to.meta.externalUrl as string; // Cast 'url' to string
        window.location.replace(url);
        return;
    }

    try {
        // Get the matched components and resolve them.
        components = await resolveComponents(router.currentRoute.value.matched);
    } catch (error: Error | any) {
        if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
            window.location.reload();
            return;
        }
    }

    if (components.length === 0) {
        return next();
    }

    // Start the loading bar.
    if (components[components.length - 1].loading !== false) {
        nextTick(() => console.log('start loading'));
    }

    // Get the middleware for all the matched components.
    const middleware = getMiddleware(components);

    // Call each middleware.
    callMiddleware(middleware, to, from, (...args: any[]) => {
        // Set the application layout only if "next()" was called with no args.
        if (args.length === 0) {
            if ((router as any).app.setLayout) {
                (router as any).app.setLayout(components[0].layout);
            } else if (components[0].default && components[0].default.layout) {
                (router as any).app.setLayout(components[0].default.layout);
            } else {
                (router as any).app.setLayout(null);
            }
        }

        next(...args);
    });
}

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationFailure | void): Promise<void> {

    await nextTick();
    consoleInfo(`Navigated to ${String(to.name)} from ${String(from.name)} Next: ${String(next)}`);
    // Stop the loading bar.
    if ((router as any).app.$loading.finish) {
        (router as any).app.$loading.finish();
    }
}

function callMiddleware(middleware: string[], to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function): void {
    const stack = middleware.reverse();

    const _next = (...args: any[]) => {
        // Stop if "_next" was called with an argument or the stack is empty.
        if (args.length > 0 || stack.length === 0) {
            if (args.length > 0) {
                (router as any).app.$loading.finish();
            }

            return next(...args);
        }

        const { middleware, params } = parseMiddleware(stack.pop() as string);

        if (typeof middleware === 'function') {
            middleware(to, from, _next, params);
        } else if ((routeMiddleware as Record<string, Function>)[middleware]) {
            (routeMiddleware as Record<string, Function>)[middleware](to, from, _next, params);
        } else {
            throw Error(`Undefined middleware [${middleware}]`);
        }
    };

    _next();
}

/**
 * @param  {String|Function} middleware
 * @return {Object}
 */
function parseMiddleware(middleware: string | Function): { middleware: string | Function; params?: string } {
    if (typeof middleware === 'function') {
        return { middleware };
    }

    const [name, params] = middleware.split(':');

    return { middleware: name, params };
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents(components: any[]): Promise<any[]> {
    return Promise.all(components.map((component) => {
        return typeof component === 'function' ? component() : component;
    }));
}

/**
 * Merge the the global middleware with the components middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */
function getMiddleware(components: any[]): string[] {
    const middleware: string[] = [...globalMiddleware];

    components.forEach((component) => {
        let compMiddleware;
        if (component.middleware) {
            compMiddleware = component.middleware;
        } else if (component.default && component.default.middleware) {
            compMiddleware = component.default.middleware;
        }

        if (compMiddleware) {
            if (Array.isArray(compMiddleware)) {
                middleware.push(...compMiddleware);
            } else {
                middleware.push(compMiddleware);
            }
        }
    });

    return middleware;
}

/**
 * @param  {Object} requireContext
 * @return {Object}
 */
function resolveMiddleware(requireContext: any): Object {
    const middlewares: { [key: string]: any } = {};
    Object.keys(requireContext)
        .map((file) => {
            const match = file.match(/[^/]*(?=\.[^.]*$)/);
            if (match) {
                return [match[0], requireContext[file]];
            }
            return [];
        })
        .filter((item) => item.length > 0)
        .forEach(([name, middleware]) => {
            middlewares[name] = middleware.default || middleware;
        });
    return middlewares;
}
