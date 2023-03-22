type Props = {
  text: string
  hint: string
  holder: string
}

const InputLabel = ({ text, holder, hint }: Props) => {
  return (
    <div className='flex flex-col'>
      <p
        className={`text-[black] mb-2 h-[1.5rem] w-[18.1rem] text-[1.125rem] font-[500] leading-[1.31rem]`}
      >
        {text}
      </p>
      <input
        className={`h-[3.75rem] w-full rounded-[0.5rem] border-#8AC0E2
        border-2 border-solid pl-2 text-base outline-none`}
        placeholder={holder}
      ></input>
      <p className={`mt-2 text-xs 'text-black-500`}>{hint}</p>
    </div>
  )
}

export default InputLabel
