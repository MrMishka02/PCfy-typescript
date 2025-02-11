import { useNavigate } from 'react-router-dom'

type Props = {
  text: string
  type: any
  path: string
  isValid: boolean
}
function Button({ text, type, path, isValid }: Props) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => {
        if (isValid) {
          setTimeout(() => {
            navigate(path)
            sessionStorage.clear()
          }, 100)
        }
      }}
      type={type}
      className='mb-[1.625rem] h-full w-full
    cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB]
    text-[1.2rem] font-[500] leading-6
    text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
    sm:mb-[1rem]'
    >
      {text}
    </button>
  )
}
export default Button
