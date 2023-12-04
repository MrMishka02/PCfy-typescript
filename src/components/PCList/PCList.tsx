import { useNavigate } from 'react-router-dom'
import pcImg from 'assets/img/pc.png'

type pcfyDataT = {
  firstName: string
  surName: string
  team: string
  position: string
  email: string
  phoneNumber: string
  laptopBrand: string
  laptopCpu: string
  laptopCpuCores: number
  laptopCpuThreads: number
  laptopRam: number
  laptopPrice: number
  memory: number
  condition: string
  createdAt: string
  updatedAt: string
  __v: number
  _id: string
}

const PCList = ({ userData }: { userData: pcfyDataT }) => {
  const navigate = useNavigate()
  console.log(userData)
  return (
    <div
      className='flex h-[12.8125rem] w-[35.1875rem] items-center
      rounded-[1.25rem] border-[0.0625rem] border-solid border-[#AED1EA] bg-[#EAFAFF]
      sm:ml-0 sm:h-[7.6875rem] sm:w-[22.375rem]'
    >
      <img
        src={pcImg}
        alt='PC'
        className='ml-4 w-[16.625rem] rounded-xl sm:w-[9rem]'
      />
      <div className='ml-6 flex h-[56%] w-[40%] flex-col justify-between'>
        <p className='text-lg font-semibold text-[#2E2E2E] sm:text-sm sm:font-medium'>
          {userData.firstName + ' ' + userData.surName}
        </p>
        <p className='text-lg font-medium text-[#2E2E2E] sm:font-normal'>
          Pentium II
        </p>
        <p
          className='mt-4 select-none text-base text-[#4386A9]
          underline hover:cursor-pointer sm:mt-2 sm:text-sm'
          onClick={() => {
            navigate('/info-page')
            sessionStorage.setItem('pcfyInfo', JSON.stringify(userData))
          }}
        >
          მეტის ნახვა
        </p>
      </div>
    </div>
  )
}

export default PCList
