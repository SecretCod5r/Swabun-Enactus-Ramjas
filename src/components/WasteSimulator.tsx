import { useState } from 'react';
import { Sparkles, RefreshCw, Check, ArrowRight, CornerDownRight } from 'lucide-react';

interface WasteItem {
  id: string;
  name: string;
  subtitle: string;
  avenue: string;
  feedstock: string;
  productName: string;
  productSub: string;
  quote: string;
  color: string;
  bg: string;
  border: string;
  icon: string;
}

export default function WasteSimulator() {
  const [selectedWaste, setSelectedWaste] = useState<string | null>('banana-peels');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasTransformed, setHasTransformed] = useState<boolean>(true);

  const wasteChoices: WasteItem[] = [
    {
      id: 'kitchen-waste',
      name: 'Kitchen Waste',
      subtitle: 'Organic domestic food trimmings',
      avenue: 'UNNATI',
      feedstock: 'Domestic vegetable peels & food discards',
      productName: 'Nutrient-Rich Compost',
      productSub: 'Living Earthen Soil Humus',
      quote: 'Naturally processed in a three-tier terracotta composter designed for household eco-living.',
      color: '#9A3412',
      bg: 'bg-[#FAF4ED]',
      border: 'border-orange-300',
      icon: '🌱'
    },
    {
      id: 'cooking-oil',
      name: 'Used Cooking Oil',
      subtitle: 'Post-frying lipids & plastic sachets',
      avenue: 'AAROHA',
      feedstock: 'Drain-polluting kitchen grease & discarded films',
      productName: 'Eco Shampoo Soap Bar',
      productSub: 'Zero-Plastic Conditioning Solid',
      quote: 'Low-energy, plastic-free ambient process bridging environmental hygiene with pollution reduction.',
      color: '#B45309',
      bg: 'bg-[#FAF7ED]',
      border: 'border-amber-300',
      icon: '🧼'
    },
    {
      id: 'banana-peels',
      name: 'Banana Peels',
      subtitle: 'Post-harvest agricultural rinds',
      avenue: 'SEHAR',
      feedstock: 'Discarded agricultural fruit rinds',
      productName: 'Plant-Based Vegan Leather',
      productSub: 'Cruelty-Free Biomaterial Sheet',
      quote: 'Explores a plant-based alternative to animal-based leather using natural binding agents.',
      color: '#15803D',
      bg: 'bg-[#F3F8F2]',
      border: 'border-emerald-300',
      icon: '🌿'
    }
  ];

  const handleSelect = (id: string) => {
    if (selectedWaste === id && hasTransformed) return;
    setSelectedWaste(id);
    setIsProcessing(true);
    setHasTransformed(false);

    // Smooth transformation simulation sequence
    setTimeout(() => {
      setIsProcessing(false);
      setHasTransformed(true);
    }, 700);
  };

  const activeItem = wasteChoices.find((w) => w.id === selectedWaste) || wasteChoices[0];

  return (
    <section id="simulator" className="py-24 md:py-36 px-6 md:px-12 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono uppercase tracking-widest text-stone-500 bg-stone-100 rounded-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FDB813]" />
            <span>Signature Interactive Experience</span>
          </div>

          <h2 className="serif-headline text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-stone-900 tracking-tight">
            What will you give <br />
            <span className="editorial-italic font-normal lowercase tracking-normal text-[#9A3412]">
              a second life to?
            </span>
          </h2>

          <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed">
            Select any raw discarded material below and send it into the transformation zone to explore how Swabun unlocks its alternative life.
          </p>
        </div>

        {/* 3 Selectable Waste Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {wasteChoices.map((item) => {
            const isSelected = selectedWaste === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`p-6 text-left rounded-xs border-2 transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FDB813] ${
                  isSelected
                    ? 'border-stone-900 bg-stone-50 shadow-md scale-102'
                    : 'border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={item.name}>
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-stone-400">
                      {item.avenue}
                    </span>
                  </div>

                  <h3 className="serif-headline text-xl font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-stone-900' : 'text-stone-400'}>
                    {isSelected ? 'Active Discard' : 'Click to Load'}
                  </span>
                  <CornerDownRight
                    className={`w-3.5 h-3.5 ${
                      isSelected ? 'text-stone-900 translate-x-1' : 'text-stone-300'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* The Transformation Zone */}
        <div className={`p-8 md:p-12 rounded-xs border-2 transition-all duration-300 ${activeItem.bg} ${activeItem.border} shadow-sm relative overflow-hidden`}>
          {isProcessing ? (
            /* Processing Animation State */
            <div className="py-16 text-center animate-in fade-in duration-200">
              <RefreshCw className="w-10 h-10 text-stone-800 animate-spin mx-auto mb-4" />
              <h3 className="serif-headline text-2xl font-bold uppercase text-stone-900">
                Transforming Discard...
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-1">
                Applying Swabun conversion parameters
              </p>
            </div>
          ) : (
            /* Transformed Product Reveal */
            <div className="animate-in fade-in zoom-in-98 duration-300">
              {/* Mandatory Prompt Copy */}
              <div className="text-center pb-8 border-b border-stone-900/10 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 rounded-full text-xs font-semibold text-stone-800 shadow-xs mb-3">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Circular Transformation Complete</span>
                </span>

                <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tight">
                  “You gave this waste another life.”
                </h3>
              </div>

              {/* Product Transformation Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Visual Transformed Product Card */}
                <div className="bg-white p-6 rounded-xs border border-stone-300 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                      Avenue {activeItem.avenue} Product
                    </span>
                    <span className="text-xs font-bold text-emerald-700 uppercase">
                      Useful Alternative
                    </span>
                  </div>

                  <div className="my-6 text-center py-8 bg-[#FAF8F5] rounded-xs border border-stone-200/80">
                    <span className="text-4xl block mb-2">{activeItem.icon}</span>
                    <h4 className="serif-headline text-2xl font-bold text-stone-900">
                      {activeItem.productName}
                    </h4>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mt-1">
                      {activeItem.productSub}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 italic leading-relaxed text-center">
                    “{activeItem.quote}”
                  </p>
                </div>

                {/* Narrative Transition Mechanics */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block mb-1">
                      Displaced Conventional Outcome
                    </span>
                    <p className="text-sm font-semibold text-stone-900">
                      From {activeItem.name} ({activeItem.feedstock})
                    </p>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Instead of decaying in open landfills or choking domestic sewage networks, this raw material now directly addresses everyday needs.
                    </p>
                  </div>

                  <div className="p-4 bg-white/80 rounded-xs border border-stone-200">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block mb-1">
                      Transformation Principle
                    </span>
                    <p className="text-xs text-stone-800 font-medium">
                      Waste → Transformation → Product → Impact
                    </p>
                  </div>

                  <a
                    href={`#${activeItem.avenue.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-black hover:underline"
                  >
                    <span>Read complete {activeItem.avenue} avenue details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
