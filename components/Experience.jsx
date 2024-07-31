import React from 'react';
import Image from 'next/image';
import experiences from '../data/experiences';

function JobExperience({ title, company, date, tasks, image }) {
  const imageSize = 200; 

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden my-4 ease-in-out hover:-translate-y-2">
      <div className="md:flex md:items-center md:justify-center md:w-48 bg-white"> {/* Adjust width as needed */}
        <Image 
          src={image} 
          alt={`${company} logo`} 
          width={imageSize} 
          height={imageSize} 
          className="object-contain p-4"  // Use object-contain to keep the aspect ratio of your images
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-medium text-gray-600">{title}</h1>
        <h2 className="text-md font-medium text-gray-600">{company}</h2>
        <h3 className="text-md text-gray-500">{date}</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div id="Experience" className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-center font-bold text-4xl mt-16 mb-8">
        Experience
        <hr className="w-10 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded" />
      </h1>
      {/* Grid layout for 2x2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((experience, index) => (
          <JobExperience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
