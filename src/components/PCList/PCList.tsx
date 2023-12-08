import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import pcImage from 'assets/img/pc.png'

type pcfyDataT = {
  personalData: {
    firstName: string
    surName: string
    team: string
    position: string
    email: string
    phoneNumber: string
  }
  laptopData: {
    laptopName: string
    laptopBrand: string
    laptopCpu: string
    laptopCpuCores: number
    laptopCpuThreads: number
    laptopRam: number
    laptopPrice: number
    memory: number
    condition: string
  }
  imageFile: string
  createdAt: string
  updatedAt: string
  __v: number
  _id: string
}

const PCList = ({ userData }: { userData: pcfyDataT }) => {
  const navigate = useNavigate()
  const deleteInfo = async (e: any) => {
    await axios.delete(
      'https://pcfy-backend.vercel.app/api/pcfyinfo' +
        '/' +
        userData.personalData.email
    )
  }
  return (
    <div
      className='flex h-[12.8125rem] w-[35.1875rem] items-center
      rounded-[1.25rem] border-[0.0625rem] border-solid border-[#AED1EA] bg-[#EAFAFF]
      sm:ml-0 sm:h-[7.6875rem] sm:w-[22.375rem]'
    >
      <div className='ml-10 w-[12rem] rounded-xl sm:ml-6 sm:w-[7rem]'>
        <img
          src={userData.imageFile || pcImage}
          alt='ლეპტოპის სურათი'
          className='w-full rounded-xl overflow-hidden'
        />
      </div>
      <div className='ml-10 flex h-[56%] w-[40%] flex-col justify-between sm:h-[85%] sm:w-[60%]'>
        <p className='text-lg font-semibold text-[#2E2E2E] sm:text-sm sm:font-medium'>
          {userData.personalData.firstName +
            ' ' +
            userData.personalData.surName}
        </p>
        <p className='text-md font-medium text-[#2E2E2E] sm:font-normal'>
          {userData.laptopData.laptopBrand +
            ' ' +
            userData.laptopData.laptopName}
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
      <span
        className='self-start cursor-pointer select-none mt-3 ml-6 sm:relative sm:right-2 sm:bottom-2'
        onClick={deleteInfo}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          />
        </svg>
      </span>
    </div>
  )
}

export default PCList
