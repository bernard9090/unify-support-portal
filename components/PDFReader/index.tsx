import React from "react"
import PDFViewer from 'pdf-viewer-reactjs'
import {Button} from "components";
import {PDFModalProps} from "types/@types"

const DocumentRenderer = (props:PDFModalProps) => (
   <div style={{
      
   }}>
       <div style={{
           height:"70vh",
           maxHeight:"90%",
           overflowY:"scroll"
       }}>
       <PDFViewer
           document={{
            url: props.file,
        }}
               />

       </div>
       <Button
           onClick={() => {
               props.back()
           }}
           text={"Back"}
           style={{
               padding: "0 4rem",
               height: 44,
               color: "white",
               marginTop:"1rem"
           }}
           color={"#252525"}
       />
   </div>
);


export default DocumentRenderer
