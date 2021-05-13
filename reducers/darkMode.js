const darkModeReducer = (state = true, action) => {
    switch (action.type) {
        case 'UPDATE_DARKMODE':
            return action.payload;
        default:
            return state;
    }
}

export default darkModeReducer