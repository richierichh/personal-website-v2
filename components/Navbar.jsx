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

  // This effect runs once on mount and handles the theme initialization
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only attempt to access theme values if the component is mounted
  const currentTheme = mounted && (theme === 'system' ? systemTheme : resolvedTheme);

  // Conditional classes based on the theme
  const navbarColor = currentTheme === 'dark' ? 'bg-neutral-900' : 'bg-white';
  const textColor = currentTheme === 'dark' ? 'text-white' : 'text-black';

  // Ensure to toggle the theme only when the component is mounted
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className={`fixed w-full h-[80px] flex items-center px-4 justify-between ${navbarColor} z-50`}>
        <div className='pt-2 pl-8'>
          <Image src={logo} width={60} alt='logo image' />
        </div>
        <ul className={`hidden md:flex ml-auto w-2/4 justify-between items-center ${textColor} text-xl`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Resume">Resume</a></li>
        </ul>
        <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="p-2 rounded-xl m-10">
          {currentTheme === 'dark' ? <RiSunLine size={25} /> : <RiMoonFill size={25} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {nav && (
        <ul className={`absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col justify-center items-center ${textColor}`}>
          <li className='py-6 text-4xl'><a href="#Home">Home</a></li>
          <li className='py-6 text-4xl'><a href="#About">About</a></li>
          <li className='py-6 text-4xl'><a href="#Experience">Experience</a></li>
          <li className='py-6 text-4xl'><a href="#Skills">Skills</a></li>
          <li className='py-6 text-4xl'><a href="#Projects">Projects</a></li>
          <li className='py-6 text-4xl'><a href="#Resume">Resume</a></li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
