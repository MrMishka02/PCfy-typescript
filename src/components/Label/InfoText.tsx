type Props = {
  text: String
}
const InfoText = ({ text }: Props) => {
  return (
    <p
      className='text-[1.375rem] font-bold leading-[3.35rem] text-[#797979]
        sm:text-sm sm:leading-[1.5rem]'
    >
      {text}
    </p>
  )
}

export default InfoText
