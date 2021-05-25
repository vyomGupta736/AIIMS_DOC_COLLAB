
const INITIAL_STATE = {
    data : [],
    selectedItem : null,
    loading : false,
};

export const dataReducer = (state=INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case 'enter-data':
            return {...state, data : [...state.data,{...actions.payload,UPLOADED : false}] }
        case 'select-item':
            return {...state, selectedItem : {...actions.payload} }
        case 'upload-begin':
            return {...state, loading : true}
        case 'upload-success':
            return {...state,loading : false, data : [...actions.payload], selectedItem : {...state.selectedItem, UPLOADED : true}}
        case 'upload-failure':
            return {...state,loading : false}
        default:
            return INITIAL_STATE
    }
}