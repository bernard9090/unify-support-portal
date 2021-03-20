import * as TYPES from "../types"
import {AuthAdmin} from "../../pages/@types";


export const setLoggedInAdmin = (data:AuthAdmin) => ({
    type:TYPES.LOGIN,
    data
});