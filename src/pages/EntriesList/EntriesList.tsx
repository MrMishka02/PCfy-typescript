import { CircleButton, InfoHeadLabel, PCList } from 'components'
import React from 'react'

const entriesList = () => {
  return (
    <div className='flex h-full w-full flex-col items-center bg-[#FFFFFF] overflow-x-hidden'>
      <CircleButton path={'/'} />
      <div className='flex w-full justify-center'>
        <InfoHeadLabel text={'ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ'} />
      </div>
      <div
        className='mt-20 mb-20 grid h-full w-[73.5rem] grid-cols-2 gap-14
        xl:flex xl:w-[30rem] xl:flex-col xl:items-center
      sm:flex sm:w-[24.375rem] sm:flex-col sm:items-center sm:gap-4'
      >
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
      </div>
    </div>
  )
}

export default entriesList
