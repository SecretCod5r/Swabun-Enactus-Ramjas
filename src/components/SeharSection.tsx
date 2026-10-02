import { useState } from 'react';
import { ArrowDown, Heart, Sparkles, SlidersHorizontal, Leaf } from 'lucide-react';

export default function SeharSection() {
  const [textureRatio, setTextureRatio] = useState<number>(100); // 0 = raw peel, 100 = finished vegan leather

  return (
    <section id="sehar" className="py-24 md:py-36 px-6 md:px-12 bg-[#F3F8F2] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-emerald-950/70 font-semibold mb-3">
            <span className="font-mono text-emerald-900/60">AVENUE 03</span>
            <span>Sehar</span>
            <span className="text-emerald-900/40">/</span>
            <span>Biomaterial Innovation & Animal Welfare</span>
          </div>

          <h2 className="serif-headline text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase text-stone-900 tracking-tight leading-[0.92]">
            Banana Peels <br />
            <span className="editorial-italic font-normal lowercase tracking-normal text-[#15803D]">
              become vegan leather.
            </span>
          </h2>

          <p className="mt-8 text-stone-700 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
            The journey continues with <strong className="font-semibold text-stone-900">Sehar</strong>, which transforms discarded banana peels into vegan leather using natural binding agents.
            By exploring a plant-based alternative to animal-based leather, Sehar addresses agricultural waste while bringing together sustainability, innovation and animal welfare.
          </p>
        </div>

        {/* Interactive Material Texture Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Tactile Material Inspector */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-xs border border-emerald-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold">
                Biomaterial Texture Inspector
              </span>
              <span className="text-xs font-semibold text-emerald-800 uppercase flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Plant-Derived</span>
              </span>
            </div>

            {/* Material Texture Preview Canvas */}
            <div className="my-8 h-72 rounded-xs border-2 border-stone-900 relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
              {/* Texture Layer: Dynamic Morphing Canvas */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background:
                    textureRatio > 50
                      ? 'linear-gradient(135deg, #4A2E18 0%, #3B2413 50%, #2A1A0E 100%)'
                      : 'linear-gradient(135deg, #D97706 0%, #B45309 60%, #78350F 100%)'
                }}
              >
                {/* SVG Natural Grain Pattern */}
                <svg className="w-full h-full opacity-40 mix-blend-overlay">
                  <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" />
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#grain)" />
                </svg>

                {/* Tactile stitching accent for leather state */}
                {textureRatio > 60 && (
                  <div className="absolute inset-4 border border-dashed border-amber-200/40 rounded-xs pointer-events-none" />
                )}
              </div>

              {/* Center Material Badge */}
              <div className="relative z-10 text-center p-6 bg-black/60 backdrop-blur-md rounded-xs border border-white/20 text-white max-w-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-1">
                  {textureRatio > 50 ? 'Cured Biomaterial' : 'Raw Agricultural Rind'}
                </span>
                <h4 className="serif-headline text-xl md:text-2xl font-bold uppercase">
                  {textureRatio > 50 ? 'Vegan Leather Substrate' : 'Unprocessed Banana Peel'}
                </h4>
                <p className="text-xs text-stone-300 mt-2 font-light">
                  {textureRatio > 50
                    ? 'Supple, plant-based alternative crosslinked with natural binding agents.'
                    : 'Fibrous outer peel discarded post-harvest.'}
                </p>
              </div>
            </div>

            {/* Slider to interactively feel the transition */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                <span className={textureRatio < 50 ? 'text-amber-800 font-bold' : 'text-stone-500'}>
                  Raw Banana Peel
                </span>
                <span className="font-mono text-stone-400">{textureRatio}% Transformation</span>
                <span className={textureRatio >= 50 ? 'text-emerald-800 font-bold' : 'text-stone-500'}>
                  Vegan Leather Alternative
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={textureRatio}
                onChange={(e) => setTextureRatio(Number(e.target.value))}
                aria-label="Texture transformation ratio slider"
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#15803D] focus-visible:outline-2 focus-visible:outline-[#FDB813]"
              />
            </div>
          </div>

          {/* Right: Narrative & The Triple Equation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold block">
                The Triple Equation
              </span>

              {/* Formula Steps */}
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xs border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">Step 01 · Input</span>
                    <span className="text-sm font-bold text-stone-900">Discarded Banana Peels</span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium">Agricultural waste residue</span>
                </div>

                <div className="flex justify-center text-emerald-800">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-white rounded-xs border-2 border-emerald-800 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-800 font-bold block">Step 02 · Binding</span>
                    <span className="text-sm font-bold text-stone-900">Natural Binding Agents</span>
                  </div>
                  <span className="text-xs text-emerald-800 font-medium">Bio-compatible crosslinking</span>
                </div>

                <div className="flex justify-center text-emerald-800">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-white rounded-xs border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-bold block">Step 03 · Output</span>
                    <span className="text-sm font-bold text-stone-900">Cruelty-Free Vegan Leather</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">Plant-based hide substitute</span>
                </div>
              </div>
            </div>

            {/* Crucial Ethical Triad Callout */}
            <div className="p-6 bg-white rounded-xs border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <Heart className="w-4 h-4 text-emerald-700 fill-emerald-100" />
                <span>Sustainability · Innovation · Animal Welfare</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                By replacing conventional livestock hide and polyurethane synthetics with repurposed agricultural rinds, Sehar proves that circular design can safeguard animal lives while intercepting organic refuse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
