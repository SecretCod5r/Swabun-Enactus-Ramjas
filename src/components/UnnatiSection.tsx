import { useState } from 'react';
import { ArrowDown, Layers, Check, Sparkles } from 'lucide-react';

export default function UnnatiSection() {
  const [activeTier, setActiveTier] = useState<number>(1);
  const [compostProgress, setCompostProgress] = useState<number>(80);

  const tiers = [
    {
      tierNumber: 1,
      title: 'Top Tier: Fresh Kitchen Feedstock',
      label: 'Intake Vessel',
      description: 'Daily domestic vegetable peelings, organic tea leaves, and raw food scraps enter here. Air vents allow natural passive ventilation.',
      state: 'Active Input Layer'
    },
    {
      tierNumber: 2,
      title: 'Middle Tier: Aerobic Microbial Breakdown',
      label: 'Curing Vessel',
      description: 'Porous baked terracotta clay maintains optimal micro-humidity and aerobic conditions as indigenous microbes convert waste into rich organic compounds.',
      state: 'Microbial Digestion'
    },
    {
      tierNumber: 3,
      title: 'Bottom Tier: Harvest-Ready Living Humus',
      label: 'Collection Base',
      description: 'Compost cures into dark, nutrient-dense organic humus with an earthy forest aroma, ready for domestic houseplants, balcony herb gardens, and soil nourishment.',
      state: 'Finished Nutrient Compost'
    }
  ];

  return (
    <section id="unnati" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF4ED] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-orange-950/70 font-semibold mb-3">
            <span className="font-mono text-orange-900/60">AVENUE 01</span>
            <span>Unnati</span>
            <span className="text-orange-900/40">/</span>
            <span>Domestic Organic Management</span>
          </div>

          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-stone-900 tracking-tight">
            Kitchen Waste <br />
            <span className="editorial-italic font-normal lowercase tracking-normal text-[#9A3412]">
              becomes living compost.
            </span>
          </h2>

          <p className="mt-6 text-stone-700 text-base md:text-lg leading-relaxed">
            The journey begins with kitchen waste. Designed specifically for households,{' '}
            <strong className="font-semibold text-stone-900">Unnati</strong> utilizes a{' '}
            <strong className="font-semibold text-stone-900">three-tier terracotta composter</strong>{' '}
            that naturally transforms domestic organic scraps into nutrient-rich compost, offering a practical way to manage waste while promoting eco-friendly living.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Terracotta Composter Interactive Schematic */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-xs border border-orange-200/80 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold">
                Interactive Terracotta Composter
              </span>
              <span className="text-xs font-semibold text-orange-900 uppercase">
                Click Tiers To Inspect
              </span>
            </div>

            {/* Custom SVG Representation of 3-Tier Terracotta Composter */}
            <div className="my-8 flex flex-col items-center justify-center">
              {/* Composter Lid */}
              <div
                className={`w-36 md:w-44 h-9 rounded-t-full bg-[#B25E3B] border-2 border-[#8E4426] flex items-center justify-center transition-all ${
                  activeTier === 1 ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                <div className="w-5 h-4 bg-[#7A381E] rounded-t-sm -mt-3 border border-[#5C2A16]" />
              </div>

              {/* Tier 1 Container */}
              <button
                type="button"
                onClick={() => setActiveTier(1)}
                className={`w-48 md:w-56 py-6 px-4 bg-[#C26B45] hover:bg-[#B7623D] border-x-2 border-b-2 border-[#8E4426] text-white text-center transition-all cursor-pointer relative ${
                  activeTier === 1
                    ? 'ring-4 ring-orange-300 shadow-md scale-102 z-10'
                    : 'opacity-90'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-200 block">
                  Tier 01 · Top
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Raw Kitchen Waste Layer
                </span>
                <div className="mt-2 flex justify-center gap-1.5 opacity-60">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </button>

              {/* Tier 2 Container */}
              <button
                type="button"
                onClick={() => setActiveTier(2)}
                className={`w-44 md:w-52 py-6 px-4 bg-[#B25E3B] hover:bg-[#A65534] border-x-2 border-b-2 border-[#8E4426] text-white text-center transition-all cursor-pointer relative ${
                  activeTier === 2
                    ? 'ring-4 ring-orange-300 shadow-md scale-102 z-10'
                    : 'opacity-90'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-200 block">
                  Tier 02 · Middle
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Microbial Decomposition
                </span>
                <div className="mt-2 flex justify-center gap-1.5 opacity-60">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                </div>
              </button>

              {/* Tier 3 Container */}
              <button
                type="button"
                onClick={() => setActiveTier(3)}
                className={`w-40 md:w-48 py-6 px-4 bg-[#8E4426] hover:bg-[#7D3B20] border-x-2 border-b-2 border-[#5C2A16] rounded-b-lg text-white text-center transition-all cursor-pointer relative ${
                  activeTier === 3
                    ? 'ring-4 ring-orange-300 shadow-md scale-102 z-10'
                    : 'opacity-90'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-200 block">
                  Tier 03 · Bottom
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Harvest-Ready Living Compost
                </span>
                <div className="mt-2 flex justify-center gap-1.5 opacity-60">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                </div>
              </button>
            </div>

            {/* Currently Active Tier Breakdown */}
            <div className="mt-6 p-4 bg-[#FAF4ED] rounded-xs border border-orange-200/90">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-900 font-bold">
                  Active Tier Inspector: #{activeTier}
                </span>
                <span className="text-[11px] font-semibold text-stone-700">
                  {tiers[activeTier - 1].state}
                </span>
              </div>
              <h4 className="text-sm font-bold text-stone-900">
                {tiers[activeTier - 1].title}
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {tiers[activeTier - 1].description}
              </p>
            </div>
          </div>

          {/* Right Column: Transformation Narrative & System Formula */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-900 font-bold block">
                The Triple Equation
              </span>
              
              {/* Formula Steps */}
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xs border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">Step 01 · Input</span>
                    <span className="text-sm font-bold text-stone-900">Kitchen Waste</span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium">Domestic peelings & scraps</span>
                </div>

                <div className="flex justify-center text-orange-800">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-white rounded-xs border-2 border-orange-800 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-orange-800 font-bold block">Step 02 · System</span>
                    <span className="text-sm font-bold text-stone-900">Three-Tier Terracotta Composter</span>
                  </div>
                  <span className="text-xs text-orange-800 font-medium">Natural aeration & curing</span>
                </div>

                <div className="flex justify-center text-orange-800">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-white rounded-xs border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-bold block">Step 03 · Output</span>
                    <span className="text-sm font-bold text-stone-900">Nutrient-Rich Compost</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">Fertile organic humus</span>
                </div>
              </div>
            </div>

            {/* Household Impact Points */}
            <div className="pt-6 border-t border-orange-200/80 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold">
                Household Viability
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/70 rounded-xs border border-orange-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Odorless Natural Curing
                  </h5>
                  <p className="text-xs text-stone-600 mt-1">
                    Earthen clay allows air circulation while naturally balancing humidity to avoid anaerobic stagnation.
                  </p>
                </div>

                <div className="p-4 bg-white/70 rounded-xs border border-orange-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Domestic Footprint
                  </h5>
                  <p className="text-xs text-stone-600 mt-1">
                    Compact vertical stacking designed purposefully for domestic balconies and household backyards.
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
