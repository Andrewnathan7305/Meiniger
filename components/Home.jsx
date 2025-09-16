"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Orbiting icons data - Solar System Style
  const orbitingIcons = [
    // Inner orbit (closest to center)
    { id: 1, icon: "🎨", label: "About", angle: 0, radius: 120, color: "from-pink-400 to-purple-500" },
    { id: 2, icon: "📱", label: "Services", angle: 72, radius: 90, color: "from-blue-400 to-cyan-500" },
    { id: 3, icon: "🎬", label: "Projects", angle: 144, radius: 90, color: "from-green-400 to-emerald-500" },
    { id: 4, icon: "💡", label: "Clients", angle: 216, radius: 90, color: "from-yellow-400 to-orange-500" },
    { id: 5, icon: "📊", label: "Team", angle: 288, radius: 90, color: "from-indigo-400 to-purple-500" },
    
  ];
 
  // Animation effect for orbiting icons
  useEffect(() => {
    const interval = setInterval(() => {
      // This would be used for continuous rotation if needed
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getIconPosition = (angle, radius) => {
    const centerX = 50; // 50% of container
    const centerY = 50; // 50% of container
    // Calculate position based on actual radius percentage of the container
    const radiusPercent = (radius / 300) * 100; // Convert radius to percentage
    const x = centerX + radiusPercent * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radiusPercent * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Section - Side by Side Layout */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 transition-all duration-1000">
          <div className="absolute inset-0 bg-black/40 transition-all duration-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 py-8 relative z-10 w-full -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="max-w-2xl -mt-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white transition-all duration-700 hover:text-gray-300">MAKE YOUR</span>
                <br />
                <span className="text-[#eafe74] transition-all duration-700 hover:text-[#d4f55a]">BRAND</span>
                <br />
                <span className="text-white transition-all duration-700 hover:text-gray-300">UNFORGETTABLE</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300 transition-all duration-500 hover:text-white">
                The Premier Digital Media Agency
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed transition-all duration-500 hover:text-white">
                We craft compelling digital experiences that elevate your brand and drive meaningful engagement with your audience.
              </p>
              
              {/* Additional Content */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#eafe74] mb-4 transition-all duration-500 hover:text-[#d4f55a]">
                  Why Choose Meinigar Media?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#eafe74] rounded-full mr-3 flex-shrink-0"></span>
                    Strategic storytelling that connects with your audience
                  </li>
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#eafe74] rounded-full mr-3 flex-shrink-0"></span>
                    Data-driven approach for measurable results
                  </li>
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#eafe74] rounded-full mr-3 flex-shrink-0"></span>
                    Creative excellence across all digital platforms
                  </li>
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#eafe74] rounded-full mr-3 flex-shrink-0"></span>
                    Dedicated team of passionate professionals
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#eafe74] hover:bg-[#d4f55a] text-black px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                  Get Started
                </button>
                <button className="border-2 border-[#eafe74] text-[#eafe74] hover:bg-[#eafe74] hover:text-black px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Side - Orbital Layout */}
            <div className="flex items-center justify-center relative w-full h-[200px] md:h-[600px] -mt-10">
              {/* Concentric Circles - Solar System Orbits */}
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                {/* Single Orbit Circle */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-4 border-[#eafe74]/30 animate-pulse shadow-1xl shadow-[#eafe74]/5"></div>
                <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[420px] md:h-[420px] rounded-full border-4 border-[#eafe74]/30 animate-pulse shadow-2xl shadow-[#eafe74]/5"></div>
                <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] md:w-[620px] md:h-[620px] rounded-full border-4 border-[#eafe74]/30 animate-pulse shadow-2xl shadow-[#eafe74]/5"></div>

                {/* Additional orbital ring for more visibility */}

                {/* Centered Highlight - Main Statistic */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  <div className="text-4xl md:text-6xl font-bold text-[#eafe74] mb-2 transition-all duration-500 hover:scale-110 hover:text-[#d4f55a]">
                    20k+
                  </div>
                  <div className="text-sm md:text-lg text-gray-300 font-medium transition-all duration-300 hover:text-white">
                    Specialists
                  </div>
                  <div className="text-xs text-gray-400 mt-1 transition-all duration-300 hover:text-gray-300">
                    Global Network
                  </div>
                </div>

                {/* Orbiting Icons */}
                {orbitingIcons.map((icon) => {
                  const position = getIconPosition(icon.angle, icon.radius);
                  return (
                    <div
                      key={icon.id}
                      className={`absolute z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${icon.color} flex items-center justify-center text-xl md:text-2xl cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-2xl transform animate-float`}
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${icon.id * 0.2}s`
                      }}
                      onMouseEnter={() => setHoveredIcon(icon.id)}
                      onMouseLeave={() => setHoveredIcon(null)}
                      onClick={() => {
                        const label = (icon.label || '').toLowerCase();
                        const routeMap = {
                          about: '/about',
                          services: '/services',
                          projects: '/projects',
                          portfolio: '/portfolio',
                          team: '/about#team',
                        };
                        const target = routeMap[label];
                        if (target) router.push(target);
                      }}
                      title={icon.id === 1 ? 'Go to About' : icon.label}
                    >
                      <span className="drop-shadow-lg">{icon.icon}</span>
                      
                      {/* Tooltip */}
                      {hoveredIcon === icon.id && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-20">
                          {icon.label}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Additional floating particles */}
                <div className="pointer-events-none absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-[#eafe74]/30 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${2 + i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
