import {combineReducers} from "redux";
import ExampleReducer from "./_reducer"

const rootReducer =  combineReducers({
    exampleReducer:ExampleReducer
});

export default rootReducer