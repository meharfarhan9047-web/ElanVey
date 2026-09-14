"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[3px] border-black bg-ev-neon-yellow font-brutal uppercase text-ev-neon-red shadow-brutal hover:scale-105",
  secondary:
    "border-[3px] border-black bg-ev-neon-cream font-brutal uppercase text-ev-black shadow-brutal hover:scale-105",
  ghost:
    "font-bold text-ev-black underline decoration-2 underline-offset-4 hover:text-ev-neon-pink",
  outline:
    "border-[3px] border-black bg-transparent font-brutal uppercase text-ev-black hover:bg-ev-neon-yellow",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm",
  md: "px-6 py-3 md:px-8 md:py-4 text-sm md:text-base",
  lg: "px-6 py-4 md:px-10 md:py-5 text-sm md:text-lg",
};

const Spinner = () => (
  <svg
    className="h-5 w-5 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    style={{ animation: "buttonSpin 0.8s linear infinite" }}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      children,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const classes = `inline-flex text-center items-center justify-center gap-2 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ev-neon-pink ${variants[variant]} ${sizes[size]} ${isDisabled ? "pointer-events-none opacity-60" : ""} ${className}`;

    const content = (
      <>
        {loading && <Spinner />}
        {!loading && children}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={isDisabled} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
