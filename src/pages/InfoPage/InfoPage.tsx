import {
  CircleButton,
  InfoHeadLabel,
  InfoLabel,
  InfoText,
  Line,
} from 'components/'
import laptop from 'assets/img/laptop.png'

type pcfyDataT = {
  firstName: string
  surName: string
  team: string
  position: string
  email: string
  phoneNumber: string
  laptopName: string
  laptopBrand: string
  laptopCpu: string
  laptopCpuCores: number
  laptopCpuThreads: number
  laptopRam: number
  laptopPrice: number
  memory: number
  condition: string
  purchaseDate: string
  createdAt: string
  updatedAt: string
  __v: number
  _id: string
}

const InfoPage = () => {
  const storageKey: string = 'pcfyInfo'
  const value: string | null = sessionStorage.getItem(storageKey)
  let pcfyInfo
  if (value !== null) {
    pcfyInfo = JSON.parse(value)
  }
  let personalData: pcfyDataT = pcfyInfo.personalData
  let laptopData: pcfyDataT = pcfyInfo.laptopData
  return (
    <div className='flex h-full w-full flex-col items-center bg-[#FFFFFF]'>
      <CircleButton path={'/entries-list'} />
      <InfoHeadLabel text={'ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ'} />
      <div className='mt-16 flex w-[70%] items-center sm:mt-6 sm:w-full sm:flex-col'>
        <div className='w-[50%] sm:flex sm:w-full sm:justify-center'>
          <img
            src={laptop}
            alt='Laptop'
            className='w-[36rem] sm:w-[22.375rem]'
          />
        </div>
        <div className='flex ml-20 w-[50%] sm:mt-4 sm:w-full'>
          <div className='ml-4 mt-8 w-[30%] sm:ml-10 sm:mt-0 sm:w-[45%]'>
            <InfoLabel text={'სახელი: '} />
            <InfoLabel text={'თიმი: '} />
            <InfoLabel text={'პოზიცია: '} />
            <InfoLabel text={'მეილი: '} />
            <InfoLabel text={'ტელ. ნომერი: '} />
          </div>
          <div className='ml-4 mt-8 w-[55%] sm:ml-0 sm:mt-0 sm:w-[50%] '>
            <InfoText
              text={personalData.firstName + ' ' + personalData.surName}
            />
            <InfoText text={personalData.team} />
            <InfoText text={personalData.position} />
            <InfoText text={personalData.email} />
            <InfoText text={personalData.phoneNumber} />
          </div>
        </div>
      </div>
      <div className='mt-[5.3rem] w-[70%] sm:mt-[2.4rem] sm:w-[95%]'>
        <Line />
      </div>
      <div className='mt-11 flex w-[70%] sm:mt-5 sm:w-full sm:flex-col sm:overflow-x-hidden'>
        <div className='flex w-[50%] sm:ml-10 sm:w-[100%] '>
          <div className='w-[55%] sm:w-[44%]'>
            <InfoLabel text={'ლეპტოპის სახელი: '} />
            <InfoLabel text={'ლეპტოპის ბრენდი: '} />
            <InfoLabel text={'RAM: '} />
            <InfoLabel text={'მეხსიერების ტიპი: '} />
          </div>
          <div className='w-[45%] sm:w-[46%]'>
            <InfoText text={laptopData.laptopName} />
            <InfoText text={laptopData.laptopBrand} />
            <InfoText text={String(laptopData.laptopRam)} />
            <InfoText text={String(laptopData.memory)} />
          </div>
        </div>
        <div className='flex w-[50%] pl-14 sm:ml-10 sm:mt-2 sm:w-full sm:pl-0'>
          <div className='w-[45%] sm:w-[44%]'>
            <InfoLabel text={'CPU: '} />
            <InfoLabel text={'CPU-ს ბირთვი: '} />
            <InfoLabel text={'CPU-ს ნაკადი: '} />
          </div>
          <div className='w-[50%] sm:w-[46%]'>
            <InfoText text={laptopData.laptopCpu} />
            <InfoText text={String(laptopData.laptopCpuCores)} />
            <InfoText text={String(laptopData.laptopCpuThreads)} />
          </div>
        </div>
      </div>
      <div className='mt-[3.8rem] w-[70%] sm:mt-[2.8rem] sm:w-[95%]'>
        <Line />
      </div>
      <div className='mt-11 flex w-[70%] sm:mt-4 sm:w-full sm:flex-col sm:overflow-x-hidden'>
        <div className='flex w-[50%] sm:ml-10 sm:flex sm:w-full'>
          <div className='w-[55%] sm:w-[44%]'>
            <div className='sm:hidden'>
              <InfoLabel text={'ლეპტოპის მდგომარეობა: '} />
            </div>
            <div className='hidden sm:block'>
              <InfoLabel text={'მდგომარეობა: '} />
            </div>
            <InfoLabel text={'ლეპტოპის ფასი: '} />
          </div>
          <div className='w-[45%] sm:w-[50%]'>
            <InfoText text={laptopData.condition} />
            <InfoText text={laptopData.laptopPrice + ' ლ'} />
          </div>
        </div>
        <div className='flex w-[50%] sm:w-full'>
          <div className='w-[45%] pl-14 sm:ml-10 sm:w-[48%] sm:pl-0'>
            <InfoLabel text={'შეძენის რიცხვი: '} />
          </div>
          <div className='w-[50%] pl-7 sm:w-[50%] sm:pl-0'>
            <InfoText text={laptopData.purchaseDate} />
          </div>
        </div>
      </div>
      <div className='h-20'></div>
    </div>
  )
}

export default InfoPage
