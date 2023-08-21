import React from 'react';
import { GrGithub } from 'react-icons/gr';

const ProjectItem = ({ img, title, githubLink }) => {
  return (
    <a href={githubLink} target='_blank' rel='noopener noreferrer' className='group'>
      <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group-hover:bg-gradient-to-r from-gray-500 to-[#095702]'>
        <img src={img} alt='/' className='rounded-xl group-hover:opacity-20' />
        <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full text-center'>
          <h3 className='text-2xl font-bold text-white tracking-wider'>
            {title}
          </h3>
          <a className='mt-2 p-3 rounded-lg bg-white text-gray-800 font-bold cursor-pointer text-lg'>
            More Info
          </a>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;


