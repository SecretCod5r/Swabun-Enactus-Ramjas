import { useState } from 'react';
import { AVENUES_DATA } from '../data/swabunData';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function TransformationSystem() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentAvenue = AVENUES_DATA[activeStageIndex];

  return (
    <section id="transformation" className="py-24 md:py-32 px-6 md:px-12 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-200 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
              <span className="font-mono text-stone-400">03</span>
              <span>The Transformation System</span>
              <span className="text-stone-300">/</span>
              <span>Input · Process · Output</span>
            </div>
            <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-stone-900 tracking-tight">
              From Discard To Alternative
            </h2>
          </div>

          {/* Avenue Selector Buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xs border border-stone-200/80">
            {AVENUES_DATA.map((ave, index) => (
              <button
                key={ave.id}
                type="button"
                onClick={() => setActiveStageIndex(index)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-xs focus-visible:outline-2 focus-visible:outline-[#FDB813] ${
                  activeStageIndex === index
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-300'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                <span>{ave.categoryNumber}. {ave.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Transformation Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Visual Schema (Sticky on desktop) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className={`p-8 md:p-10 rounded-xs border transition-all duration-300 ${currentAvenue.color.bg} ${currentAvenue.color.border}`}>
              <div className="flex items-center justify-between pb-6 border-b border-stone-900/10">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-stone-400">
                  Formula Matrix · Stage {currentAvenue.categoryNumber}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  {currentAvenue.name} System
                </span>
              </div>

              {/* Graphic Flow Representation */}
              <div className="py-8 space-y-6">
                {/* 1. INPUT */}
                <div className="p-4 bg-white/90 rounded-xs border border-stone-200/80 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-mono text-xs font-bold text-stone-500 shrink-0">
                    IN
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">
                      Raw Discarded Feedstock
                    </span>
                    <h4 className="text-base font-bold text-stone-900">
                      {currentAvenue.input}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      {currentAvenue.inputDescription}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full border border-stone-300 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
                    <span>Swabun Conversion</span>
                    <ChevronRight className="w-3 h-3 text-stone-400" />
                  </div>
                </div>

                {/* 2. PROCESS */}
                <div className="p-4 bg-white rounded-xs border-2 border-stone-900 flex items-start gap-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#141413] text-[#FAF8F5] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    SYS
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B45309] font-bold block">
                      Engineered Transformation Method
                    </span>
                    <h4 className="text-base font-bold text-stone-900">
                      {currentAvenue.process}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      {currentAvenue.processDescription}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full border border-stone-300 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
                    <span>Target Output</span>
                    <ChevronRight className="w-3 h-3 text-stone-400" />
                  </div>
                </div>

                {/* 3. OUTPUT */}
                <div className="p-4 bg-white/90 rounded-xs border border-stone-200/80 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    OUT
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-bold block">
                      Sustainable Useful Alternative
                    </span>
                    <h4 className="text-base font-bold text-stone-900">
                      {currentAvenue.output}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      {currentAvenue.outputDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Spec Bar */}
              <div className="pt-6 border-t border-stone-900/10 grid grid-cols-2 gap-4">
                {currentAvenue.specifications.slice(0, 2).map((spec) => (
                  <div key={spec.label}>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 block">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Avenue Explorer */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-stone-400">
                  AVENUE {currentAvenue.categoryNumber}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {currentAvenue.subtitle}
                </span>
              </div>

              <h3 className="serif-headline text-4xl sm:text-5xl font-black text-stone-900 uppercase tracking-tight">
                {currentAvenue.name}
              </h3>

              <p className="text-lg md:text-xl font-medium text-stone-800 mt-4 leading-snug">
                {currentAvenue.tagline}
              </p>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed mt-4">
                {currentAvenue.coreMessage}
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
                Core Innovation Features
              </h4>
              <div className="space-y-3">
                {currentAvenue.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 bg-stone-50 rounded-xs border border-stone-200/80 hover:bg-stone-100/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-stone-800" />
                      <h5 className="text-sm font-bold text-stone-900">
                        {pillar.title}
                      </h5>
                    </div>
                    <p className="text-xs text-stone-600 pl-6 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Deep-Dive Action */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`#${currentAvenue.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#141413] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-black transition-colors"
              >
                <span>Examine {currentAvenue.name} Avenue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-1.5 text-xs text-stone-400">
                <span>Select next:</span>
                {AVENUES_DATA.map((ave, idx) => (
                  <button
                    key={ave.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`underline hover:text-stone-900 px-1 ${
                      activeStageIndex === idx ? 'font-bold text-stone-900' : ''
                    }`}
                  >
                    {ave.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
