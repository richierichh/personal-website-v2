import React from 'react'
import Image from "next/image"
import Link from "next/link"
import projectItems from '../data/projects';
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

  const ProjectsSection = () => {
    return (
      <div id="Projects" >
      <section className="mx-auto max-w-3xl sm:px-6 md:max-w-5xl ">
        <h1 className="mt-28 pt-28 text-center font-bold text-4xl">
          Projects
          <hr className="w-10 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
        </h1>
  
        <div className="flex flex-col space-y-28 mx-auto">
          {projectItems.map((project, idx) => {
            return (
              <div key={idx}>   
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                    
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                        
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                     
                    </div>
                  </div>
              </div>
            )
          })}   
        </div>
      </section>
      </div>
    )
  }
  
  export default ProjectsSection