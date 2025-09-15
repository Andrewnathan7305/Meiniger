"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";
// import  Header  from "@/components/Header";
import  Home  from "@/components/Home";
import  About  from "@/components/About";
import  Services  from "@/components/Services";
import  Portfolio  from "@/components/Portfolio";
import  Team  from "@/components/Team";
import  Clients  from "@/components/Clients";
import  Footer  from "@/components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // (Navigation hidden) No tab click handlers needed currently

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'team'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    // Handle horizontal scroll for team categories
    const handleHorizontalScroll = () => {
      const teamContainer = document.querySelector('.team-horizontal-scroll');
      if (teamContainer) {
        const scrollLeft = teamContainer.scrollLeft;
        const containerWidth = teamContainer.clientWidth;
        const scrollPosition = scrollLeft + containerWidth / 2;
        
        // Calculate which team category is in view
        const teamCategories = ['chief', 'content', 'production', 'visual-editors', 'social', 'public-relation'];
        const categoryWidth = teamContainer.scrollWidth / teamCategories.length;
        const activeIndex = Math.floor(scrollPosition / categoryWidth);
        
        if (activeIndex >= 0 && activeIndex < teamCategories.length) {
          // Update the active tab to team when scrolling horizontally
          setActiveTab('team');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add horizontal scroll listener for team section
    const teamContainer = document.querySelector('.team-horizontal-scroll');
    if (teamContainer) {
      teamContainer.addEventListener('scroll', handleHorizontalScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (teamContainer) {
        teamContainer.removeEventListener('scroll', handleHorizontalScroll);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* <Header activeTab={activeTab} setActiveTab={handleTabClick} /> */}
      
      {/* Home Section */}
      <section id="home">
        <Home />
      </section>
      
      {/* About Section - Hidden */}
      <section id="about" className="hidden">
        <About />
      </section>
      
      {/* Services Section - Hidden */}
      <section id="services" className="hidden">
        <Services />
      </section>
      
             {/* Portfolio Section - Hidden */}
             <section id="portfolio" className="hidden">
               <Portfolio activeTab={activeTab} />
             </section>
      
             {/* Team Section - Hidden */}
             <section id="team" className="hidden">
               <Team />
             </section>
             
             {/* Final Call to Action - Hidden */}
             <section className="py-20 px-6 bg-black hidden">
               <div className="container mx-auto text-center">
                 <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                   Your Success,
                   <br />
                   <span className="text-[#eafe74]">Our Mission</span>
                 </h2>
                 <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                   Ready to make your brand unforgettable? Let&apos;s start your digital transformation journey today.
                 </p>
                 <button className="bg-[#eafe74] hover:bg-[#d4f55a] text-black px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                   Get in Touch
                 </button>
               </div>
             </section>
             
             {/* Clients Section */}
             <Clients />
             
             {/* Footer */}
             <Footer />
           </div>
         );
       }
