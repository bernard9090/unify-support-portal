import * as React from "react";
import style from "./Button.module.css"
import {ClipLoader} from "react-spinners"

interface ButtonProps {
    text?: string,
    loading?: boolean,
    onClick?:()=>void,
    inverse?:boolean,
    color?:string
    textColor?:string | "white",
    style?:object,
    buttonProps?:any
}

const Button = (props: ButtonProps) => {

    return (
       <div>
           <button
               {...props.buttonProps}
               disabled={props.loading}
               style={{
                   backgroundColor: props.inverse ? "transparent" : props.color,
                   border: `1px solid ${props.color}`,
                   color: props.textColor,
                   cursor: props.loading ? "not-allowed":"pointer",
                   ...props.style
               }}
               className={`${style.button} ${props.inverse ? style.inverse :  style.normal}`}
               onClick={props.onClick}>{props.loading ? <ClipLoader size={20}  loading={props.loading} color={props.textColor}/> : props.text}</button>

           <style jsx>
               {
                   `button:hover{backgroundColor:${props.color}`
               }
           </style>
       </div>
    )

};

export default Button