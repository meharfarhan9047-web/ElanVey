interface ScallopDividerProps {
  position?: "top" | "bottom";
  className?: string;
  fillColor?: string;
}

export function ScallopDivider({
  position = "top",
  className = "",
  fillColor = "currentColor",
}: ScallopDividerProps) {
  // Generate 50 crisp scallop arches across a 1200px viewBox
  let d = "";
  if (position === "top") {
    d = "M 0 32 ";
    for (let x = 0; x < 1200; x += 24) {
      d += `A 12 16 0 0 1 ${x + 24} 32 `;
    }
    d += "L 1200 32 L 0 32 Z";
  } else {
    d = "M 0 0 ";
    for (let x = 0; x < 1200; x += 24) {
      d += `A 12 16 0 0 0 ${x + 24} 0 `;
    }
    d += "L 1200 0 L 0 0 Z";
  }

  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none text-ev-black ${
        position === "top" ? "-mb-[1px]" : "-mt-[1px]"
      } ${className}`}
      aria-hidden
    >
      <svg
        className="block w-full h-5 sm:h-7 md:h-9 lg:h-10"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
      >
        <path d={d} fill={fillColor} />
      </svg>
    </div>
  );
}
