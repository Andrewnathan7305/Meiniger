import Footer from "./Footer";
import ImpactSection from "./ImpactSection";
import Testimonial from "./Testimonials";
import Clients from "./Clients";
const Projects = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      {/* Hero Section - Made Smaller */}
      <section className="py-20 px-6 -mb-30"> {/* Changed from min-h-screen to py-20 */}
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-700 hover:text-gray-300"> {/* Reduced from text-6xl md:text-8xl to text-4xl md:text-6xl */}
              <span className="text-white">Our</span>
              <br />
              <span className="text-[#eafe74] transition-all duration-700 hover:text-[#d4f55a]">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 transition-all duration-500 hover:text-white max-w-4xl mx-auto"> {/* Reduced from text-xl md:text-2xl to text-lg md:text-xl and mb-16 to mb-12 */}
              See how we bring ideas to life through innovative digital solutions and creative storytelling.
            </p>
          </div>
        </div>
      </section>


      <ImpactSection />
      {/* Projects Grid */}
      <section className="py-20 px-6 bg-gray-900 transition-all duration-1000">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group h-80 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Image Only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                </div>

                {/* Back Face - Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-black p-6 flex flex-col justify-center shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Digital Brand Refresh for Tech Startup
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    A comprehensive rebranding campaign with video, web, and social media strategies.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Branding</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Video</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Web</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group h-80 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Image Only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                </div>

                {/* Back Face - Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-black p-6 flex flex-col justify-center shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Social Media Campaign for E-Commerce Client
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    Engaging influencer partnerships and targeted ads that boosted sales by 30%.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Social Media</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Influencer</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">E-commerce</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group h-80 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Image Only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                </div>

                {/* Back Face - Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-black p-6 flex flex-col justify-center shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Multimedia Storytelling for Non-Profit
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    Producing heartfelt video content to increase donor engagement and awareness.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Video</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Non-profit</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Storytelling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group h-80 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Image Only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Back Face - Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-black p-6 flex flex-col justify-center shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Interactive Website for Creative Agency
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    Developed a dynamic site with custom visuals and seamless user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Web Design</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Interactive</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">UX/UI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group h-80 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Image Only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>

                {/* Back Face - Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-black p-6 flex flex-col justify-center shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Mobile App Launch Campaign
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    Complete digital strategy for a fintech app launch with 100k+ downloads.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Mobile</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Fintech</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Strategy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="group h-80 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Image Only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Back Face - Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-black p-6 flex flex-col justify-center shadow-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Corporate Rebranding Initiative
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-6">
                    Full brand transformation for a Fortune 500 company across all touchpoints.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Corporate</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Rebranding</span>
                    <span className="px-3 py-1 bg-[#eafe74]/20 text-[#eafe74] text-xs rounded-full">Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Impact Section */}
      <section id="impact">
        <Clients />

      </section>
      <Testimonial />



      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gray-900 transition-all duration-1000">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white transition-all duration-700 hover:text-gray-300">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 transition-all duration-500 hover:text-white">
            Let's create something amazing together.
          </p>
          <button className="bg-[#eafe74] hover:bg-[#d4f55a] text-black px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
