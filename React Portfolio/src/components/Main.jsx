import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover' src='./dist/assets/background.jpg' alt='Campfire by a lake'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-6xl text-4xl  text-black'>Hello, I'm Jordan England</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 justify-center'>
          I'm an aspiring
        <TypeAnimation
      sequence={[
        'Technology Enthusiast',
        2000,
        'Full Stack Web Developer',
        2000,
        'Coder',
        2000,
        'Analyst',
        2000
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '10px' }}
      repeat={Infinity}
    />
        </h2>
        <div className='flex justify-center pt-6 max-w-[200px] w-full'>
            <a href='https://www.linkedin.com/in/jordan-england-69b08027a'className='mr-4'>
              <FaLinkedinIn className='cursor-pointer' size={30} />
            </a>
            <a href='https://github.com/JordanEngland?tab=repositories'className='mr-4'>
              <FaGithub className='cursor-pointer' size={30} />
            </a>
            <a href='https://www.youtube.com/watch?v=xbXoWRs2C8M'className='mr-4'>
              <FaFacebook className='cursor-pointer' size={30} />
            </a>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Main;

