import React from "react";

import QRType from "@/utils/utils";

interface Props {
    selectedValue: QRType;
    setSelectedValue: (value: QRType) => void;
}

function RadioGroup({ selectedValue, setSelectedValue}: Props) {

    return (
        <div>
            <QRTypeRadio text="Text" id="id" type={QRType.Text} selectedValue={selectedValue} onChange={setSelectedValue}/>
            <QRTypeRadio text="URL" id="url" type={QRType.URL} selectedValue={selectedValue} onChange={setSelectedValue}/>
            <QRTypeRadio text="Email" id="email" type={QRType.Email} selectedValue={selectedValue} onChange={setSelectedValue}/>
        </div>
    );
}


interface QRTypeProps{
    text : string,
    id : string,
    type : QRType,
    selectedValue : QRType,
    onChange: (value : QRType) => void;
}
function QRTypeRadio({text, id, type, selectedValue, onChange} : QRTypeProps){
    return (
        <div>
            <label htmlFor={id}>{text}</label>
            <input 
                type="radio" 
                name="qrtype" 
                id={id}
                value={type}
                checked={type === selectedValue}
                onChange={ handleChange(type)}
                />
        </div>
    );
}

export default RadioGroup;
