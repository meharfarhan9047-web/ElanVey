import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RacetrackStrip } from "@/components/ui/RacetrackStrip";
import { SubscriptionFaq } from "@/components/subscription/SubscriptionFaq";
import { subscriptionBenefits } from "@/data/subscription";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Subscription",
  description:
    "The Elan Vey subscription — steady guidance, great designs, and growth help, month after month.",
  alternates: { canonical: `${siteConfig.url}/subscription` },
};

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const yellowShadow = { textShadow: "3px 3px 0 #FF1744, 6px 6px 0 #660022" };

const benefitAccents = [
  { icon: "◆", color: "bg-ev-neon-pink text-white" },
  { icon: "✦", color: "bg-ev-neon-cyan" },
  { icon: "▲", color: "bg-ev-neon-yellow" },
  { icon: "●", color: "bg-ev-neon-pink text-white" },
  { icon: "★", color: "bg-ev-neon-cyan" },
  { icon: "■", color: "bg-ev-neon-yellow" },
];

const howItWorks = [
  {
    step: "01",
    title: "Reach Out",
    desc: "Call us or send a message. Tell us about your ideas, your goals, and what you'd like help with.",
  },
  {
    step: "02",
    title: "Get Started",
    desc: "We plan everything together, set simple milestones, and start our partnership right away.",
  },
  {
    step: "03",
    title: "Grow With Us",
    desc: "Month after month — ongoing support, creative help, and steady growth together.",
  },
];

const subPerks = [
  "Cancel anytime, no hidden fees",
  "Monthly friendly check-ins",
  "Direct WhatsApp / email support",
  "Quarterly progress update",
];

export default function SubscriptionPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        <div
          className="pointer-events-none absolute right-8 top-24 hidden aspect-square w-16 rotate-[10deg] border-[3px] border-ev-neon-yellow bg-ev-neon-yellow/30 shadow-brutal md:block float-gentle"
          aria-hidden
        />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                Limited Spots · Chat With Us Today
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              Subscription
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Your ongoing
              <br className="hidden md:block" /> creative{" "}
              <span className="text-ev-neon-pink">partner</span>
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              The Elan Vey subscription gives you steady guidance, great
              designs, and growth help — month after month, with no stress.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[20px]">
          <video
            className="mx-auto block max-h-[620px] w-full rounded-[20px] object-contain"
            src="/videos/IMG_1043.MP4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Elan Vey subscription video"
          />
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED + PRICING (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <h2 className="font-brutal text-2xl uppercase text-ev-neon-pink md:text-4xl">
                What&apos;s included
              </h2>
              <p className="mt-6 text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
                A friendly all-in-one partnership for anyone who wants steady,
                long-term progress. Every subscription includes planning help,
                design work, and online support tailored to what you need.
              </p>
              <ul className="mt-8 space-y-3">
                {subPerks.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-bold"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="font-brutal text-xl text-ev-neon-cyan">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="right" className="relative">
              <div className="relative rounded-[1.5rem] border-[3px] border-black bg-ev-neon-yellow p-7 shadow-brutal-xl hover-lift md:p-9">
                <span className="ribbon-badge bg-ev-neon-pink text-ev-neon-yellow">
                  Best Value
                </span>
                <p className="font-brutal text-xs uppercase tracking-widest text-ev-black">
                  Investment
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <p className="font-brutal text-3xl text-ev-neon-red md:text-4xl">
                    ₹1799/month
                  </p>
                </div>
                <p className="mt-2 text-sm font-bold text-ev-black/70">
                  Monthly · No lock-in contracts
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-ev-neon-cream px-3 py-1">
                  <span className="font-brutal text-xs text-ev-neon-red">
                    SAVE 20%
                  </span>
                  <span className="text-xs font-bold">
                    vs. one-off projects
                  </span>
                </div>
                <div className="mt-8">
                  <Button href="/waitlist" className="w-full">
                    Join the Waitlist
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ALL BENEFITS (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <p className="font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-yellow">
              All Benefits Included
            </p>
            <h2
              className="mt-4 mb-12 font-brutal text-3xl uppercase text-ev-neon-yellow md:text-5xl"
              style={yellowShadow}
            >
              Everything you need to{" "}
              <span className="text-ev-neon-pink">thrive</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionBenefits.map((benefit, i) => {
              const accent = benefitAccents[i % benefitAccents.length];
              return (
                <Reveal
                  key={benefit.title}
                  delay={i * 70}
                  className={`rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 ${accent.color}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-3xl">{accent.icon}</span>
                    <h3 className="pt-1 font-brutal text-base uppercase">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold opacity-80">
                    {benefit.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {/* ============ HOW IT WORKS (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="mb-12 font-brutal text-3xl uppercase text-ev-neon-pink md:text-5xl">
              How it works
            </h2>
          </Reveal>
          <div className="grid items-start gap-6 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 90}
                className="relative rounded-[1.25rem] border-[3px] border-black bg-ev-neon-cream p-6 shadow-brutal hover-lift md:p-8"
              >
                <span className="font-brutal text-5xl text-ev-neon-pink md:text-6xl">
                  {item.step}
                </span>
                <h3 className="mt-4 font-brutal text-xl uppercase text-ev-black md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-bold leading-relaxed text-ev-black/70 md:text-base">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="container-content max-w-3xl px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2
              className="mb-12 font-brutal text-3xl uppercase text-ev-neon-yellow md:text-5xl"
              style={yellowShadow}
            >
              Common questions
            </h2>
          </Reveal>
          <Reveal>
            <SubscriptionFaq />
          </Reveal>
        </div>
      </section>
      <RacetrackStrip />
      {/* ============ CTA (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 text-center md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-brutal text-3xl uppercase text-ev-neon-pink sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to subscribe?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-bold text-ev-black/80 md:text-lg">
              Take the first step toward steady, worry-free creative growth.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
