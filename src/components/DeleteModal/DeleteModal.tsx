import axios from 'axios'
import { Button } from 'components'
import redcross from '../../assets/img/redcross.png'

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

const DeleteModal = ({
  userData,
  setIsShown,
}: {
  userData: pcfyDataT
  setIsShown: any
}) => {
  const deleteInfo = async () => {
    await axios.delete(
      'https://pcfy-backend.vercel.app/api/pcfyinfo' +
        '/' +
        userData.personalData.email
    )
  }
  return (
    <div
      className='fixed inset-0 flex items-center justify-center
    bg-black bg-opacity-25 backdrop-blur-sm sm:bg-[#FFFFFF]'
    >
      <div className='flex h-[33.56rem] w-[52.9rem] flex-col sm:h-[42rem] sm:w-[24.375rem] sm:overflow-y-scroll'>
        <div className='flex flex-col items-center justify-center rounded-lg bg-white p-2'>
          <img src={redcross} alt='Delete' className='w-[12rem]' />
          <p className='text-2xl font-[700] text-[#292929] sm:w-[12.5rem] sm:text-center'>
            დარწმუნებული ხართ რომ გსურთ ჩანაწერის წაშლა?
          </p>
          <div className='flex gap-10 mt-20 mb-10 h-[3.75rem] w-[18.5625rem] text-[1.25rem] leading-6 sm:mt-[12rem] sm:mb-10 sm:w-[22.375rem]'>
            <Button
              text={'დიახ'}
              path='/entries-list'
              clickFunc={() => {
                deleteInfo()
                setIsShown(false)
              }}
            />
            <Button
              text={'არა'}
              path='/entries-list'
              clickFunc={() => setIsShown(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
