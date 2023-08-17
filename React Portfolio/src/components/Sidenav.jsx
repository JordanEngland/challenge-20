import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'

const Sidenav = () => {
  const [nav, setNav]= useState (false);
  const handleNav = () => {
    setNav(!nav);
    console.log('change of state')
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
            <div className='fixed w-full h-screen bg-white/75 flex flex-col justify-center items-center z-30'>
              <a href='#main' className='w-[75%] flex justify-center'>
                <AiOutlineMenu size={25}/>
                <span className='pl-4'>Home</span>
              </a>
            </div>
        )
        : (
            <div></div>
        )
      }
    </div>
  );
};

export default Sidenav