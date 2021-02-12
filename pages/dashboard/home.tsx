import React from "react"
import {Dashboard, Card, Input} from "components"



const Home = (props:any) => {


    return (
        <Dashboard>
            <div>
                <span className={"text-header"}>Sender IDs</span>

                <div style={{marginTop:"3.8rem"}}>
                    <Card>
                        <Input useLabel={false} error={false} inputProps={{
                            placeholder:"Search Item"
                        }}/>
                    </Card>
                </div>
            </div>
        </Dashboard>
    )
};


export default Home;