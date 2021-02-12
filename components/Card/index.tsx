import React from "react"
import style from "./Card.module.css"


interface CardProps {
    children:React.ReactNode
}

const Card = (props:CardProps) => {


    return (

        <div className={style.container}>
            {props.children}
        </div>
    )
};

export default Card