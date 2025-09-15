"use client";

import { useState } from "react";

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Client logos data
  const clientLogos = [
    { id: 1, name: "Acme Corp" },
    { id: 2, name: "Globex" },
    { id: 3, name: "Initech" },
    { id: 4, name: "Umbrella" },
    { id: 5, name: "Stark Industries" },
    { id: 6, name: "Wayne Enterprises" },
  ];

  // Duplicate brands for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div 
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-[#eafe74] h-28 md:h-32"></div>

      {/* Edge Gradients (subtle) */}
      <div className="pointer-events-none absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling Track */}
      <div className="relative z-10 h-28 md:h-32 flex items-center">
        <div className={`track flex items-center gap-10 md:gap-14 px-8 uppercase tracking-wide font-bold text-gray-900 ${isPaused ? 'paused' : 'running'}`}>
          {duplicatedLogos.map((client, index) => (
            <span
              key={`${client.id}-${index}`}
              className="flex-shrink-0 whitespace-nowrap text-sm md:text-base text-gray-900"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .track {
          width: max-content;
          animation: scrollLeft var(--speed, 22s) linear infinite;
        }
        .paused { animation-play-state: paused; }
        .running { animation-play-state: running; }
      `}</style>
    </div>
  );
};

export default Clients;
