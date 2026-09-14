import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Join the Elan Vey subscription waitlist — reach out and we'll get you started.",
  alternates: { canonical: `${siteConfig.url}/waitlist` },
};

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const contactCards = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    icon: "✉",
    color: "bg-ev-neon-cyan",
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Call / WhatsApp",
    value: siteConfig.contact.phone,
    icon: "☎",
    color: "bg-ev-neon-pink text-white",
    href: "https://wa.me/919827249743",
  },
  {
    label: "Find Us",
    value: siteConfig.contact.address,
    icon: "◎",
    color: "bg-ev-neon-yellow",
    href: undefined as string | undefined,
  },
];

export default function WaitlistPage() {
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
                Limited Spots · Reserve Yours
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              Subscription
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Join the <span className="text-ev-neon-pink">Waitlist</span>
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              Spots on the Elan Vey subscription are limited. Reach out and
              we&apos;ll add you to the list and get you started as soon as a
              place opens up.
            </p>
          </div>
        </div>
        <div className="stamp-edge-bottom mt-12 md:mt-16" aria-hidden />
      </section>

      {/* ============ CONTACT INFO + CTA (paper) ============ */}
      <section className="relative overflow-hidden py-16 md:py-24" style={paperBg}>
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            {contactCards.map((card, i) => {
              const inner = (
                <>
                  <span className="flex-shrink-0 font-brutal text-3xl">
                    {card.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-brutal text-xs uppercase tracking-widest opacity-80">
                      {card.label}
                    </p>
                    <p className="mt-1 break-words font-bold">{card.value}</p>
                  </div>
                </>
              );
              const cls = `flex items-start gap-4 rounded-[1rem] border-[3px] border-black p-5 shadow-brutal hover-lift ${card.color}`;
              return (
                <Reveal key={card.label} delay={i * 70}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mx-auto max-w-3xl rounded-[1.5rem] border-[3px] border-black bg-ev-neon-cream p-8 text-center shadow-brutal-xl md:p-12">
            <h2 className="font-brutal text-2xl uppercase text-ev-neon-pink md:text-4xl">
              Ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
              Message us on WhatsApp or drop an email — tell us a little about
              what you&apos;re building and we&apos;ll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="https://wa.me/919827249743" external size="lg">
                Message on WhatsApp
              </Button>
              <Button
                href={`mailto:${siteConfig.contact.email}`}
                variant="secondary"
                size="lg"
              >
                Email Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
