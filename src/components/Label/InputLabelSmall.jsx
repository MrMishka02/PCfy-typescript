const InfoLabelSmall = ({ text, holder, hint }) => {
  return (
    <div className="flex flex-col">
      <p
        className="mb-2 h-[1.5rem] w-[18.1rem]
        text-[1.125rem] font-[500] leading-[1.31rem] text-[#232323]"
      >
        {text}
      </p>
      <input
        className="border-#8AC0E2 h-[3.75rem] w-full rounded-[0.5rem] border-2 border-solid
        text-base pl-2"
        placeholder={holder}
      ></input>
      <p className="text-black-500 mt-2 text-xs"> {hint} </p>
    </div>
  );
};

export default InfoLabelSmall;
