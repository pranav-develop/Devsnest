//jshint esversion: 8
import emailReducer from "./emailReducer";
import nameReducer from "./nameReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    email: emailReducer,
    name: nameReducer,
});

export default rootReducer;
