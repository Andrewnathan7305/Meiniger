"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Orbiting icons data - Solar System Style
  const orbitingIcons = [
    // Inner orbit (closest to center)
    { id: 1, icon: "🎨", label: "About", angle: 0, radius: 0, color: "from-pink-400 to-purple-500" },
    { id: 2, icon: "📱", label: "Services", angle: 720, radius: 170, color: "from-blue-400 to-cyan-500" },
    { id: 3, icon: "🎬", label: "Projects", angle: 100, radius: 240, color: "from-green-400 to-emerald-500" },
    { id: 4, icon: "💡", label: "Clients", angle: 200, radius: 170, color: "from-yellow-400 to-orange-500" },
    { id: 5, icon: "📊", label: "Team", angle: 288, radius: 240, color: "from-indigo-400 to-purple-500" },

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
                <span className="text-[#f25d5a] transition-all duration-700 hover:text-[#ff474c]">BRAND</span>
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
                <h3 className="text-xl font-semibold text-[#f25d5a] mb-4 transition-all duration-500 hover:text-[#ff474c]">
                  Why Choose Meinigar Media?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#f25d5a] rounded-full mr-3 flex-shrink-0"></span>
                    Strategic storytelling that connects with your audience
                  </li>
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#f25d5a] rounded-full mr-3 flex-shrink-0"></span>
                    Data-driven approach for measurable results
                  </li>
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#f25d5a] rounded-full mr-3 flex-shrink-0"></span>
                    Creative excellence across all digital platforms
                  </li>
                  <li className="flex items-center transition-all duration-300 hover:text-white">
                    <span className="w-2 h-2 bg-[#f25d5a] rounded-full mr-3 flex-shrink-0"></span>
                    Dedicated team of passionate professionals
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#f25d5a] hover:bg-[#ff474c] text-black px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                  Get Started
                </button>
                <button className="border-2 border-[#f25d5a] text-[#f25d5a] hover:bg-[#ff474c] hover:text-black px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Side - Orbital Layout */}
            <div className="flex items-center justify-center relative w-full h-[200px] md:h-[600px] -mt-10">
              {/* Concentric Circles - Solar System Orbits */}
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                {/* Multiple Concentric Circles */}
                <div
                  className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border-2 border-[#f25d5a]/20"
                  style={{
                    background: `
      radial-gradient(circle, rgba(200,60,60,0.15) 0%, rgba(220,80,80,0.12) 50%, rgba(240,120,120,0.08) 100%),
      linear-gradient(to right, rgba(255,200,200,0.05), rgba(255,220,220,0.08) 20%, rgba(200,80,80,0.25) 40%, rgba(200,80,80,0.25) 60%, rgba(255,220,220,0.08) 80%, rgba(255,200,200,0.05))
    `
                  }}
                ></div>

                <div
                  className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-full border-2 border-[#f25d5a]/25"
                  style={{
                    background: `
      radial-gradient(circle, rgba(210,70,70,0.12) 0%, rgba(230,90,90,0.10) 50%, rgba(245,130,130,0.06) 100%),
      linear-gradient(to right, rgba(255,210,210,0.04), rgba(255,230,230,0.06) 20%, rgba(210,90,90,0.20) 40%, rgba(210,90,90,0.20) 60%, rgba(255,230,230,0.06) 80%, rgba(255,210,210,0.04))
    `
                  }}
                ></div>

                <div
                  className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] md:w-[340px] md:h-[340px] rounded-full border-2 border-[#f25d5a]/30"
                  style={{
                    background: `
      radial-gradient(circle, rgba(220,80,80,0.10) 0%, rgba(235,100,100,0.08) 50%, rgba(250,140,140,0.05) 100%),
      linear-gradient(to right, rgba(255,220,220,0.03), rgba(255,240,240,0.05) 20%, rgba(220,100,100,0.15) 40%, rgba(220,100,100,0.15) 60%, rgba(255,240,240,0.05) 80%, rgba(255,220,220,0.03))
    `
                  }}
                ></div>

                <div
                  className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[490px] md:h-[490px] rounded-full border-2 border-[#f25d5a]/35"
                  style={{
                    background: `
      radial-gradient(circle, rgba(180,50,50,0.08) 0%, rgba(200,70,70,0.06) 50%, rgba(220,100,100,0.04) 100%),
      linear-gradient(to right, rgba(255,230,230,0.02), rgba(255,245,245,0.04) 20%, rgba(180,70,70,0.12) 40%, rgba(180,70,70,0.12) 60%, rgba(255,245,245,0.04) 80%, rgba(255,230,230,0.02))
    `
                  }}
                ></div>




                {/* Central Content */}
                

                {/* 8 Orbiting Icons positioned around outer circle */}
                {orbitingIcons.slice(0, 8).map((icon, index) => {
                  // Position 8 icons evenly around the outer circle (360/8 = 45 degrees apart)
                  const angle = (icon.angle * Math.PI / 180); // Convert to radians
                  const radius = icon.radius; // Distance from center for md screens
                  const radiusSm = 160; // Distance from center for small screens

                  const x = 50 + (radius * Math.cos(angle)) / 5; // Convert to percentage
                  const y = 50 + (radius * Math.sin(angle)) / 5; // Convert to percentage
                  const xSm = 50 + (radiusSm * Math.cos(angle)) / 5;
                  const ySm = 50 + (radiusSm * Math.sin(angle)) / 5;

                  return (
                    <div
                      key={icon.id}
                      className={`absolute z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${icon.color} flex items-center justify-center text-xl md:text-2xl cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-2xl border-2 border-[#f25d5a]/30`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
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
                          clients: '/projects#impact',
                        };
                        const target = routeMap[label];
                        if (target) router.push(target);
                      }}
                      title={icon.label}
                    >
                      <span className="drop-shadow-lg text-white">{icon.icon}</span>

                      {/* Tooltip */}
                      {hoveredIcon === icon.id && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-30">
                          {icon.label}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Background glow effect */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[430px] md:h-[430px] rounded-full bg-gradient-radial from-[#f25d5a]/10 via-[#f25d5a]/5 to-transparent"></div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
