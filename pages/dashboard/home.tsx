import React, {useState} from "react"
import Head from "next/head"
import {Dashboard, Card, Input, Table, Modal} from "components"



const Home = (props:any) => {

    let [showModal, setShowModal] = useState(false);
    let [selectedItem, setSelectedItem] = useState({});


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
                                   <Table
                                       onRowClick={()=>{
                                           setShowModal(true)
                                       }}
                                       headers={["Sender ID", "Date", "MSISDN", "Status"]}
                                       data={[
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
                                       ]} />
                               </div>
                           </Card>
                       </div>
                   </div>
               </Dashboard>


               <Modal show={showModal} close={()=>{
                   setShowModal(false)
               }}>
                   <span className={"text-header"}>Review Sender ID</span>
                   <div>
                       <div >

                       </div>
                   </div>
               </Modal>
           </main>

       </div>
    )
};


export default Home;