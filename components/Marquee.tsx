import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#ff6600] border-b-4 border-black py-4">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <div className="flex animate-scroll whitespace-nowrap">
        <div className="flex shrink-0 items-center gap-8 px-4">
          <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
          <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
          <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
           <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-8 px-4">
          <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
          <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
          <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
           <span className="brand-font text-2xl font-black uppercase text-black">
            APEX KORE: IN DEVELOPMENT /// GAMIFIED PRODUCTIVITY ENGINE /// BUILD. TRACK. DOMINATE. /// DEFINING THE CURVE ///
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;