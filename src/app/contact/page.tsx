import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Elan Vey — we&apos;d love to hear about your ideas and how we can help you.",
  alternates: { canonical: `${siteConfig.url}/contact` },
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
    label: "Call Us",
    value: siteConfig.contact.phone,
    icon: "☎",
    color: "bg-ev-neon-pink text-white",
    href: `tel:+919827249743`,
  },
  {
    label: "Find Us",
    value: siteConfig.contact.address,
    icon: "◎",
    color: "bg-ev-neon-yellow",
    href: undefined as string | undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        <div
          className="pointer-events-none absolute right-8 top-24 hidden aspect-square w-14 rotate-[10deg] border-[3px] border-ev-neon-pink bg-ev-neon-pink/20 shadow-brutal md:block float-gentle"
          aria-hidden
        />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                We Reply Within 24 Hours
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              Contact
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s <span className="text-ev-neon-pink">talk</span>
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              Ready to take the next step? Reach out and let&apos;s chat about how
              Elan Vey can help you. We reply fast!
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CARDS + FORM (paper) ============ */}
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
                    <a href={card.href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <Reveal variant="left" className="lg:col-span-2">
              <h2 className="font-brutal text-2xl uppercase text-ev-neon-pink md:text-4xl">
                Say hello!
              </h2>
              <p className="mt-4 text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
                Whether you&apos;re interested in design help, want to learn more
                about our subscription, or just want to say hi — we&apos;d
                absolutely love to hear from you. No question is too small!
              </p>

              <div className="mt-10 hidden space-y-6 lg:block">
                <div className="rounded-[1rem] border-[3px] border-black bg-ev-neon-yellow p-6 shadow-brutal hover-lift">
                  <p className="font-brutal text-sm uppercase">Office Hours</p>
                  <p className="mt-2 font-bold">Mon – Fri: 9am – 6pm</p>
                  <p className="font-bold opacity-70">Sat: By Appointment</p>
                </div>
                <div className="rounded-[1rem] border-[3px] border-black bg-ev-neon-cream p-6 shadow-brutal hover-lift">
                  <p className="font-brutal text-sm uppercase">Follow &amp; Connect</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={siteConfig.social.instagram}
                      className="flex h-11 w-11 items-center justify-center border-[3px] border-black bg-white font-brutal text-sm shadow-brutal transition-all hover:-translate-y-0.5 hover:scale-110 hover:shadow-brutal-lg"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IG
                    </a>
                    <a
                      href={siteConfig.social.facebook}
                      className="flex h-11 w-11 items-center justify-center border-[3px] border-black bg-white font-brutal text-sm shadow-brutal transition-all hover:-translate-y-0.5 hover:scale-110 hover:shadow-brutal-lg"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FB
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex h-11 w-11 items-center justify-center border-[3px] border-black bg-white font-brutal text-sm shadow-brutal transition-all hover:-translate-y-0.5 hover:scale-110 hover:shadow-brutal-lg"
                      aria-label="Email"
                    >
                      @
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" className="lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
