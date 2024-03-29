import { useState, useEffect} from 'react';
import { useWindowSize } from "@uidotdev/usehooks";

import Header from './Header';
import BackToTop from './components/BackToTop';
import Intro from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import './App.css';

export default function App() {
  const size = useWindowSize();
  
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [aboutTop, setAboutTop] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0)
  
  const handleViewportChange = (top, height) => {
    setAboutTop(top);
    setAboutHeight(height);
  }

  return (
    <>
      <Header aboutTop={aboutTop}
              aboutHeight={aboutHeight}/>
      <main>
        <BackToTop scrollTop={scrollTop}/>
        <Intro />
        <Projects />
        <Skills/>
        <About height={size.height}
              handleChange={handleViewportChange}/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

