interface Props {
  value: string;
  setValue: (value: string) => void;
}

function TextForm({ value, setValue }: Props) {
  return (
    <div className="">
      <textarea 
        name="text value" 
        value={value} 
        onChange={e => setValue(e.target.value)}
        />
    </div>
  );
}

export default TextForm;
