import { useState } from 'react';
import { ArrowRight, Sparkles, CornerDownRight } from 'lucide-react';

export default function ProblemSection() {
  const [activeRevealedCard, setActiveRevealedCard] = useState<number | null>(null);

  const problemCards = [
    {
      id: 0,
      code: 'INPUT 01',
      title: 'Kitchen Waste',
      sub: 'Household Organic Residue',
      description: 'Daily domestic food prep discards: vegetable skins, fruit trimmings, tea dregs, and organic meal remains.',
      discardReality: 'Routinely bagged into municipal trash where anaerobic rotting in landfills produces harmful methane gases.',
      potentialKicker: 'What could this become?',
      transformationTeaser: 'Nutrient-dense living compost via the Unnati three-tier terracotta ecosystem, returning vitality back to domestic soil.',
      avenue: 'Unnati Avenue',
      themeBg: 'bg-[#F9F5F0]',
      accentColor: '#9A3412',
      svgGraphic: (
        <svg viewBox="0 0 160 120" className="w-full h-full text-[#9A3412]" fill="none">
          <path d="M40 80C30 70 35 45 60 40C85 35 110 50 120 70C130 90 90 105 70 100C50 95 45 85 40 80Z" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M55 45C65 55 80 60 105 55" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="70" r="3" fill="currentColor" opacity="0.4" />
          <circle cx="85" cy="80" r="4" fill="currentColor" opacity="0.4" />
          <circle cx="70" cy="60" r="2.5" fill="currentColor" opacity="0.4" />
        </svg>
      )
    },
    {
      id: 1,
      code: 'INPUT 02',
      title: 'Waste Cooking Oil & Sachets',
      sub: 'Urban Liquid Lipids & Micro-Plastics',
      description: 'Burned frying fats poured down household drains coupled with discarded multilayer non-recyclable plastic sachets.',
      discardReality: 'Coagulates into city sewer blockages while polluting rivers, choking waterways, and contaminating groundwater.',
      potentialKicker: 'What could this become?',
      transformationTeaser: 'Low-energy, plastic-free conditioning shampoo soap bars via Aaroha, uniting personal hygiene with pollution reduction.',
      avenue: 'Aaroha Avenue',
      themeBg: 'bg-[#FAF7EC]',
      accentColor: '#B45309',
      svgGraphic: (
        <svg viewBox="0 0 160 120" className="w-full h-full text-[#B45309]" fill="none">
          {/* Oil drop */}
          <path d="M60 30C60 30 40 55 40 70C40 81 49 90 60 90C71 90 80 81 80 70C80 55 60 30 60 30Z" stroke="currentColor" strokeWidth="2" />
          {/* Sachet package */}
          <rect x="90" y="45" width="45" height="45" rx="3" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="90" y1="55" x2="135" y2="55" stroke="currentColor" strokeWidth="1.5" />
          <line x1="95" y1="70" x2="130" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 2,
      code: 'INPUT 03',
      title: 'Banana Peels',
      sub: 'Agricultural Biomass Waste',
      description: 'Fibrous, durable peel skins discarded after mass fruit consumption and regional agricultural harvests.',
      discardReality: 'Left unutilized in roadside piles and wholesale market dumps, treating heavy cellulose fiber as worthless trash.',
      potentialKicker: 'What could this become?',
      transformationTeaser: 'A high-grade, cruelty-free vegan leather alternative via Sehar, championing animal welfare and natural binding agents.',
      avenue: 'Sehar Avenue',
      themeBg: 'bg-[#F2F7F2]',
      accentColor: '#15803D',
      svgGraphic: (
        <svg viewBox="0 0 160 120" className="w-full h-full text-[#15803D]" fill="none">
          <path d="M30 90C50 85 90 70 120 30C110 50 95 85 55 95" stroke="currentColor" strokeWidth="2" />
          <path d="M45 88C65 75 105 60 135 45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M30 90C35 95 45 98 55 95" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="problem" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
            <span className="font-mono text-stone-400">01</span>
            <span>The Observation</span>
            <span className="text-stone-300">/</span>
            <span>Unrealized Purpose</span>
          </div>

          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl text-[#141413] uppercase font-bold leading-tight tracking-tight">
            We throw away things that still have a purpose.
          </h2>

          <p className="mt-6 text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl">
            In everyday urban cycles, discarded materials are dismissed as terminal waste.
            Project Swabun challenges this disposal mindset by examining raw inputs through the lens of value, utility, and second chances.
          </p>
        </div>

        {/* 3 Large Visual Waste Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemCards.map((card) => {
            const isRevealed = activeRevealedCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveRevealedCard(card.id)}
                onMouseLeave={() => setActiveRevealedCard(null)}
                className={`relative flex flex-col justify-between p-8 rounded-xs border transition-all duration-300 ${card.themeBg} ${
                  isRevealed ? 'border-stone-900 shadow-lg -translate-y-1' : 'border-stone-200 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Category Indicator */}
                  <div className="flex items-center justify-between pb-6 border-b border-stone-200/80">
                    <span className="font-mono text-xs font-bold tracking-widest text-stone-400">
                      {card.code}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500">
                      Raw Discard
                    </span>
                  </div>

                  {/* Visual Diagram Area */}
                  <div className="h-40 my-6 flex items-center justify-center p-4 bg-white/70 rounded-xs border border-stone-200/50">
                    {card.svgGraphic}
                  </div>

                  {/* Title & Description */}
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                    {card.sub}
                  </span>
                  <h3 className="serif-headline text-2xl md:text-3xl font-bold text-stone-900 mt-1 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-stone-200/60">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-400 block mb-1">
                      Conventional Fate
                    </span>
                    <p className="text-xs text-stone-500 italic">
                      {card.discardReality}
                    </p>
                  </div>
                </div>

                {/* Interactive Reveal Area */}
                <div className="mt-8 pt-4 border-t border-stone-200/90">
                  <button
                    type="button"
                    onClick={() => setActiveRevealedCard(isRevealed ? null : card.id)}
                    className="w-full text-left focus-visible:outline-2 focus-visible:outline-[#FDB813]"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-stone-900 group">
                      <span className="flex items-center gap-1.5 text-stone-800">
                        <Sparkles className="w-3.5 h-3.5 text-[#FDB813]" />
                        {card.potentialKicker}
                      </span>
                      <CornerDownRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isRevealed ? 'rotate-90 text-stone-900' : 'text-stone-400'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Revealed State */}
                  {isRevealed && (
                    <div className="mt-3 p-3.5 bg-white rounded-xs border border-stone-900/10 shadow-xs animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-stone-400 mb-1">
                        <span>The Second Life</span>
                        <span className="text-stone-900 font-semibold">{card.avenue}</span>
                      </div>
                      <p className="text-xs text-stone-800 font-medium leading-relaxed">
                        {card.transformationTeaser}
                      </p>
                      <a
                        href={`#${card.avenue.toLowerCase().split(' ')[0]}`}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-900 mt-2 hover:underline"
                      >
                        <span>Explore {card.avenue.split(' ')[0]}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
