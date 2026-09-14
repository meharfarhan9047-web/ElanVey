"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ScallopDivider } from "@/components/ui/ScallopDivider";

interface SectionProps {
  noDividerTop?: boolean;
  noDividerBottom?: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
  tone?: "paper" | "dark";
  staggerChildren?: boolean;
  staggerDelay?: number;
  variant?: "fade-up" | "slide-left" | "slide-right";
}

export function Section({
  children,
  className = "",
  id,
  animate = true,
  tone = "paper",
  noDividerTop = false,
  noDividerBottom = false,
  staggerChildren = false,
  staggerDelay = 80,
  variant = "fade-up",
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");

          if (staggerChildren) {
            const children = el.querySelectorAll<HTMLElement>(".stagger-child");
            children.forEach((child, index) => {
              child.style.transitionDelay = `${index * staggerDelay}ms`;
              requestAnimationFrame(() => {
                child.classList.add("visible");
              });
            });
          }

          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (variant === "slide-left") {
      el.classList.add("slide-in-left");
    } else if (variant === "slide-right") {
      el.classList.add("slide-in-right");
    } else {
      el.classList.add("animate-on-scroll");
    }
    observer.observe(el);

    return () => observer.disconnect();
  }, [animate, staggerChildren, staggerDelay, variant]);

  return (
    <>
      {tone === "dark" && !noDividerTop && <ScallopDivider position="top" />}
      <section
        ref={ref}
        id={id}
        className={`section-padding ${
          tone === "dark" ? "section-dark" : ""
        } ${className}`}
        style={tone === "paper" ? { backgroundImage: "url('/images/Bg_paper.jpg')", backgroundSize: "550px auto", backgroundRepeat: "repeat" } : {}}
      >
        {children}
      </section>
      {tone === "dark" && !noDividerBottom && <ScallopDivider position="bottom" />}
    </>
  );
}
