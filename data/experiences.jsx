import civiconnect from '../assets/civiconnect.jpeg';
import ontario from '../assets/ontario.jpeg';
import markel from '../assets/markel.jpeg';
import cibc from '../assets/cibc.jpeg';
import dayforce from '../assets/dayforce_logo.jpg';
import citamarketplace from '../assets/cita_marketplace_logo.jpeg';
import wilfridlaurier from '../assets/wilfrid_laurier_logo.png';

const experiences = [
  { 
    title: "Machine Learning Researcher",
    company: "Wilfrid Laurier University",
    date: "Jan 2025 - Present",
    tasks: [
      " Working on a LLM project with Sukhjit Singh Sehra"
    ],
    image: wilfridlaurier
  },
  { 
    title: "Product Manager",
    company: "Cita Marketplace",
    date: "September 2024 - December 2024",
    tasks: [
    "Led end-to-end feature prioritization and backlog management, accelerating product delivery cycles by 20%",
    "Developed a new feature to allow users to create and manage their own product listings, increasing user engagement by 15%",
    ],
    image: citamarketplace
    },
  { 
  title: "Software Developer",
  company: "Dayforce",
  date: "Jan 2024 - August 2024",
  tasks: [
  "Optimized the codebase, fixed bugs and converted test automation scripts for the scheduling app using React, C# and SQL"
  ],
  image: dayforce
  },
  {
    title: "Software Developer",
    company: "CIBC Capital Markets",
    date: "Sep 2023 - Dec 2023",
    tasks: [
      "Developed a NLP AI Chatbot capable of interpreting prompts and executing correlated SQL queries of fixed income bonds",
      "Implemented trade report generation to Excel reducing processing time by 2+ hours weekly"
    ],
    image: cibc
  },
  {
    title: "Software Developer",
    company: "Civiconnect",
    date: "Jan 2023 - Apr 2023",
    tasks: [
      "Developed 2 websites for businesses using JavaScript, React, Figma, and Webflow",
      "Implemented Strapi as a headless CMS ensuring easy accessibility to modify web components",
    ],
    image: civiconnect
  },
  {
    title: "Software Developer",
    company: "Ministry of Public and Business Service Delivery",
    date: "May 2022 - Aug 2022",
    tasks: [
      "Designed and developed multiple Microsoft Power Apps to automate business processes",
      "Cleaned and migrated data Oracle pipelines using C#, SQL and ASP.net"
    ],
    image: ontario
  },
  {
    title: "Analyst",
    company: "Markel Canada",
    date: "May 2021 - Sep 2021",
    tasks: [
      "Improved the efficiency of workload in the underwriting process and made it faster by 20%",
      "Prepared financial raters, issued, declined and renewed 500+ accounts"
    ],
    image: markel
  }
];

export default experiences;
