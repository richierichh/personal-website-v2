import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGit, FaGithub, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiCsharp, SiSelenium } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="pt-28 p-20">
            <div id="Skills" className="pt-28 flex flex-col justify-center items-center overflow-auto">
                <h1 className="text-center font-bold text-4xl mb-8">
                    Skills
                    <hr className="w-10 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                        <FaJs className="text-blue-500 text-4xl" />
                        <span className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPython className="text-indigo-500 text-4xl" />
                        <span className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded-full">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJava className="text-blue-700 text-4xl" />
                        <span className="mt-2 bg-blue-700 text-white px-4 py-2 rounded-full">Java</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiCsharp className="text-gray-500 text-4xl" />
                        <span className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-full">C#</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDatabase className="text-green-700 text-4xl" />
                        <span className="mt-2 bg-green-700 text-white px-4 py-2 rounded-full">SQL</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs className="text-green-500 text-4xl" />
                        <span className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaReact className="text-purple-500 text-4xl" />
                        <span className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-full">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiTailwindcss className="text-pink-500 text-4xl" />
                        <span className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-full">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiExpress className="text-gray-700 text-4xl" />
                        <span className="mt-2 bg-gray-700 text-white px-4 py-2 rounded-full">Express.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiSelenium className="text-gray-800 text-4xl" />
                        <span className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-full">Selenium</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMongodb className="text-orange-500 text-4xl" />
                        <span className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaFigma className="text-red-500 text-4xl" />
                        <span className="mt-2 bg-red-500 text-white px-4 py-2 rounded-full">Figma</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGit className="text-yellow-500 text-4xl" />
                        <span className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-full">Git</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGithub className="text-black text-4xl" />
                        <span className="mt-2 bg-black text-white px-4 py-2 rounded-full">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHtml5 className="text-orange-400 text-4xl" />
                        <span className="mt-2 bg-orange-400 text-white px-4 py-2 rounded-full">HTML</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-blue-300 text-4xl" />
                        <span className="mt-2 bg-blue-300 text-white px-4 py-2 rounded-full">CSS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
