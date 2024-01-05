import axios from 'axios'

export const formsEndpoint = '/api/open/workspaces/{workspaceId}/forms'
export const namespaced = true
let currentPage = 1

interface Form {
    id: number;
    slug: string;
    tags: string[];
}

interface State {
    content: Form[];
    loading: boolean;
}

// state
export const state: State = {
    content: [],
    loading: false
}

// getters
export const getters = {
    getById: (state: State) => (id: number) => {
        return state.content.find(item => item.id === id) || null;
    },
    getBySlug: (state: State) => (slug: string) => {
        return state.content.find(item => item.slug === slug) || null;
    },
    getAllTags: (state: State) => {
        const allTags: string[] = [];
        state.content.forEach(form => {
            if (form.tags && form.tags.length > 0) {
                allTags.push(...form.tags);
            }
        });
        return Array.from(new Set(allTags));
    }
}

// mutations
export const mutations = {
    set(state: State, items: Form[]) {
        state.content = items;
    },
    append(state: State, items: Form[]) {
        state.content = [...state.content, ...items];
    },
    addOrUpdate(state: State, item: Form) {
        state.content = state.content.filter(val => val.id !== item.id);
        state.content.push(item);
    },
    remove(state: State, item: Form) {
        state.content = state.content.filter(val => val.id !== item.id);
    },
    startLoading(state: State) {
        state.loading = true;
    },
    stopLoading(state: State) {
        state.loading = false;
    }
}

// actions
export const actions = {
    resetState(context: any) {
        context.commit('set', []);
        context.commit('stopLoading');
        currentPage = 1;
    },
    load(context: any, workspaceId: string) {
        context.commit('startLoading');
        return axios.get(formsEndpoint.replace('{workspaceId}', workspaceId) + '?page=' + currentPage)
            .then((response) => {
                context.commit(currentPage === 1 ? 'set' : 'append', response.data.data);
                if (currentPage < response.data.meta.last_page) {
                    currentPage += 1;
                    return context.dispatch('load', workspaceId);
                } else {
                    context.commit('stopLoading');
                    currentPage = 1;
                }
            });
    },
    loadIfEmpty(context: any, workspaceId: string) {
        if (context.state.content.length === 0) {
            return context.dispatch('load', workspaceId);
        }
        context.commit('stopLoading');
        return Promise.resolve();
    }
}
