import * as TYPES from "../types"
import {AuthAdmin} from "../../types/@types";

const initialState = {
    user: {}
};

interface Payload {
    type:string,
    data:any
}


const authReducer = (state = initialState, payload:Payload) =>{
    switch (payload.type) {
        case TYPES.LOGIN:
            return {
                ...state,
                user:payload.data
            };

        default:
            return state
    }
};

export default authReducer


