export const namespaced = true;

interface WorkingFormState {
    content: any;
    selectedFieldIndex: number | null;
    showEditFieldSidebar: boolean | null;
    showAddFieldSidebar: boolean | null;
}

// state
export const state: WorkingFormState = {
    content: null,
    selectedFieldIndex: null,
    showEditFieldSidebar: null,
    showAddFieldSidebar: null
};

// mutations
export const mutations = {
    set(state: WorkingFormState, form: any) {
        state.content = form;
    },
    setProperties(state: WorkingFormState, properties: any) {
        state.content.properties = properties;
    },
    openSettingsForField(state: WorkingFormState, index: any) {
        if (typeof index === 'object') {
            index = state.content.properties.findIndex((prop: {id: number | string}) => prop.id === index.id);
        }
        state.selectedFieldIndex = index as number;
        state.showEditFieldSidebar = true;
        state.showAddFieldSidebar = false;
    },
    closeEditFieldSidebar(state: WorkingFormState) {
        state.selectedFieldIndex = null;
        state.showEditFieldSidebar = false;
        state.showAddFieldSidebar = false;
    },
    openAddFieldSidebar(state: WorkingFormState, index: any | null) {
        if (index !== null && typeof index === 'object') {
            index = state.content.properties.findIndex((prop: {id: number | string}) => prop.id === index.id);
        }
        state.selectedFieldIndex = index;
        state.showAddFieldSidebar = true;
        state.showEditFieldSidebar = false;
    },
    closeAddFieldSidebar(state: WorkingFormState) {
        state.selectedFieldIndex = null;
        state.showAddFieldSidebar = false;
        state.showEditFieldSidebar = false;
    },
};
