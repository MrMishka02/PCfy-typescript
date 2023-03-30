import {
  CircleButton,
  HeadLabel,
  InputLabel,
  Select,
  Button,
  LogoBottom,
} from 'components'
import positions from 'positions'
import { useState } from 'react'
import teams from 'teams'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .matches(/^[ა-ჰ]+$/, 'მხოლოდ ქართული სიმბოლოები.')
    .required('სახელი სავალდებულოა.'),
  surname: yup
    .string()
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .matches(/^[ა-ჰ]+$/, 'მხოლოდ ქართული სიმბოლოები.')
    .required('გვარი სავალდებულოა.'),
  team: yup.string().required(),
  position: yup.string().required(),

  email: yup
    .string()
    .required('ელ-ფოსტა სავალდებულოა.')
    .email('გთხოვთ მიუთითოთ მეილის ფორმატით.')
    .matches(
      /^[A-Za-z0-9._%+-]+@redberry\.ge$/,
      'უნდა მთავრდებოდეს @redberry.ge-თი'
    ),
  phoneNumber: yup
    .string()
    .required('ტელეფონი სავალდებულოა.')
    .matches(
      /^(\+995)(79\d{7}|5\d{8})$/,
      'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
    ),
})
type FormData = yup.InferType<typeof schema>

const PersonalInfo = () => {
  const [selectedTeam, setSelectedTeam] = useState('')
  function handleChangeTeam(event: { target: { value: string } }) {
    setSelectedTeam(event.target.value)
  }
  let filteredTeam = teams.filter((item) => item.name === selectedTeam)
  const filteredPosition = positions.filter(
    (item) => item.team_id === filteredTeam[0]?.id
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()
  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate('/laptop-info')
  }
  return (
    <div className='m-0'>
      <CircleButton path={'/'} />
      <div className='m-0 mt-[5.7rem] flex justify-center sm:mt-5'>
        <div className='flex flex-col items-center'>
          <HeadLabel text={'თანამშრომლის ინფო'} showLine={true} path={'/'} />
          <p className='hidden font-normal sm:block sm:text-[0.875rem] sm:text-[#898989]'>
            1/2
          </p>
        </div>
        <div className='sm:hidden'>
          <HeadLabel
            path={'/laptop-info'}
            text={'ლეპტოპის მახასიათებლები'}
            showLine={false}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='m-auto mt-6 h-[60.8rem] w-[76.6rem] rounded-[1.125rem] bg-[#FFFFFF]
      xl:w-full sm:mt-20 sm:w-[24.375rem] '
      >
        <div
          className='relative top-16 lgMin:top-24  flex flex-col lgMin:flex-row  h-32  justify-center items-center lgMin:justify-evenly mx-auto
          sm:w-[22.375rem] smMin:gap-5 lgMin:w-[71%]'
        >
          <div className='w-[71.8%] sm:w-[22.375rem]'>
            <InputLabel
              text={'სახელი'}
              holder={'გრიშა'}
              hint={'მინიმუმ 2 სიმბოლო, ქართული ასოები'}
              {...register('firstName')}
            />
            {errors?.firstName && (
              <p className='text-red-500'>{errors.firstName.message}</p>
            )}
          </div>
          <div className='w-[71.8%] sm:mt-5 sm:w-[22.375rem]'>
            <InputLabel
              text={'გვარი'}
              holder={'ბაგრატიონი'}
              hint={'მინიმუმ 2 სიმბოლო, ქართული ასოები'}
              {...register('surname')}
            />
            {errors?.surname && (
              <p className='text-red-500'>{errors.surname.message}</p>
            )}
          </div>
        </div>
        <div
          className=' mt-[10rem] flex h-[10.8rem]
        flex-col justify-between xl:mt-[10rem] min-w-[22rem]
        items-center sm:mt-[16rem]'
        >
          <Select
            defaultValue={'თიმი'}
            data={teams}
            selectChange={handleChangeTeam}
            {...register('team')}
          ></Select>
          <Select
            defaultValue={'პოზიცია'}
            data={filteredPosition}
            disabled={selectedTeam === '' ? true : false}
            {...register('position')}
          ></Select>
        </div>
        <div
          className='relative top-[3.2rem] ml-[10.8rem] flex h-[17.6rem]
        w-[71.8%] flex-col justify-between xl:m-auto sm:m-auto sm:mt-[-2.2rem]
        sm:w-[22.375rem] '
        >
          <InputLabel
            text={'მეილი'}
            holder={'grish22@redberry.ge'}
            hint={'უნდა მთავრდებოდეს @redberry.ge-ით'}
            {...register('email')}
          />
          {errors?.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
          <InputLabel
            text={'ტელეფონის ნომერი'}
            holder={'+995 598 00 07 01'}
            hint={'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'}
            {...register('phoneNumber')}
          />
          {errors?.phoneNumber && (
            <p className='text-red-500'>{errors.phoneNumber.message}</p>
          )}
        </div>
        <div
          className='mt-[9.3rem]  h-[3.75rem] w-[11rem]
         xl:mt-[8rem] xl:h-[4rem] sm:mt-[4.6rem] mx-auto
        sm:h-[2.875rem] sm:w-[8.25rem] smMin:float-right smMin:mr-[15%] mr-8%'
        >
          <Button text={'შემდეგი'} path={''} />
        </div>
      </form>
      <div className='mt-[4.3rem] mb-6 flex w-full justify-center sm:hidden'>
        <LogoBottom />
      </div>
    </div>
  )
}

export default PersonalInfo
