interface Props {
  defaultValue: string
  data?: { id: number; team_id?: number; name: string }[]
  selectChange?: any
  disabled?: boolean
  errors: any
  register: any
  name: string
}

const Select = ({
  defaultValue,
  data,
  selectChange,
  disabled,
  errors,
  register,
  name,
}: Props) => {
  return (
    <select
      {...register(name)}
      disabled={disabled}
      onChange={selectChange}
      key={name}
      className={`h-[3.75rem] smMin:w-[71%] rounded-[0.5rem] border-none
       bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000] min-w-[22.375rem] smMin:min-w-[28rem] lgMin:min-w-[17rem] ${
         errors ? 'border-red-500' : ''
       }`}
    >
      <option value=''>{defaultValue}</option>
      {data?.map((item: { name: string }) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default Select
