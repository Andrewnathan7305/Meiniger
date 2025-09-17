"use client";
import { useState } from "react";
import Footer from "./Footer";

const servicesData = [
  {
    key: "strategy",
    title: "Digital Strategy & Consulting",
    intro: "Empowering brands with actionable insights and customized strategies for the digital age.",
    items: [
      {
        name: "Market Research & Audience Analysis",
        definition: "In-depth research to understand your target market, competitor landscape, and customer behavior patterns to inform strategic decisions."
      },
      {
        name: "Brand Positioning & Messaging",
        definition: "Crafting a unique brand position and compelling messaging framework that resonates with your audience and differentiates you from competitors."
      },
      {
        name: "Competitor Benchmarking",
        definition: "Comprehensive analysis of competitor strategies, performance metrics, and market positioning to identify opportunities and threats."
      },
      {
        name: "Marketing Funnel & Customer Journey Mapping",
        definition: "Designing optimized customer touchpoints and conversion paths from awareness to purchase and retention."
      }
    ],
  },
  {
    key: "performance",
    title: "Performance Marketing",
    intro: "Data-driven campaigns that deliver real ROI across all digital channels.",
    items: [
      {
        name: "Search Engine Marketing (SEM)",
        definition: "Strategic paid search campaigns on Google and Bing to drive qualified traffic and conversions through targeted keyword bidding."
      },
      {
        name: "Paid Social Advertising",
        definition: "Targeted advertising campaigns across Facebook, Instagram, LinkedIn, and other platforms to reach specific audience segments."
      },
      {
        name: "Retargeting & Remarketing",
        definition: "Re-engaging website visitors and past customers through personalized ads to increase conversion rates and customer lifetime value."
      },
      {
        name: "Campaign Analytics & Optimization",
        definition: "Continuous monitoring and optimization of ad performance using advanced analytics to maximize ROI and campaign effectiveness."
      }
    ],
  },
  {
    key: "content",
    title: "Creative Content Production",
    intro: "Original, compelling content that drives engagement and tells your story.",
    items: [
      {
        name: "Video & Motion Graphics",
        definition: "Professional video production and animated graphics that capture attention and communicate your message effectively across digital platforms."
      },
      {
        name: "Photography & Visual Assets",
        definition: "High-quality photography and visual content creation for websites, social media, and marketing campaigns that align with your brand identity."
      },
      {
        name: "Copywriting & Storytelling",
        definition: "Persuasive and engaging written content that tells your brand story and drives action across all marketing touchpoints."
      },
      {
        name: "Animation & Graphic Design",
        definition: "Custom animations and graphic design elements that enhance user experience and reinforce brand messaging across digital channels."
      }
    ],
  },
  {
    key: "web",
    title: "Web, UI/UX & Development",
    intro: "Beautiful, intuitive websites and apps built for conversion and experience.",
    items: [
      {
        name: "Web & Mobile App Design",
        definition: "User-centered design for websites and mobile applications that prioritize usability, aesthetics, and conversion optimization."
      },
      {
        name: "UI/UX Research & Wireframing",
        definition: "User research and wireframing to create intuitive interfaces that provide seamless user experiences and drive engagement."
      },
      {
        name: "Frontend & Backend Development",
        definition: "Full-stack development services using modern technologies to create fast, secure, and scalable web applications."
      },
      {
        name: "Landing Page Creation & A/B Testing",
        definition: "High-converting landing pages with continuous A/B testing to optimize conversion rates and campaign performance."
      }
    ],
  },
  {
    key: "social",
    title: "Social Media & Community",
    intro: "Building active communities and brand advocacy across every social platform.",
    items: [
      {
        name: "Social Strategy & Planning",
        definition: "Comprehensive social media strategies tailored to your brand objectives and target audience across multiple platforms."
      },
      {
        name: "Content Creation & Scheduling",
        definition: "Regular creation and strategic scheduling of engaging social content that maintains consistent brand presence and drives engagement."
      },
      {
        name: "Community Management",
        definition: "Active community engagement, response management, and relationship building to foster brand loyalty and advocacy."
      },
      {
        name: "Analytics & Performance Reporting",
        definition: "Detailed social media analytics and reporting to track performance, measure ROI, and inform future strategy decisions."
      }
    ],
  },
  {
    key: "brand",
    title: "Brand Identity & Reputation",
    intro: "Distinctive brand identities designed for recognition and trust.",
    items: [
      {
        name: "Logo & Visual Identity Design",
        definition: "Creative logo design and comprehensive visual identity systems that establish strong brand recognition and consistency."
      },
      {
        name: "Brand Guidelines Creation",
        definition: "Detailed brand guideline documentation to ensure consistent application of your brand across all touchpoints and communications."
      },
      {
        name: "Thought Leadership Content",
        definition: "Strategic content creation that positions your brand as an industry expert and builds credibility with your target audience."
      },
      {
        name: "Reputation Management & PR",
        definition: "Proactive reputation monitoring and strategic PR initiatives to protect and enhance your brand's public perception."
      }
    ],
  },
];

