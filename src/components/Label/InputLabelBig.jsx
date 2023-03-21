const InputLabelBig = ({ text, holder, hint, name, register, errors }) => {
  return (
    <div className="flex w-full flex-col">
      <p
        className={`${
          errors ? "text-[red]" : "text-[black]"
        } mb-2  h-[1.5rem] w-[18.1rem] text-[1.125rem] font-[500] leading-[1.31rem] `}
      >
        {text}
      </p>
      <input
        {...register(name)}
        className={`${
          errors ? "border-[red]" : "border-#8AC0E2"
        } h-[3.75rem] w-full rounded-[0.5rem] border-2 border-solid  pl-2 text-base outline-none`}
        placeholder={holder}
        name={name}
      ></input>
      <p
        className={`mt-2 text-xs ${errors ? "text-red-500" : "text-black-500"}`}
      >
        {errors ? errors.message : hint}
      </p>
    </div>
  );
};

export default InputLabelBig;
