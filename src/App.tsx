import { useState, useRef, useEffect } from "react";

import QRType from "./utils/utils";

import RadioGroup from "@/components/RadioGroup/RadioGroup";
import TextForm from "@/components/QRTypeForms/TextForm/TextForm";
import URLForm from "@/components/QRTypeForms/URLForm/URLForm";
import EmailForm from "./components/QRTypeForms/EmailForm/EmailForm";
import WifiForm from "./components/QRTypeForms/WifiForm/WifiForm";

import qrCodeLogo from "@/assets/qr-code.svg";
import { QRCodeCanvas } from "qrcode.react";

import "./App.css";

function App() {
  const [qrType, setQRType] = useState(QRType.Text);
  const [QRValue, setQRValue] = useState("");

  const [resolution, _setResolution] = useState(1024);
  const qrWidthRef = useRef<HTMLDivElement>(null);
  const [imageURL, setImageURL] = useState("/");

  function changeQRType(type: QRType) {
    if (type !== qrType) setQRValue("");
    setQRType(type);
  }

  function getQRTypeForm() {
    switch (qrType) {
      case QRType.Text:
        return <TextForm value={QRValue} setValue={setQRValue} />;
      case QRType.URL:
        return <URLForm setValue={setQRValue} />;
      case QRType.Email:
        return <EmailForm setValue={setQRValue} />;
      case QRType.WiFi:
        return <WifiForm setValue={setQRValue} />;
      default:
        return <div>I messed up</div>;
    }
  }

  useEffect(() => {
    setImageURL(qrCodeToImage());
    console.log("URL actualizada");
  }, [QRValue]);

  function calQRCodeSize(): number {
    let containerSize = qrWidthRef.current ? qrWidthRef.current.offsetWidth : 0;
    // Create a MediaQueryList object
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 800;
    if (isSmallScreen) {
      containerSize *= 0.5;
    }
    return containerSize;
  }

  function qrCodeToImage(): string {
    const qrCanvas = document.getElementById("qrCanvas");
    if (qrCanvas instanceof HTMLCanvasElement)
      return qrCanvas.toDataURL("image/png");
    return "";
  }

  return (
    <div className="app">
      <header>
        <img src={qrCodeLogo} alt="" className="qrcode-logo" />
        <h1 className="title">QR-CODE Generator</h1>
      </header>

      <main>
        <RadioGroup qrType={qrType} setQRType={changeQRType} />
        <div className="qr-form">
          {getQRTypeForm()}
          <div ref={qrWidthRef} className="qrcode-container">
            <QRCodeCanvas value={QRValue} size={calQRCodeSize()} />
            <a
              href={imageURL}
              download="qrcode.png"
              className="download-button"
            >
              Download
            </a>
          </div>
        </div>
      </main>

      {/* This canvas is hidden and is used to generate the image */}
      <QRCodeCanvas
        value={QRValue}
        size={resolution}
        id="qrCanvas"
        className="hidden-canvas"
      />
    </div>
  );
}

export default App;
