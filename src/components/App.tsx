import React, { useRef } from 'react';
import '../styles/App.css'
import Sidebar from './Sidebar'
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    // Scroll to the element
    scrollToRef.current!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App overflow-x-hidden">
      <Sidebar />
      <HomePage executeScroll={executeScroll}/>
      <About scrollToRef={scrollToRef}/>
      <Projects />
      <Contact />
    </div>
  )
}

export default App
