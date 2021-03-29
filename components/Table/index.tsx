import React from "react";
import style from "./Table.module.css"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import {Label} from "components"


interface TableData {
    senderId:string,
    date:string,
    msisdn:string,
    status: string,
    approved: string,
    name:string
}

interface TableProps {
    headers:Array<string>
    data:Array<TableData>
    onRowClick:(item: TableData)=>void
}

const Table = (props: TableProps) => {


const rowClicked = (item: any) => {
     props.onRowClick(item)
}


    return (

        <div className={style.table}>
            <TableHeader headers={props.headers}/>

            {
                props.data.map((item, index) => (
                    <TableRow key={index}>
                        <div className={style.table__row_item}><input type="checkbox"/> <span style={{display:"flex", flex:1, marginLeft:"1rem"}}  onClick={()=>rowClicked(item)} >{item.name}</span></div>
                        <div  onClick={()=>rowClicked(item)} className={style.table__row_item}>{item.date}</div>
                        <div  onClick={()=>rowClicked(item)} className={style.table__row_item}>{item.msisdn}</div>
                        <div  onClick={()=>rowClicked(item)} className={style.table__row_item}><Label text={item.approved} color={item.approved === "PENDING" ? "orange" : item.approved === "APPROVED" ? "green" :"red"}/></div>
                    </TableRow>
                ))

            }

        </div>
    )

};


export default Table