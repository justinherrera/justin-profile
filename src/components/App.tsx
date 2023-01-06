import React, { useRef } from 'react';
import '../styles/App.css'
import Sidebar from './Sidebar'
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App overflow-x-hidden">
      <Sidebar scrollToRef={scrollToRef} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <HomePage scrollToRef={scrollToRef} homeRef={homeRef} aboutRef={aboutRef}/>
      <About aboutRef={aboutRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  )
}

export default App
