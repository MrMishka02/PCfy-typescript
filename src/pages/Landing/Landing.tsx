import { Button, Logo, Wall } from 'components'
type Props = {}
const Landing = (props: Props) => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Logo />
      <Wall />
      <div className='mt-16 flex w-[24.18rem] flex-col items-center sm:mt-[5rem]'>
        <div className='mb-6 h-[3.75rem] w-[24.18rem] sm:w-[22.375rem]'>
          <Button />
        </div>
        <div className='h-[3.75rem] w-[24.18rem] sm:w-[22.375rem]'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Landing
