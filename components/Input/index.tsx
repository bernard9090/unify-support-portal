import * as React from "react";
import style from "./Input.module.css"

interface InputProps {
    error?:boolean,
    errorString?:string,
    useLabel?:boolean
    label?:string,
    required?: boolean,
    inputProps?:object

}

const Input = (props: InputProps) => {

    return(
        <div className={style.container}>
            {props.useLabel && <div className={style.label}>{props.label} {props.required && <span style={{color:"red"}}>*</span>}</div>}
            <input {...props.inputProps} className={style.input_container}  />
            {props.error && <div className={style.error_string}>{props.errorString}</div>}

        </div>
    )
};

export default Input