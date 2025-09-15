const Team = () => {
  return (
    <div className="bg-black text-white">
      {/* Team Hero Section */}
      <section className="min-h-screen flex items-center">
        <main className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-[#eafe74]">Meet the Creators</span>
              <br />
              <span className="text-[#eafe74]">Behind</span>
              <span className="text-white font-light italic"> Meinigar Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Passionate storytellers, digital innovators, and strategy experts shaping your brand's future
            </p>
          </div>
        </main>
      </section>

    </div>
  );
};

export default Team;
