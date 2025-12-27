import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-[90vh] flex-col justify-center border-b-4 border-black bg-white px-6 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full border-[20px] border-[#ff6600]/10 blur-sm"></div>
      <div className="absolute bottom-[10%] left-[-5%] h-[300px] w-[300px] border-4 border-black opacity-5 rotate-12"></div>
      
      <div className="mx-auto w-full max-w-7xl relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-1 w-20 bg-[#ff6600]"></div>
          <span className="text-lg font-bold tracking-widest uppercase">Est. 2025</span>
        </div>
        
        {/* 
          Updated Heading for Mobile:
          - text-4xl base size prevents overflow of long words like "ENGINEERING" on small screens.
          - [-webkit-text-stroke] is now responsive (1px on mobile, scaling to 4px on desktop).
        */}
        <h1 className="brand-font text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter break-words">
          ENGINEERING
          <br />
          <span 
            className="text-transparent [-webkit-text-stroke:1px_black] sm:[-webkit-text-stroke:2px_black] md:[-webkit-text-stroke:4px_black]"
          >
            THE APEX
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl font-bold leading-relaxed text-gray-800 md:text-2xl">
          Minimalist architecture for maximal impact. We build high-performance digital systems with precision and purpose.
        </p>

        <div className="mt-16 flex items-center gap-6">
           <a href="#projects" className="group flex items-center gap-3 border-4 border-black bg-[#ff6600] px-8 py-4 text-white shadow-[6px_6px_0px_0px_#000000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <span className="font-black uppercase tracking-wider">Explore Works</span>
            <ArrowDown className="transition-transform group-hover:translate-y-1" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;