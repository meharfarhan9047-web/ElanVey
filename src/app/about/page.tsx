import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RacetrackStrip } from "@/components/ui/RacetrackStrip";
import { founders } from "@/data/founders";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Elan Vey exists for people who have a vision but don&apos;t have a path to make the world see it.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const yellowShadow = { textShadow: "3px 3px 0 #FF1744, 6px 6px 0 #660022" };
const creamShadow = { textShadow: "3px 3px 0 #FF1744" };

const differentiators = [
  {
    title: "Built for every kind of dream — business, skill, art or idea.",
    icon: "◆",
    color: "bg-ev-neon-pink text-white",
  },
  {
    title: "Bold, eye-catching design — no boring templates.",
    icon: "▲",
    color: "bg-ev-neon-cyan",
  },
  {
    title: "Real marketing access via our Lavent Marketing connection.",
    icon: "●",
    color: "bg-ev-neon-yellow",
  },
  {
    title: "Simple, honest planning — no confusing jargon.",
    icon: "■",
    color: "bg-ev-neon-cream",
  },
  {
    title: "Full content journey: ideas → creation → posting → growth.",
    icon: "★",
    color: "bg-ev-neon-pink text-white",
  },
  {
    title: "Custom-made around you, not generic best-practice checklists.",
    icon: "✦",
    color: "bg-ev-neon-cyan",
  },
];

const slogans = [
  "We Make Good Look Unmissable.",
  "Your Vision. Our Visionary Chaos.",
  "Less &quot;Marketing.&quot; More &quot;Damn, Who Made This?&quot;",
  "Your Voice — Louder, Bolder, Seen.",
];

const sloganColors = [
  "bg-ev-neon-pink text-white",
  "bg-ev-neon-cyan text-ev-black",
  "bg-ev-neon-yellow text-ev-black",
  "bg-ev-neon-cream text-ev-black",
];

const values = [
  {
    title: "Our Mission",
    content:
      "Turn ideas into content. Turn content into a presence. We take care of the whole content game — from what to create to how to put it out there and make it better.",
    accent: "pink" as const,
  },
  {
    title: "Philosophy",
    content:
      "We believe everyone has something worth sharing. Content isn&apos;t about being the youngest, having the biggest following, or being perfect on camera. It&apos;s about having an idea, finding your own voice, and knowing how to bring it to life.",
    accent: "cyan" as const,
  },
  {
    title: "Vision",
    content:
      "To create a world where everyone has the confidence to create, share, and grow. No matter your age or experience, we want to make it easier for people to put their ideas out there, find their people, and build something of their own.",
    accent: "yellow" as const,
  },
  {
    title: "Approach",
    content:
      "You bring the personality. We build the presence. We understand what makes you different and turn it into content that feels like you. From ideas and creation to posting, branding, and growth, we take care of the content journey.",
    accent: "cream" as const,
  },
];

const accentText: Record<string, string> = {
  pink: "text-ev-neon-pink",
  cyan: "text-ev-neon-cyan",
  yellow: "text-ev-neon-yellow",
  cream: "text-ev-neon-cream",
};
const accentBorder: Record<string, string> = {
  pink: "border-ev-neon-pink",
  cyan: "border-ev-neon-cyan",
  yellow: "border-ev-neon-yellow",
  cream: "border-white",
};

