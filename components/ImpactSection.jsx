import Testimonial from "./Testimonials";

const ImpactSection = () => (
  <section className="py-20 px-6 bg-black transition-all duration-1000">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white transition-all duration-700 hover:text-gray-300">
          Trusted by Clients, Proven by Results
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[{k:"Projects Delivered", v:"500+"}, {k:"Client Satisfaction", v:"98%"}, {k:"Campaigns Optimized", v:"1000+"}, {k:"Avg. ROI Uplift", v:"3.2x"}].map((metric) => (
          <div key={metric.k} className="text-center p-6 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="text-4xl md:text-5xl font-bold text-[#eafe74] mb-2">{metric.v}</div>
            <div className="text-gray-300 text-sm">{metric.k}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;