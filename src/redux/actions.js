import { GET_IMAGES, SHOW_LOADING_SPINNER, HIDE_LOADING_SPINNER } from "./types";

export function showLoading(){
    return {type: SHOW_LOADING_SPINNER}
}

export function hideLoading(){
    return {type: HIDE_LOADING_SPINNER}
}

export function getImagesFromServer(){
    
    return async dispatch => {
        
        dispatch(showLoading());
        const response = await fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
        const json = await response.json();

        dispatch({type: GET_IMAGES, payload: json});
        dispatch(hideLoading());
    }
}

