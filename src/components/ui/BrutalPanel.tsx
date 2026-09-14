import { ReactNode } from "react";

interface BrutalPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "cream" | "dark" | "pink" | "yellow";
}

export function BrutalPanel({
  children,
  className = "",
  variant = "cream",
}: BrutalPanelProps) {
  const variantClass =
    variant === "dark"
      ? "brutal-card-dark"
      : variant === "pink"
        ? "brutal-card-pink"
        : variant === "yellow"
          ? "brutal-card-yellow"
          : "brutal-card";

  return <div className={`${variantClass} ${className}`}>{children}</div>;
}

/** @deprecated Use BrutalPanel — kept for import compatibility */
export const GlassPanel = BrutalPanel;
