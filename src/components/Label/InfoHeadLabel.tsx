type Props = {
  text: String
}
const InfoHeadLabel = ({ text }: Props) => {
  return (
    <p
      className='mt-16 text-[2.125rem] font-bold
        sm:mt-8 sm:text-base'
    >
      {text}
    </p>
  )
}

export default InfoHeadLabel
