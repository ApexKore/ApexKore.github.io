import React, { useState, useEffect } from 'react';
import { Github, Mail, Activity, Zap, Cpu } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // --- CONFIGURATION: System Monitor Slides ---
  const slides = [
    {
      label: "OPERATIONAL",
      status: "ONLINE",
      icon: <Activity size={14} className="text-[#ff6600]" />, 
      title: "established @ 2025",
      desc: "Building the software we wish existed.",
    },
    {
      label: "Proprietary License",
      status: "ACTIVE",
      icon: <Zap size={14} className="text-[#ff6600]" />, 
      title: "Copyright (c) 2025",
      desc: "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM",
    },
    {
      label: "Just us",
      status: "OPTIMIZED",
      icon: <Cpu size={14} className="text-[#ff6600]" />, 
      title: "WE ARE K-MEAN",
      desc: "We build the software we wish existed. No agencies.",
    }
  ];

  // --- LOGIC: Smooth Fade Transition ---
  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Start Fade Out
      setIsVisible(false);

      // 2. Wait for fade out to finish (500ms), then switch data
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        
        // 3. Start Fade In
        setIsVisible(true);
      }, 500); 

    }, 4000); // Total cycle time

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <footer id="contact" className="bg-black px-6 pt-24 pb-12 text-white border-t-4 border-[#ff6600]">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 items-start">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <h2 className="brand-font text-5xl font-black text-[#ff6600] uppercase tracking-tighter leading-none">
              K-MEAN<br/>STUDIO
            </h2>
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xs border-l-2 border-gray-700 pl-4">
              Engineering digital experiences with precision and impact.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-8 lg:px-4">
            <div className="flex items-center gap-2 mb-2">
               <div className="h-1 w-6 bg-white"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Explore</span>
            </div>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="group flex items-center gap-2 text-white hover:text-[#ff6600] transition-colors"
                >
                  <span className="brand-font font-bold uppercase tracking-wider text-lg">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-8 lg:px-4">
            <div className="flex items-center gap-2 mb-2">
               <div className="h-1 w-6 bg-white"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Connect</span>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/K-meanStudio" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white hover:text-[#ff6600] transition-colors">
                <div className="flex h-10 w-10 items-center justify-center border border-gray-700 group-hover:border-[#ff6600] bg-gray-900 transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <span className="brand-font font-bold uppercase tracking-wider text-lg">GITHUB</span>
              </a>
              <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kmeanstudio@gmail.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-4 text-white hover:text-[#ff6600] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-gray-700 group-hover:border-[#ff6600] bg-gray-900 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="brand-font font-bold uppercase tracking-wider text-lg">GMAIL</span>
                </a>
            </div>
          </div>

          {/* Column 4: Dynamic System Monitor (COMPACTED VERSION) */}
          <div className="flex flex-col lg:items-end">
            <div className="w-full max-w-sm border border-gray-800 bg-gray-900/50 p-5 backdrop-blur-sm min-h-[140px] flex flex-col justify-between font-mono group hover:border-[#ff6600]/30 transition-all duration-500 rounded-sm">
              
              {/* Dynamic Content Wrapper with Opacity Transition */}
              <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                
                {/* Top Row: Label & Status */}
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    {slides[currentSlide].label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#ff6600] tracking-wider">
                      {slides[currentSlide].status}
                    </span>
                    {slides[currentSlide].icon}
                  </div>
                </div>

                {/* Middle Row: Main Info */}
                <div className="flex flex-col gap-1 mb-2">
                  <div className="text-white font-bold text-base tracking-tight uppercase truncate">
                    {slides[currentSlide].title}
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed border-l-2 border-[#ff6600] pl-3 h-10 flex items-center overflow-hidden">
                    <span className="line-clamp-2">
                      {slides[currentSlide].desc}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Static Version Info */}
              <div className="pt-3 border-t border-gray-800 flex justify-between items-center">
                <span className="text-[10px] text-gray-600">V.1.0.4</span>
                <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                  K-MEAN STUDIO // ORG
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & OLD DOTS Restored */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} K-MEAN STUDIO. ALL RIGHTS RESERVED.
          </div>
          
          {/* Restored: The Original Square/Circle Dots */}
          <div className="hidden md:flex gap-2">
            {slides.map((_, index) => (
              <div 
                key={index}
                className={`h-2 w-2 transition-colors duration-300 ${
                  index === currentSlide ? 'bg-[#ff6600]' : 'bg-gray-800'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;