/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import IdeaSection from './components/IdeaSection';
import TransformationSystem from './components/TransformationSystem';
import UnnatiSection from './components/UnnatiSection';
import AarohaSection from './components/AarohaSection';
import SeharSection from './components/SeharSection';
import WasteSimulator from './components/WasteSimulator';
import RecognitionSection from './components/RecognitionSection';
import AboutSwabun from './components/AboutSwabun';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const sectionIds = [
      'problem',
      'idea',
      'transformation',
      'unnati',
      'aaroha',
      'sehar',
      'simulator',
      'recognition',
      'about'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px'
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141413] selection:bg-[#FDB813] selection:text-black">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Editorial Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 1. HERO */}
      <main>
        <Hero />

        {/* 2. THE PROBLEM */}
        <ProblemSection />

        {/* 3. THE BIG IDEA */}
        <IdeaSection />

        {/* 4. THE TRANSFORMATION SYSTEM */}
        <TransformationSystem />

        {/* 5. UNNATI */}
        <UnnatiSection />

        {/* 6. AAROHA */}
        <AarohaSection />

        {/* 7. SEHAR */}
        <SeharSection />

        {/* SIGNATURE INTERACTION: WASTE SIMULATOR */}
        <WasteSimulator />

        {/* 8. RECOGNITION / PROOF */}
        <RecognitionSection />

        {/* 9. ABOUT SWABUN */}
        <AboutSwabun />

        {/* 10. FINAL CTA */}
        <FinalCTA />
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
}
