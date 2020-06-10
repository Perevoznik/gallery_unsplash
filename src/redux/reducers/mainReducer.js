import { combineReducers } from "redux";
import { imagesReducer } from "./imagesReducer";
import { appReducer } from "./appReducer";

export const mainReducer = combineReducers({
    imgReducer: imagesReducer,
    appReducer: appReducer
});