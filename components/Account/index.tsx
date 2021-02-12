import React from "react"
import style from  "./Account.module.css"


type name = string | "Support"

const Account = () => {

    return (
        <div className={style.container}>
            <div className={style.initials}>
                <span>LW</span>
            </div>

            Little Will

        </div>
    )
};

export default Account