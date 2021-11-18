const notes = {
    Notes: [],
    filteredNotes: [],
    MyNotes: {
        Note: "First Note"
    }
}

export const noteReducer = (state=notes, {type,payload}) => {
    switch(type) {
        case "SET_NOTES": 
        return {
            ...state, Notes: payload
        };
        case "SET_FILTERED_NOTES": return {
            ...state, filteredNotes:payload
        };
        case "SET_TASK": return {
            ...state, MyNotes: {...state.MyNotes, Note:payload}
        }
        case "SET_CREATE_NOTES": 
        return {
            ...state, Notes: [...state.Notes, payload]
        };
        default:
            return state
    }
}