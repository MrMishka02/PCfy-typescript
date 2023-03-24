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
    <div>
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
        className='m-auto mt-2 h-[98.75rem] w-[76.6rem] rounded-[1.125rem] bg-[#FFFFFF]
      sm:h-[34.4375rem] sm:w-[24.375rem] '
      >
        <div className='relative top-[5.4rem] sm:top-7'>
          <FileUpload />
        </div>
        <div
          className='h-30 relative top-[8.4rem] ml-[10.8rem] flex w-[55rem] items-center justify-between
          sm:top-[4.4rem] sm:ml-0 sm:w-full sm:flex-col'
        >
          <div className='w-[25.4375rem] sm:w-[22.375rem]'>
            <InputLabel
              text={'ლეპტოპის სახელი'}
              holder={'HP'}
              hint={'ლათინური ასოები, ციფრები, !@#$%^&*()_+='}
            />
          </div>
          <div className='mt-2 flex h-[7.25rem] w-[25.5rem] items-center sm:w-[22.375rem]'>
            <Select defaultValue={'Brand'}></Select>
          </div>
        </div>
        <div className='relative top-[11.3rem] left-[11rem] w-[55rem] sm:hidden'>
          <Line />
        </div>
        <div
          className='sm:relative sm:top-[-9.4rem] sm:block
        sm:h-[40.75rem] sm:w-[24.375rem] sm:rounded-lg sm:bg-[#FFFFFF]'
        >
          <div className='h-30 mt-[14.2rem] w-full sm:ml-0 sm:w-[24.375rem] sm:flex-col'>
            <div
              className='ml-[10.7rem] flex w-[55rem] items-center justify-evenly
            sm:ml-0 sm:w-[24.375rem] sm:flex-col'
            >
              <div className='w-[17.25rem] mt-2 sm:mt-7 sm:mb-10 sm:w-[22.375rem]'>
                <Select defaultValue={'CPU'}></Select>
              </div>
              <div className=' ml-4 w-[17.25rem] sm:ml-0 sm:mb-6 sm:w-[22.375rem]'>
                <InputLabel
                  text={'CPU-ს ბირთვი'}
                  holder={'14'}
                  hint={'მხოლოდ ციფრები'}
                />
              </div>
              <div className='ml-4 w-[17.25rem] sm:ml-0 sm:w-[22.375rem]'>
                <InputLabel
                  text={'CPU-ს ნაკადი'}
                  holder={'365'}
                  hint={'მხოლოდ ციფრები'}
                />
              </div>
            </div>
          </div>
          <div
            className='relative top-[3.2rem] ml-[10.8rem] flex h-[7.6rem]
        w-[71.8%] items-center justify-between sm:top-[1.6rem] sm:ml-0 sm:w-[24.375rem] sm:flex-col'
          >
            <div className='w-[25.5rem] sm:w-[22.375rem]'>
              <InputLabel
                text={'ლეპტოპის RAM (GB)'}
                holder={'16'}
                hint={'მხოლოდ ციფრები'}
              />
            </div>
            <div className='sm:mt-6 sm:w-[22.375rem]'>
              <p
                className='relative mb-6 mt-[-3.2rem] ml-0 text-[1.125rem] font-medium
          text-[#000000] sm:mt-0'
              >
                მეხსიერების ტიპი
              </p>
              <div className='mr-[10.6rem] flex h-full w-[15rem] justify-between sm:h-6 sm:w-[14.2rem]'>
                <RadioButton value={'SSD'} name={'memory'} text={'SSD'} />
                <RadioButton value={'HDD'} name={'memory'} text={'HDD'} />
              </div>
            </div>
          </div>
        </div>
        <div className='relative top-[6.4rem] left-[11rem] w-[55rem] sm:hidden'>
          <Line />
        </div>
        <div
          className='sm:relative sm:top-[-8.8rem] sm:block
        sm:h-[40.75rem] sm:w-[24.375rem] sm:rounded-lg sm:bg-[#FFFFFF]'
        >
          <div
            className='relative top-[9.4rem] ml-[10.8rem] flex h-32 w-[71.8%] justify-between
        sm:top-6 sm:ml-4 sm:flex-col'
          >
            <div className='w-[25.4375rem] sm:mb-4 sm:w-[22.375rem]'>
              <InputLabel
                text={'შეძენის რიცხვი (არჩევითი)'}
                holder={'დდ / თთ / წწწწ'}
                hint={''}
              />
            </div>
            <div className='w-[25.4375rem] sm:w-[22.375rem]'>
              <InputLabel
                text={'ლეპტოპის ფასი'}
                holder={'0000'}
                hint={'მხოლოდ ციფრები'}
              />
            </div>
          </div>
          <div className='sm: mt-[10rem] ml-[10.8rem] h-[6rem] w-[55rem] sm:ml-4 sm:w-[22.375rem]'>
            <p
              className='mb-6 w-[16rem] text-[1.125rem] font-medium
          text-[#000000]'
            >
              ლეპტოპის მდგომარეობა
            </p>
            <div className='flex w-[15rem] justify-between'>
              <RadioButton value={'new'} name={'condition'} text={'ახალი'} />
              <RadioButton value={'used'} name={'condition'} text={'მეორადი'} />
            </div>
          </div>
          <div
            className='relative top-[4.7rem] left-[10.9rem] flex w-[55rem] items-center justify-between
        sm:left-4 sm:top-[3.8rem] sm:w-[22.3rem]'
          >
            <p
              className='select-none text-[1.125rem] font-medium leading-5
          text-[#62A1EB] hover:cursor-pointer'
              onClick={() => navigate('/personal-info')}
            >
              უკან
            </p>
            <div className='h-[3.75rem] w-[13.7rem] sm:h-[2.875rem] sm:w-[10.125rem]'>
              <Button text={'დამახსოვრება'} path={'/show-modal'} />
            </div>
          </div>
        </div>
      </div>
      <div className='relative top-[4rem] pb-6 flex w-full justify-center xl:hidden sm:hidden'>
        <LogoBottom />
      </div>
    </div>
  )
}

export default LaptopInfo
