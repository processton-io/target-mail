import Vuex, { StoreOptions } from 'vuex';
import { ModuleTree } from 'vuex';

// Load store modules dynamically.
const requireContext = import.meta.glob('./modules/**/*.ts', { eager: true });
const modules = Object.keys(requireContext)
    .map((file) => [
        file.replace(/(^.\/)|(\.ts$)/g, '').replace('modules/', ''),
        requireContext[file],
    ])
    .reduce((modules, [name, module]) => {
        if ((module as any).namespaced === undefined) {
            module = { ...(module as any), namespaced: true };
        }

        return { ...modules, [String(name)]: module };
    }, {}) as StoreOptions<{}>;

export default new Vuex.Store({
    modules: modules as ModuleTree<unknown>,
});
