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