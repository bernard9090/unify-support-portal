import React from "react"
import style from "../../../styles/Sidebar.module.css"
import Image from 'next/image'



const Sidebar = (props:any) => {

    return (
        <div className={style.container}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                marginTop:"1rem"
            }}>
                <Image src={"/images/logo_closed.png"}  alt="Unify Logo"
                       width={50}
                       height={60}/>
            </div>
        </div>
    )
};

export default Sidebar
