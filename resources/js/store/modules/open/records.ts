export const namespaced = true
export const workspaceEndpoint = '/api/open/records/'

interface Record {
    id: number;
    submission_id: number;
}

interface State {
    content: Record[];
    loading: boolean;
}

/**
 * Loads records from database
 */

// state
export const state: State = {
    content: [],
    loading: false
}

// getters
export const getters = {
    getById: (state: State) => (id: number) => {
        if (state.content.length === 0) return null
        return state.content.find((item: Record) => item.submission_id === id)
    }
}

// mutations
export const mutations = {
    set(state: State, items: Record[]) {
        state.content = items
    },
    addOrUpdate(state: State, item: Record) {
        state.content = state.content.filter((val: Record) => val.id !== item.id)
        state.content.push(item)
    },
    remove(state: State, itemId: number) {
        state.content = state.content.filter((val: Record) => val.id !== itemId)
    },
    startLoading(state: State) {
        state.loading = true
    },
    stopLoading(state: State) {
        state.loading = false
    }
}

// actions
export const actions = {
    resetState(context: any) {
        context.commit('set', [])
        context.commit('stopLoading')
    },
    loadRecord(context: any, request: Promise<Record>) {
        context.commit('set', [])
        context.commit('startLoading')
        return request.then((data: Record) => {
            context.commit('addOrUpdate', data)
            context.commit('stopLoading')
        })
    }
}