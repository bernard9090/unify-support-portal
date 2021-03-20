import React from "react";
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {Button, Input} from "components";
import {useSelector, useDispatch} from "react-redux"
import {exampleAction} from "actions/exampleAction/";
import CONSTANTS from "../assets/constants"
import {login} from "./api";
import {useToasts} from "react-toast-notifications";
import {setLoggedInAdmin} from "../store/actions/authActions";
import {saveToken} from "../services/localService";


export default function Home() {

    const dispatch = useDispatch();
    const {addToast} = useToasts();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const attemptLogin = () => {
        setLoading(true);
        login({email, password}).then((data)=>{
            console.log(data);
            dispatch(setLoggedInAdmin(data));
            saveToken(`${data.tokenType} ${data.accessToken}`);
            Router.push("/dashboard/home")

        }).catch(error => {
            addToast("Custom toast", {
                appearance:"error",
                autoDismiss:true
            })
        }).finally(()=>{
            setLoading(false);

        })
    };


    return (
        <div className={styles.container}>

            <h3 className={"text-header"}>Unify Admin Portal</h3>

            <p className={"text"}>Enter credentials to login</p>

            <Input inputProps={{
                placeholder:"example@rancard.com",
                type:"email",
                value:email,
                onChange:(e)=>{setEmail(e.target.value)}
            }}

                   error={false}
                   errorString={"Email address cannot be empty"}
                   useLabel={true}
                   label={"Email Address"}
                   required
            />

            <Input
                inputProps={{
                    placeholder:"* * * * * *",
                    type:"password",
                    value:password,
                    onChange:(e)=>{setPassword(e.target.value)}
                }}

                   error={false}
                   errorString={"Please enter password"}
                   useLabel={true}
                   label={"Password"}
                required={true}
            />

            <Button
                disabled={loading}
                style={{marginTop:8}}
                inverse={false}
                textColor={"white"}
                color={CONSTANTS.COLOR_PRIMARY}
                text={"Sign In"}
                onClick={()=>{
                    attemptLogin()
                }}
                loading={loading}/>

            {/*<Button*/}
            {/*    style={{width:300, margin:16}}*/}
            {/*    inverse={true}*/}
            {/*    color={CONSTANTS.COLOR_PRIMARY}*/}
            {/*    text={"Loading"}*/}
            {/*    textColor={CONSTANTS.COLOR_PRIMARY}*/}
            {/*    loading={true}/>*/}


        </div>
    )
}
