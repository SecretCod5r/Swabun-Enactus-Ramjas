import { useState } from 'react';
import { ENACTUS_RAMJAS_DATA } from '../data/swabunData';
import { ArrowUpRight, Mail, Phone, Instagram, Linkedin, Facebook, Sparkles, Check, Send } from 'lucide-react';

export default function FinalCTA() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', organization: '', interest: 'Unnati (Composting)' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', organization: '', interest: 'Unnati (Composting)' });
    }, 2000);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF8F5] border-b border-stone-200/80 paper-texture relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono uppercase tracking-widest text-stone-600 bg-white border border-stone-200 rounded-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FDB813]" />
          <span>Project Swabun · Next Chapter</span>
        </div>

        <h2 className="serif-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#141413] tracking-tighter leading-[0.92]">
          The next life <br />
          <span className="editorial-italic font-normal lowercase tracking-normal text-stone-700">
            of waste
          </span> <br />
          starts here.
        </h2>

        <p className="mt-8 max-w-xl mx-auto text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          See what Project Swabun is building through innovation, sustainability and action.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setInquiryModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-[#141413] hover:bg-black text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest transition-all rounded-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FDB813]"
          >
            <span>Connect With Swabun</span>
            <ArrowUpRight className="w-4 h-4 text-[#FDB813]" />
          </button>

          <a
            href="https://www.linkedin.com/company/projectswabun"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-semibold uppercase tracking-widest transition-all rounded-xs hover:border-stone-900 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#FDB813]"
          >
            <Linkedin className="w-4 h-4 text-[#0077B5]" />
            <span>Follow @ProjectSwabun</span>
          </a>
        </div>

        {/* Brochure Official Contacts */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold block mb-6">
            Official Leadership Contacts · Enactus Ramjas Brochure
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {ENACTUS_RAMJAS_DATA.leadership.map((leader) => (
              <div
                key={leader.name}
                className="p-5 bg-white rounded-xs border border-stone-200/90 shadow-xs"
              >
                <span className="text-[10px] font-mono uppercase font-bold text-amber-800 tracking-wider block mb-1">
                  {leader.role}
                </span>
                <h4 className="text-sm font-bold text-stone-900">
                  {leader.name}
                </h4>
                <a
                  href={`tel:${leader.contact.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 mt-2 font-mono"
                >
                  <Phone className="w-3 h-3 text-stone-400" />
                  <span>{leader.contact}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Social Handles Bar from Brochure */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600">
            <span className="font-semibold uppercase tracking-wider text-stone-400">
              Verified Social Channels:
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-black transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>@Swabun</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-black transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>@ProjectSwabun</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-black transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-800" />
              <span>@SwabunEnactus</span>
            </a>
            <span className="text-stone-300">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-stone-500 hover:text-black transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Enactus Ramjas: @en.ramjas</span>
            </a>
          </div>
        </div>
      </div>

      {/* Inquiry / Collaboration Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full p-8 rounded-xs border border-stone-200 shadow-xl relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                  Project Swabun Collaboration
                </span>
                <h3 className="serif-headline text-2xl font-bold text-stone-900">
                  Connect With The Team
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInquiryModalOpen(false)}
                className="text-stone-400 hover:text-black text-sm p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="serif-headline text-xl font-bold text-stone-900">
                  Message Transmitted
                </h4>
                <p className="text-xs text-stone-600 mt-2">
                  Thank you for reaching out. The Project Swabun team at Enactus Ramjas will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditi Sharma"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-xs focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. University, Community Center, or Household"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-xs focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-xs bg-white focus:outline-none focus:border-stone-900"
                  >
                    <option value="Unnati (Terracotta Composter)">Unnati (Terracotta Composter)</option>
                    <option value="Aaroha (Shampoo Soap Bars)">Aaroha (Shampoo Soap Bars)</option>
                    <option value="Sehar (Banana Vegan Leather)">Sehar (Banana Vegan Leather)</option>
                    <option value="General Enactus Ramjas Partnership">General Enactus Ramjas Partnership</option>
                  </select>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#141413] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-black flex items-center gap-1.5"
                  >
                    <Send className="w-3 h-3 text-[#FDB813]" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
