import {LoginData} from "../@types";
import {getToken} from "../../services/localService";

const apiEndpoint = process.env.API_ENDPOINT;
const endpoint = "http://unify_test.rancardmobility.com";



export const fetchAllSenderIDs = async () => {
    const data = await fetch(`${endpoint}/api/v2/campaign/senderIds`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":""+getToken()
        }
    });
    return data.json()
};



export const approveSenderId = async (senderId:string, status:string) =>{
    const data = await fetch(`${endpoint}/api/v2/campaign/senderId/approve?sId=${senderId}$status=${status}`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":""+getToken()
        }
    });
    return data.json()
};




export const login = async (data:LoginData) => {
    const response = await fetch(`${endpoint}/api/v2/auth/rancard/admin/signin`, {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return response.json()
};