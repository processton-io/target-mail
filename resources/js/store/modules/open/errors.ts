export const namespaced = true

interface ErrorsState {
    content: any | null
}

// state
export const state: ErrorsState = {
    content: null
}

// getters
export const getters = {}

// mutations
export const mutations = {
    set(state: ErrorsState, error: any) {
        state.content = error
    },
    clear(state: ErrorsState) {
        state.content = null
    }
}

// actions
export const actions = {}
