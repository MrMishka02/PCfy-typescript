import wall from 'assets/img/wall.png'
import smallWall from 'assets/img/smallWall.png'

const Wall = () => {
  return (
    <div className=''>
      <img
        src={wall}
        className='w-[781px] h-[482px] mt-14 block lg:w-[640px] lg:h-[420px] sm:hidden'
        alt='Wallpaper'
      />
      <img
        src={smallWall}
        className='w-[268.58px] h-[349px] mt-[7.5rem] hidden sm:block'
        alt='Wallpaper'
      />
    </div>
  )
}

export default Wall
