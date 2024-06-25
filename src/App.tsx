import qrCodeLogo from "@/assets/qr-code.svg";
import "./App.css";

function App() {
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
        <div>
          <input type="radio" name="type" id="" />
          <label htmlFor="">Text</label>

          <input type="radio" name="type" id="" />
          <label htmlFor="">URL</label>

          <input type="radio" name="type" id="" />
          <label htmlFor="">email</label>
        </div>
      </main>
    </div>
  );
}

export default App;
