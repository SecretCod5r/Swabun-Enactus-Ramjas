import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Idea', href: '#idea' },
    { label: 'Unnati', href: '#unnati' },
    { label: 'Aaroha', href: '#aaroha' },
    { label: 'Sehar', href: '#sehar' },
    { label: 'Simulator', href: '#simulator' },
    { label: 'Recognition', href: '#recognition' }
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-[#FDB813] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#141413]/10 py-3.5 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text wordmark with Enactus origami touch */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group focus-visible:outline-2 focus-visible:outline-[#FDB813]"
            aria-label="Project Swabun Home"
          >
            {/* Geometric Enactus Origami bird accent */}
            <span className="w-5 h-5 flex items-center justify-center text-[#FDB813] transition-transform duration-300 group-hover:rotate-12">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <polygon points="12,2 22,12 14,14 12,22 10,14 2,12" />
              </svg>
            </span>
            <span className="font-serif-display text-xl md:text-2xl font-bold tracking-tight text-[#141413]">
              SWABUN
            </span>
          </a>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase text-stone-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-150 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-[#FDB813] ${
                    isActive ? 'text-stone-950 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#141413] animate-in fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#simulator"
              className="text-xs uppercase tracking-wider font-semibold text-stone-800 hover:text-stone-950 transition-colors py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#FDB813]"
            >
              Transform Waste
            </a>
            <a
              href="#about"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#FDB813] hover:bg-[#e6a50b] transition-colors rounded-sm shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              <span>Enactus Ramjas</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-900 hover:text-black focus-visible:outline-2 focus-visible:outline-[#FDB813]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Full Screen Editorial Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F5] pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
              Navigation · Project Swabun
            </p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-display text-3xl font-normal text-stone-900 hover:text-[#9A3412] transition-colors flex items-center justify-between border-b border-stone-200/80 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-stone-400">0{index + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-stone-200 space-y-4">
            <p className="text-xs text-stone-600 uppercase tracking-widest">
              A Project by Enactus Ramjas · Ramjas College
            </p>
            <div className="flex gap-4">
              <a
                href="#simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#141413] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                Try Waste Simulator
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
