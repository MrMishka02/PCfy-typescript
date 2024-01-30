import { Button } from 'components'
import { useNavigate } from 'react-router-dom'
import firework from '../../assets/img/fireworks.png'

const SuccessModal = () => {
  const navigate = useNavigate()
  return (
    <div
      className='fixed inset-0 flex items-center justify-center
    bg-black bg-opacity-25 backdrop-blur-sm sm:bg-[#FFFFFF]'
    >
      <div className='flex h-[33.56rem] w-[52.9rem] flex-col sm:h-[42rem] sm:w-[24.375rem] sm:overflow-y-scroll'>
        <div className='flex flex-col items-center justify-center rounded-lg bg-white p-2'>
          <img src={firework} alt='Fireworks' className='w-[12rem]' />
          <p className='text-2xl font-[700] text-[#292929] sm:w-[12.5rem] sm:text-center'>
            ჩანაწერი დამატებულია!
          </p>
          <div className='mt-20 mb-10 h-[3.75rem] w-[18.5625rem] text-[1.25rem] leading-6 sm:mt-[12rem] sm:mb-10 sm:w-[22.375rem]'>
            <Button
              text={'სიაში გადაყვანა'}
              path='/entries-list'
              clickFunc={() => {
                localStorage.clear()
              }}
            />
          </div>
          <p
            className='mb-11 text-[1.25rem] font-medium leading-6 text-[#0089A7] hover:cursor-pointer'
            onClick={() => {
              navigate('/')
              localStorage.clear()
            }}
          >
            მთავარი
          </p>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
