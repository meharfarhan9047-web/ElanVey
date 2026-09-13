import { Reveal } from "@/components/ui/Reveal";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}

interface LegalBadge {
  text: string;
  color: string;
}

interface LegalPageProps {
  label: string;
  title: string;
  lastUpdated: string;
  badge: string;
  accent?: "pink" | "yellow";
  introBadges: LegalBadge[];
  introHtml: string;
  sections: LegalSection[];
}

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const sectionTints = ["bg-ev-neon-cream", "bg-white", "bg-ev-neon-yellow"];

export function LegalPage({
  label,
  title,
  lastUpdated,
  badge,
  accent = "pink",
  introBadges,
  introHtml,
  sections,
}: LegalPageProps) {
  const headline = accent === "yellow" ? "text-ev-neon-yellow" : "text-ev-neon-pink";

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                {badge}
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              {label}
            </p>
            <h1
              className={`hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] ${headline} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              {title}
            </h1>
            <p className="hero-stagger-subtitle mt-6 font-bold text-ev-black/70 md:text-lg">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTENT (paper) ============ */}
      <section className="relative overflow-hidden py-16 md:py-24" style={paperBg}>
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* TOC */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-[1rem] border-[3px] border-black bg-ev-neon-yellow p-6 shadow-brutal">
                <p className="font-brutal text-xs uppercase tracking-widest">
                  Table of Contents
                </p>
                <ul className="mt-6 space-y-3">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-center gap-2 text-sm font-bold transition-colors hover:text-ev-neon-pink"
                      >
                        <span className="font-brutal text-xs text-ev-neon-red transition-transform group-hover:translate-x-1">
                          {s.number}
                        </span>
                        <span
                          className="flex-1 leading-tight"
                          dangerouslySetInnerHTML={{ __html: s.title }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Sections */}
            <div className="space-y-8 lg:col-span-3">
              <Reveal className="rounded-[1rem] border-[3px] border-black bg-ev-neon-cream p-6 shadow-brutal md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {introBadges.map((b) => (
                    <span
                      key={b.text}
                      className={`inline-flex border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal ${b.color}`}
                    >
                      {b.text}
                    </span>
                  ))}
                </div>
                <p
                  className="mt-6 font-bold leading-relaxed text-ev-black/80"
                  dangerouslySetInnerHTML={{ __html: introHtml }}
                />
              </Reveal>

              {sections.map((section, i) => (
                <Reveal
                  key={section.id}
                  as="article"
                  delay={(i % 2) * 60}
                  className={`rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 ${sectionTints[i % sectionTints.length]}`}
                >
                  <div id={section.id} className="scroll-mt-28">
                    <div className="flex items-baseline gap-4">
                      <span className="font-brutal text-5xl text-ev-neon-pink/40 md:text-6xl">
                        {section.number}
                      </span>
                      <h2
                        className="flex-1 font-brutal text-xl uppercase text-ev-black md:text-2xl"
                        dangerouslySetInnerHTML={{ __html: section.title }}
                      />
                    </div>
                    <div className="mt-6 space-y-4 md:pl-8">
                      {section.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="font-bold leading-relaxed text-ev-black/80"
                          dangerouslySetInnerHTML={{ __html: p }}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
