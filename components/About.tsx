import React from 'react';
import { Terminal, Cpu, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="border-b-4 border-black bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Title & Graphic */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h2 className="brand-font text-7xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
              WHO <br/>
              <span className="text-[#ff6600]">WE ARE</span>
            </h2>
            
            <div className="relative h-64 md:h-80 w-full border-4 border-black p-2 bg-gray-100">
               {/* Image Container with Team Photo */}
               <img 
                 src="/image.png" 
                 alt="The K-Mean Studio Team" 
                 className="h-full w-full object-cover border-[3px] border-black"
               />
            </div>
          </div>

          {/* Right Column: Description & Skills */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-6 border-l-4 border-[#ff6600] pl-4">
                Digital Architects
              </h3>
              <p className="text-lg text-gray-800 font-medium leading-relaxed mb-6">
                Let's be real, Most software feels like homework. It's slow, boring, and cluttered. APEXKORE isn't a big agency in a glass tower. We are builders who got tired of using bad tools, so we started making our own. We build things that feel fast, look dangerous, and respect your intelligence.              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our approach is personal. We simply build the software we wish existed. APEXKORE serves as our proving ground, where we transform our own ambitious workflows into precise, high-performance products. We share these systems because we believe tools of this caliber deserve to be used by those who can appreciate the difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group cursor-default">
                <Terminal className="mb-2 h-6 w-6 text-[#ff6600]" />
                <h4 className="font-bold uppercase tracking-wider text-sm">Backend Systems</h4>
              </div>
              <div className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group cursor-default">
                <Globe className="mb-2 h-6 w-6 text-[#ff6600]" />
                <h4 className="font-bold uppercase tracking-wider text-sm">Global Scale</h4>
              </div>
              <div className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group cursor-default">
                <Cpu className="mb-2 h-6 w-6 text-[#ff6600]" />
                <h4 className="font-bold uppercase tracking-wider text-sm">AI Integration</h4>
              </div>
              <div className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group cursor-default">
                <Zap className="mb-2 h-6 w-6 text-[#ff6600]" />
                <h4 className="font-bold uppercase tracking-wider text-sm">Performance</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;