import React from "react"
import PDFViewer from 'pdf-viewer-reactjs'



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
   </div>
);


export default DocumentRenderer