
const apiEndpoint = process.env.API_ENDPOINT;

const getEndpoint = (path:string) =>{ return apiEndpoint + path};

export const fetchAllSenderIDs =async () => {

    console.log(getEndpoint("/api/v2/campaign/senderIds"));
    const data = await fetch(getEndpoint("/api/v2/campaign/senderIds"));

    return data.json()
};

export const approveSenderId = async (senderId:string, status:string) =>{
    const data = await fetch(getEndpoint(`/api/v2/campaign/senderId/approve?sId=${senderId}$status=${status}`))
    return data.json()
};