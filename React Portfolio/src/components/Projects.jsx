import React from 'react'
import ProjectItem from './ProjectItem'
import NoSqlImg from '../assets/NoSql.png'
import readmeImg from '../assets/readme.png'
import WorkDayImg from '../assets/WorkDay.png'
import WeatherAppImg from '../assets/WeatherApp.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Below are some of my projects that i've done in the past 6 months while learning to become a web developer. Its been a fantastic journey learning a new skill set and still learning more everyday.
      </p>
      <div className='grid sm:grid-cols-2 gap-10'>
        <ProjectItem img={NoSqlImg} title='NoSql App'/>
        <ProjectItem img={readmeImg} title='ReadMe App'/>
        <ProjectItem img={WeatherAppImg} title='Weather App'/>
        <ProjectItem img={WorkDayImg} title='Work Day App'/>
      </div>
    </div>
  )
}

export default Projects