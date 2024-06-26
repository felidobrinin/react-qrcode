import { useState, useRef } from "react";

import QRType from "./utils/utils";
import RadioGroup from "@/components/RadioGroup/RadioGroup";
import TextForm from '@/components/QRTypeForms/TextForm/TextForm'
import {QRCodeSVG} from 'qrcode.react';
import "./App.css";
import qrCodeLogo from "@/assets/qr-code.svg";

// import { Canvg } from "canvg";

function App() {
  const [qrType, setQRType] = useState(QRType.Text);
  const [QRValue, setQRValue ] = useState("Aguante Linux");

  const qrWidthRef = useRef(null);

  function getQRTypeForm(){
    switch (qrType) {
      case QRType.Text:
        return (<TextForm value={QRValue} setValue={setQRValue}/>);
      case QRType.URL:
        return (<div>URL</div>);
      case QRType.Email:
        return (<div>Email</div>);

      default:
        return (<div>Text</div>);
    }
  }

  function calQRCodeSize() : number{
    return qrWidthRef.current ? qrWidthRef.current.offsetWidth : 0;
  }

  function downloadQRCode() {
    
  }
  
  return (
    <div className="app">
      <header>
        <img src={qrCodeLogo} alt="" className="qrcode-logo" />
        <h1 className="title">
          QR-CODE Generator
        </h1>
      </header>

      <main>
        <RadioGroup qrType={qrType} setQRType={setQRType}/>
        <div className="qr-form">
          {getQRTypeForm()}
          <div ref={qrWidthRef} className="qrcode-container">
            <QRCodeSVG value={QRValue} size={calQRCodeSize()} />
            <button onClick={ downloadQRCode }>Download</button>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
