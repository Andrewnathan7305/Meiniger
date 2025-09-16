"use client";
import Footer from "./Footer";

const servicesData = [
  {
    key: "strategy",
    title: "Digital Strategy & Consulting",
    intro:
      "Empowering brands with actionable insights and customized strategies for the digital age.",
    image: "/window.svg",
    items: [
      "Market Research & Audience Analysis",
      "Brand Positioning & Messaging",
      "Competitor Benchmarking",
      "Marketing Funnel & Customer Journey Mapping",
    ],
  },
  {
    key: "performance",
    title: "Performance Marketing",
    intro:
      "Data-driven campaigns that deliver real ROI across all digital channels.",
    image: "/globe.svg",
    items: [
      "Search Engine Marketing (SEM)",
      "Paid Social Advertising",
      "Retargeting & Remarketing",
      "Campaign Analytics & Optimization",
    ],
  },
  {
    key: "content",
    title: "Creative Content Production",
    intro:
      "Original, compelling content that drives engagement and tells your story.",
    image: "/file.svg",
    items: [
      "Video & Motion Graphics",
      "Photography & Visual Assets",
      "Copywriting & Storytelling",
      "Animation & Graphic Design",
    ],
  },
  {
    key: "web",
    title: "Web, UI/UX & Development",
    intro:
      "Beautiful, intuitive websites and apps built for conversion and experience.",
    image: "/next.svg",
    items: [
      "Web & Mobile App Design",
      "UI/UX Research & Wireframing",
      "Frontend & Backend Development",
      "Landing Page Creation & A/B Testing",
    ],
  },
  {
    key: "social",
    title: "Social Media & Community",
    intro:
      "Building active communities and brand advocacy across every social platform.",
    image: "/vercel.svg",
    items: [
      "Social Strategy & Planning",
      "Content Creation & Scheduling",
      "Community Management",
      "Analytics & Performance Reporting",
    ],
  },
  {
    key: "brand",
    title: "Brand Identity & Reputation",
    intro: "Distinctive brand identities designed for recognition and trust.",
    image: "/assets/clients-logo/a.jpeg",
    items: [
      "Logo & Visual Identity Design",
      "Brand Guidelines Creation",
      "Thought Leadership Content",
      "Reputation Management & PR",
    ],
  },
];

const Services = () => {

  return (
    <div className="bg-black text-white">
      {/* Section Header */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#eafe74]">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            We craft transformative digital marketing solutions that accelerate brand growth and engagement. From creative strategy to seamless execution, our integrated approach delivers measurable results and lasting impact.
          </p>
        </div>
      </section>

      {/* Alternating Image-Text Cards */}
      <section className="pb-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl space-y-12">
          {servicesData.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.key}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-2"
              >
                {/* Image side */}
                <div className={`${isEven ? "order-1" : "order-2"} w-full`}>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#eafe74]/10 to-gray-800">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-contain p-6 md:p-10 opacity-90 transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true"></div>
                  </div>
                </div>

                {/* Text side */}
                <div className={`${isEven ? "order-2" : "order-1"}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    <span className="text-white">{svc.title}</span>
                  </h3>
                  <div className="h-1 w-16 bg-[#eafe74] rounded mb-5"></div>
                  <p className="text-gray-300 mb-6">{svc.intro}</p>

                  {/* Sub-services List */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-[#eafe74] mb-4">Sub-services & capabilities</h4>
                    <ul className="space-y-3 text-gray-300">
                      {svc.items.map((it) => (
                        <li key={it} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-[#eafe74] rounded-full flex-shrink-0"></div>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section (kept as-is) */}
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
      <Footer />
    </div>
  );
};

export default Services;