"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  const handleNavClick = (href) => {
    if (href === '/contact') {
      // For contact, scroll to footer if on same page, otherwise navigate
      router.push('/contact');
    } else {
      router.push(href);
    }
    setIsMenuHovered(false); // Close mobile menu
  };

  const isActive = (href) => pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => router.push('/')}
          className="flex items-center cursor-pointer"
        >
          <div className="text-2xl font-bold text-white">
            <span className="text-[#eafe74]">Meinigar</span> Media
          </div>
        </button>

        {/* Desktop Navigation - Full (when not scrolled) */}
        <nav 
          className={`hidden md:flex items-center ml-auto space-x-8 transition-all duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#eafe74] ${
                isActive(item.href) ? "text-[#eafe74]" : "text-gray-300"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#eafe74] rounded-full"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Scrolled State Navigation */}
        <div 
          className={`hidden md:flex items-center transition-all duration-300 ${
            isScrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
        >
          {/* Menu Icon */}
          <button 
            className={`p-2 text-white hover:text-[#eafe74] transition-all duration-300 ${
              isMenuHovered ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* Expanded Navigation (horizontal) */}
          <nav 
            className={`flex items-center transition-all duration-300 ${
              isMenuHovered 
                ? "opacity-100 w-auto space-x-6 ml-4" 
                : "opacity-0 w-0 overflow-hidden space-x-0"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#eafe74] whitespace-nowrap ${
                  isActive(item.href) ? "text-[#eafe74]" : "text-gray-300"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#eafe74] rounded-full"></div>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Icon (Always Visible on Mobile) */}
        <div className="md:hidden">
          <button 
            className="p-2 text-white hover:text-[#eafe74] transition-colors duration-300"
            onClick={() => setIsMenuHovered(!isMenuHovered)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          <div 
            className={`absolute top-full left-0 right-0 mt-2 mx-6 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
              isMenuHovered 
                ? "opacity-100 visible translate-y-0" 
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <nav className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left block px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 hover:text-[#eafe74] ${
                    isActive(item.href) 
                      ? "text-[#eafe74] bg-gray-900/50" 
                      : "text-gray-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                    {isActive(item.href) && (
                      <div className="w-1.5 h-1.5 bg-[#eafe74] rounded-full"></div>
                    )}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
