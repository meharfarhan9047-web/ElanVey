import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RacetrackStrip } from "@/components/ui/RacetrackStrip";
import { StickyHelp } from "@/components/services/StickyHelp";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Creative help for everyone — planning, design, online growth, and marketing learning through Lavent Marketing.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const yellowShadow = { textShadow: "3px 3px 0 #FF1744, 6px 6px 0 #660022" };

const serviceAccents: Record<
  string,
  { icon: string; color: string; fill: string }
> = {
  "Build Your Foundation": {
    icon: "◆",
    color: "text-ev-neon-pink",
    fill: "bg-ev-neon-cream",
  },
  "Create & Grow": {
    icon: "✦",
    color: "text-ev-neon-cyan",
    fill: "bg-ev-neon-pink text-white",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        <div
          className="pointer-events-none absolute left-6 top-28 hidden aspect-square w-14 rotate-[-8deg] border-[3px] border-ev-neon-yellow bg-ev-neon-yellow/30 shadow-brutal md:block float-slow"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-8 top-24 hidden h-3 w-28 rotate-[6deg] bg-ev-neon-cyan md:block float-medium"
          aria-hidden
        />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                2 Core Services · 1 Friendly Team
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              Services
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Creative help
              <br className="hidden md:block" /> for{" "}
              <span className="text-ev-neon-pink">everyone</span>
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              Every service is designed to help you shine — from getting the
              basics right to growing your presence online month after month.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROCESS (dark) ============ */}
      <RacetrackStrip />
      <section
        id="process"
        className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24"
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-yellow">
                How it works
              </p>
              <h2
                className="mt-4 font-brutal text-3xl uppercase text-ev-neon-yellow md:text-5xl"
                style={yellowShadow}
              >
                The Elan Vey Process
              </h2>
            </div>
            <p className="max-w-md text-base font-bold leading-relaxed text-white/70 md:text-lg">
              Five simple steps — from first chat to final result — designed to
              make you stand out and help your audience grow.
            </p>
          </Reveal>

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 70} className="flex">
                <div className="flex w-full flex-col rounded-[1.5rem] border-[3px] border-ev-neon-pink/40 bg-[#141414] p-6 shadow-[8px_8px_0_0_rgba(255,23,68,0.35)] hover-lift md:p-7">
                  <span className="process-step-number !text-5xl md:!text-6xl">
                    {step.index}
                  </span>
                  <h3 className="mt-3 font-brutal text-lg uppercase leading-tight text-ev-neon-yellow md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm font-bold leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ============ SERVICES DETAIL (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content space-y-20 px-5 md:space-y-28 md:px-8 lg:px-12">
          {services.map((service, i) => {
            const accent = serviceAccents[service.name];
            return (
              <article
                key={service.id}
                className={`grid items-center gap-10 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <Reveal
                  variant={i % 2 === 1 ? "right" : "left"}
                  className="lg:col-span-5 lg:[direction:ltr]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-brutal text-7xl text-ev-black/10 md:text-8xl">
                      {service.index}
                    </span>
                    {accent && (
                      <span
                        className={`font-brutal text-5xl ${accent.color} float-medium`}
                      >
                        {accent.icon}
                      </span>
                    )}
                  </div>
                  <span className="mt-4 block font-brutal text-xs uppercase tracking-[0.25em] text-ev-neon-pink">
                    {service.tag}
                  </span>
                  <h2 className="mt-4 font-brutal text-3xl uppercase text-ev-neon-pink md:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-6 text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Button href="/contact" variant="secondary">
                      Discuss This Service
                    </Button>
                  </div>
                </Reveal>

                <Reveal
                  variant={i % 2 === 1 ? "left" : "right"}
                  className="lg:col-span-7 lg:[direction:ltr]"
                >
                  <div
                    className={`relative rounded-[1.5rem] border-[3px] border-black p-7 shadow-brutal-lg hover-lift md:p-9 ${accent ? accent.fill : "bg-ev-neon-cream"}`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-brutal text-xs uppercase tracking-[0.25em]">
                        What You Get
                      </h3>
                      {accent && (
                        <span className="font-brutal text-3xl">
                          {accent.icon}
                        </span>
                      )}
                    </div>
                    <ul className="mt-2 space-y-4">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-4 border-b-[3px] border-black/10 pb-4 font-bold last:border-0"
                        >
                          <span className="mt-0.5 flex-shrink-0 font-brutal">
                            ◆
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <StickyHelp />

      {/* ============ CTA (dark) ============ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-center text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-brutal text-3xl uppercase text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl"
              style={yellowShadow}
            >
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-bold text-white/80 md:text-lg">
              We&apos;ll help you figure out the right services for your goals
              and budget.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Book a Free Chat
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <RacetrackStrip />
      <div className="hide-footer-scallop" aria-hidden />
    </>
  );
}
