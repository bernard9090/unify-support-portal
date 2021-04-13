import React, {useState} from "react";
import style from "../../styles/Table.module.css"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import {Label} from "components"


interface TableData {
    senderId:string,
    brand:string,
    msisdn:string,
    status: string,
    approved: string,
    name:string,
    brandId: string
    email: string
    endDate: string
    idLocation: string
    idType: string
    registrationDate: string
    sid: string
    startDate: string
    type: string
}

interface TableProps {
    headers:Array<string>
    data:Array<TableData>
    onRowClick:(item: TableData)=>void
}

const UPDATE_COUNT = 8;

const Table = (props: TableProps) => {


const rowClicked = (item: any) => {
     props.onRowClick(item)
};

    const [start, setStart] = useState(0);

    return (

       <div>
           <div className={style.table}>
               <TableHeader headers={props.headers}/>

               {
                   props.data.slice(start, start + UPDATE_COUNT).map((item, index) => (
                       <TableRow key={index}>
                           <div className={style.table__row_item}><input type="checkbox"/>
                               <span style={{display:"flex", flex:1, marginLeft:"1rem"}}  onClick={()=>rowClicked(item)} >{item.senderId}</span></div>
                           <div  onClick={()=>rowClicked(item)} className={style.table__row_item}>{item.brand}</div>
                           <div  onClick={()=>rowClicked(item)} className={style.table__row_item}>{item.msisdn}</div>
                           <div  onClick={()=>rowClicked(item)} className={style.table__row_item}><Label text={item.approved} color={item.approved === "PENDING" ? "orange" : item.approved === "APPROVED" ? "green" :"red"}/></div>
                       </TableRow>
                   ))

               }

           </div>

           <div style={{
               marginTop:20,
           }}>
               <span className={style.page_btn} onClick={()=>{
                   if(start - UPDATE_COUNT >= 0){
                       setStart(start - UPDATE_COUNT)
                   }
               }} style={{
                   marginRight:8,
                   color: start - UPDATE_COUNT >= 0 ? "black" : "grey",
                   cursor: start - UPDATE_COUNT < 0  ? "not-allowed" : "pointer",


               }}>{"< "} Previous</span>

               <span className={style.page_btn} onClick={()=>{
                   if(start + UPDATE_COUNT < props.data.length){
                       setStart(start + UPDATE_COUNT)
                   }
               }} style={{
                   marginLeft:8,
                   color:props.data.length > start + UPDATE_COUNT ? "black" : "grey",
                   cursor:props.data.length > start + UPDATE_COUNT ? "pointer" : "not-allowed"
               }}>Next{" >"}</span>
           </div>
       </div>
    )

};


export default Table
