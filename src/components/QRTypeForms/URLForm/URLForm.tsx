import { useState } from "react";
import "./URLForm.css";

interface Props {
  // value: string;
  setValue: (value: string) => void;
}

function URLForm({ setValue }: Props) {
  const [text, setText] = useState("");
  function handleChange(text: string) {
    let url = text;
    setText(url);

    if (!url.startsWith("http://") || !url.startsWith("http://"))
      url = `https://${url}`;

    setValue(url);
  }

  return (
    <div className="url-form">
      <div className="form-input">
        <label htmlFor="url">https://</label>
        <input
          placeholder="wikipedia.com"
          type="text"
          value={text}
          id="url"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default URLForm;
