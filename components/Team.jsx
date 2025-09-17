const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      description: "Leading creative vision with 8+ years in brand storytelling and digital campaigns.",
      expertise: ["Brand Strategy", "Creative Direction", "Campaign Development"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Digital Strategy",
      description: "Data-driven strategist specializing in performance marketing and audience insights.",
      expertise: ["Digital Strategy", "Analytics", "Performance Marketing"]
    },
    {
      name: "Emily Zhang",
      role: "Lead UI/UX Designer",
      description: "Crafting intuitive digital experiences that convert visitors into customers.",
      expertise: ["UI/UX Design", "User Research", "Prototyping"]
    },
    {
      name: "David Thompson",
      role: "Content & Video Producer",
      description: "Bringing stories to life through compelling video and multimedia content.",
      expertise: ["Video Production", "Content Creation", "Storytelling"]
    },
    {
      name: "Lisa Kumar",
      role: "Account Director",
      description: "Building lasting partnerships and ensuring seamless project delivery.",
      expertise: ["Client Relations", "Project Management", "Strategy"]
    },
    {
      name: "Alex Johnson",
      role: "Developer",
      description: "Full-stack developer creating fast, scalable web solutions and applications.",
      expertise: ["Web Development", "Frontend", "Backend Systems"]
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Refined Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Meet the Team Behind</span>
              <br />
              <span className="text-[#eafe74]">Your Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Passionate professionals dedicated to elevating your brand through strategic thinking and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Compact Team Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-300"
              >
                {/* Small Avatar Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#eafe74]/20 rounded-full flex items-center justify-center group-hover:bg-[#eafe74]/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#eafe74]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#eafe74] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#eafe74] text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700 hover:border-[#eafe74]/30 hover:text-gray-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#eafe74] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Collaborative</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We work closely with clients as true partners, ensuring every project reflects your vision and goals.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#eafe74] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Innovative</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Staying ahead of trends and technologies to deliver cutting-edge solutions for modern challenges.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#eafe74] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Results-Driven</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every strategy, campaign, and creative decision is focused on delivering measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Let's discuss how our team can help elevate your brand.
          </p>
          <button className="bg-[#eafe74] hover:bg-[#d4f55a] text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
