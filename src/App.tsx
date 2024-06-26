import { useState } from "react";

import QRType from "./utils/utils";
import RadioGroup from "./components/RadioGroup/RadioGroup";

import "./App.css";
import qrCodeLogo from "@/assets/qr-code.svg";

function App() {
  const [qrType, setQRType] = useState(QRType.Text);

  function getQRTypeForm(){
    switch (qrType) {
      case QRType.Text:
        return (<div>Text</div>);
      case QRType.URL:
        return (<div>URL</div>);
      case QRType.Email:
        return (<div>Email</div>);

      default:
        return (<div>Text</div>);
    }
  }
  return (
    <div className="app">
      <header>
        <img src={qrCodeLogo} alt="" className="qrcode-logo" />
        <h1 className="title">
          <span>QR-CODE</span>
          <span>Generator</span>
        </h1>
      </header>

      <main>
        <RadioGroup qrType={qrType} setQRType={setQRType}/>
        {getQRTypeForm()}
        
      </main>
    </div>
  );
}

export default App;