const founderPhotoColors = ["bg-ev-neon-cyan", "bg-ev-neon-pink"];
const founderBadgeColors = ["bg-ev-neon-yellow", "bg-ev-neon-cyan"];

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        {/* floating decor */}
        <div
          className="pointer-events-none absolute right-6 top-24 hidden aspect-square w-16 rotate-[12deg] border-[3px] border-ev-neon-pink bg-ev-neon-pink/20 shadow-brutal md:block lg:right-16 lg:w-24 float-gentle"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-6 top-44 hidden aspect-square w-10 rotate-[-8deg] border-[3px] border-ev-neon-cyan bg-ev-neon-cyan/30 shadow-brutal md:block lg:w-14 float-slow"
          aria-hidden
        />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                Here For You Since Day One
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              About Us
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              The World Doesn&apos;t Discover
              <br className="hidden md:block" /> What It Can&apos;t See.
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              Elan Vey exists for people who have a vision, but don&apos;t have
              a path to make the world see it.
            </p>
          </div>
        </div>
        <div className="stamp-edge-bottom mt-12 md:mt-16" aria-hidden />
      </section>

      {/* ============ WHAT SETS US APART (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-brutal text-3xl uppercase leading-tight text-ev-neon-pink md:text-5xl">
                What sets us apart?
              </h2>
              <p className="mt-6 max-w-4xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
                Elan Vey is built for anyone with something worth putting into
                the world — a product, business, skill, idea, craft, or personal
                vision — but without the time, expertise, or path to present it
                the way it deserves.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 60}
                  className={`flex items-start gap-4 border-[3px] border-black p-6 shadow-brutal hover-lift ${item.color}`}
                >
                  <span className="font-brutal text-2xl md:text-3xl">
                    {item.icon}
                  </span>
                  <p className="font-brutal text-sm uppercase leading-snug md:text-base">
                    {item.title}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RacetrackStrip />
      {/* ============ SLOGANS (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl space-y-5 md:space-y-7">
            {slogans.map((slogan, i) => (
              <div
                key={slogan}
                className={`border-[3px] border-black px-6 py-6 shadow-brutal hover-lift sm:px-10 sm:py-8 md:px-14 md:py-10 ${sloganColors[i % sloganColors.length]}`}
              >
                <p
                  className="text-center font-brutal text-2xl font-black uppercase leading-[0.95] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                  dangerouslySetInnerHTML={{ __html: slogan }}
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <RacetrackStrip />
      {/* ============ EV STAMP STORY (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <Reveal
              variant="left"
              className="space-y-6 font-bold leading-relaxed text-ev-black/80 md:space-y-8 md:text-lg"
            >
              <p>
                We started Elan Vey because the best content game in the world
                should not be reserved for people who already know how to play
                it.
              </p>
              <p>
                If you&apos;re holding an idea, a skill, a shop, a craft, or
                even just a feeling that the world should know who you are —
                you&apos;re exactly who we&apos;re here for.
              </p>
              <p>
                No confusing terms. No agency-sized promises. Just a real team
                that actually listens and a whole real-world marketing
                connection through Lavent Marketing that keeps the learning
                honest.
              </p>
            </Reveal>
            <Reveal variant="right" className="relative mx-auto">
              <div className="flex aspect-[4/5] w-full max-w-sm flex-col justify-between rounded-[1.5rem] border-[3px] border-black bg-ev-neon-yellow p-8 shadow-brutal-xl hover-lift">
                <p
                  className="font-brutal text-8xl text-ev-neon-red md:text-9xl"
                  style={creamShadow}
                >
                  EV
                </p>
                <p className="font-brutal text-sm uppercase tracking-widest text-ev-black md:text-base">
                  Creative · Honest · For Everyone
                </p>
              </div>
              <div
                className="absolute -bottom-5 -right-5 hidden aspect-square w-24 rotate-[-10deg] border-[3px] border-black bg-ev-neon-pink shadow-brutal md:block float-gentle"
                aria-hidden
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MISSION & VALUES (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <p className="font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-yellow">
              What drives us
            </p>
            <h2
              className="mt-4 mb-12 font-brutal text-3xl uppercase text-ev-neon-yellow md:text-5xl"
              style={yellowShadow}
            >
              Mission &amp; values
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className={`border-[3px] p-6 hover-lift md:p-8 ${accentBorder[item.accent]}`}
              >
                <span
                  className={`font-brutal text-5xl md:text-6xl ${accentText[item.accent]}`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-brutal text-xl uppercase text-white md:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                <p
                  className="mt-4 font-bold leading-relaxed text-white/75 md:text-lg"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <RacetrackStrip />
      {/* ============ FOUNDERS (paper) ============ */}
      <section
        id="founders"
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal className="mb-12 md:mb-16">
            <p className="font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              The Team
            </p>
            <h2 className="mt-4 font-brutal text-3xl uppercase text-ev-neon-pink md:text-4xl lg:text-5xl">
              Meet the people behind Elan Vey
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80">
              Real people, honest values, and a true passion for helping others
              bring their ideas to life.
            </p>
          </Reveal>

          <div className="space-y-20 md:space-y-24">
            {founders.map((founder, i) => (
              <article
                key={founder.id}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <Reveal
                  variant={i % 2 === 1 ? "right" : "left"}
                  className="relative lg:[direction:ltr]"
                >
                  <div
                    className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.25rem] border-[3px] border-black shadow-brutal-lg hover-lift ${founderPhotoColors[i % founderPhotoColors.length]}`}
                  >
                    {founder.imageUrl ? (
                      <img 
                        src={founder.imageUrl} 
                        alt={founder.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-brutal text-5xl text-ev-black/30 md:text-6xl">
                        [PHOTO]
                      </span>
                    )}
                    <div
                      className="absolute top-4 left-4 h-8 w-8 border-t-[3px] border-l-[3px] border-black/50"
                      aria-hidden
                    />
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 border-b-[3px] border-r-[3px] border-black/50"
                      aria-hidden
                    />
                  </div>
                  <span
                    className={`absolute -top-4 -right-4 hidden rotate-[12deg] border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal md:inline-block float-medium ${founderBadgeColors[i % founderBadgeColors.length]}`}
                  >
                    {founder.role}
                  </span>
                </Reveal>

                <Reveal
                  variant={i % 2 === 1 ? "left" : "right"}
                  className="lg:[direction:ltr]"
                >
                  <div className="mb-4 md:hidden">
                    <span
                      className={`inline-block rotate-[-5deg] border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal ${founderBadgeColors[i % founderBadgeColors.length]}`}
                    >
                      {founder.role}
                    </span>
                  </div>
                  <p className="hidden font-brutal text-xs uppercase tracking-[0.25em] text-ev-neon-pink md:block">
                    {founder.role}
                  </p>
                  <h3 className="mt-4 font-brutal text-3xl uppercase text-ev-neon-pink md:text-4xl lg:text-5xl">
                    {founder.name}
                  </h3>
                  <p className="mt-6 text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
                    {founder.bio}
                  </p>
                  {founder.quote && (
                    <blockquote className="mt-8 rounded-[1rem] border-[3px] border-black bg-ev-neon-yellow p-6 shadow-brutal hover-lift">
                      <p className="font-brutal text-lg uppercase leading-snug text-ev-black">
                        &ldquo;{founder.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {founder.linkedinUrl && (
                      <a
                        href={founder.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 items-center justify-center border-[3px] border-black bg-ev-neon-cyan px-6 font-brutal text-sm font-bold uppercase tracking-wider text-black shadow-brutal transition-all hover:-translate-y-0.5 hover:scale-105 hover:shadow-brutal-lg"
                        aria-label={`${founder.name} on LinkedIn`}
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-center text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-brutal text-3xl uppercase text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl"
              style={yellowShadow}
            >
              Want to work with us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-bold text-white/80 md:text-lg">
              Let&apos;s chat about how Elan Vey can help you take the next
              step.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/about#founders" variant="secondary" size="lg">
                Meet the Founders
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <RacetrackStrip />
    </>
  );
}
