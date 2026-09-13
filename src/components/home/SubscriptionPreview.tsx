import { Section } from "@/components/ui/Section";
import { RacetrackStrip } from "@/components/ui/RacetrackStrip";

export function SubscriptionPreview() {
  return (
    <>
    <RacetrackStrip />
    <section className="relative overflow-hidden bg-[#0a0a0a] py-12 md:py-24">
      <div className="container-content px-4 sm:px-6 md:px-8 mx-auto max-w-6xl">
        
        {/* TITLE BLOCK */}
        <div className="w-full text-center mb-8 md:mb-16">
          <h2 className="font-brutal text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black uppercase text-[#FFE600] leading-[1.05] inline-block"
              style={{ textShadow: "2px 2px 0 #FF1744, 4px 4px 0 #FF1744, 6px 6px 0 #FF1744" }}>
            <span className="relative inline-block pr-8 sm:pr-12 md:pr-16">
              ONE VEY BETWEEN YOU
              {/* Lightning Bolt */}
              <svg viewBox="0 0 32 32" className="absolute right-0 md:-right-4 top-0 md:-top-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 fill-[#FF1744]" style={{ filter: "drop-shadow(2px 2px 0 #0a0a0a)" }}>
                <path d="M18 2 L2 18 H14 L10 30 L28 12 H16 L22 2 Z"/>
              </svg>
            </span>
            <br />
            <span className="inline-block mt-1 md:mt-2">AND BEING SEEN!</span>
          </h2>
        </div>

        {/* LAYOUT — single column on mobile, 2-col on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-10 items-stretch mx-auto">
          
          {/* LEFT / TOP: Red Card with Shield */}
          <div className="bg-[#FF1744] rounded-[20px] p-5 md:p-8 relative overflow-hidden flex flex-col min-h-[320px] md:min-h-[380px]">
            <div className="relative z-10">
              <h3 className="font-brutal text-3xl md:text-4xl lg:text-5xl font-black text-[#FFE600] uppercase leading-[0.9]">
                THE VEY<br/>FORWARD
              </h3>
              <p className="font-sans text-base md:text-lg text-[#FFE600] mt-1 tracking-tight italic">
                subscription
              </p>
            </div>
            
            {/* Huge Black Shield — centered in the card */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="relative w-[65%] md:w-[60%] aspect-[5/6]">
                <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full fill-[#151515]">
                  <path d="M 5 15 L 50 5 L 95 15 L 95 60 C 95 90 70 115 50 120 C 30 115 5 90 5 60 Z" />
                </svg>
                {/* Text inside Shield */}
                <div className="absolute inset-0 flex items-center justify-center pt-4">
                  <span className="font-sans text-[#f5f5f5] text-base md:text-xl lg:text-2xl font-black uppercase text-center tracking-widest leading-snug">
                    REFERENCE<br/>STATIC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT / BOTTOM: Pricing, Checkerboard, Buttons, Details */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            
            {/* 1. Pricing — plain yellow text on mobile, yellow pill on desktop */}
            <div className="lg:bg-[#FFE600] lg:rounded-full lg:py-3 lg:px-6 w-full mb-4 lg:mb-5">
              <span className="font-brutal text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-[#FFE600] lg:text-[#FF1744] tracking-tight leading-none whitespace-nowrap">
                ₹1799/month
              </span>
            </div>

            {/* 2. Checkerboard Strip */}
            <div 
              className="w-full h-[32px] md:h-[40px] mb-3" 
              style={{
                backgroundColor: "#111111",
                backgroundImage: "conic-gradient(#FFE600 90deg, transparent 90deg 180deg, #FFE600 180deg 270deg, transparent 270deg)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* 3. Thin Line */}
            <hr className="border-t-[2px] md:border-t-[3px] border-[#FFE600] mb-3" />

            {/* 4. Buttons Row */}
            <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 w-full">
              {/* SUBSCRIBE Button */}
              <div className="flex-1 bg-[#FFE600] rounded-full flex items-center justify-center py-2.5 md:py-3 cursor-pointer transition-transform hover:scale-[1.02]">
                <span className="font-brutal text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-[#FF1744] uppercase tracking-wide leading-none">
                  SUBSCRIBE
                </span>
              </div>
              {/* KNOW MORE Button */}
              <div className="w-28 md:w-32 shrink-0 bg-[#FF1744] rounded-full flex items-center justify-center py-2.5 md:py-3 cursor-pointer transition-transform hover:scale-[1.02]">
                <span className="font-sans text-xs md:text-sm font-black text-[#FFE600] text-center leading-[1.15] uppercase">
                  KNOW<br/>MORE
                </span>
              </div>
            </div>

            {/* 5. Bottom separator */}
            <hr className="border-t-[2px] md:border-t-[3px] border-[#FFE600] mb-4" />

            {/* 6. Footer Text — centered on mobile, left-aligned on desktop */}
            <div>
              <h4 className="font-brutal text-xl sm:text-2xl md:text-2xl font-black text-[#FFE600] uppercase tracking-tight leading-none">
                YOUR TEAM ASSEMBLED
              </h4>
              <p className="mt-2 text-xs sm:text-sm md:text-sm font-bold text-gray-300 leading-relaxed max-w-[95%] mx-auto lg:mx-0">
                Once you subscribe, your vision gets backed by creators, strategists, content writers, performance marketers, designers, analysts, and industry experts—all working to build, position, market, and grow it.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    <RacetrackStrip />
    </>
  );
}
