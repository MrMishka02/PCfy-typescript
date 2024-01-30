type Props = {
  text: string
  showLine: boolean
}

function HeadLabel({ text, showLine }: Props) {
  return (
    <div className='flex flex-col items-center'>
      <p
        className='h-[1.5rem] w-[18rem] mdMin:w-[20.8rem]
            text-center text-xs smMin:text-[1.31rem] smMin:font-[700] leading-[1.5rem]
            text-[#232323] sm:text-base'
      >
        {text}
      </p>
      {showLine && <p className='mt-3 h-1 w-[11.56rem] bg-black sm:hidden'></p>}
    </div>
  )
}

export default HeadLabel
