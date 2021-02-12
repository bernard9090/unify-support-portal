import React from "react"
import style from "./Profile.module.css"


type name = string | "Support"

const Profile = () => {

    return (
        <div className={style.container}>
            <div className={style.initials}>
                <span>SW</span>
            </div>

            Susan Will

        </div>
    )
};

export default Profile