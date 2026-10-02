import { useState } from 'react';
import { ArrowDown, Droplets, Sparkles, ShieldCheck, Box, RefreshCw } from 'lucide-react';

export default function AarohaSection() {
  const [transformationActive, setTransformationActive] = useState(false);

  return (
    <section id="aaroha" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF7ED] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-amber-950/70 font-semibold mb-3">
            <span className="font-mono text-amber-900/60">AVENUE 02</span>
            <span>Aaroha</span>
            <span className="text-amber-900/40">/</span>
            <span>Hygiene & Pollution Reduction</span>
          </div>

          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-stone-900 tracking-tight">
            Waste Cooking Oil <br />
            <span className="editorial-italic font-normal lowercase tracking-normal text-[#B45309]">
              becomes eco shampoo bars.
            </span>
          </h2>

          <p className="mt-6 text-stone-700 text-base md:text-lg leading-relaxed">
            From kitchen waste, Swabun turns to waste cooking oil and plastic sachets through{' '}
            <strong className="font-semibold text-stone-900">Aaroha</strong>.
            These discarded materials are converted into eco-friendly shampoo soap bars using a low-energy, plastic-free process.
            In this way, Aaroha connects waste management with personal hygiene while focusing on reducing pollution.
          </p>
        </div>

        {/* Dynamic Interactive Stage: Oil/Sachet → Solid Shampoo Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Interactive Morphing Stage Visualizer */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-xs border border-amber-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold">
                Transformation Chamber · Aaroha
              </span>
              <span className="text-xs font-semibold text-amber-800 uppercase">
                {transformationActive ? 'Transformed State' : 'Raw Discard State'}
              </span>
            </div>

            {/* Visual Transformation Box */}
            <div className="my-8 py-12 px-6 bg-[#FAF7ED] rounded-xs border border-amber-200/80 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
              {!transformationActive ? (
                /* Raw Waste State: Oil Droplet & Plastic Sachets */
                <div className="text-center animate-in fade-in duration-300">
                  <div className="flex items-center justify-center gap-6 mb-4">
                    {/* Animated Waste Oil Drop */}
                    <div className="w-20 h-24 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 border-2 border-amber-800/80 flex items-center justify-center shadow-inner relative animate-bounce">
                      <Droplets className="w-8 h-8 text-amber-100" />
                      <span className="absolute -bottom-2 text-[9px] font-mono uppercase bg-black text-white px-2 py-0.5 rounded-full font-bold">
                        Used Oil
                      </span>
                    </div>

                    {/* Plastic Sachet */}
                    <div className="w-20 h-24 rounded-xs bg-slate-200/90 border-2 border-dashed border-slate-400 flex flex-col items-center justify-center p-2 text-stone-600 shadow-xs">
                      <Box className="w-6 h-6 text-slate-500 mb-1" />
                      <span className="text-[9px] font-mono uppercase text-center font-bold">
                        Plastic Sachets
                      </span>
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-amber-900 font-semibold mt-4">
                    Discarded Fats & Non-Recyclable Multilayer Packets
                  </p>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1">
                    Typically poured into domestic drains or dumped as unsegregated litter.
                  </p>
                </div>
              ) : (
                /* Transformed State: Eco-Friendly Shampoo Soap Bar */
                <div className="text-center animate-in zoom-in-95 duration-300">
                  {/* Artisanal Shampoo Soap Bar */}
                  <div className="w-36 h-24 mx-auto rounded-xs bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border-2 border-amber-700 shadow-md flex flex-col items-center justify-center p-3 relative">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-900 font-bold">
                      AAROHA
                    </span>
                    <span className="text-xs font-bold text-stone-900 mt-1">
                      Shampoo Bar
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-amber-800 font-medium">
                      Zero-Plastic Solid
                    </span>

                    {/* Subtle Soap Bar Lather Bubbles */}
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white/90 border border-amber-300 shadow-xs" />
                    <span className="absolute -top-2 right-3 w-2.5 h-2.5 rounded-full bg-white/80 border border-amber-300 shadow-xs" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full mt-5 text-[11px] font-semibold text-emerald-800">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Plastic-Free &amp; Low-Energy Transformation</span>
                  </div>

                  <p className="text-xs text-stone-700 max-w-sm mx-auto mt-2 leading-relaxed">
                    Conditioning shampoo bar eliminating single-use plastic bottles while neutralizing drain pollutants.
                  </p>
                </div>
              )}
            </div>

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setTransformationActive(!transformationActive)}
              className="w-full py-3.5 px-4 bg-[#141413] hover:bg-black text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest rounded-xs transition-all flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#FDB813]"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#FDB813]" />
              <span>
                {transformationActive ? 'View Raw Feedstock Inputs' : 'Simulate Aaroha Saponification'}
              </span>
            </button>
          </div>

          {/* Right Column: Narrative & Avenue Formula */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold block">
                The Triple Equation
              </span>

              {/* Formula Steps */}
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xs border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">Step 01 · Input</span>
                    <span className="text-sm font-bold text-stone-900">Waste Cooking Oil + Plastic Sachets</span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium">Urban liquid & film discard</span>
                </div>

                <div className="flex justify-center text-amber-800">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-white rounded-xs border-2 border-amber-800 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 font-bold block">Step 02 · Process</span>
                    <span className="text-sm font-bold text-stone-900">Low-Energy, Plastic-Free Process</span>
                  </div>
                  <span className="text-xs text-amber-800 font-medium">Ambient craft conversion</span>
                </div>

                <div className="flex justify-center text-amber-800">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-white rounded-xs border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-bold block">Step 03 · Output</span>
                    <span className="text-sm font-bold text-stone-900">Eco-Friendly Shampoo Soap Bars</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">Solid sustainable hygiene</span>
                </div>
              </div>
            </div>

            {/* Dual Core Mission Callouts */}
            <div className="pt-6 border-t border-amber-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 rounded-xs border border-amber-100">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1">
                  Hygiene Integration
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Transforms what was once an urban pollutant into an accessible personal care necessity.
                </p>
              </div>

              <div className="p-4 bg-white/80 rounded-xs border border-amber-100">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1">
                  Pollution Reduction
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Diverts used fats away from city drains and rivers while replacing disposable plastic bottles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
