import React from 'react';
import { Document, Page } from 'react-pdf';
import Currilo from '../../components/images/CV.pdf';
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
import './styles.css'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
 
function CV() {

  const pageNumber = 1
 
 
  return (
    <div className="cv">
      <Document
        file={Currilo}
     
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default CV