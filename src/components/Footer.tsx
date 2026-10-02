import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141413] text-[#FAF8F5] py-16 px-6 md:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          {/* Brand Identity & Core Manifesto (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 flex items-center justify-center text-[#FDB813]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <polygon points="12,2 22,12 14,14 12,22 10,14 2,12" />
                </svg>
              </span>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                PROJECT SWABUN
              </span>
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Project Swabun looks beyond disposal — exploring how discarded materials can be transformed into useful, sustainable alternatives through Unnati, Aaroha and Sehar.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-serif-display italic text-[#FDB813] text-lg block">
                “Waste has another life.”
              </span>
            </div>
          </div>

          {/* Quick Avenues Navigation (Cols 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold">
              The Three Avenues
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#unnati" className="hover:text-[#FDB813] transition-colors">
                  01. Unnati (Kitchen Waste)
                </a>
              </li>
              <li>
                <a href="#aaroha" className="hover:text-[#FDB813] transition-colors">
                  02. Aaroha (Used Oil & Sachets)
                </a>
              </li>
              <li>
                <a href="#sehar" className="hover:text-[#FDB813] transition-colors">
                  03. Sehar (Banana Peels)
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-[#FDB813] transition-colors">
                  Waste Simulator
                </a>
              </li>
            </ul>
          </div>

          {/* Organizational Heritage (Cols 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold">
              Enactus Ramjas
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Ramjas College, University of Delhi <br />
              Established 2011 · 14+ Years of Entrepreneurial Action <br />
              Runner-Up Team, Enactus National Exposition 2024
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-stone-400">
              <a href="#about" className="hover:text-white underline">
                About The Society
              </a>
              <span>·</span>
              <a href="#recognition" className="hover:text-white underline">
                Media & Recommendations
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Project Swabun · Enactus Ramjas</span>
            <span className="text-stone-700">·</span>
            <span>All rights reserved</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white uppercase tracking-wider text-[11px] font-semibold transition-colors py-1 px-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
