import { useNavigate } from "react-router-dom";

function HeadLabel({ text, showLine, path }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center" onClick={() => navigate(path)}>
      <p
        className="h-[1.5rem] w-[18.1rem] select-none
            text-center text-[1.31rem] font-[700] leading-[1.5rem]
            text-[#232323] hover:cursor-pointer sm:text-base"
      >
        {text}
      </p>
      {showLine && <p className="mt-3 h-1 w-[11.56rem] bg-black sm:hidden"></p>}
    </div>
  );
}

export default HeadLabel;
