const initState = {
    post: [
        { id: "1", name: "abdul", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: "www.google.com", established: 1998 },
        { id: "2", name: "ghaffar", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: "www.youtube.com", established: 1999 },
    ],
    sagaData: [],
    isChecked: false
};

export const rootReducer = (state = initState, action) => {

    if (action.type === "GET_DATA") {

        return {
            ...state,
            post: [
                { id: "1", name: "abdul", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: null, established: null },
                { id: "2", name: "ghaffar", country: "pak", logo: null, slogan: "hurray", head_quaters: null, website: null, established: null },
            ]
        }
    }
    else if (action.type === "GET_DATA_SAGA") {

        return {
            ...state
        }

    }
    //to be fixed...... data is not updated in the state
    else if (action.type === "SET_DATA_SAGA") {

        return { 
            ...state, 
            sagaData: action.payload 
        };

    }
    else if (action.type === "SET_ROUTES_PROTECTED") {

        return { 
            ...state, 
            isChecked:  action.isChecked
        };

    }

    return state;
};