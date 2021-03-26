import {combineReducers} from "redux";
import ExampleReducer from "./_reducer"
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer"

const rootReducer =  combineReducers({
    exampleReducer:ExampleReducer,
    authReducer:authReducer,
    dashboardReducer
});

export default rootReducer