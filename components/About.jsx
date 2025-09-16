"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ValueProps from "./ValueProps";
import Footer from "./Footer";

const About = () => {
  const valueItems = useMemo(() => [
    {
      title: "Driving Business Growth with Precision Marketing",
      desc: "We deliver targeted digital campaigns that maximize ROI by reaching the right audience at the right time, turning potential into lasting customers.",
      bg: "radial",
    },
    {
      title: "Creativity Meets Cutting-Edge Technology",
      desc: "Our team blends innovative storytelling with the latest marketing technology to craft campaigns that captivate and convert across all digital platforms.",
      bg: "grid",
    },
    {
      title: "Partnership-Focused Strategy",
      desc: "We collaborate closely with clients to understand unique challenges and goals, creating customized, agile, and measurable marketing strategies.",
      bg: "dots",
    },
    {
      title: "Data-Informed, Results-Oriented",
      desc: "Using real-time analytics and continual testing, we ensure every campaign drives meaningful impact and measurable business success.",
      bg: "waves",
    },
  ], []);
  const [activeBg, setActiveBg] = useState(valueItems[0].bg);
  return (
    <div className="bg-black text-white">
      {/* Section 1: Hero / Intro Banner */}
      <section className="min-h-[80vh] lg:min-h-[90vh] flex flex-col lg:flex-row">
        {/* Left - Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10 lg:p-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Elevating Brands</span>
              <br />
              <span className="text-[#eafe74]">Through Strategic Digital Storytelling</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              At Meinigar Media, we empower businesses with creative solutions and data-driven strategies that deliver results and build lasting connections.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-[#eafe74] text-black font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:bg-[#d4f55a] hover:-translate-y-0.5"
              aria-label="Discover our work in the portfolio"
            >
              Discover Our Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-[#eafe74]/10 to-gray-800">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-[#eafe74] to-[#d4f55a] rounded-full opacity-20 rotate-12"></div>
            <div className="absolute inset-6 bg-gradient-to-tr from-black/20 to-transparent rounded-full -rotate-6"></div>
            <div className="absolute inset-10 bg-gradient-to-bl from-[#eafe74]/30 to-transparent rounded-full rotate-3"></div>
            <div className="absolute top-8 left-10 w-12 h-12 bg-[#eafe74] rounded-lg flex items-center justify-center rotate-12">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
              </svg>
            </div>
            <div className="absolute top-14 right-10 w-10 h-10 bg-black rounded-full flex items-center justify-center -rotate-12">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div className="absolute bottom-10 left-1/3 w-8 h-8 bg-[#eafe74] rounded rotate-45 flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" aria-hidden="true"></div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-20 px-6 bg-black mt-5">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Gradient / Visual */}
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#eafe74]/20 to-gray-800"></div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="h-24 rounded-xl bg-black/60 border border-gray-800 flex items-center justify-center text-sm">Strategy</div>
              <div className="h-24 rounded-xl bg-black/60 border border-gray-800 flex items-center justify-center text-sm">Creativity</div>
              <div className="h-24 rounded-xl bg-black/60 border border-gray-800 flex items-center justify-center text-sm">Analytics</div>
              <div className="h-24 rounded-xl bg-black/60 border border-gray-800 flex items-center justify-center text-sm">Partnership</div>
            </div>
          </div>
          {/* Right: Who We Are text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Meinigar Media</strong> is a full-service digital marketing agency specializing in 360° brand growth solutions across strategy, digital marketing, creative content, and analytics.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex">
                <span className="text-[#eafe74] mr-3">•</span>
                We blend innovative storytelling with data insights to grow brands in an ever-changing digital landscape.
              </li>
              <li className="flex">
                <span className="text-[#eafe74] mr-3">•</span>
                Our passionate team partners with clients to develop tailored, measurable campaigns that amplify reach and engagement.
              </li>
              <li className="flex">
                <span className="text-[#eafe74] mr-3">•</span>
                Committed to transparency and results, we unite creativity and tech expertise to unlock your brand’s potential.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: How We Work (Animated Value Props) */}
      <section
        className="py-20 px-6 relative transition-colors duration-500"
      >
        {/* Section-wide dynamic wallpaper */}
        <SectionWallpaper variant={activeBg} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">A Results-Driven Digital Marketing Experience</h2>
          <ValueProps
            items={valueItems}
            onActiveChange={({ item }) => setActiveBg(item?.bg)}
          />
        </div>
      </section>

      {/* Section 4: Our Services Overview */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Comprehensive Digital Marketing Services</h2>
              <p className="text-gray-300 mt-4 max-w-3xl">From brand strategy and digital campaigns to content production and analytics, our full-stack services accelerate your growth.</p>
            </div>
            <Link href="/services" className="hidden md:inline-flex text-[#eafe74] hover:text-white font-semibold">Explore Services →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Brand Strategy & Positioning", desc: "Research, identity, and market analysis" },
              { title: "Digital Marketing & Paid Media", desc: "Programmatic, social, SEO, PPC" },
              { title: "Creative Content Production", desc: "Video, motion graphics, copywriting" },
              { title: "Analytics & Optimization", desc: "Dashboarding, A/B testing, reporting" },
            ].map((svc) => (
              <div key={svc.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-[#eafe74] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white text-black font-bold flex items-center justify-center mb-4">★</div>
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link href="/services" className="inline-flex text-[#eafe74] hover:text-white font-semibold">Explore Services →</Link>
          </div>
        </div>
      </section>

      {/* Section 5: Our Team */}
      <section id="team" className="py-20 px-6 bg-gray-900 scroll-mt-24 md:scroll-mt-28">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the People Behind the Success</h2>
          <p className="text-gray-300 max-w-3xl mb-10">A diverse, talented team driving innovation and client outcomes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "A. Sharma", role: "Founder & CEO" },
              { name: "R. Patel", role: "Head of Strategy" },
              { name: "S. Gupta", role: "Creative Director" },
              { name: "N. Kumar", role: "Performance Lead" },
            ].map((member) => (
              <div key={member.name} className="bg-black rounded-2xl p-6 border border-gray-800">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#eafe74]/30 to-gray-800 mb-4"></div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Section 7: Call to Action */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-lg text-gray-300 mb-10">Contact Meinigar Media today for a consultation and tailored strategy.</p>
          <Link
            href="/services"
            className="inline-flex items-center bg-[#eafe74] text-black font-semibold px-8 py-5 rounded-lg transition-all duration-300 hover:bg-[#d4f55a] hover:-translate-y-0.5"
            aria-label="Get in touch to discuss services"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

function SectionWallpaper({ variant }) {
  const common = "absolute inset-0 -z-10";
  switch (variant) {
    case "radial":
      return (
        <div
          className={common}
          style={{
            background:
              "radial-gradient(80rem 80rem at 10% 20%, rgba(234,254,116,0.12), transparent 40%), radial-gradient(60rem 60rem at 80% 60%, rgba(255,255,255,0.06), transparent 50%), #0f0f0f",
          }}
          aria-hidden="true"
        />
      );
    case "grid":
      return (
        <div
          className={common}
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 48px)",
            backgroundColor: "#0f0f0f",
          }}
          aria-hidden="true"
        />
      );
    case "dots":
      return (
        <div
          className={common}
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 15% 15%, rgba(255,255,255,0.08) 0 1px, transparent 1px 20px)",
            backgroundColor: "#101010",
          }}
          aria-hidden="true"
        />
      );
    case "waves":
      return (
        <div
          className={common}
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(234,254,116,0.09) 0 12px, transparent 12px 44px)",
            backgroundColor: "#0f0f0f",
          }}
          aria-hidden="true"
        />
      );
    default:
      return <div className={common} style={{ backgroundColor: "#0f0f0f" }} aria-hidden="true" />;
  }
}
