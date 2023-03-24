type Props = {
  defaultValue: String
}
const Select = ({ defaultValue }: Props) => {
  return (
    <select
      className={`h-[3.75rem] w-[50%] rounded-[0.5rem] border-none
       bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000] min-w-[22.375rem] smMin:max-w-[28rem] mdMin:max-w-full `}
    >
      <option value=''>{defaultValue}</option>
    </select>
  )
}

export default Select
