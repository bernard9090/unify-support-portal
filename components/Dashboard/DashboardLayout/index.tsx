import React from "react"
import style from "../../../styles/Layout.module.css"
import Sidebar from "../Sidebar"
import Header from "../Header"
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { AuthAdmin } from "../../../types/@types";







const Layout = (props:any) => {

    const user: AuthAdmin = useSelector(
    (state: RootStateOrAny) => state.authReducer.user
  );


    return(
        <div className={style.wrapper}>

            <Sidebar/>



            <div className={style.container}>
                <Header user={user}/>
                <div className={style.content}>
                    {props.children}
                </div>
            </div>

        </div>
    )
};

export default Layout
