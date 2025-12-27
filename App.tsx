import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white text-black selection:bg-[#ff6600] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default App;