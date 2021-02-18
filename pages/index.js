

import React from "react";
import Link from "next/link"
import styles from '../styles/Home.module.css'
import {Button, Input} from "components";
import {useSelector, useDispatch} from "react-redux"
import {exampleAction} from "actions/exampleAction/";
import CONSTANTS from "../assets/constants"


export default function Home() {

    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.exampleReducer);
    console.log(items);

    return (
        <div className={styles.container}>

            <h3 className={"text-header"}>USSD Portal Compnents</h3>

            <p className={"text"}>This is a normal text</p>

            <Input inputProps={{
                placeholder:"Enter name here"
            }}
                   error={true}
                   errorString={"Enter name"}
                   useLabel={true}
                   label={"Enter name"}
                   required
            />

            <Input
                inputProps={{
                    placeholder:"Enter password here"
                }}
                   error={true}
                   errorString={"please enter password"}
                   useLabel={true}
                   label={"Password"}
            />

            <Link href={"/dashboard/home"}><Button
                inverse={false}
                textColor={"white"}
                color={CONSTANTS.COLOR_PRIMARY}
                text={"Dashboard"}
                onClick={()=>{
                    // dispatch(exampleAction())
                }}
                loading={false}/></Link>

            <Button
                style={{width:300, margin:16}}
                inverse={true}
                color={CONSTANTS.COLOR_PRIMARY}
                text={"Loading"}
                textColor={CONSTANTS.COLOR_PRIMARY}
                loading={true}/>

            {
                items.map((item, index) => (<p key={index}>{item}</p>))
            }

        </div>
    )
}
