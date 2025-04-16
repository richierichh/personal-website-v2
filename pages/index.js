import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Experience from '@/components/Experience';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import Projects from '../components/Projects';
import About from '../components/About';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next" 

export default function Index() {
  return (
    <div >
      <SpeedInsights/>
      <Analytics/>
      <Head>
        <title> Richard Liao </title>
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <Home />
        <About/>
        <Experience/>
        <Skills/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}
