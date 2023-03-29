import {
  CircleButton,
  FileUpload,
  HeadLabel,
  InputLabel,
  Line,
  Select,
  RadioButton,
  Button,
  LogoBottom,
} from 'components'
import { useNavigate } from 'react-router-dom'

const LaptopInfo = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center overflow-x-hidden'>
      <CircleButton path={'/personal-info'} />
      <div className='mt-[5.7rem] flex justify-center  sm:mt-[1.9rem]'>
        <div className='sm:hidden'>
          <HeadLabel
            path={'/personal-info'}
            text={'თანამშრომლის ინფო'}
            showLine={false}
          />
        </div>
        <div className='flex flex-col items-center'>
          <HeadLabel
            text={'ლეპტოპის მახასიათებლები'}
            showLine={true}
            path={''}
          />
          <p className='hidden font-normal sm:block sm:text-[0.875rem] sm:text-[#898989]'>
            2/2
          </p>
        </div>
      </div>
      <div
        className='mt-2 flex flex-col items-center  rounded-[1.125rem] bg-[#FFFFFF]
      h-[34.4375rem] w-[24.375rem] gap-5 lgMin:gap-10'
      >
        <div className='mt-20 '>
          <FileUpload />
        </div>
        <div
          className='mt-16 flex w-[55rem] items-center
           md:w-full flex-col lgMin:flex-row lgMin:gap-5 justify-center'
        >
          <div className='w-[25.4375rem] md:w-[22.375rem] smMin:min-w-[28rem] lgMin:w-[18rem] '>
            <InputLabel
              text={'ლეპტოპის სახელი'}
              holder={'HP'}
              hint={'ლათინური ასოები, ციფრები, !@#$%^&*()_+='}
            />
          </div>
          <div className='mt-2 flex h-[7.25rem] w-[25.5rem] items-center md:w-[22.375rem] smMin:min-w-[28rem] lgMin:min-w-[28rem]'>
            <Select defaultValue={'Brand'}></Select>
          </div>
        </div>
        <div className='w-[55rem] md:hidden'>
          <Line />
        </div>
        <div className='md:h-[40.75rem] md:w-[24.375rem] md:rounded-lg md:bg-[#FFFFFF] '>
          <div className='h-30 mt-4 w-full  md:w-[24.375rem] md:flex-col '>
            <div
              className='flex w-[55rem] items-center justify-evenly
             md:w-[24.375rem] flex-col lgMin:flex-row gap-3 lgMin:justify-between'
            >
              <div className='w-[17.25rem] md:mb-6 md:w-[22.375rem] smMin:min-w-[28rem] lgMin:min-w-[17rem] lgMin:mt-2'>
                <Select defaultValue={'CPU'}></Select>
              </div>
              <div className='w-[17.25rem] md:mb-6 md:w-[22.375rem] smMin:min-w-[28rem] lgMin:min-w-[17rem]'>
                <InputLabel
                  text={'CPU-ს ბირთვი'}
                  holder={'14'}
                  hint={'მხოლოდ ციფრები'}
                />
              </div>
              <div className='w-[17.25rem] md:w-[22.375rem] smMin:min-w-[28rem] lgMin:min-w-[17rem]'>
                <InputLabel
                  text={'CPU-ს ნაკადი'}
                  holder={'365'}
                  hint={'მხოლოდ ციფრები'}
                />
              </div>
            </div>
          </div>
          <div
            className='mx-auto flex flex-col
        items-center justify-between lgMin:flex-row gap-5 mt-3'
          >
            <div className=' w-[25.5rem] md:w-[22.375rem] smMin:min-w-[28rem] '>
              <InputLabel
                text={'ლეპტოპის RAM (GB)'}
                holder={'16'}
                hint={'მხოლოდ ციფრები'}
              />
            </div>
            <div className='smMin:min-w-[28rem] md:mt-4 md:w-[22.375rem]'>
              <p
                className='pb-6 text-[1.125rem] font-medium
          text-[#000000] '
              >
                მეხსიერების ტიპი
              </p>
              <div className=' flex h-full w-[15rem] justify-between md:w-[14.2rem] lgMin:mr-0'>
                <RadioButton value={'SSD'} name={'memory'} text={'SSD'} />
                <RadioButton value={'HDD'} name={'memory'} text={'HDD'} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-[55rem] md:hidden'>
          <Line />
        </div>
        <div
          className='flex flex-col items-center
        md:w-[24.375rem] md:rounded-lg md:bg-[#FFFFFF] gap-3 '
        >
          <div
            className='flex justify-between
         flex-col lgMin:flex-row gap-3'
          >
            <div className=' smMin:min-w-[28rem]  w-[25.4375rem] md:mb-4 md:w-[22.375rem]'>
              <InputLabel
                text={'შეძენის რიცხვი (არჩევითი)'}
                holder={'დდ / თთ / წწწწ'}
                hint={''}
              />
            </div>
            <div className=' smMin:min-w-[28rem] w-[25.4375rem] md:w-[22.375rem]'>
              <InputLabel
                text={'ლეპტოპის ფასი'}
                holder={'0000'}
                hint={'მხოლოდ ციფრები'}
              />
            </div>
          </div>
          <div className=' smMin:min-w-[28rem] md:w-[22.375rem] flex flex-col items-start lgMin:ml-[-28rem]'>
            <p
              className=' mb-6 w-[16rem] text-[1.125rem] font-medium
          text-[#000000]'
            >
              ლეპტოპის მდგომარეობა
            </p>
            <div className='flex w-[15rem] justify-between '>
              <RadioButton value={'new'} name={'condition'} text={'ახალი'} />
              <RadioButton value={'used'} name={'condition'} text={'მეორადი'} />
            </div>
          </div>
          <div
            className=' flex  smMin:min-w-[28rem]  items-center justify-between
        md:w-[22.3rem] mt-5 lgMin:mt-14 lgMin:w-[55rem]'
          >
            <p
              className='select-none text-[1.125rem] font-medium leading-5
          text-[#62A1EB] hover:cursor-pointer'
              onClick={() => navigate('/personal-info')}
            >
              უკან
            </p>
            <div className='h-[3.75rem] w-[13.7rem] md:h-[2.875rem] md:w-[10.125rem]'>
              <Button text={'დამახსოვრება'} path={'/show-modal'} />
            </div>
          </div>
        </div>
      </div>
      <div className='relative pb-6 flex w-full justify-center  sm:hidden mt-[78rem] mdMin:mt-[85rem] lgMin:mt-[65rem] '>
        <LogoBottom />
      </div>
    </div>
  )
}

export default LaptopInfo
