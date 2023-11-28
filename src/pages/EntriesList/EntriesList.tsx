import { CircleButton, InfoHeadLabel, PCList } from 'components'
import axios from 'axios'
import { useEffect, useState } from 'react'

const EntriesList = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const data = JSON.stringify({
      collection: 'personalinfos',
      database: 'test',
      dataSource: 'Cluster0',
    })
    const config = {
      method: 'post',
      url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-crryp/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':
          'JQ4hMcPz8MR6VAf5UBgPXQmz01l9U1BJyk4w4h00V0JkBcjEsQULyN7s1zGxmvbF',
      },
      data: data,
    }
    axios(config)
      .then((response) => {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  console.log(data)
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
      </div>
    </div>
  )
}

export default EntriesList
