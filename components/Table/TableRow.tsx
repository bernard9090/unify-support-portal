import React from "react"
import style from "../../styles/Table.module.css"


const TableRow = (props:any) => {

    return (
        <div className={style.table__row}>
            {props.children}
        </div>
    )
};

export default TableRow
