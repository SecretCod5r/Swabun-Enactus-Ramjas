import { ENACTUS_RAMJAS_DATA } from '../data/swabunData';
import { Sparkles, Trophy, History, Users, Target } from 'lucide-react';

export default function AboutSwabun() {
  const threePillars = [
    {
      title: 'Turn Waste Into Useful Alternatives',
      desc: 'Looking beyond disposal to unlock practical secondary functions for kitchen scraps, used oil, plastic sachets, and banana peels.'
    },
    {
      title: 'Promote Sustainable Thinking',
      desc: 'Normalizing circular household routines and zero-plastic alternatives that integrate effortlessly into daily urban life.'
    },
    {
      title: 'Connect Innovation With Everyday Problems',
      desc: 'Linking personal hygiene with pollution reduction, and agricultural waste diversion with cruelty-free animal welfare.'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
            <span className="font-mono text-stone-400">05</span>
            <span>Origin & Mandate</span>
            <span className="text-stone-300">/</span>
            <span>Enactus Ramjas</span>
          </div>

          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl font-black uppercase text-stone-900 tracking-tight leading-tight">
            Swabun looks beyond disposal.
          </h2>

          <p className="mt-6 text-stone-600 text-base md:text-lg leading-relaxed">
            Waste is often seen as something to be discarded. Project Swabun explores how waste can be transformed into something useful. Through its three avenues Unnati, Aaroha and Sehar, Swabun works with different forms of waste to develop sustainable, practical alternatives while promoting innovation and inclusivity.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {threePillars.map((p, idx) => (
            <div
              key={p.title}
              className="p-8 bg-[#FAF8F5] rounded-xs border border-stone-200 hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-stone-400 block mb-4">
                  PRINCIPLE 0{idx + 1}
                </span>
                <h3 className="serif-headline text-xl font-bold uppercase text-stone-900 leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enactus Ramjas Heritage & Organizational Roots */}
        <div className="p-8 md:p-12 bg-[#FAF8F5] rounded-xs border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Organization Heritage */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center text-[#FDB813]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <polygon points="12,2 22,12 14,14 12,22 10,14 2,12" />
                  </svg>
                </span>
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-stone-900">
                  {ENACTUS_RAMJAS_DATA.organization} · Ramjas College
                </span>
              </div>

              <blockquote className="serif-headline text-xl md:text-2xl font-normal text-stone-800 italic leading-relaxed border-l-2 border-[#FDB813] pl-4">
                “{ENACTUS_RAMJAS_DATA.motto}”
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Founded in 2011, Enactus Ramjas is a student-run organization that uplifts underprivileged communities through entrepreneurial actions. The student leaders at Enactus create and carry out community development projects under the direction of professionals.
              </p>
            </div>

            {/* Right Column: Verified Brochure Accolades */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-white rounded-xs border border-stone-200 flex items-start gap-4">
                <Trophy className="w-5 h-5 text-[#FDB813] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    National Exposition 2024
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {ENACTUS_RAMJAS_DATA.nationalExpo}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xs border border-stone-200 flex items-start gap-4">
                <History className="w-5 h-5 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Legacy Award
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {ENACTUS_RAMJAS_DATA.legacyAward}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xs border border-stone-200 flex items-start gap-4">
                <Users className="w-5 h-5 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Alumni Excellence
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {ENACTUS_RAMJAS_DATA.bestAlumnus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
