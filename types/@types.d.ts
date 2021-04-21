export interface LoginData {
    email:string,
    password:string
}

export interface AuthAdmin {
    email:string,
    username: string,
    verifiedMsisdn: string,
    roles: Array<string>,
    accessToken: string,
    tokenType: string

}



interface TableData {
    senderId:string,
    brand:string,
    msisdn:string,
    status: string,
    approved: string,
    name:string,
    brandId: string
    email: string
    endDate: string
    idLocation: string
    idType: string
    registrationDate: string
    sid: string
    startDate: string
    type: string
}

interface TableProps {
    headers:Array<string>
    data:Array<TableData>
    onRowClick:(item: TableData)=>void
}

interface PDFModalProps {
    file: string
    back:()=> void
}