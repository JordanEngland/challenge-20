import React from 'react';
import ProjectItem from './ProjectItem';
import NoSqlImg from '../assets/NoSql.png';
import readmeImg from '../assets/readme.png';
import WorkDayImg from '../assets/WorkDay.png';
import WeatherAppImg from '../assets/WeatherApp.png';

const projectItems = [
  { img: NoSqlImg, title: 'NoSql App', GithubLink: 'https://github.com/JordanEngland/challenge-12' },
  { img: readmeImg, title: 'ReadMe App', GithubLink: 'https://github.com/JordanEngland/challenge-7' },
  { img: WeatherAppImg, title: 'Weather App', GithubLink: 'https://github.com/JordanEngland/challenge-6' },
  { img: WorkDayImg, title: 'Work Day App', GithubLink: 'https://github.com/JordanEngland/challenge-5' },
];

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
      <p className='text-center py-8 my-3 text-base font-serif text-stone-900'>
        Below are some of my projects that I've done in the past 6 months while learning to become a web developer. It's been a fantastic journey learning a new skill set and still learning more every day.
      </p>
      <div className='grid sm:grid-cols-2 gap-10'>
        {projectItems.map((item, index) => (
          <ProjectItem key={index} img={item.img} title={item.title} githubLink={item.GithubLink} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
