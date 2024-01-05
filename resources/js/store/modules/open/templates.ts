import axios from 'axios'
import { consoleError } from '../../../library/ConsoleMessages';

export const templatesEndpoint = '/api/templates'
export const namespaced = true

interface Template {
    id: number;
    slug: string;
    name: string;
    // Add more properties as needed
}

interface Industry {
    slug: string;
    name: string;
    // Add more properties as needed
}

interface Type {
    slug: string;
    name: string;
    // Add more properties as needed
}

interface State {
    content: Template[];
    industries: Record<string, Industry>;
    types: Record<string, Type>;
    allLoaded: boolean;
    loading: boolean;
}

// state
export const state: State = {
    content: [],
    industries: {},
    types: {},
    allLoaded: false,
    loading: false
}

// getters
export const getters = {
    getBySlug: (state: State) => (slug: string) => {
        if (state.content.length === 0) return null
        return state.content.find(item => item.slug === slug)
    },
    getTemplateTypes: (state: State) => (slugs: string[]) => {
        if (Object.keys(state.types).length === 0) return null
        return Object.values(state.types).filter((val) => slugs.includes(val.slug)).map((item) => item.name)
    },
    getTemplateIndustries: (state: State) => (slugs: string[]) => {
        if (Object.keys(state.industries).length === 0) return null
        return Object.values(state.industries).filter((val) => slugs.includes(val.slug)).map((item) => item.name)
    }
}

// mutations
export const mutations = {
    set(state: State, items: Template[]) {
        state.content = items
        state.allLoaded = true
    },
    append(state: State, items: Template[]) {
        const ids = items.map((item) => item.id)
        state.content = state.content.filter((val) => !ids.includes(val.id))
        state.content = state.content.concat(items)
    },
    addOrUpdate(state: State, item: Template) {
        state.content = state.content.filter((val) => val.id !== item.id)
        state.content.push(item)
    },
    remove(state: State, item: Template) {
        state.content = state.content.filter((val) => val.id !== item.id)
    },
    startLoading(state: State) {
        state.loading = true
    },
    stopLoading(state: State) {
        state.loading = false
    },
    setAllLoaded(state: State, val: boolean) {
        state.allLoaded = val
    }
}

// actions
export const actions = {
    resetState(context: any) {
        context.commit('set', [])
        context.commit('stopLoading')
    },
    loadTypesAndIndustries(context: any) {
        if (Object.keys(context.state.industries).length === 0) {
            import('@/data/forms/templates/industries.json').then((module: any) => {
                context.state.industries = module.default
            })
        }
        if (Object.keys(context.state.types).length === 0) {
            import('@/data/forms/templates/types.json').then((module: any) => {
                context.state.types = module.default
            })
        }
    },
    loadTemplate(context: any, slug: string) {
        context.commit('startLoading')
        context.dispatch('loadTypesAndIndustries')

        if (context.getters.getBySlug(slug)) {
            context.commit('stopLoading')
            return Promise.resolve()
        }

        return axios.get(templatesEndpoint + '/' + slug)
            .then((response) => {
                context.commit('addOrUpdate', response.data)
                context.commit('stopLoading')
            })
            .catch((error): void => {
                consoleError(error)
                context.commit('stopLoading')
            })
    },
    loadAll(context: any, options: any = null) {
        context.commit('startLoading')
        context.dispatch('loadTypesAndIndustries')

        // Prepare with options
        let queryStr = ''
        if (options !== null) {
            for (const [key, value] of Object.entries(options)) {
                queryStr += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(value as string | number | boolean)
            }
            queryStr = queryStr.slice(1)
        }

        return axios.get((queryStr) ? templatesEndpoint + '?' + queryStr : templatesEndpoint)
            .then((response) => {
                if (options !== null) {
                    context.commit('set', response.data)
                    context.commit('setAllLoaded', false)
                } else {
                    context.commit('append', response.data)
                    context.commit('setAllLoaded', true)
                }
                context.commit('stopLoading')
            })
            .catch((error): void => {
                consoleError(error)
                context.commit('stopLoading')
            })
    },
    loadIfEmpty(context: any) {
        if (!context.state.allLoaded) {
            return context.dispatch('loadAll')
        }
        context.commit('stopLoading')
        return Promise.resolve()
    }
}
