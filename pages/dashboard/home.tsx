import React, { useState, useEffect } from "react";
import Head from 'next/head';
import {
  Dashboard,
  Card,
  Input,
  Table,
  Modal,
  Button,
  PDFReader,
} from "components";
import { fetchAllSenderIDs } from "../api";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { getToken } from "../../services/localService";
import {
  setSenderIDS,
  setSelectedSenderID,
} from "actions/dashboardActions";
import {useToasts} from "react-toast-notifications";
import {approveSenderId, getFile} from "../../services/restService"
import {AxiosError, AxiosResponse} from "axios";

const Home = () => {
  const dispatch = useDispatch();
    const {addToast} = useToasts();


    let [showModal, setShowModal] = useState(false);
  let [selectedItem, setSelectedItem] = useState({});
  const [page, setPage] = useState("review");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");



  const { senderIds, selectedSenderId } = useSelector(
    (state: RootStateOrAny) => state.dashboardReducer
  );

  useEffect( () => {
      fetchAllAdimSenderIds()
  }, []);

  const  fetchAllAdimSenderIds =  () => {
      const token = getToken();
      console.log(token);

      fetchAllSenderIDs()
          .then((resp) => {
              const { result } = resp;
              console.log(result);
              const sorted = result.sort((a:any, b:any) => {
                  if(a.approved === "PENDING"){
                      return -1
                  }
                  else if(b.approved === "APPROVED"){
                      return 1
                  }else
                      return 0
              });
              dispatch(setSenderIDS(sorted));
          })
          .catch((error) => {
              console.log(error);
          });
  };

  // @ts-ignore
  const SenderIDDetailsPage = () => (
    <div>
      <div
        style={{
          display: "flex",
          margin: "2rem 0",
        }}
      >
        <span style={{ display: "flex", flex: 1 }}>
          <b>Sender ID</b>
        </span>
        <span style={{ display: "flex", flex: 2 }}>
          {selectedSenderId.senderId}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          margin: "2rem 0",
        }}
      >
        <span style={{ display: "flex", flex: 1 }}>
          <b>MSISDN</b>
        </span>
        <span style={{ display: "flex", flex: 2 }}>{selectedSenderId.msisdn}</span>
      </div>

      <div
        style={{
          display: "flex",
          margin: "2rem 0",
        }}
      >
        <span style={{ display: "flex", flex: 1 }}>
          <b>Brand</b>
        </span>
        <span style={{ display: "flex", flex: 2 }}>{selectedSenderId.brand}</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2rem 2.4rem",
          borderStyle: "dashed",
          border: "1px dashed #1877F2",
          borderRadius: "6px",
          height: "64px",
          width: "fit-content",
          background: "rgba(24, 119, 242, 0.05)",
          minWidth: "400px",
        }}
        onClick={() => {
          setPage("pdf");
        }}
      >
        <span>
          {/* <span style={{ color: "red" }}>CLOSE</span> */}
          {/* <ion-icon name="eye-outline" style={{color: "#1877F2", fontSize: 24, marginTop:"4px" }}/> */}
        </span>
        <span style={{ marginLeft: "10px", color: "#1877F2" }}>
          <b>View Attached Document</b>
        </span>
      </div>

      <div
        style={{
          margin: "4rem 0",
          display: "flex",
        }}
      >
        <Button
          onClick={() => {
            setPage("reject");
          }}
          text={"Reject"}
          style={{
            padding: "0 4rem",
            height: 44,
            color: "white",
          }}
          color={"#D83831"}
        />

        <Button
          text={"Accept"}
          loading={loading}
          onClick={() => {
            setLoading(true);
            const {sid, senderId} = selectedSenderId;
            approveSenderId(sid, "APPROVED").then(async (res) => {
                console.log(res);
                addToast("SenderId has been approved", {
                    appearance:"success",
                    autoDismiss:true
                });
                await fetchAllAdimSenderIds();
            }).catch(e => {
                console.log("approve error", e);
                addToast("Error approving Sender ID", {
                    appearance:"error",
                    autoDismiss:true
                });
            }).finally( ()=>{

                setLoading(false)
            })

            // setTimeout(() => {
            //   setLoading(false);
            // }, 3000);
          }}
          style={{
            padding: "0 4rem",
            height: 44,
            color: "white",
            marginLeft: "4rem",
          }}
          color={"#3989DD"}
        />
      </div>
    </div>
  );

  const RejectSenderIDReason = () => (
    <div
      style={{
        margin: "2rem 0",
      }}
    >
      <h3 style={{ fontSize: "20px" }}>Reason</h3>

      <textarea
        placeholder={"State your reason for rejecting this sender ID request"}
        cols={54}
        rows={8}
        style={{
          borderRadius: "5px",
          border: "1px solid #D2D2D2 ",
          padding: "0.6rem 1.4rem",
        }}
      />

      <div
        style={{
          margin: "4rem 0",
          display: "flex",
        }}
      >
        <Button
          onClick={() => {
            setPage("review");
          }}
          text={"Cancel"}
          style={{
            padding: "0 4rem",
            height: 44,
            color: "#3989DD",
          }}
          color={"#3989DD"}
          inverse={true}
        />

        <Button
          text={"Send"}
          style={{
            padding: "0 4rem",
            height: 44,
            color: "white",
            marginLeft: "4rem",
          }}
          color={"#3989DD"}
        />
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Dashboard Home</title>
      </Head>

      <main>
        <Dashboard>
          <div>
            <span className={"text-header"}>Sender IDs</span>

            <div style={{ marginTop: "3.8rem" }}>
              <Card>
                <Input
                  useLabel={false}
                  error={false}
                  inputProps={{
                    placeholder: "Search by Brand",
                      onChange:(e:any)=>{
                        setSearchTerm(e.target.value)
                      }
                  }}
                />

                <div
                  style={{
                    marginTop: "2rem",
                  }}
                >
                  <Table
                    onRowClick={(item) => {
                      setPage("review");
                      setShowModal(true);
                      console.log(item)
                        getFile(item.idLocation).then((resp:AxiosResponse)=>{
                            console.log("id location data", resp)
                        }).catch((er:AxiosError) => {
                            console.log(er)
                        })
                      dispatch(setSelectedSenderID(item));
                    }}
                    headers={["Sender ID", "Brand", "MSISDN", "Status"]}
                    data={senderIds.filter((item:any) =>  (item.brand && item.brand.toLowerCase().startsWith(searchTerm.toLowerCase())))}
                  />
                </div>
              </Card>
            </div>
          </div>
        </Dashboard>

        <Modal
          show={showModal}
          close={() => {
            setShowModal(false);
          }}
        >
          <span>

              <span className={"text-header"}>Review Sender ID</span>
          </span>

          {page === "review" ? (
            <SenderIDDetailsPage />
          ) : page === "reject" ? (
            <RejectSenderIDReason />
          ) : (
            <PDFReader back={()=> setPage("review")}/>
          )}
        </Modal>
      </main>
    </div>
  );
};

// export async function getStaticProps(context:any) {
//
//
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }
// ;

export default Home;
