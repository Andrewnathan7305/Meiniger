"use client";

import Link from 'next/link';


const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="hidden md:flex bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-0 py-4 flex justify-between items-center w-full">
        
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo-black.png" // Replace with your logo path
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

               {/* Center - Navigation Menu */}
               <nav className="hidden flex space-x-10">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`${activeTab === 'home' ? 'text-[#eafe74]' : 'text-white'} hover:text-[#eafe74] font-medium transition`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('about')} 
            className={`${activeTab === 'about' ? 'text-[#eafe74]' : 'text-white'} hover:text-[#eafe74] font-medium transition`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('services')} 
            className={`${activeTab === 'services' ? 'text-[#eafe74]' : 'text-white'} hover:text-[#eafe74] font-medium transition`}
          >
            Services
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')} 
            className={`${activeTab === 'portfolio' ? 'text-[#eafe74]' : 'text-white'} hover:text-[#eafe74] font-medium transition`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveTab('team')} 
            className={`${activeTab === 'team' ? 'text-[#eafe74]' : 'text-white'} hover:text-[#eafe74] font-medium transition`}
          >
            Team
          </button>
        </nav>

        {/* Right - Get in Touch Button */}
        <div className="flex-shrink-0">
          <Link href="/contact">
            <button className="bg-[#eafe74] hover:bg-[#d4f55a] text-black px-6 py-2 rounded-full font-semibold transition shadow-sm hover:shadow-md flex items-center gap-2">
              Get in Touch
              <img 
                src="/assets/getintouch-arrow.svg" 
                alt="Arrow" 
                width="16" 
                height="16"
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;




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

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
