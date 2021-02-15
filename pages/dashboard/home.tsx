import React from "react"
import Head from "next/head"
import {Dashboard, Card, Input, Table} from "components"



const Home = (props:any) => {


    return (
       <div>
           <Head>
               <title>Dashboard Home</title>
           </Head>

           <main>
               <Dashboard>
                   <div>
                       <span className={"text-header"}>Sender IDs</span>

                       <div style={{marginTop:"3.8rem"}}>
                           <Card>
                               <Input useLabel={false} error={false} inputProps={{
                                   placeholder:"Search Item"
                               }}/>

                               <div style={{
                                   marginTop:"2rem"
                               }}>
                                   <Table data={[
                                   {
                                       senderId:"Sender ID 1",
                                       date:"31st March 2021",
                                       msisdn:"+233542199525",
                                       status:"PENDING"
                                   },
                                   {
                                       senderId:"Sender ID 1",
                                       date:"30th March 2021",
                                       msisdn:"+233501541341",
                                       status:"PENDING"
                                   }
                                       ]} headers={["Sender ID", "Date", "MSISDN", "Status"]}/>
                               </div>
                           </Card>
                       </div>
                   </div>
               </Dashboard>
           </main>

       </div>
    )
};


export default Home;