import React, { useState } from 'react';
import selfie from '../assets/selfie.jpg'
import Image from "next/image";

function About() {
  return (
    <section id='About' className="flex flex-col items-center justify-center pt-28">
    <header className="font-bold text-4xl pb-10">
        About me
        <hr className="w-10 h-1 mx-auto my-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
    </header>
    <Image className='rounded-full h-60 w-60 object-cover object-center' src={selfie} alt="Richard's profile picture" />
        <p className ='font-lato bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent text-xl text-center'></p>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-3xl text-xl pt-10'>
            <div>
                <p className="pb-6">Hi! I&apos;m Richard, a fourth year Computer Science student at <a href="https://www.wlu.ca" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer"> Wilfrid Laurier University.</a> Currently, I am interning at <a href="https://www.ceridian.com/ca "className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">Dayforce</a> as a Full Stack Developer, where I&apos;m working on the Scheduling App for the Workforce Management team using React, C# and SQL. </p>

                <p className ="pb-6">I have previously worked at <a href="https://cibccm.com/en/ "className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer" >CIBC Capital Markets</a> where I developed a NLP AI Chatbot that takes conversational prompts to automate and execute SQL queries of fixed income bonds. I also worked for <a href="https://www.civiconnect.ca/" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer" >Civiconnect</a> where I developed websites for businesses and the <a href="https://www.ontario.ca/page/ministry-public-business-service-delivery" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">Ontario Government</a> where I worked on developing UI-friendly apps in Microsoft Power Apps.</p>
                <p className='pb-6'>In my free time I enjoy playing basketball, volleyball and working out at the gym.  </p>
                <p className='pb-6'>I am also looking for Fall 2024 internships in software engineering! Feel free to email me at richardliao2002@gmail.com or click the Contact Me button on the home page.</p>
            </div>
        </div>
    </section>
  )
}

export default About
