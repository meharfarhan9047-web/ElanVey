

export function SectionThree() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 md:pb-24 lg:pb-32" style={{ backgroundImage: "url('/images/Bg_paper.jpg')", backgroundSize: "550px auto", backgroundRepeat: "repeat" }}>
        <div className="container-content px-5 md:px-8 lg:px-12 pt-10">

          {/* Headline matching Mockup 2 */}
          <div className="mx-auto max-w-5xl text-center lg:max-w-6xl">
            <h2
              className="font-brutal text-4xl uppercase leading-[0.9] text-ev-neon-yellow sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: "3px 3px 0 #000, 5px 5px 0 #000" }}
            >
              The Vey Forward
            </h2>
            <h2 className="mt-5 font-brutal text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-black leading-tight">
              WHETHER YOU CREATE, BUILD, PERFORM, SELL,
              <br className="hidden md:block" />
              OR SIMPLY HAVE A TALENT WAITING TO BE DISCOVERED.
            </h2>
          </div>
        </div>

        {/* Full-Width Vector-Sharp Racetrack Checkerboard Ribbon — 100% crisp at any resolution */}
        <div className="relative mt-4 mb-2 w-full overflow-hidden sm:mt-5 sm:mb-3 md:mt-6 md:mb-4" aria-hidden>
          <div
            className="w-full h-8 sm:h-11 md:h-14 border-y-2 border-black"
            style={{
              background: `repeating-conic-gradient(#000000 0% 25%, #FFFFFF 0% 50%) 0 0 / 28px 28px`,
            }}
          />
        </div>

        <div className="container-content px-5 md:px-8 lg:px-12">
          {/* Horizontal Capabilities Rows matching Mockup 2 & Mobile Requirement D */}
          <div className="relative mx-auto w-full max-w-6xl border-y-[6px] border-double border-black/80 mt-1 mb-6 sm:mt-2 sm:mb-8 md:mt-3 md:mb-12 flex flex-col">
            
            {/* ROW 1: PERSONAL BRANDING */}
            <div className="flex flex-col sm:flex-row items-center justify-center py-2 sm:py-3 border-b-2 border-black/80 w-full">
              <div className="flex items-center gap-3 sm:gap-4 justify-center">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#FF1744] stroke-black" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <circle cx="12" cy="10" r="4" fill="#FFE600" />
                  <path d="M7 18c0-3 2-5 5-5s5 2 5 5" fill="none" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  PERSONAL BRANDING
                </span>
              </div>
            </div>

            {/* ROW 2: COMPETITOR ANALYSIS */}
            <div className="flex flex-col sm:flex-row items-center justify-center py-2 sm:py-3 border-b-2 border-black/80 w-full">
              <div className="flex items-center gap-3 sm:gap-4 justify-center">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#00CCFF] stroke-black" strokeWidth="2">
                  <circle cx="10" cy="10" r="7" />
                  <path d="M21 21l-6-6" fill="none" strokeWidth="3" strokeLinecap="round" />
                  <line x1="10" y1="6" x2="10" y2="14" strokeWidth="2" />
                  <line x1="6" y1="10" x2="14" y2="10" strokeWidth="2" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  COMPETITOR ANALYSIS
                </span>
              </div>
            </div>

            {/* ROW 3: AUDIENCE BUILDING & CONTENT STRATEGY */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10 md:gap-20 w-full border-b-2 border-black/80">
              <div className="flex items-center gap-3 sm:gap-4 justify-center border-b-2 border-black/80 sm:border-none w-full sm:w-auto py-2 sm:py-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#B2FF59] stroke-black" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
                  <circle cx="8" cy="8" r="4" fill="#FF1744" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87" fill="none" strokeLinecap="round" />
                  <path d="M16 3.13a4 4 0 010 7.75" fill="none" strokeLinecap="round" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  AUDIENCE BUILDING
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 justify-center w-full sm:w-auto py-2 sm:py-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#FF9100] stroke-black" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" fill="none" />
                  <circle cx="12" cy="12" r="5" fill="#FFE600" />
                  <circle cx="12" cy="12" r="1" fill="black" />
                  <path d="M22 2L15 9" strokeWidth="3" strokeLinecap="round" />
                  <path d="M19 2l3 3" strokeWidth="2" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  CONTENT STRATEGY
                </span>
              </div>
            </div>

            {/* ROW 4: GROWTH OPTIMISATION */}
            <div className="flex flex-col sm:flex-row items-center justify-center py-2 sm:py-3 border-b-2 border-black/80 w-full">
              <div className="flex items-center gap-3 sm:gap-4 justify-center">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#FFE600] stroke-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" fill="none" strokeWidth="3" />
                  <path d="M3 15l5-5 4 4 9-9" fill="none" strokeWidth="3" />
                  <path d="M16 5h5v5" fill="#FF1744" strokeWidth="3" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  GROWTH OPTIMISATION
                </span>
              </div>
            </div>

            {/* ROW 5: CONTENT IDEATION & PAID GROWTH */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10 md:gap-20 w-full">
              <div className="flex items-center gap-3 sm:gap-4 justify-center border-b-2 border-black/80 sm:border-none w-full sm:w-auto py-2 sm:py-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#0066FF] stroke-black" strokeWidth="2">
                  <path d="M9 18h6" fill="none" strokeLinecap="round" />
                  <path d="M10 22h4" fill="none" strokeLinecap="round" />
                  <path d="M12 2v1" fill="none" />
                  <path d="M12 15a4.5 4.5 0 003-8 4.5 4.5 0 00-6 0 4.5 4.5 0 003 8z" fill="#FFE600" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  CONTENT IDEATION
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 justify-center w-full sm:w-auto py-2 sm:py-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 shrink-0 fill-[#66FF00] stroke-black" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10" strokeWidth="3" strokeLinecap="round" />
                  <path d="M9 10c0-1.5 1.5-2 3-2s3 .5 3 2-1.5 2-3 2-3 .5-3 2 1.5 2 3 2 3-.5 3-2" fill="none" strokeLinecap="round" />
                </svg>
                <span className="font-halenoir text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium uppercase text-black tracking-tight">
                  PAID GROWTH
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
