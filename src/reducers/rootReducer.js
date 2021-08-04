const initState = {
    post: [
        { id: "1", name: "abdul", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: null, established: null },
        { id: "2", name: "ghaffar", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: null, established: null },
    ],
    sagaData: []
};

export const rootReducer = (state = initState, action) => {

    if (action.type === "GET_DATA") {
        debugger;
        return {
            ...state,
            post: [
                { id: "1", name: "abdul", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: null, established: null },
                { id: "2", name: "ghaffar", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: null, established: null },
            ]
        }
    }
    else if (action.type === "GET_DATA_SAGA") {
        debugger;
        return {
            ...state
        }

    }
    else if (action.type === "SET_DATA_SAGA") {
        debugger;
        return Object.assign({}, state, { sagaData: action.payload });
        // ...state,
        // sagaData: action.payload,

    }

    return state;
};