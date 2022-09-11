const initialState = {
    language: 'swedish'
};


export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.language
            };
        default:
            return state
    }
}