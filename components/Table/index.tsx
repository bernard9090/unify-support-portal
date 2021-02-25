import React from "react";
import style from "./Table.module.css"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import {Label} from "components"


interface TableData {
    senderId:string,
    date:string,
    msisdn:string,
    status: string
}

interface TableProps {
    headers:Array<string>
    data:Array<TableData>
    onRowClick:()=>void
}

const Table = (props:TableProps) => {




    return (

        <div className={style.table}>
            <TableHeader headers={props.headers}/>

            {
                props.data.map((item, index) => (
                    <TableRow key={index}>
                        <div className={style.table__row_item}><input type="checkbox"/> <span style={{display:"flex", flex:1, marginLeft:"1rem"}}  onClick={props.onRowClick} >{item.senderId}</span></div>
                        <div  onClick={props.onRowClick} className={style.table__row_item}>{item.date}</div>
                        <div  onClick={props.onRowClick} className={style.table__row_item}>{item.msisdn}</div>
                        <div  onClick={props.onRowClick} className={style.table__row_item}><Label text={item.status} color={"red"}/></div>
                    </TableRow>
                ))

            }

        </div>
    )

};


export default Table