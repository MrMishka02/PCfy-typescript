import { useNavigate } from "react-router-dom";

function CircleButton({path}) {
  const navigate = useNavigate();
  return (
    <button
      className="absolute left-[4.375rem] top-[3.31rem] h-[3.375rem] w-[3.375rem]
      rounded-[50%] border-none bg-[#D9D9D9] text-[1.375rem] text-[#2E2E2E] hover:cursor-pointer
      sm:bg-transparent sm:left-0 sm:top-4"
    onClick={() => navigate(path)}    >
      &#x276E;
    </button>
  );
}

export default CircleButton;
