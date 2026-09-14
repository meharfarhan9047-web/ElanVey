import { ReactNode } from "react";
import { ScallopDivider } from "@/components/ui/ScallopDivider";

interface CTABlockProps {
  title: string;
  description?: string;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}

export function CTABlock({
  title,
  description,
  children,
  dark = true,
  className = "",
}: CTABlockProps) {
  return (
    <>
      {dark && <ScallopDivider position="top" />}
      <div className={`section-padding ${dark ? "section-dark" : ""} ${className}`} style={!dark ? { backgroundImage: "url('/images/Bg_paper.jpg')", backgroundSize: "550px auto", backgroundRepeat: "repeat" } : {}}>
        <div className="container-content text-center">
          <h2
            className={`brutal-text mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
              dark ? "brutal-text-pink text-ev-neon-yellow" : "brutal-text-orange text-ev-neon-pink"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mx-auto mt-6 max-w-xl font-bold md:text-lg ${
                dark ? "text-white/80" : "text-ev-black"
              }`}
            >
              {description}
            </p>
          )}
          {children && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
      {dark && <ScallopDivider position="bottom" />}
    </>
  );
}
