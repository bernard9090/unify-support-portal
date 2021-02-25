import React, {useState} from "react"
import Head from "next/head"
import {Dashboard, Card, Input, Table, Modal, Button} from "components"
import {fetchAllSenderIDs} from "../api";


interface SenderIdDetailsTypes {

}


const Home = (props:any) => {

    let [showModal, setShowModal] = useState(false);
    let [selectedItem, setSelectedItem] = useState({});
    const [page, setPage] = useState("review");


    const SenderIDDetailsPage = (senderId:SenderIdDetailsTypes) =>(
        <div>
            <div style={{
                display:"flex",
                margin:"2rem 0"

            }}>
                <span style={{display:"flex", flex:1}}><b>Sender ID</b></span>
                <span style={{display:"flex", flex:2}}>Sender ID</span>
            </div>


            <div style={{
                display:"flex",
                margin:"2rem 0"

            }}>
                <span style={{display:"flex", flex:1}}><b>MSISDN</b></span>
                <span style={{display:"flex", flex:2}}>Sender ID</span>
            </div>



            <div style={{
                display:"flex",
                margin:"2rem 0"

            }}>
                <span style={{display:"flex", flex:1}}><b>Registration</b></span>
                <span style={{display:"flex", flex:2}}>Sender ID</span>
            </div>


            <div style={{
                display:"flex",
                alignItems:"center",
                padding:"2rem 2.4rem",
                borderStyle:"dashed",
                border:"1px dashed #1877F2",
                borderRadius:"6px",
                height:"64px",
                width:"fit-content",
                background: "rgba(24, 119, 242, 0.05)",
                minWidth:"400px"
            }}>
                <span> <ion-icon name="eye-outline" style={{color: "#1877F2", fontSize: 24, marginTop:"4px" }}/></span>
                <span style={{marginLeft:"10px", color: "#1877F2"}}><b>View Attached Document</b></span>
            </div>


            <div style={{
                margin:"4rem 0",
                display:"flex"
            }}>
                <Button onClick={()=>{setPage("reject")}} text={"Reject"} style={{
                    padding:"0 4rem",
                    height:44,
                    color:"white"
                }} color={"#D83831"}/>

                <Button text={"Accept"} style={{
                    padding:"0 4rem",
                    height:44,
                    color:"white",
                    marginLeft:"4rem"
                }} color={"#3989DD"}/>
            </div>
        </div>
    );

    const RejectSenderIDReason = () => (
        <div style={{
            margin:"2rem 0"
        }}>
             <h3 style={{fontSize:"20px"}}>Reason</h3>

            <textarea placeholder={"State your reason for rejecting this sender ID request"} cols={54} rows={8} style={{
                borderRadius:"5px",
                border:"1px solid #D2D2D2 ",
                padding:"0.6rem 1.4rem"
            }}/>

            <div style={{
                margin:"4rem 0",
                display:"flex"
            }}>
                <Button  onClick={()=>{setPage("review")}} text={"Cancel"} style={{
                    padding:"0 4rem",
                    height:44,
                    color:"#3989DD"
                }} color={"#3989DD"} inverse={true}/>

                <Button text={"Send"} style={{
                    padding:"0 4rem",
                    height:44,
                    color:"white",
                    marginLeft:"4rem"
                }} color={"#3989DD"}/>
            </div>

        </div>
    )



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

                   {
                       page === "review" ?  <SenderIDDetailsPage/> : <RejectSenderIDReason/>
                   }

               </Modal>
           </main>

       </div>
    )



};

export async function getStaticProps(context:any) {
    await fetchAllSenderIDs().then(resp => {
        console.log(resp)
    });
    return {
        props: {}, // will be passed to the page component as props
    }
}
;


export default Home;