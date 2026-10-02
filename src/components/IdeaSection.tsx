import { useState } from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';

export default function IdeaSection() {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const isTransformed = sliderPosition > 50;

  return (
    <section id="idea" className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF8F5] relative overflow-hidden border-b border-stone-200/80">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 border-x border-stone-200/50">
          <div className="border-r border-stone-200/40" />
          <div className="border-r border-stone-200/40" />
          <div className="border-r border-stone-200/40" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Curatorial Chapter Marker */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-8">
          <span className="font-mono text-stone-400">02</span>
          <span>The Philosophy</span>
          <span className="text-stone-300">/</span>
          <span>Paradigm Shift</span>
        </div>

        {/* First Half of Question */}
        <div className="border-l-2 border-stone-300 pl-6 md:pl-10 mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-400 block mb-2">
            The Traditional Trap
          </span>
          <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-normal text-stone-500 uppercase tracking-tight">
            Swabun doesn’t ask:
            <span className="block font-semibold text-stone-800 mt-2">
              “How do we dispose of waste?”
            </span>
          </h2>
        </div>

        {/* Second Half - Monumental Shift */}
        <div className="border-l-2 border-[#141413] pl-6 md:pl-10 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B45309] block mb-2">
            The Swabun Reframe
          </span>
          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#141413] uppercase tracking-tight leading-none">
            It asks:
            <span className="block editorial-italic font-normal lowercase tracking-normal text-stone-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-3">
              “What can waste become?”
            </span>
          </h2>
        </div>

        {/* Interactive Paradigm Shift Visualizer: WASTE <-> RESOURCE */}
        <div className="p-8 md:p-12 bg-white rounded-xs border border-stone-200 shadow-sm mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                Interactive Metaphor
              </span>
              <p className="text-sm font-semibold text-stone-900">
                Drag to witness the shift in perception
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
              <span className={!isTransformed ? 'font-bold text-stone-900' : ''}>TERMINAL DISCARD</span>
              <span className="text-stone-300">↔</span>
              <span className={isTransformed ? 'font-bold text-[#15803D]' : ''}>ACTIVE RESOURCE</span>
            </div>
          </div>

          {/* Morphing Word Display */}
          <div className="relative py-12 md:py-16 bg-[#FAF8F5] rounded-xs border border-stone-200/80 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="font-serif-display text-5xl sm:text-7xl md:text-8xl font-black tracking-widest transition-all duration-300">
                {isTransformed ? (
                  <span className="text-[#15803D] animate-in zoom-in-95 duration-200">
                    RESOURCE
                  </span>
                ) : (
                  <span className="text-stone-400 line-through decoration-[#9A3412] decoration-4 animate-in fade-in duration-200">
                    WASTE
                  </span>
                )}
              </div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-4 font-mono">
                {isTransformed
                  ? 'Raw biomass and discarded residues are raw materials awaiting conversion'
                  : 'Seen merely as something to get rid of and send to open dumps'}
              </p>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-600">
              <span>0% Disposal Perspective</span>
              <span className="font-mono text-stone-400">{sliderPosition}% Re-imagined</span>
              <span>100% Regenerative Resource</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Paradigm shift slider from waste to resource"
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#141413] focus-visible:outline-2 focus-visible:outline-[#FDB813]"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-200/60 text-xs text-stone-600">
            <span className="italic">
              “Through its three avenues Unnati, Aaroha and Sehar, Swabun works with different forms of waste to develop sustainable, practical alternatives.”
            </span>
            <a
              href="#transformation"
              className="inline-flex items-center gap-1.5 font-semibold text-stone-900 hover:text-black uppercase tracking-wider text-xs"
            >
              <span>See the 3 Transformation Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
