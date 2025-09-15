const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Dynamic Split-Grid Hero Section */}
      <section className="min-h-screen flex transition-all duration-1000">
          {/* Left 50% - Hero Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-16 transition-all duration-700 hover:bg-gray-900/20">
            <div className="max-w-lg">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white transition-all duration-700 hover:text-gray-300">About</span>
                <br />
                <span className="text-[#eafe74] transition-all duration-700 hover:text-[#d4f55a]">Meinigar Media</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-500 hover:text-white">
                We combine creative storytelling with strategic thinking to deliver digital experiences that not only look stunning but drive real business results.
              </p>
            </div>
          </div>

          {/* Right 50% - Visual Element */}
          <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-[#eafe74]/20 to-gray-100 flex items-center justify-center transition-all duration-1000 hover:from-[#eafe74]/30 hover:to-gray-200">
            {/* Abstract Media Graphic */}
            <div className="relative w-80 h-80 transition-all duration-700 hover:scale-105">
              {/* Creative Studio Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#eafe74] to-[#d4f55a] rounded-full opacity-20 transform rotate-12 transition-all duration-1000 hover:rotate-24 hover:opacity-30"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-black/10 to-transparent rounded-full transform -rotate-6 transition-all duration-1000 hover:-rotate-12"></div>
              <div className="absolute inset-8 bg-gradient-to-bl from-[#eafe74]/30 to-transparent rounded-full transform rotate-3 transition-all duration-1000 hover:rotate-6"></div>
              
              {/* Media Icons */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-[#eafe74] rounded-lg transform rotate-12 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-24 hover:bg-[#d4f55a]">
                <svg className="w-6 h-6 text-black transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-black rounded-full transform -rotate-12 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-rotate-24 hover:bg-gray-800">
                <svg className="w-5 h-5 text-white transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-[#eafe74] rounded transform rotate-45 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-90 hover:bg-[#d4f55a]">
                <svg className="w-4 h-4 text-black transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

      {/* Interactive Service Cards Grid */}
      <section className="py-20 px-6 bg-black relative transition-all duration-1000">
        {/* Background Flourishes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#eafe74]/10 rounded-full transform -translate-x-16 -translate-y-16 transition-all duration-1000 hover:scale-110 hover:bg-[#eafe74]/20"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-black/5 rounded-full transform translate-x-12 translate-y-12 transition-all duration-1000 hover:scale-110 hover:bg-black/10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 - Strategic Content Creation */}
            <div className="group relative bg-black rounded-2xl p-8 shadow-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#eafe74] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white mt-4">Strategic Content Creation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Craft compelling narratives that resonate with your audience and drive meaningful engagement across all digital platforms.
              </p>
              <a href="#" className="inline-flex items-center text-[#eafe74] hover:text-white font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service Card 2 - Digital Strategy */}
            <div className="group relative bg-black rounded-2xl p-8 shadow-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white mt-4">Digital Strategy</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Data-driven approaches that maximize your digital presence and deliver measurable ROI for your business growth.
              </p>
              <a href="#" className="inline-flex items-center text-[#eafe74] hover:text-white font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service Card 3 - Video Production */}
            <div className="group relative bg-black rounded-2xl p-8 shadow-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#eafe74] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white mt-4">Video Production</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional video content that tells your story and captivates viewers with cinematic quality and strategic messaging.
              </p>
              <a href="#" className="inline-flex items-center text-[#eafe74] hover:text-white font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service Card 4 - Brand Development */}
            <div className="group relative bg-black rounded-2xl p-8 shadow-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white mt-4">Brand Development</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Build a memorable brand identity that stands out in the digital landscape and connects with your target audience.
              </p>
              <a href="#" className="inline-flex items-center text-[#eafe74] hover:text-white font-semibold transition-colors group-hover:translate-x-2 transform duration-300">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
