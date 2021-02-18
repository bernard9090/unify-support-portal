import React from "react"
import style from "./Label.module.css"


interface LabelProps {
    text:string,
    color?:string
}

const Label  = (props:LabelProps) => {



    return (
        <div style={{
            backgroundColor:props.color
        }} className={style.container}>
            {props.text}
    </div>
    )
};

export default Label