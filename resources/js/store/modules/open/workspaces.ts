import axios from 'axios'

export const namespaced = true
export const workspaceEndpoint = '/api/open/workspaces/'

const localStorageCurrentWorkspaceKey = 'currentWorkspace'

interface Workspace {
    id: number
}

interface State {
    content: Workspace[]
    currentId: number | null
    loading: boolean
}

// state
export const state: State = {
    content: [],
    currentId: null,
    loading: false
}

// getters
export const getters = {
    getById: (state: State) => (id: number) => {
        return state.content.find(item => item.id === id) || null
    },
    getCurrent: (state: State) => () => {
        return state.content.find(item => item.id === state.currentId) || null
    }
}

// mutations
export const mutations = {
    set(state: State, items: Workspace[]) {
        state.content = items
        if (state.currentId == null && state.content.length > 0) {
            const storedId = parseInt(localStorage.getItem(localStorageCurrentWorkspaceKey) || '')
            const foundItem = state.content.find(item => item.id === storedId)
            if (storedId && foundItem) {
                state.currentId = storedId
            } else {
                state.currentId = items[0].id
                localStorage.setItem(localStorageCurrentWorkspaceKey, state.currentId.toString())
            }
        } else {
            localStorage.removeItem(localStorageCurrentWorkspaceKey)
        }
    },
    setCurrentId(state: State, id: number) {
        state.currentId = id
        localStorage.setItem(localStorageCurrentWorkspaceKey, id.toString())
    },
    addOrUpdate(state: State, item: Workspace) {
        state.content = state.content.filter(val => val.id !== item.id)
        state.content.push(item)
        if (state.currentId == null) {
            state.currentId = item.id
            localStorage.setItem(localStorageCurrentWorkspaceKey, state.currentId.toString())
        }
    },
    remove(state: State, itemId: number) {
        state.content = state.content.filter(val => val.id !== itemId)
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
    resetState({ commit }: { commit: any }) {
        commit('set', [])
        commit('stopLoading')
    },
    async load({ commit }: { commit: any }) {
        commit('set', [])
        commit('startLoading')
        try {
            const response = await axios.get(workspaceEndpoint)
            commit('set', response.data)
            commit('stopLoading')
        } catch (error) {
            // Handle error
            commit('stopLoading')
        }
    },
    async loadIfEmpty({ dispatch, state }: { dispatch: any, state: State }) {
        if (state.content.length === 0) {
            return dispatch('load')
        }
    },
    async delete({ commit }: { commit: any }, id: number) {
        commit('startLoading')
        try {
            await axios.delete(workspaceEndpoint + id)
            commit('remove', id)
            commit('stopLoading')
        } catch (error) {
            // Handle error
            commit('stopLoading')
        }
    }
}
