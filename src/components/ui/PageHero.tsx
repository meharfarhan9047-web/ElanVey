import { ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  large?: boolean;
  dark?: boolean;
  accent?: "yellow" | "pink" | "cyan" | "mixed";
  badge?: string;
  decorative?: boolean;
}

export function PageHero({
  label,
  title,
  subtitle,
  children,
  large = false,
  dark = false,
  accent = "yellow",
  badge,
  decorative = true,
}: PageHeroProps) {
  const accentClass =
    accent === "pink"
      ? "text-ev-neon-pink"
      : accent === "cyan"
        ? "text-ev-neon-cyan"
        : accent === "mixed"
          ? "text-ev-neon-yellow"
          : "text-ev-neon-yellow";

  return (
    <div
      className={`relative overflow-hidden section-padding pb-12 md:pb-16 ${
        dark ? "section-dark" : "paper-bg"
      }`}
    >
      {decorative && (
        <>
          <div
            className="pointer-events-none absolute right-6 top-20 hidden aspect-square w-20 rotate-[12deg] border-[3px] border-ev-neon-pink/40 bg-ev-neon-pink/10 md:block lg:right-16 lg:top-24 lg:w-28 float-gentle"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-4 top-32 hidden aspect-square w-12 rotate-[-8deg] border-[3px] border-ev-neon-yellow/50 bg-ev-neon-yellow/20 md:block lg:left-12 lg:top-40 lg:w-16 float-slow"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-20 right-1/3 hidden h-2 w-24 rotate-[5deg] bg-ev-neon-cyan/60 md:block lg:bottom-28 lg:w-32 float-medium"
            aria-hidden
          />
        </>
      )}

      <div className="container-content relative">
        {badge && (
          <div className="mb-6 hero-stagger-label">
            <span className="caution-tape !relative !top-0 !left-0 !inline-block !transform-none bg-ev-neon-cyan md:!text-sm">
              {badge}
            </span>
          </div>
        )}
        {label && (
          <p
            className={`mb-6 font-brutal text-xs uppercase tracking-[0.3em] ${
              dark ? "text-ev-neon-yellow" : "text-ev-neon-pink"
            } ${badge ? "mt-8" : ""} hero-stagger-label`}
          >
            {label}
          </p>
        )}
        <h1
          className={`brutal-text text-balance ${accentClass} hero-stagger-title ${
            large
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          } ${
            dark
              ? accent === "pink"
                ? "brutal-text-charcoal"
                : accent === "cyan"
                  ? "brutal-text-cyan"
                  : "brutal-text-pink"
              : ""
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-8 max-w-2xl text-base font-bold leading-snug md:text-lg hero-stagger-subtitle ${
              dark ? "text-white/80" : "text-ev-black"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 hero-stagger-children">{children}</div>}
      </div>
      {!dark && <div className="stamp-edge-bottom mt-10 md:mt-14" aria-hidden />}
    </div>
  );
}
