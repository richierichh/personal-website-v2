import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Experience from '@/components/Experience';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import Projects from '../components/Projects';
import About from '../components/About';
import Resume from '../components/Resume'

export default function Index() {
  return (
    <div >
      <Head>
        <title> Richard Liao </title>
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <Home />
        <About/>
        <Experience/>
        <Projects/>
        <Resume/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}
