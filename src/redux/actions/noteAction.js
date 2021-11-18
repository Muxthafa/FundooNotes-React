export const setMyNotes = (notes) => {
    return {
        type: "SET_NOTES",
        payload: notes,
    }
}

export const setFilteredNotes = (notes) => {
    return {
        type: "SET_FILTERED_NOTES",
        payload: notes,
    }
}

export const setTask = (notes) => {
    return {
        type: "SET_TASK",
        payload: notes,
    }
}

export const setCreate = (notes) => {
    return {
        type: "SET_CREATE_NOTES",
        payload: notes,
    }
}