const darkModeReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_DARKMODE':
            return action.payload;
        default:
            return state;
    }
}

export default darkModeReducer