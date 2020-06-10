import { GET_IMAGES } from "../types";

const initialState = {
    images: []
};

export const imagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_IMAGES:
            
            return {...state, images: action.payload}
    
        default:
            return state;
    }
}