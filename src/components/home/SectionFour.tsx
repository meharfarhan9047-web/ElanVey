"use client";

import Link from "next/link";
import { processSteps } from "@/data/process";

// A distinct colour scheme per step card (gradient bg + text colours tuned for contrast)
const cardStyles = [
  {
    bg: "from-[#FF1744] to-[#FF3D8B]",
    num: "text-[#FDF6D8]",
    title: "text-ev-neon-yellow",
    desc: "text-ev-neon-yellow/90",
    cta: "text-ev-neon-yellow hover:text-white",
  },
  {
    bg: "from-[#00CCFF] to-[#0066FF]",
    num: "text-white",
    title: "text-ev-black",
    desc: "text-ev-black/80",
    cta: "text-ev-black hover:text-white",
  },
  {
    bg: "from-[#FFE600] to-[#FFB800]",
    num: "text-[#FF1744]",
    title: "text-ev-black",
    desc: "text-ev-black/80",
    cta: "text-[#FF1744] hover:text-ev-black",
  },
  {
    bg: "from-[#8B5CF6] to-[#FF0066]",
    num: "text-ev-neon-yellow",
    title: "text-white",
    desc: "text-white/90",
    cta: "text-ev-neon-yellow hover:text-white",
  },
  {
    bg: "from-[#0a0a0a] to-[#2b2b2b]",
    num: "text-[#FF1744]",
    title: "text-ev-neon-yellow",
    desc: "text-ev-neon-yellow/80",
    cta: "text-ev-neon-yellow hover:text-white",
  },
];

export function SectionFour() {
  return (
    <section
      className="relative overflow-visible py-12 md:py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/Bg_paper.jpg')", backgroundSize: "550px auto", backgroundRepeat: "repeat" }}
    >
      <div className="container-content px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
        
        {/* PARALLAX STACKING CONTAINER */}
        <div className="relative w-full">
          
          {/* CARD 1 — "How We Work" Red Card (Sticky) */}
          {/* Using sticky top-[10%] so it stays in place while Card 2 slides over it */}
          <div className="sticky top-20 sm:top-24 md:top-32 z-10 w-full mb-24 md:mb-40 rounded-[2rem] md:rounded-[3rem] bg-[#FF176B] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-10 md:p-14 lg:p-16 min-h-[500px]">
              
              {/* Left Side: Title & Subtitle */}
              <div className="relative z-10 flex-1 flex flex-col justify-center w-full lg:w-1/2 pr-0 lg:pr-8">
                <h2 className="font-brutal text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black uppercase leading-[0.85] text-ev-neon-yellow">
                  <span className="block">HOW WE</span>
                  <span className="block">WORK.</span>
                </h2>
                <p className="mt-2 font-serif text-2xl sm:text-3xl md:text-[3rem] italic leading-none text-ev-neon-yellow" style={{ fontFamily: 'Georgia, serif' }}>
                  The procedure.
                </p>

                <p className="mt-12 md:mt-20 max-w-lg text-base sm:text-lg md:text-xl font-bold leading-snug text-ev-neon-yellow">
                  You bring the vision. We learn what you&apos;re building, build the strategy around it, work with you on every piece of content, and use the results to keep improving and growing.
                </p>
              </div>

              {/* Right Side: Moon Graphic */}
              <div className="relative z-0 flex-1 flex items-center justify-center w-full lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative w-full max-w-[350px] md:max-w-[450px] aspect-square flex items-center justify-center">
                  <img
                    src="/images/Moon.png"
                    alt="Moon graphic"
                    className="w-full h-full object-contain opacity-85"
                    style={{ mixBlendMode: 'luminosity', filter: 'contrast(1.2) brightness(1.15)' }}
                  />
                  <span className="absolute text-ev-neon-yellow text-4xl sm:text-5xl md:text-6xl animate-pulse" style={{ top: '42%', left: '44%' }}>
                    ✦
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 2-6: The 5 Process Steps as separate stacking cards, each a different colour */}
          {processSteps.map((step, idx) => {
            return (
              <div
                key={step.index}
                className="sticky w-full rounded-[2rem] md:rounded-[3rem] border-[3px] border-black bg-ev-black p-8 sm:p-10 md:p-14 lg:p-16 mb-24 md:mb-40 flex items-center justify-center min-h-[500px]"
                style={{
                  top: `calc(100px + ${idx * 40}px)`,
                  zIndex: (idx + 2) * 10,
                }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 w-full max-w-4xl mx-auto">
                  <span className="font-brutal text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-black text-[#FF1744] leading-none shrink-0 drop-shadow-md">
                    {step.index}
                  </span>
                  <div className="flex flex-col justify-center text-center md:text-left mt-2 md:mt-6">
                    <h3 className="font-brutal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#FFE600] leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl font-bold leading-relaxed text-ev-neon-yellow/80">
                      {step.description}
                    </p>

                    {/* If it's the last step, show the CTA link */}
                    {idx === processSteps.length - 1 && (
                      <div className="mt-10 md:mt-12">
                        <Link
                          href="/services#process"
                          className="font-brutal text-base sm:text-lg md:text-xl font-black uppercase tracking-wider text-[#FFE600] hover:text-white transition-colors inline-flex items-center gap-3"
                        >
                          LEARN MORE ABOUT OUR PROCESS
                          <span className="text-2xl">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
