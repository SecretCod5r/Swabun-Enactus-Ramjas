import { useState } from 'react';
import { RECOGNITION_DATA } from '../data/swabunData';
import { Award, FileText, Newspaper, ExternalLink } from 'lucide-react';

export default function RecognitionSection() {
  const [activeMediaHover, setActiveMediaHover] = useState<string | null>(null);

  return (
    <section id="recognition" className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF8F5] border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
            <span className="font-mono text-stone-400">04</span>
            <span>External Validation & Proof</span>
            <span className="text-stone-300">/</span>
            <span>Institutional Recognition</span>
          </div>

          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl font-black uppercase text-stone-900 tracking-tight leading-tight">
            The idea didn’t stay in the classroom.
          </h2>

          <p className="mt-6 text-stone-600 text-base md:text-lg leading-relaxed">
            Project Swabun’s model of converting discarded inputs into purposeful alternatives has earned coverage across prominent national media platforms, formal academic endorsements, and collegiate podium honours.
          </p>
        </div>

        {/* Media Recognition Strip / Marquee */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold flex items-center gap-2">
              <Newspaper className="w-3.5 h-3.5 text-stone-600" />
              <span>Recognised Across Leading Media Platforms</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
              National Broadcast & Print Outlets
            </span>
          </div>

          {/* Marquee Track */}
          <div className="relative w-full overflow-hidden py-4 bg-white border border-stone-200/90 rounded-xs shadow-xs">
            <div className="animate-marquee items-center gap-12 sm:gap-16 whitespace-nowrap">
              {[...RECOGNITION_DATA.mediaOutlets, ...RECOGNITION_DATA.mediaOutlets].map((outlet, index) => (
                <div
                  key={`${outlet.name}-${index}`}
                  onMouseEnter={() => setActiveMediaHover(outlet.name)}
                  onMouseLeave={() => setActiveMediaHover(null)}
                  className="inline-flex items-center gap-3 px-6 py-2 rounded-xs border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-all cursor-default"
                >
                  <span className="font-serif-display text-2xl md:text-3xl font-bold tracking-tight text-stone-900">
                    {outlet.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                    {outlet.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Letters of Recommendation & Competitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Letters of Recommendation (Col 1-7) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xs border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 font-bold mb-6">
                <FileText className="w-4 h-4 text-[#B45309]" />
                <span>Academic Recommendations</span>
              </div>

              <h3 className="serif-headline text-2xl md:text-3xl font-bold text-stone-900 mb-6">
                Formal Letters of Recommendation
              </h3>

              <div className="space-y-6">
                {RECOGNITION_DATA.recommendations.map((rec) => (
                  <div
                    key={rec.institution}
                    className="p-6 bg-[#FAF8F5] rounded-xs border border-stone-200/80 hover:border-stone-400 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-stone-900">
                        {rec.institution}
                      </h4>
                      <span className="text-[10px] font-mono uppercase font-semibold text-stone-500 bg-white px-2 py-0.5 border border-stone-200 rounded-xs">
                        {rec.seal}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {rec.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200/80 text-xs text-stone-500 italic">
              Verified citations from the official Enactus Ramjas record documenting Swabun’s community impact.
            </div>
          </div>

          {/* Competitions Card (Col 8-12) */}
          <div className="lg:col-span-5 bg-[#FAF4ED] p-8 md:p-10 rounded-xs border border-orange-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-950 font-bold mb-6">
                <Award className="w-4 h-4 text-[#9A3412]" />
                <span>Collegiate Circuit</span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-900/70 font-semibold block mb-1">
                Competitive Distinction
              </span>

              <h3 className="serif-headline text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                Collegiate Competitions
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                “Multiple wins and podium finishes at collegiate competitions.”
              </p>

              <div className="p-4 bg-white/80 rounded-xs border border-orange-200 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold block">
                  Presentation Record
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Showcased across university business plan and social entrepreneurship events, demonstrating the feasibility of converting waste streams into accessible domestic solutions.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-orange-200/70 text-xs text-stone-500">
              Evaluated and acknowledged by inter-college juries for circular feasibility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
