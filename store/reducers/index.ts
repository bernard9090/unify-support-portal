import {combineReducers} from "redux";
import ExampleReducer from "./_reducer"
import AuthReducer from "./authReducer"
import authReducer from "./authReducer";

const rootReducer =  combineReducers({
    exampleReducer:ExampleReducer,
    authReducer:authReducer
});

export default rootReducer