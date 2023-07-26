import { getInputValues, getSelectValues } from 'actions'
import { useDispatch } from 'react-redux'

type Props = {
  text: string
  firstName?: string
  surName?: string
  selectedTeam?: string
  selectedPosition?: string
}
function Button({
  text,
  firstName,
  surName,
  selectedTeam,
  selectedPosition,
}: Props) {
  const dispatch = useDispatch()
  const multipleActions = () => {
    dispatch(getInputValues({ firstName, surName }))
    dispatch(getSelectValues({ selectedTeam, selectedPosition }))
  }
  return (
    <button
      onClick={() => multipleActions()}
      type='submit'
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
