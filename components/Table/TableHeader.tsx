import React from "react"
import styles from "./Table.module.css"


interface TableHeaderProps {
    headers:  Array<string>
}


const TableHeader = ({headers}:TableHeaderProps) => {


    return (

        <div className={styles.header}>
            {
                headers.map((header, index)=> (
                    <div key={index} className={styles.header__text}>{header}</div>
                ))
            }

        </div>
    )
};


export default TableHeader