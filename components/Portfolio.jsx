"use client";

import { useState, useEffect } from "react";

const Portfolio = ({ activeTab }) => {
  const [isArranged, setIsArranged] = useState(true); // Start clumsy
  const [hasBeenClicked, setHasBeenClicked] = useState(false); // Track if user has clicked

  const testimonials = [
    {
      id: 1,
      text: "Meinigar Media transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      position: { top: "5%", left: "30%", rotation: "-8deg" }
    },
    {
      id: 2,
      text: "The team's expertise in digital storytelling helped us connect with our audience in ways we never thought possible.",
      name: "Michael Chen",
      role: "Marketing Director, InnovateCo",
      position: { top: "50%", left: "45%", rotation: "12deg" }
    },
    {
      id: 3,
      text: "Professional, creative, and results-driven. Meinigar Media is our go-to partner for all digital media needs.",
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      position: { top: "35%", left: "25%", rotation: "-15deg" }
    },
    {
      id: 4,
      text: "Outstanding work that delivered beyond our expectations. The team's creativity and attention to detail is unmatched.",
      name: "David Kim",
      role: "Creative Director, BrandCo",
      position: { top: "50%", left: "65%", rotation: "6deg" }
    },
    {
      id: 5,
      text: "Meinigar Media helped us achieve 300% growth in social engagement. Their strategic approach is simply brilliant.",
      name: "Lisa Wang",
      role: "VP Marketing, GrowthTech",
      position: { top: "10%", left: "50%", rotation: "-5deg" }
    }
  ];

  const handleClick = () => {
    setIsArranged(!isArranged);
    setHasBeenClicked(true); // Mark that user has clicked
  };

  // Handle navigation changes
  useEffect(() => {
    // If user is on portfolio section and has clicked before, keep current state
    // If user is on portfolio section but hasn't clicked, stay clumsy
    // If user is on other sections, make them clumsy
    if (activeTab === 'portfolio') {
      // Stay in current state (clumsy until clicked)
    } else {
      // When leaving portfolio section, make them clumsy and reset click state
      setIsArranged(true);
      setHasBeenClicked(false);
    }
  }, [activeTab]);

  return (
    <div className="bg-black text-white">
      {/* Portfolio Hero Section */}
      <section className="min-h-screen flex items-center">
        <main className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Our</span>
              <br />
              <span className="text-[#eafe74]">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore our latest work and projects that showcase our creative excellence and strategic impact.
            </p>
          </div>
        </main>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-black relative min-h-screen">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
          

          {/* Testimonials Container */}
          <div 
            className={`cursor-pointer transition-all duration-700 ${
              !isArranged 
                ? 'flex flex-wrap justify-center gap-6' 
                : 'relative w-full h-[600px]'
            }`}
            onClick={handleClick}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`bg-gray-900 rounded-lg p-6 w-80 shadow-2xl transition-all duration-700 ease-in-out hover:scale-105 hover:z-50 ${
                  !isArranged 
                    ? 'relative transform-none' 
                    : 'absolute transform-gpu'
                }`}
                style={isArranged ? {
                  top: testimonial.position.top,
                  left: testimonial.position.left,
                  transform: `rotate(${testimonial.position.rotation})`,
                  zIndex: 10 - testimonial.id,
                } : {}}
              >
                <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#eafe74] rounded-full mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
