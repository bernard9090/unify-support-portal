import React from "react"
import { DefaultToast } from 'react-toast-notifications';


interface CustomToastData {
    appearance:string,
    children:React.ReactNode
}



const CustomToast = (props: any) => {
    const backgroundColor = props.appearance === "error" ? "red" :
        props.appearance === "warn" ? "blue":
            props.appearance === "success" ? "green" :"orange";


    return (
        <DefaultToast {...props}>
        <div style={{ width:"100%", }}>
            {props.children}
        </div>
        </DefaultToast>
    )
};


export default CustomToast