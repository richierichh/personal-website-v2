import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function footer() {
  return (
    <div>
      <ul className="flex justify-center items-center space-x-4 mb-4"> {/* Added space between icons */}
        <li>
          <a href="https://www.linkedin.com/in/richard-pierre-liao/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='  hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/richierichh" target="_blank" rel="noopener noreferrer">
            <FaGithub className='  hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
        <li>
          <a href="mailto:liao3480@mylaurier.ca">
            <HiOutlineMail className='  hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
      </ul>
      <footer className="text-center mb-6">
      Designed and developed by Richard Liao ©
    </footer>
    </div>
  )
}

export default footer;
