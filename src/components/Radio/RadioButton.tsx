type Props = {
  name: string
  value: string
  text: string
}
const RadioButton = ({ value, name, text }: Props) => {
  return (
    <>
      <input className='w-5' type='radio' value={value} name={name} /> {text}
    </>
  )
}

export default RadioButton
