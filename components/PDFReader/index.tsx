import React from "react"
import PDFViewer from 'pdf-viewer-reactjs'
import {Button} from "components";



const DocumentRenderer = (props:any) => (
   <div style={{
       maxHeight:"80%",
       overflowY:"scroll"
   }}>
       {/*<PDFViewer*/}
       {/*    document={{*/}
       {/*        url: 'http://www.africau.edu/images/default/sample.pdf',*/}
       {/*    }}*/}
       {/*/>*/}

       <Button
           onClick={() => {
               props.back()
           }}
           text={"Back"}
           style={{
               padding: "0 4rem",
               height: 44,
               color: "white",
           }}
           color={"#252525"}
       />
   </div>
);


export default DocumentRenderer
