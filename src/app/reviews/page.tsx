import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RacetrackStrip } from "@/components/ui/RacetrackStrip";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read real stories from people just like you who worked with Elan Vey.",
  alternates: { canonical: `${siteConfig.url}/reviews` },
};

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const yellowShadow = { textShadow: "3px 3px 0 #FF1744, 6px 6px 0 #660022" };

const summaryStats = [
  {
    value: "★ 4.9",
    label: "Average Rating",
    color: "bg-ev-neon-pink text-white",
  },
  { value: "50+", label: "Happy Clients", color: "bg-ev-neon-cyan" },
  { value: "100%", label: "Come Back Rate", color: "bg-ev-neon-yellow" },
];

const cardColorCycle = [
  "",
  "bg-ev-neon-cyan",
  "bg-ev-neon-yellow",
  "",
  "bg-ev-neon-yellow",
  "bg-ev-neon-cyan",
  "",
  "bg-ev-neon-pink text-white",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < rating ? "text-ev-neon-pink" : "opacity-20"}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        <div
          className="pointer-events-none absolute left-8 top-28 hidden font-brutal text-6xl text-ev-neon-pink/20 md:block float-slow"
          aria-hidden
        >
          ★
        </div>
        <div
          className="pointer-events-none absolute right-10 top-24 hidden font-brutal text-5xl text-ev-neon-cyan/30 md:block float-medium"
          aria-hidden
        >
          ✦
        </div>
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                Real Stories · Real People
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              Reviews
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Loved by <span className="text-ev-neon-pink">real people</span>
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              Honest feedback from people just like you who trusted Elan Vey
              with their ideas.
            </p>
          </div>
        </div>
        <div className="stamp-edge-bottom mt-12 md:mt-16" aria-hidden />
      </section>

      {/* ============ STATS + REVIEWS (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="mb-16 grid gap-5 sm:grid-cols-3">
            {summaryStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 80}
                className={`flex flex-col items-center justify-center rounded-[1rem] border-[3px] border-black px-4 py-5 shadow-brutal hover-lift md:px-6 ${stat.color}`}
              >
                <span className="font-brutal text-3xl md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 font-brutal text-xs uppercase tracking-wider opacity-80">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, i) => {
              const isFeatured = i === 0;
              const colorClass = isFeatured
                ? "md:col-span-2 bg-ev-neon-pink text-white md:p-12"
                : cardColorCycle[i % cardColorCycle.length] ||
                  "bg-ev-neon-cream";
              return (
                <Reveal
                  key={testimonial.id}
                  delay={(i % 2) * 80}
                  as="blockquote"
                  className={`relative rounded-[1.25rem] border-[3px] border-black p-8 shadow-brutal hover-lift md:p-10 ${colorClass}`}
                >
                  {isFeatured && (
                    <span className="ribbon-badge bg-ev-neon-yellow text-ev-neon-red">
                      Most Loved
                    </span>
                  )}
                  <StarRating rating={testimonial.rating} />
                  <p
                    className={`mt-6 font-bold leading-relaxed ${
                      isFeatured ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                  <footer
                    className={`mt-8 flex items-center gap-4 border-t-[3px] pt-6 ${
                      colorClass.includes("text-white")
                        ? "border-white/20"
                        : "border-black/20"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center border-[3px] font-brutal text-sm ${
                        colorClass.includes("text-white")
                          ? "border-white bg-ev-neon-yellow text-ev-black"
                          : "border-black bg-ev-neon-yellow"
                      }`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <cite className="flex-1 not-italic">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-brutal uppercase">
                          {testimonial.name}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border-[2px] px-2 py-0.5 text-[10px] font-brutal uppercase ${
                            colorClass.includes("text-white")
                              ? "border-white/50 text-white/80"
                              : "border-ev-neon-cyan text-ev-black/70"
                          }`}
                          title="Verified Client"
                        >
                          <span className="text-ev-neon-cyan">✓</span>
                          Real Client
                        </span>
                      </div>
                      <p className="text-sm font-bold opacity-70">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </cite>
                  </footer>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <RacetrackStrip />
      {/* ============ CTA (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-center text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2
              className="mx-auto max-w-4xl font-brutal text-3xl uppercase text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl"
              style={yellowShadow}
            >
              Join our happy family
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-bold text-white/80 md:text-lg">
              Experience the Elan Vey difference for yourself. We can&apos;t
              wait to meet you!
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Start Your Journey
              </Button>
              <Button href="/subscription" variant="secondary" size="lg">
                View Subscription
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <RacetrackStrip />
    </>
  );
}
