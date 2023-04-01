import React, { useState } from 'react'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import samplePDF from "../sample.pdf";
import { Container } from 'react-bootstrap';

const width = 300;
const height = 424;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

const Flipbook = () => {
  return (
    <div>
      <h1><center>Pizada 15th Edition</center></h1>
        <Container><center>
          <Document file={samplePDF} className='py-2'>
            <HTMLFlipBook width={width} height={height}>
              <Page pageNumber={1} />
              <Page pageNumber={2} />
              <Page pageNumber={3} />
              <Page pageNumber={4} />
              <Page pageNumber={5} />
              <Page pageNumber={6} />
              <Page pageNumber={7} />
              <Page pageNumber={8} />
              <Page pageNumber={9} />
              <Page pageNumber={10} />
              <Page pageNumber={11} />
              <Page pageNumber={12} />
              <Page pageNumber={13} />
              <Page pageNumber={14} />
              <Page pageNumber={15} />
              <Page pageNumber={16} />
              <Page pageNumber={17} />
              <Page pageNumber={18} />
              <Page pageNumber={19} />
              <Page pageNumber={20} />
              <Page pageNumber={21} />
              <Page pageNumber={22} />
              <Page pageNumber={23} />
              <Page pageNumber={24} />
              <Page pageNumber={25} />
              <Page pageNumber={26} />
              <Page pageNumber={27} />
              <Page pageNumber={28} />
              <Page pageNumber={29} />
              <Page pageNumber={30} />
              <Page pageNumber={31} />
              <Page pageNumber={32} />
              <Page pageNumber={33} />
              <Page pageNumber={34} />
              <Page pageNumber={35} />
              <Page pageNumber={36} />
              <Page pageNumber={37} />
              <Page pageNumber={38} />
              <Page pageNumber={39} />
              <Page pageNumber={40} />
              <Page pageNumber={41} />
              <Page pageNumber={42} />
              <Page pageNumber={43} />
              <Page pageNumber={44} />
              <Page pageNumber={45} />
              <Page pageNumber={46} />
              <Page pageNumber={47} />
              <Page pageNumber={48} />
              <Page pageNumber={49} />
              <Page pageNumber={50} />
              <Page pageNumber={51} />
              <Page pageNumber={52} />
              <Page pageNumber={53} />
              <Page pageNumber={54} />
              <Page pageNumber={55} />
              <Page pageNumber={56} />
            </HTMLFlipBook>
        </Document>
        </center>
    </Container> 
    </div>
  )
}

export default Flipbook