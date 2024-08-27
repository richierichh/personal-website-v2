import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted && (theme === 'system' ? systemTheme : resolvedTheme);

  const navbarColor = currentTheme === 'dark' ? 'bg-neutral-900' : 'bg-white';
  const textColor = currentTheme === 'dark' ? 'text-white' : 'text-black';

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
<div className={`fixed inset-x-0 w-11/12 md:w-3/4 h-[80px] flex flex-row items-center justify-between ${navbarColor} ${textColor} bg-opacity-70 rounded-full px-6 mx-auto z-50 top-4 backdrop-blur-md`}>
        <ul className={`hidden md:flex w-full justify-center items-center space-x-8 text-xl`}>
          <li className=' hover:text-slate-400'><a href="#Home">Home</a></li>
          <li className=' hover:text-slate-400'><a href="#About">About</a></li>
          <li className=' hover:text-slate-400'><a href="#Experience">Experience</a></li>
          <li className=' hover:text-slate-400'><a href="#Skills">Skills</a></li>
          {/*<li className=' hover:text-slate-400' ><a href="#Projects">Projects</a></li>*/}
          <li className=' hover:text-slate-400' ><a href="#Resume">Resume</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <div onClick={() => setNav(!nav)} className='md:hidden'>
            {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-xl">
            {currentTheme === 'dark' ? <RiSunLine size={25} /> : <RiMoonFill size={25} />}
          </button>
        </div>
      </div>
      {nav && (
        <ul className={`absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col justify-center items-center ${textColor}`}>
          <li className='py-6 text-4xl'><a href="#Home">Home</a></li>
          <li className='py-6 text-4xl'><a href="#About">About</a></li>
          <li className='py-6 text-4xl'><a href="#Experience">Experience</a></li>
          <li className='py-6 text-4xl'><a href="#Skills">Skills</a></li>
          {/*<li className='py-6 text-4xl'><a href="#Projects">Projects</a></li>*/}
          <li className='py-6 text-4xl'><a href="#Resume">Resume</a></li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
