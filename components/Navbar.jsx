import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import Image from "next/image";
import logo from '../assets/logo.png';
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const navbarColor = currentTheme === "light" ? "bg-[#141414]" : "bg-white";
    const textColor = currentTheme === "dark" ? "text-[#EEF0F2]" : "text-black";

    return (
        <>
            <div className={`fixed w-full h-[80px] flex items-center px-4 justify-between ${navbarColor} z-50`}>
                <div className='pt-2 pl-8'>
                    <Image src={logo} width={60} alt='logo image' />
                </div>

                <ul className={`hidden md:flex ml-auto w-2/4 justify-between ${textColor} text-xl`}>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Resume">Resume</a></li>

                </ul>

                <div onClick={handleClick} className='md:hidden z-1000'>
                    {!nav ? <FaBars /> : <FaTimes />}
             
                </div>

                <ul className={`${!nav ? 'hidden' : ' text-4xl absolute top-10 flex flex-col  bg-white/40  mt-10    '} ${textColor} z-1000`}>
                    <li className='m-10'><a href="#Home">Home</a></li>
                    <li className='m-10'><a href="#About">About</a></li>
                    <li className='m-10'><a href="#Experience">Experience</a></li>
                    <li className='m-10'><a href="#Projects">Projects</a></li>
                    <li className='m-10'><a href="#Resume">Resume</a></li>

                </ul>

                {currentTheme === "dark" ? (
                    <button
                    onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl m-10">
                    <RiMoonFill size={25} color="black"/>
                    </button>
                ) : (
                    <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl m-10 ">
                    <RiSunLine size={25} color="black"/>
                    </button>
                )}

            </div>
        </>
    )
}

export default Navbar;
