import memoji from '../assets/memoji.jpeg';
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  return (
<div id='Home' className='flex flex-col items-center md:flex-row md:justify-center pt-40 mb-40 mx-auto max-w-6xl'> 
      <div> 
      <Image className="rounded-full h-44 w-44 sm:h-24 sm:w-24 md:h-48 md:w-48 lg:h-96 lg:w-96 xl:h-96 xl:w-96 object-cover object-center" src={memoji} alt="memoji" />
      </div> 
      <div className='text-center mx-auto max-w-3xl px-4 sm:px-6 md:max-w-3xl '>
          <p className='font-lato text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-4'>Hello 👋, I&apos;m</p>
          <p className='font-lato text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-300 to-red-400 bg-clip-text text-transparent'>Richard Liao.</p>
          <p className='font-lato text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold'>Software Engineer</p>
          <p className ='font-lato text-xl sm:text-xl md:text-xl font-bold pt-4'>Computer Science @Wilfrid Laurier University</p>

        <ul className="flex justify-center items-center mt-6"> {/* Added space between icons */}
        <li>
          <a href="https://www.linkedin.com/in/richard-pierre-liao/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className=' hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/richierichh" target="_blank" rel="noopener noreferrer">
            <FaGithub className=' hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
      </ul>
          <div className="pt-10"> 
            {/* <a href="Richard-Liao-Resume.pdf" download className="bg-blue-500 py-3 px-6 rounded-md mr-4 hover:bg-blue-600 transition duration-300">Resume</a> */}
            <a href="mailto:richardliao2002@gmail.com" className="  py-3 px-6 rounded-2xl bg-blue-300 hover:bg-blue-500 transition duration-300">Contact Me</a>
            <ul className="flex justify-center items-center space-x-4 mb-4"/> {/* Added space between icons */}
          </div>
          {/* <HiArrowDown className="flex flex-row justify-center animate-bounce" size={35}/> */}
      </div>
  </div>
  );
}

export default Home;
