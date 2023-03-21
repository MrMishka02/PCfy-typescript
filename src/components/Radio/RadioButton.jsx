const RadioButton = ({ value, name, text }) => {
  return (
    <>
      <input className="w-5" type="radio" value={value} name={name} /> {text}
    </>
  );
};

export default RadioButton;