const Services = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (serviceKey, itemIndex) => {
    const key = `${serviceKey}-${itemIndex}`;
    const isCurrentlyExpanded = expandedItems[key];

    if (isCurrentlyExpanded) {
      // If clicking the same item, just close it
      setExpandedItems({});
    } else {
      // Close all items and open only the clicked one
      setExpandedItems({ [key]: true });
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Section Header */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl space-y-16 relative text-center"> {/* Added text-center */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#eafe74]">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            We craft transformative digital marketing solutions that accelerate brand growth and engagement. From creative strategy to seamless execution, our integrated approach delivers measurable results and lasting impact.
          </p>
        </div>
      </section>

      {/* Timeline Services Section */}
      <section className="pb-10 px-6 bg-black relative overflow-hidden"> {/* Added overflow-hidden */}
        {/* Gradient Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
          <div
            className="w-1 bg-gradient-to-b from-[#eafe74] via-[#eafe74]/60 to-[#eafe74]/20 rounded-full"
            style={{
              height: `${servicesData.length * 650}px`,
              top: '50px'
            }}
          ></div>
        </div>

        <div className="container mx-auto max-w-4xl space-y-16 relative">
          {servicesData.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.key}
                className="relative py-8"
              >
                {/* Timeline Circle Node */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 hidden lg:block z-10">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="w-16 h-16 border-4 border-[#eafe74] rounded-full bg-black flex items-center justify-center">
                      {/* Inner dot */}
                      <div className="w-6 h-6 bg-[#eafe74] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                {/* Content Card */}
                <div className={`mx-auto lg:mx-0 ${isEven ? 'lg:mr-auto lg:-ml-50' : 'lg:ml-auto lg:-mr-50'} ${isEven ? 'lg:pr-120' : 'lg:pl-120'}`}>
                  <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border-gray-800 hover:border-[#eafe74]/30 transition-all duration-300 ${isEven
                    ? 'max-w-lg lg:max-w-2xl' // Left cards can expand wider to the left
                    : 'max-w-lg lg:max-w-2xl' // Right cards can expand wider to the right
                    }`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                      {svc.title}
                    </h3>
                    <div className="h-1 w-16 bg-[#eafe74] rounded mb-5"></div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{svc.intro}</p>

                    {/* Sub-services List */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-[#eafe74] mb-4">Sub-services & capabilities</h4>
                      <ul className="divide-y divide-gray-800">
                        {svc.items.map((item, itemIdx) => {
                          const key = `${svc.key}-${itemIdx}`;
                          const isExpanded = expandedItems[key];

                          return (
                            <li key={itemIdx}>
                              <button
                                onClick={() => toggleItem(svc.key, itemIdx)}
                                className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-800/40 transition-colors duration-200"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-[#eafe74] rounded-full flex-shrink-0"></div>
                                  <span className="font-medium">{item.name}</span>
                                </div>
                                <div className={`w-6 h-6 flex items-center justify-center rounded-full bg-[#eafe74]/20 transition-transform duration-200 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
                                  <svg className="w-3 h-3 text-[#eafe74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                </div>
                              </button>

                              {/* Expandable Definition */}
                              <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-0 pb-3 pt-0 text-sm text-gray-400 leading-relaxed">
                                  <div className="mt-3">
                                    {item.definition}
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
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
