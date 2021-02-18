import React from "react"
import style from "./Table.module.css"


const TableRow = (props:any) => {

    return (
        <div onClick={props.onClick} className={style.table__row}>
            {props.children}
        </div>
    )
};

export default TableRow
