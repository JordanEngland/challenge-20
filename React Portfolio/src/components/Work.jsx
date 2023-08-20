import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    title: 'Oneok Plant Operator',
    years: '2010-2022',
    details: 'Operated an Isomerization facility. Plant start up and shutdown, overseen many projects to include capital and infrastructure expansion projects, built the database system to store data and have less papers to file ',
  },
  {
    title: 'United States Marine Corps',
    years: '2004-2010',
    details: 'Primary MOS was 1341 Engineers, Was also a Riflemen. Was also a primary marksmanship instructor',
  },
  {
    title:'Kansas Army National Gaurd',
    years:'2012-2018',
    details:'Primary MOS was 88M Driver',
  },
]
const Work = () => {
  return (
    <div id='Work' className='max-w-[1040px] m-auto md:pl-25 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx)=>(
          <WorkItem
          key={idx}
          years={item.years}
          title={item.title}
          details={item.details}/>
      ))}
    </div>
  )
}

export default Work