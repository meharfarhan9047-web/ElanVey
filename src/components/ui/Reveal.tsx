"use client";

import { ElementType, ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: "up" | "left" | "right";
}

/**
 * Lightweight scroll-reveal wrapper used across the internal pages.
 * Starts hidden, then fades/slides into place once it enters the viewport.
 * Mirrors the motion language used on the homepage (see globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base =
    variant === "left"
      ? "slide-in-left"
      : variant === "right"
        ? "slide-in-right"
        : "animate-on-scroll";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${className}`}
    >
      {children}
    </Tag>
  );
}
