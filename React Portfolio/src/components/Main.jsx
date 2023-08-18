import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover' src='.\src\assets\background.jpg' alt='Campfire by a lake'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-6xl text-4xl  text-black'>Hello, I'm Jordan England</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4'>
          I'm an aspiring
        <TypeAnimation
      sequence={[
        'Technology Enthusiast',
        2000,
        'Full Stack Web Developer',
        2000,
        'Coder',
        2000,
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '10px' }}
      repeat={Infinity}
    />
        </h2>
    <div className='flex justify-center pt-6 max-w-[200px] w-full'>
      <FaLinkedinIn className='cursor-pointer' size={25}/>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Main