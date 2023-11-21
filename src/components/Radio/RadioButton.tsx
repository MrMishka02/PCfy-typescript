type Props = {
  name: string
  value: string
  text: string
  register: any
}
const RadioButton = ({ value, name, text, register }: Props) => {
  return (
    <>
      <input
        className='w-5'
        type='radio'
        value={value}
        name={name}
        {...register(name)}
      />
      {text}
    </>
  )
}

export default RadioButton
