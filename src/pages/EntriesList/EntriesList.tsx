import axios from 'axios'
import { CircleButton, InfoHeadLabel, PCList } from 'components'
import { useEffect, useState } from 'react'

const EntriesList = () => {
  const [pcfyData, setPCfyData] = useState([] as any[])

  useEffect(() => {
    const fetchPCfyData = async () => {
      const response = await axios.get('http://localhost:4000/api/pcfyinfo')

      if (response.statusText === 'OK') {
        setPCfyData(response.data)
      }
    }

    fetchPCfyData()
  }, [])
  console.log(pcfyData)
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
        <>
          {pcfyData.map((userData, _id) => (
            <PCList key={_id} userData={userData} />
          ))}
        </>
      </div>
    </div>
  )
}

export default EntriesList
