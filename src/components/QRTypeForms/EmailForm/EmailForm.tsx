import { useEffect, useState } from "react";
import "./EmailForm.css";

interface Props {
  // value: string;
  setValue: (value: string) => void;
}

function EmailForm({ setValue }: Props) {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    // Aca construimos el formato del correo
  }, [subject, recipient, body]);
  return (
    <div className="email-form">
      <div className="email-input">
        <label htmlFor="recipient">Recipient</label>
        <input
          placeholder="example@site.com"
          type="text"
          value={recipient}
          id="recipient"
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>

      <div className="email-input">
        <label htmlFor="subject">Subject</label>
        <input
          placeholder="The email subject"
          type="text"
          value={subject}
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="email-textarea">
        <label htmlFor="body">Body</label>
        <textarea
          placeholder="Your email body here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

    </div>
  );
}

export default EmailForm;
