const InfoLabel = ({ text }) => {
  return (
    <div>
      <p
        className="text-[1.375rem] font-bold leading-[3.35rem] text-[#2E2E2E]
        sm:text-sm sm:leading-[1.5rem]"
      >
        {text}
      </p>
    </div>
  );
};

export default InfoLabel;
