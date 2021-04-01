import React from "react"
import style from "../../../styles/Header.module.css"
import {Account, Profile} from "components"


const Header = (props: any) => {
    return (
        <div className={style.container}>
            <span>
                <Account/>
            </span>

            <span>
                <Profile/>
            </span>

    </div>)
};


export default Header
