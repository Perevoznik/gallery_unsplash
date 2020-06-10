import { SHOW_LOADING_SPINNER, HIDE_LOADING_SPINNER } from "../types";

const initialState = {
    loading: false
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_LOADING_SPINNER:
            return {...state, loading: true}

        case HIDE_LOADING_SPINNER:
            return {...state, loading: false}
    
        default:
            return state;
    }
}