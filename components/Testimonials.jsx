const testimonials = [
  {
    quote: "Meinigar Media helped us scale with creative campaigns and transparent reporting. Outstanding partnership.",
    client: "— Client Name"
  },
  {
    quote: "Their innovative approach and dedication delivered measurable results for our brand.",
    client: "— Another Client"
  },
  {
    quote: "Professional, creative, and always on time. Highly recommended!",
    client: "— Happy Customer"
  }
];

const Testimonial = () => (
  <div className="relative bg-[#0B1223] -mt-0 pt-12 pb-20">
    {/* Background gradient for seamless blend */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1223] via-[#0B1223] to-[#0B1223]"></div>
    
    <div className="relative z-10 container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="group relative bg-gradient-to-br from-[rgba(11,18,35,0.8)] to-[rgba(0,0,0,0.4)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(234,254,116,0.1)] hover:-translate-y-2 hover:border-[#eafe74]/20"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#eafe74]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#eafe74] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-[0_0_12px_rgba(234,254,116,0.4)] transition-shadow duration-300">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
                  </svg>
                </div>
                <span className="text-[#eafe74] text-sm font-bold tracking-wider uppercase">
                  Testimonial
                </span>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <div className="text-[#eafe74] text-3xl mb-2 leading-none">"</div>
                <p className="text-slate-100 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {t.quote.replace(/^"/, '').replace(/"$/, '')}
                </p>
                <div className="text-[#eafe74] text-3xl text-right leading-none -mt-2">"</div>
              </div>

              {/* Client attribution */}
              <div className="text-slate-400 text-sm italic text-right group-hover:text-slate-300 transition-colors duration-300">
                {t.client}
              </div>
            </div>

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#eafe74]/20 via-transparent to-[#eafe74]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial;
