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

export const setHomework = (notes) => {
    return {
        type: "SET_HOMEWORK",
        payload: notes,
    }
}