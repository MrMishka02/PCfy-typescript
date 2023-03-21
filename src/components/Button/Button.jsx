import { useNavigate, useLocation } from "react-router-dom";
import { getInputValues, getSelectValues } from "../../actions";
import { useDispatch } from "react-redux";

function Button({
  text,
  path,
  selectedTeam,
  selectedPosition,
  firstName,
  lastName,
  type,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location.pathname);
  const multipleActions = () => {
    dispatch(getInputValues({ firstName, lastName }));
    dispatch(getSelectValues({ selectedTeam, selectedPosition }));
  };

  return (
    <button
      className="mb-[1.625rem] h-full w-full
    cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB] font-sans
    text-[1.28rem] font-[500] leading-6
    text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
    sm:mb-[1rem]"
      onClick={() => {
        if (location.pathname === "/") {
          navigate(path);
        } else {
          multipleActions();
        }
      }}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
