import React from 'react'

type Props = {
  text: string
  hint: string
  holder: string
  errors: any
  errorMessage: string | undefined
  inputName: string
  register: any
  value: string
  id: string
  onChange: any
}

const InputLabel = ({
  text,
  holder,
  hint,
  errors,
  errorMessage,
  inputName,
  register,
  onChange,
  value,
  id,
}: Props) => {
  return (
    <div className='flex flex-col'>
      <p
        className={`text-[black] mb-2 h-[1.5rem] w-[18.1rem]  text-[1.125rem] font-[500] leading-[1.31rem]`}
      >
        {text}
      </p>
      <input
        onChange={onChange}
        id={id}
        name={inputName}
        {...register(inputName)}
        className={`h-[3.75rem] w-full rounded-[0.5rem] border-#8AC0E2
        border-2 border-solid pl-2 text-base outline-none 
        ${errors ? 'border-red-500' : 'border-[#BCBCBC] '}
        `}
        placeholder={holder}
      ></input>
      {errors ? (
        <p className={`mt-2 text-xs text-red-500`}>{errorMessage}</p>
      ) : (
        <p className={`mt-2 text-xs text-black-500`}>{hint}</p>
      )}
    </div>
  )
}

export default InputLabel
