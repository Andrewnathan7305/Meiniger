"use client";

import { useState } from "react";

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);

  const clientLogos = [
    { id: 1, name: "Stark Industries" },
    { id: 2, name: "Wayne Enterprises" },
    { id: 3, name: "Acme Corp" },
    { id: 4, name: "Globex" },
    { id: 5, name: "Initech" },
    { id: 6, name: "Umbrella" },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="relative w-full bg-[#0B1223] py-0">
      {/* Marquee Container */}
      <div 
        className="relative w-full overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Yellow banner with enhanced styling */}
        <div className="relative h-24 md:h-28 bg-gradient-to-r from-[#eafe74] via-[#eafe74] to-[#eafe74] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0B1223] via-[#0B1223]/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0B1223] via-[#0B1223]/60 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling content */}
          <div className="relative z-10 h-full flex items-center">
            <div className={`track flex items-center gap-12 md:gap-16 px-16 uppercase tracking-[0.1em] font-extrabold text-slate-900 text-lg md:text-xl ${isPaused ? 'paused' : 'running'}`}>
              {duplicatedLogos.map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex items-center gap-6 flex-shrink-0">
                  <span className="whitespace-nowrap transition-transform duration-200 hover:scale-105">
                    {client.name}
                  </span>
                  <svg className="w-2 h-2 text-slate-800 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .track {
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }

        .paused { 
          animation-play-state: paused; 
        }
        
        .running { 
          animation-play-state: running; 
        }

        @media (max-width: 768px) {
          .track {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};

export default Clients;
