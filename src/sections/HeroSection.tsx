import React from 'react';
import { personalInfo } from '../data/hassaanData';

interface HeroSectionProps {
  selectedPath?: 'architect' | 'operator' | null;
  onExploreProjects?: () => void;
}

export default function HeroSection({ onExploreProjects }: HeroSectionProps) {

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreProjects) {
      onExploreProjects();
    } else {
      const el = document.getElementById('projects');
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const position = elementRect - bodyRect - offset;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[720px] bg-[#0D0D0D] overflow-hidden flex items-center justify-center px-6 md:px-16 select-none">
      
      {/* -----------------------------------------------------------------
          LAYER 1: BOLD CRIMSON GRADIENT BACKGROUND "PORTFOLIO" TEXT
         ----------------------------------------------------------------- */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none select-none z-0">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#B80D13] via-[#5E0004] to-[#0D0D0D] font-black uppercase tracking-tight text-[19vw] leading-none select-none font-['Oswald']">
          PORTFOLIO
        </h1>
      </div>

      {/* -----------------------------------------------------------------
          LAYER 2: TRANSPARENT CUTOUT PORTRAIT (EXACT FILE PATH)
         ----------------------------------------------------------------- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] max-h-[85vh] z-10 pointer-events-none flex items-end justify-center min-w-[280px]">
        <img
          src="/ad5b9713-018f-43a6-a4c4-39ef586bba14_edit_867989541613908-removebg-preview.png"
          alt="Hassaan Abdullah Kiyani"
          className="h-full w-auto object-contain object-bottom filter contrast-[1.05] brightness-[0.98] drop-shadow-2xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        />
      </div>

      {/* -----------------------------------------------------------------
          LAYER 3: FOREGROUND TEXT & METRICS
         ----------------------------------------------------------------- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-12 items-center h-full pointer-events-auto">
        
        {/* Left Column: Name & Details */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center space-y-3 pt-12 lg:pt-0">
          <span className="text-white text-3xl font-normal italic font-['Caveat'] -mb-2">
            Hello, I'm
          </span>
          
          <h2 className="text-white font-black text-5xl md:text-7xl uppercase tracking-tight leading-[0.95] font-['Oswald']">
            HASSAAN<br />
            ABDULLAH<br />
            KIYANI
          </h2>

          <p className="text-[#FF2E37] font-bold text-sm md:text-base uppercase tracking-wider">
            AI ENGINEER &amp; SQA SPECIALIST
          </p>

          <p className="text-[#8E8E93] text-xs md:text-sm max-w-md leading-relaxed">
            Building and validating autonomous AI systems with rigorous SQA auditing, 
            deterministic verification pipelines, and machine cognition architectures.
          </p>

          <div className="flex items-center space-x-2 text-[#8E8E93] text-xs uppercase tracking-widest pt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
            <span>PAKISTAN • AVAILABLE WORLDWIDE</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={handleExplore}
              className="bg-[#E50914] hover:bg-[#b80710] text-white font-bold text-xs uppercase px-5 py-3 tracking-wider transition-colors cursor-pointer"
            >
              EXPLORE PROJECTS &gt;
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="border border-white/20 hover:border-white text-white font-bold text-xs uppercase px-5 py-3 tracking-wider transition-colors cursor-pointer"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* Right Column: Stacked Stats (2-column grid on mobile/tablet, right-aligned flex column on desktop) */}
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 lg:flex lg:flex-col lg:items-end justify-center gap-4 lg:gap-6 pt-6 lg:pt-0 text-center lg:text-right border-t lg:border-t-0 border-neutral-800/80 mt-6 lg:mt-0">
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">50+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">QA AUDITS &amp; BUILDS</p>
          </div>
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">40+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">GITHUB REPOSITORIES</p>
          </div>
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">4+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">YEARS DEV TRACK</p>
          </div>
          <div>
            <h3 className="text-[#FF2E37] font-black text-3xl sm:text-4xl md:text-5xl leading-none font-['Oswald']">4+</h3>
            <p className="text-[#8E8E93] text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 font-mono font-bold">PUBLISHED ESSAYS</p>
          </div>
        </div>

      </div>
    </section>
  );
}
