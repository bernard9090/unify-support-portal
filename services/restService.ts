import axios from "axios";
import {getToken} from "./localService";

const endpoint = "http://unify_test.rancardmobility.com";

axios.defaults.headers =  {
    'Content-Type': 'application/json',
    "Authorization":""+getToken()
}

export const approveSenderId = (sId:string, status:string) => {
    return axios({
        method:"GET",
        url:`${endpoint}/api/v2/campaign/senderId/approve`,
        params:{
            sId,
            status
        }
    })
}

export const getFile = (filename:string) => {
    return axios({
        method:"GET",
        url:`${endpoint}/api/v2/campaign/brand/document`,
        params:{
            filename
        }
    })
}

export const loadFile = (file:string) => {
    return axios({
        method:"GET",
        url:`http://unify_test.rancardmobility.com/api/v2/files/retrieve/${file}`

    })
}