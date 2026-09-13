import Link from "next/link";

export function HeroSection() {
  return (
    <section className="paper-bg relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="container-content px-5 md:px-8 lg:px-12">
        {/* Desktop pill header duplicate for larger screens in hero area */}
        <div className="mb-10 hidden justify-center lg:flex">
          <div className="pill-nav max-w-xl">
            <span className="font-brutal text-lg uppercase text-ev-black">
              ◎ Elan Vey ◆
            </span>
            <Link href="/subscription" className="subscribe-btn">
              Subscribe Now
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="brutal-text brutal-text-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-ev-neon-yellow">Architect</span>
            <span className="mt-2 block text-ev-neon-cyan">
              Y
              <span className="progress-o mx-1">
                <span className="progress-o-fill" />
              </span>
              ur
            </span>
            <span className="mt-2 block text-ev-neon-pink">Limelight</span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base font-bold leading-snug text-ev-black md:max-w-lg md:text-lg">
            You create and we, Strategise, Optimise, Scale, Analyse, Build you
            digitally.
          </p>
        </div>
      </div>
    </section>
  );
}
