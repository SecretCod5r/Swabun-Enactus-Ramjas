import { useState } from 'react';
import { ArrowDown, Sparkles, RefreshCw } from 'lucide-react';

export default function Hero() {
  const [activeHoverItem, setActiveHoverItem] = useState<string | null>(null);

  const wasteArtifacts = [
    {
      id: 'kitchen-waste',
      name: 'Kitchen Scraps',
      origin: 'Household Peelings & Organic Leftovers',
      destiny: '→ Nutrient-Rich Living Compost',
      position: 'top-20 left-4 md:top-28 md:left-12',
      rotation: '-rotate-6',
      color: '#A85337',
      avenue: 'Unnati',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#A85337]">
          <path d="M12 28C10 24 10 16 18 12C26 8 32 14 30 22C28 30 16 32 12 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 12C18 20 22 24 28 26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
        </svg>
      )
    },
    {
      id: 'cooking-oil',
      name: 'Used Cooking Oil',
      origin: 'Post-Fry Household & Street Fats',
      destiny: '→ Zero-Plastic Shampoo Bar',
      position: 'top-24 right-4 md:top-32 md:right-16',
      rotation: 'rotate-8',
      color: '#D97706',
      avenue: 'Aaroha',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#D97706]">
          <path d="M20 6C20 6 10 18 10 26C10 31.5 14.5 36 20 36C25.5 36 30 31.5 30 26C30 18 20 6 20 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="17" cy="24" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      )
    },
    {
      id: 'banana-peel',
      name: 'Banana Peels',
      origin: 'Agricultural Rinds & Fruit Residue',
      destiny: '→ Cruelty-Free Vegan Leather',
      position: 'bottom-32 left-4 md:bottom-28 md:left-16',
      rotation: 'rotate-12',
      color: '#15803D',
      avenue: 'Sehar',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#15803D]">
          <path d="M8 32C14 28 26 24 32 10C30 16 26 28 14 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 26C18 24 24 20 28 14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 'plastic-sachet',
      name: 'Plastic Sachets',
      origin: 'Single-Use Multi-layer Films',
      destiny: '→ Diverted from Municipal Oceans',
      position: 'bottom-28 right-4 md:bottom-24 md:right-16',
      rotation: '-rotate-12',
      color: '#0284C7',
      avenue: 'Aaroha',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#0284C7]">
          <rect x="8" y="10" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden border-b border-stone-200/80 paper-texture">
      {/* Floating Interactive Waste Particles */}
      {wasteArtifacts.map((item) => {
        const isHovered = activeHoverItem === item.id;
        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveHoverItem(item.id)}
            onMouseLeave={() => setActiveHoverItem(null)}
            className={`absolute ${item.position} z-20 cursor-pointer transition-all duration-300 ${
              isHovered ? 'scale-110 z-30' : 'hover:scale-105'
            }`}
          >
            <div
              className={`p-3 md:p-4 bg-white/90 backdrop-blur-md border rounded-xs shadow-sm flex items-center gap-3 transition-colors ${
                isHovered ? 'border-[#141413] shadow-md bg-white' : 'border-stone-200'
              }`}
            >
              <div className={`p-2 rounded-xs bg-stone-50 ${item.rotation}`}>
                {item.icon}
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-400 block">
                  {item.avenue} Feedstock
                </span>
                <p className="text-xs font-semibold text-stone-900 leading-tight">
                  {item.name}
                </p>
                {isHovered && (
                  <p className="text-[11px] font-medium text-amber-700 animate-in fade-in duration-150 mt-0.5">
                    {item.destiny}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Subtle curatorial header ribbon */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs tracking-widest uppercase text-stone-500 font-medium pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FDB813] inline-block animate-pulse" />
          <span>Project Swabun</span>
          <span className="text-stone-300">/</span>
          <span>Enactus Ramjas</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-stone-600">
          <span>Three Avenues of Circular Action</span>
          <span className="text-stone-300">·</span>
          <span>Ramjas College, DU</span>
        </div>
      </div>

      {/* Main Monumental Editorial Typography */}
      <div className="max-w-6xl mx-auto w-full my-auto text-center py-10 md:py-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs uppercase tracking-widest text-stone-600 border border-stone-200/90 rounded-xs bg-white/60">
          <Sparkles className="w-3.5 h-3.5 text-[#FDB813]" />
          <span>Waste · Transformation · Product · Impact</span>
        </div>

        <h1 className="serif-headline text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black text-[#141413] tracking-tighter uppercase leading-[0.88] select-none">
          <span className="block hover:tracking-normal transition-all duration-300">WASTE</span>
          <span className="block editorial-italic font-normal lowercase tracking-tight text-stone-800 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] my-[-0.08em]">
            has another
          </span>
          <span className="block text-[#141413]">LIFE.</span>
        </h1>

        <p className="mt-8 md:mt-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-600 font-normal leading-relaxed text-balance">
          Project Swabun looks beyond disposal — exploring how discarded materials
          can be transformed into useful, sustainable alternatives through{' '}
          <strong className="font-semibold text-stone-900">Unnati</strong>,{' '}
          <strong className="font-semibold text-stone-900">Aaroha</strong>, and{' '}
          <strong className="font-semibold text-stone-900">Sehar</strong>.
        </p>

        {/* Action Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#transformation"
            className="w-full sm:w-auto px-8 py-4 bg-[#141413] hover:bg-black text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest transition-all rounded-xs shadow-sm flex items-center justify-center gap-2 group focus-visible:outline-2 focus-visible:outline-[#FDB813]"
          >
            <span>Explore The Transformation</span>
            <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500 text-[#FDB813]" />
          </a>
          <a
            href="#simulator"
            className="w-full sm:w-auto px-7 py-4 bg-white/80 hover:bg-white text-stone-900 border border-stone-300 text-xs font-semibold uppercase tracking-widest transition-all rounded-xs hover:border-stone-900 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#FDB813]"
          >
            <span>Test Waste Simulator</span>
          </a>
        </div>
      </div>

      {/* Bottom Status & Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 font-medium pt-6 border-t border-stone-200/60 gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-stone-400">01</span>
          <span>UNNATI (Kitchen Scraps)</span>
          <span className="text-stone-300">/</span>
          <span className="font-mono text-stone-400">02</span>
          <span>AAROHA (Used Oil)</span>
          <span className="text-stone-300">/</span>
          <span className="font-mono text-stone-400">03</span>
          <span>SEHAR (Banana Peels)</span>
        </div>

        <a
          href="#problem"
          className="flex items-center gap-2 text-stone-700 hover:text-black uppercase tracking-widest transition-colors py-1 group"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
