import React from "react"
import style from "../../styles/Profile.module.css"
import {AuthAdmin} from "../../types/@types";
import {useSelector, RootStateOrAny} from "react-redux";
import {generateInitials} from "../../services/localService";

type name = string | "Support"

const Profile = () => {

    const user:AuthAdmin = useSelector((state: RootStateOrAny) => state.authReducer.user);

    return (
        <div className={style.container}>
            <div className={style.initials}>
                <span>{generateInitials(user.username)}</span>
            </div>
            {user.username}

        </div>
    )
};

export default Profile
