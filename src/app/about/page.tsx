export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-pink-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto animate-fadeIn">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase italic mb-4">
            About <span className="text-pink-400">Future Focus</span>
          </h1>
          <div className="h-1 w-24 bg-linear-to-r from-pink-500 to-green-400 mx-auto rounded-full opacity-50 mb-8" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            [Placeholder: Future Focus Language Institute was founded with a singular mission—to bridge the linguistic and cultural gap between the Philippines and South Korea. Under the guidance of our head instructor, Cami, we specialize in high-impact Korean language training designed for real-world application.]
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
            <h3 className="text-lg font-black uppercase tracking-widest text-green-400 mb-4">Our Mission</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              [Placeholder: To provide accessible, high-quality EPS-TOPIK training and conversational language skills, empowering our students to successfully secure employment and thrive in South Korean work environments.]
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
            <h3 className="text-lg font-black uppercase tracking-widest text-pink-400 mb-4">The Cami Method</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              [Placeholder: We abandon traditional, rigid textbook learning. Instead, we focus on interactive, scenario-based speaking and rigorous mock-testing that mirrors the actual EPS-TOPIK examination environment.]
            </p>
          </div>
        </div>

        {/* Instructor Profile Placeholder */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/10 border-2 border-white/20 shrink-0 flex items-center justify-center overflow-hidden">
             {/* Replace with Cami's actual photo later */}
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center px-4">Instructor Photo</span>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">Seon-saeng-nim Cami</h3>
            <h4 className="text-[10px] text-pink-400 font-bold uppercase tracking-[0.2em] mb-4">Head Instructor & Founder</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              [Placeholder: With years of experience teaching Korean to Filipino professionals, Cami has developed a curriculum that specifically targets the common linguistic hurdles faced by EPS-TOPIK examinees. Her passion is not just teaching a language, but opening doors to international careers.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}