import { useNavigate } from 'react-router-dom'

type Props = {
  text: string
  path: string
}
function Button({ text, path }: Props) {
  const navigate = useNavigate()
  return (
    <button
      type='button'
      onClick={() => {
        navigate(path)
      }}
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
