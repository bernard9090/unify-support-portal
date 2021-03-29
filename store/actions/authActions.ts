import * as TYPES from "../types"
import {AuthAdmin} from "../../types/@types";


export const setLoggedInAdmin = (data:AuthAdmin) => ({
    type:TYPES.LOGIN,
    data
});