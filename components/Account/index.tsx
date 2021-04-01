import React from "react"
import style from "../../styles/Account.module.css"


type name = string | "Support"

const Account = () => {

    return (
        <div className={style.container}>
            <div className={style.initials}>
                <span>S.A</span>
            </div>
            <span>Support Account</span>

        </div>
    )
};

export default Account
