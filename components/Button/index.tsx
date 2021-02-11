import * as React from "react";

interface ButtonProps {
    text?: string,
    loading?: boolean,
    onClick?:()=>void
}

const Button = (props: ButtonProps) => {

    return (
        <button style={{backgroundColor:"red", padding:"0.4rem 1.2rem", border:"none", color:"white"}} onClick={props.onClick}>{props.text}</button>
    )

};

export default Button