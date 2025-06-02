// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
// import Intro from './Components/Intro/Intro';
import Tech from './Components/Tech/Tech';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Accolades from './Components/Accolades/Accolades';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Peek from './Components/Peek/Peek';

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.7; // Change as needed
      setShowNavbar(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    // Check if the current URL is /meet and redirect to Google Meet
    if (window.location.pathname === '/meet') {
      window.location.href = 'https://meet.google.com/aoy-hopc-qib'; // Redirect to Google Meet
    }
  }, []);
  return (
    <div className='bg-background'>
      <Home/>
      {showNavbar && <Navbar />}
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Accolades />
      <Contact />
      <Peek/>
      <Footer/>
    </div>
  )
}
