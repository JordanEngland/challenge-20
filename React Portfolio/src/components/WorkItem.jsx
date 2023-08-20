import React from 'react'

const WorkItem = ({years,title,details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-900'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-900 rounded-full mt-1.5 -left-1.5 border-black'/>
        <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#105322] rounded-lg'>{years}</span>
          <span className='text-lg font-semibold text [#001b5e]'>{title}</span>
        </p>
        <p className='my-3 text-base font-serif text-stone-900'>{details}</p>
      </li>
    </ol>
  )
}

export default WorkItem