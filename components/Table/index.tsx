import React from "react";
import style from "./Table.module.css"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"


interface TableData {
    senderId:string,
    date:string,
    msisdn:string,
    status: string
}

interface TableProps {
    headers:Array<string>
    data:Array<TableData>
}

const Table = (props:TableProps) => {




    return (

        <div className={style.table}>
            <TableHeader headers={props.headers}/>

            {
                props.data.map((item, index) => (
                    <TableRow key={index}>
                        <div className={style.table__row_item}><input type="checkbox"/> {item.senderId}</div>
                        <div className={style.table__row_item}>{item.date}</div>
                        <div className={style.table__row_item}>{item.msisdn}</div>
                        <div className={style.table__row_item}>{item.status}</div>
                    </TableRow>
                ))

            }

        </div>
    )

};


export default Table