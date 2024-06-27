import { useEffect, useState } from "react";
import "./WifiForm.css";

interface Props {
  // value: string;
  setValue: (value: string) => void;
}

function WifiForm({ setValue }: Props) {
  const [auth, setAuth] = useState("WPA"); // T : Auth type : WEP, WPA, or empty for no password
  const [name, setName] = useState(""); // S : Network Name
  const [password, setPassword] = useState(""); // P : password
  const [hidden, setHidden] = useState(false); // H : optional. True if the newtork ssid is hidden

  useEffect(() => {
    // Aca construimos el formato del correo
    const wifi = `WIFI:T:${auth};S:${name};P:${password};;`;
    setValue(wifi);
  }, [auth, name, password, hidden]);

  return (
    <div className="Wifi-form">
      <div className="form-input">
        <label htmlFor="name">Wifi Name</label>
        <input
          placeholder="mywifi1234"
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          placeholder="..."
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-input">
        <label htmlFor="auth">Security</label>
        <select value={auth} onChange={(e) => setAuth(e.target.value)} id="auth">
          <option value="WPA">WPA</option>
          <option value="WEP">WEP</option>
          <option value="">No password</option>
        </select>
      </div>

      <div className="form-checkbox">
        <label htmlFor="hidden">Hidden</label>
        <input
          type="checkbox"
          checked={hidden}
          onChange={() => setHidden(!hidden)}
          id="hidden"
        />
      </div>
    </div>
  );
}

export default WifiForm;
