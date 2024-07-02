import { useState, useRef, useEffect } from "react";

import QRType from "./utils/utils";

import RadioGroup from "@/components/RadioGroup/RadioGroup";
import TextForm from "@/components/QRTypeForms/TextForm/TextForm";
import URLForm from "@/components/QRTypeForms/URLForm/URLForm";
import EmailForm from "./components/QRTypeForms/EmailForm/EmailForm";
import WifiForm from "./components/QRTypeForms/WifiForm/WifiForm";

import qrCodeLogo from "@/assets/qr-code.svg";
import { QRCodeCanvas } from "qrcode.react";
// import reloadSVG from "@/assets/reload.svg";

import "./App.css";

function App() {
  const [qrType, setQRType] = useState(QRType.Text);
  const [QRTargetValue, setQRTargetValue] = useState("");
  const [QRValue, setQRValue] = useState("");

  const [resolution, _setResolution] = useState(1024);
  const qrWidthRef = useRef<HTMLDivElement>(null);
  const [imageURL, setImageURL] = useState("/");

  function changeQRType(type: QRType) {
    if (type !== qrType) setQRTargetValue("");
    setQRType(type);
  }

  function getQRTypeForm() {
    switch (qrType) {
      case QRType.Text:
        return <TextForm value={QRTargetValue} setValue={setQRTargetValue} />;
      case QRType.URL:
        return <URLForm setValue={setQRTargetValue} />;
      case QRType.Email:
        return <EmailForm setValue={setQRTargetValue} />;
      case QRType.WiFi:
        return <WifiForm setValue={setQRTargetValue} />;
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
            <QRCodeCanvas
              value={QRValue}
              size={calQRCodeSize()}
              // includeMargin={true}
            />
            <button
              className="button reload-button"
              onClick={() => {
                setQRValue(QRTargetValue);
              }}
            >
              Generate
              <img
                src="/src/assets/reload-light.svg"
                alt=""
                className="realod-icon"
              />
            </button>

            <a href={imageURL} download="qrcode.png" className="button">
              Download
              <img
                src="/src/assets/download-light.svg"
                alt=""
                className="download-icon"
              />
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
        includeMargin={true}
      />
    </div>
  );
}

export default App;
