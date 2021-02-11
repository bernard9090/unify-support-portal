import * as React from "react";

interface ButtonProps {
    text?: string,
    loading?: boolean,
    onClick?:()=>void
}

const Button = (props: ButtonProps) => {

    return (
        <button onClick={props.onClick}>{props.text}</button>
    )

};

export default Button