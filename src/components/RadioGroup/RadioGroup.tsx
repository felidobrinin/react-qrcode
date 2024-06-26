import QRType from "@/utils/utils";
import './RadioGroup.css'

interface RadioGroupProps {
  qrType: QRType;
  setQRType: (value: QRType) => void;
}

function RadioGroup({ qrType, setQRType }: RadioGroupProps) {
  return (
    <div className="radio-group">
      <QRTypeRadio
        text="Text"
        id="id"
        type={QRType.Text}
        selectedValue={qrType}
        setQRType={setQRType}
      />
      <QRTypeRadio
        text="URL"
        id="url"
        type={QRType.URL}
        selectedValue={qrType}
        setQRType={setQRType}
      />
      <QRTypeRadio
        text="Email"
        id="email"
        type={QRType.Email}
        selectedValue={qrType}
        setQRType={setQRType}
      />
    </div>
  );
}

interface QRTypeProps {
  text: string;
  id: string;
  type: QRType;
  selectedValue: QRType;
  setQRType: (value: QRType) => void;
}

function QRTypeRadio({
  text,
  id,
  type,
  selectedValue,
  setQRType,
}: QRTypeProps) {
  return (
    <div className="radio-item">
      <label htmlFor={id}>
        {text}
      </label>
      <input
        type="radio"
        id={id}
        value={type}
        checked={type === selectedValue}
        onChange={() => setQRType(type)}
      />
    </div>
  );
}

export default RadioGroup;
