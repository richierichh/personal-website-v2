import React from 'react';

const Resume = () => {
    const resumeLink = 'https://drive.google.com/file/d/1WvvowcHMm5gDYav4yixWJbVfCyc6CmXc/preview'; 
    const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1WvvowcHMm5gDYav4yixWJbVfCyc6CmXc'; 
    return (
<div id="Resume"className="pt-28 p-20 flex flex-col justify-center items-center overflow-auto">
  <h1 className='text-center font-bold text-4xl mb-8 '>
    Resume
    <hr className="w-10 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
  </h1>
  <iframe 
    className="w-full md:w-3/4 xl:w-1/2 h-[825px] md:h-[650px] xl:h-[825px]"
    src={resumeLink}
    title="Resume"
    style={{ minHeight: '100vh' }}
  />
  <a className="underline hover:text-blue-400 mt-4" href={resumeDownloadLink} title="Resume" >Download :)</a>
</div>


    );
};

export default Resume;
