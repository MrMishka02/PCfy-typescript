import icon from 'assets/icon/icon-camera.png'

type Props = {
  name: string
  accept: string
  imageFile: any
  setImageFile: any
}

function convertToBase64(file: any) {
  return new Promise((resolve: any, reject: any) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

const FileUpload = ({ name, accept, imageFile, setImageFile }: Props) => {
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setImageFile(base64)
  }

  return (
    <div
      className='m-auto lgMin:h-[26.43rem] lgMin:w-[54.875rem] mdMin:h-[22.43rem] mdMin:w-[40.875rem]
    rounded-[1.125rem] border-2 border-dashed border-[#4386A9] bg-[#F6F6F6]
   h-[15.25rem] w-[22.375rem] '
    >
      <div>
        <p
          className='relative top-[6.6rem] m-auto h-[4.75rem] w-[12.8rem] select-none
       text-center text-[1.25rem] font-medium leading-[2.375rem] text-[#4386A9] md:hidden'
        >
          ჩააგდე ან ატვირთე ლეპტოპის ფოტო
        </p>
      </div>
      <label htmlFor='imageFile'>
        <img
          src={icon}
          alt='Camera icon'
          className='m-auto mt-[5rem] hidden md:block md:hover:cursor-pointer'
        />
      </label>
      <div>
        <p
          className='relative top-[0.6rem] m-auto hidden h-[3.25rem]
          text-center text-base text-[#4386A9] md:block md:w-[9.125rem] md:hover:cursor-pointer'
        >
          ლეპტოპის ფოტოს ატვირთვა
        </p>
      </div>
      <div
        className='relative flex items-center justify-center top-[10.5rem] mdMin:left-[13rem] lgMin:left-[20rem]
      h-[3.75rem] w-[14.6rem] md:hidden'
      >
        <label
          htmlFor='imageFile'
          className='flex items-center justify-center h-full w-full cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB] text-[1.2rem]
          font-[500] leading-6 text-white hover:bg-[#317AD0] active:bg-[#1A5DAB] sm:mb-[1rem]'
        >
          <span>ატვირთვა</span>
          <input
            className='hidden'
            type='file'
            id='imageFile'
            name={name}
            accept={accept}
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  )
}

export default FileUpload
