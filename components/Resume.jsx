'use client';
import React, { useState, useEffect } from 'react';

const Resume = () => {
  const resumeLink = 'https://drive.google.com/file/d/1lxOErRB6-sKuZutfwrMpEvCDE7K3ba3-/preview';
    const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1lxOErRB6-sKuZutfwrMpEvCDE7K3ba3-';
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is defined to ensure it's running on the client side
        if (typeof window !== 'undefined') {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
          };
    

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
    }, []);

    return (
        <div id="Resume" className="pt-28 p-20 flex flex-col justify-center items-center overflow-auto">
            <h1 className='text-center font-bold text-4xl mb-8'>
                Resume
                <hr className="w-10 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
            </h1>
            {isMobile ? (
                <a className="underline hover:text-blue-400 mt-4" href={resumeLink} target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            ) : (
                <iframe
                    src={resumeLink}
                    title="Resume"
                    style={{ minHeight: '100vh', minWidth: '80vh' }}
                />
            )}
            <a className="underline hover:text-blue-400 mt-4" href={resumeDownloadLink} title="Download Resume" >
                Download :)
            </a>
        </div>
    );
};

export default Resume;
