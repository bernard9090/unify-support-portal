import React from "react"
import style from "./Layout.module.css"
import Sidebar from "../Sidebar"
import Header from "../Header"







const Layout = (props:any) => {


    return(
        <div className={style.wrapper}>

            <Sidebar/>



            <div className={style.container}>
                <Header/>
                <div className={style.content}>
                    {props.children}
                </div>
            </div>

        </div>
    )
};

export default Layout