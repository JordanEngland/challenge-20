import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    title:'A little about myself',
    details:' Enrolled in the Full Stack Coding Bootcamp at the University of Kansas, Im driven by a fervent desire to enhance my proficiency in web development. My journey through this immersive program has strengthened my technical skills and broadened my horizons in the realm of technology. A strong believer in the power of innovation, I channel my passion into creating robust and intuitive web applications.'
  },
  {
    title: 'Oneok /Plant & Pipeline Operations',
    years: '2010-2022',
    details: 'A plant operator oversees the safe and efficient processing of natural and hydrocarbon gases. Responsible for managing equipment like compressors, pumps, and distillation columns, they ensure proper separation, purification, and removal of impurities. Gas plant operators prioritize safety by adhering to protocols, conducting inspections, and responding to emergencies. They collaborate with teams, maintain records, and contribute to process improvements. Proficient in technical and problem-solving skills, they play a crucial role in maintaining operational continuity and delivering quality gas products to various industries. ',
  },
  {
    title: 'United States Marine Corps',
    years: '2004-2010',
    details: 'As a U.S. Marine serving as a MOS 1341, Engineer Equipment Mechanic, brings specialized technical expertise to the forefront. Tasked with maintaining and repairing heavy construction and combat equipment,I played a crucial role in ensuring operational readiness. My proficiency in troubleshooting and hands-on skills, contributed significantly to supporting Marine Corps missions, from constructing vital infrastructure to enabling mobility in challenging terrains. With the embodiment of Marine values and a dedication to excellence, I embody the spirit of service and versatility that characterizes a U.S. Marine.',
  },
  {
    title:'Kansas Army National Guard',
    years:'2012-2018',
    details:'As a soldier serving as an 88M, Motor Transport Operator (Truck Driver), plays a pivotal role in maintaining the militarys logistical backbone. Tasked with operating and managing a range of military vehicles, from large trucks to specialized transport equipment, they ensure the seamless movement of personnel, supplies, and equipment in various operational environments. With expertise in vehicle maintenance, route planning, and driving skills, I contributed to the Armys mission success by delivering essential support to troops in the field. My adaptability, attention to detail, and commitment to safety exemplify the values of the U.S. Army and the critical role I played in sustaining operational readiness.',
  },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-25 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work & About Me</h1>
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