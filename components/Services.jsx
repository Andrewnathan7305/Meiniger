const Services = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero + About/Value Section */}
      <section className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - 60% */}
            <div className="lg:col-span-3">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight transition-all duration-700 hover:text-gray-300">
                <span className="text-white">Our</span>
                <br />
                <span className="text-[#eafe74] transition-all duration-700 hover:text-[#d4f55a]">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 transition-all duration-500 hover:text-white">
                Comprehensive digital media solutions tailored to elevate your brand and drive meaningful engagement.
              </p>
              
              <div className="space-y-16">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight transition-all duration-700 hover:text-gray-300">
                  <span className="text-white">Redefining</span>
                  <br />
                  <span className="text-[#eafe74] transition-all duration-700 hover:text-[#d4f55a]">Digital Engagement</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl transition-all duration-500 hover:text-white">
                  At Meinigar Media, we combine creative storytelling with strategic thinking to deliver digital experiences that not only look stunning but drive real business results. Our team of passionate storytellers, digital innovators, and strategy experts work together to shape your brand's future.
                </p>
              </div>
            </div>

            {/* Right Column - 40% */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="space-y-12">
                <div className="text-center transition-all duration-500 hover:scale-105">
                  <div className="text-6xl md:text-7xl font-bold text-[#eafe74] mb-4 transition-all duration-300 hover:text-[#d4f55a]">
                    500+
                  </div>
                  <div className="text-xl text-gray-300 transition-all duration-300 hover:text-white">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center transition-all duration-500 hover:scale-105">
                  <div className="text-6xl md:text-7xl font-bold text-[#eafe74] mb-4 transition-all duration-300 hover:text-[#d4f55a]">
                    98%
                  </div>
                  <div className="text-xl text-gray-300 transition-all duration-300 hover:text-white">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-900 transition-all duration-1000">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white transition-all duration-700 hover:text-gray-300">
              Our Projects
            </h2>
            <p className="text-xl text-gray-300 transition-all duration-500 hover:text-white">
              See how we bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project Card 1 */}
            <div className="group bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="aspect-video bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-[#eafe74]">
                  Digital Brand Refresh for Tech Startup
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  A comprehensive rebranding campaign with video, web, and social media strategies.
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="aspect-video bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-[#eafe74]">
                  Social Media Campaign for E-Commerce Client
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  Engaging influencer partnerships and targeted ads that boosted sales by 30%.
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="aspect-video bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-[#eafe74]">
                  Multimedia Storytelling for Non-Profit
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  Producing heartfelt video content to increase donor engagement and awareness.
                </p>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform">
              <div className="aspect-video bg-gradient-to-br from-[#eafe74]/20 to-gray-800 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#eafe74] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-[#eafe74]">
                  Interactive Website for Creative Agency
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                  Developed a dynamic site with custom visuals and seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-black transition-all duration-1000">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white transition-all duration-700 hover:text-gray-300">
            Inspired by our work?
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

export default Services;