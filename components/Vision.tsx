import React from 'react';

const Vision: React.FC = () => {
  const pillars = ['DESIGN', 'DEVELOP', 'DEPLOY', 'DOMINATE'];

  return (
    <section id="vision" className="border-b-4 border-black bg-white py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        
        {/* Left Column: Stacked Title with Border */}
        <div className="flex-shrink-0 flex">
           {/* Thick Orange Left Bar */}
           <div className="w-4 md:w-6 bg-[#ff6600] flex-shrink-0 mr-6 md:mr-8 min-h-full"></div>
           
           <div className="flex flex-col justify-center py-1">
             <span className="brand-font text-xl md:text-3xl font-black uppercase tracking-[0.2em] text-black leading-none mb-0">
               THE
             </span>
             
             {/* UPDATED SIZE: 
                - text-6xl: Bigger (approx 60px). Fits "VISION" perfectly on most phones.
                - sm:text-8xl: Huge on tablets.
                - lg:text-[10rem]: Massive on desktop.
             */}
             <h2 className="brand-font text-6xl sm:text-8xl lg:text-[10rem] font-black uppercase leading-[0.8] text-black tracking-tighter -ml-1 break-words">
               VISION
             </h2>
           </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 flex flex-col pt-4">
          <h3 className="mb-8 brand-font text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-none tracking-tight">
            CALCULATED <br className="hidden md:block"/> <span className="text-[#ff6600]">CREATIVITY</span>
          </h3>
          
          <p className="mb-12 max-w-xl text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            Born from a hunger for better tools, we merge industrial precision with raw aesthetics to kill latency. We don't build for everyone; we build sharp, precise instruments for the few who demand total control.
            <br /><br />
            Visual storytelling for high-performers. We merge industrial precision with aesthetics to build software that feels fast and looks dangerous.
          </p>

          {/* Wide Rectangular Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {pillars.map((pillar) => (
              <div 
                key={pillar}
                className="group relative border-2 border-black bg-white py-4 px-1 flex items-center justify-center transition-colors duration-300 hover:bg-black cursor-default"
              >
                <span className="brand-font text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap text-black group-hover:text-white transition-colors">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;