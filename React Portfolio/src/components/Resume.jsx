import React from 'react';

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040x] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 px-4 text-4xl font-bold text-center text-[#001b5e]'>Resume</h1>
      <div className='flex justify-center'>
        <a
          href='https://docs.google.com/document/d/1ns4W06XdfieD_j58WUEKiZUb1afNCrKb/edit?usp=sharing&ouid=106340804459632257737&rtpof=true&sd=true'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#001b5e] text-white text-center py-2 px-5 rounded-lg shadow-md hover:bg-[#095702] transition duration-300'
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
