import {LoginData} from "../../types/@types";
import {getToken} from "../../services/localService";

const endpoint = "http://unify_test.rancardmobility.com";



export const fetchAllSenderIDs = async () => {
    const data = await fetch(`${endpoint}/api/v2/campaign/rancard/admin/senderIds`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":""+getToken()
        }
    });
    if(data.ok){
        return data.json()
    }else{
        throw Error(data.statusText);
    }
};



export const approveSenderId = async (senderId:string, status:string) =>{
    const data = await fetch(`${endpoint}/api/v2/campaign/senderId/approve?sId=${senderId}&status=${status}`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization":""+getToken()
        }
    });
    if(data.ok){
        return data.json()
    }else{
        throw Error(data.statusText);
    }
};




export const login = async (data:LoginData) => {
    const response = await fetch(`${endpoint}/api/v2/auth/rancard/admin/signin`, {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
       return response.json()
    }else{
        throw Error(response.statusText);
    }
    
};