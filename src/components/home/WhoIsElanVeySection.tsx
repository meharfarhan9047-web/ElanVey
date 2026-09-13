import {
  BlueStarIcon,
  PacManIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { audienceCategories, type AudienceItem } from "@/data/homeServices";

function AudienceCell({ item }: { item: AudienceItem }) {
  if (item.type === "pill") {
    const colorClass =
      item.color === "cream"
        ? "audience-pill-cream"
        : item.color === "pink"
          ? "audience-pill-pink"
          : item.color === "yellow"
            ? "audience-pill-yellow"
            : "audience-pill-cyan";

    return (
      <div
        className={`${colorClass} flex w-full max-w-[200px] items-center justify-center px-6`}
      >
        <span className="font-brutal text-xs uppercase text-ev-black md:text-sm">
          {item.label}
        </span>
      </div>
    );
  }

  const icons = {
    pacman: <PacManIcon />,
    star: <BlueStarIcon />,
    triangle: <WhiteTriangleIcon />,
    sparkle: <SparkleIcon />,
  };

  return (
    <div className="flex items-center justify-center">
      {icons[item.icon]}
    </div>
  );
}

export function WhoIsElanVeySection() {
  const rows: AudienceItem[][] = [];
  for (let i = 0; i < audienceCategories.length; i += 2) {
    rows.push(audienceCategories.slice(i, i + 2));
  }

  return (
    <section className="relative bg-ev-black pb-8 pt-10 md:pb-12 md:pt-14">
      <div className="container-content px-5 md:px-8 lg:px-12">
        <h2 className="text-center font-brutal text-xl font-bold text-ev-white md:text-2xl">
          Who is Elan Vey for?
        </h2>

        <div className="mx-auto mt-10 max-w-md space-y-6 md:mt-14 md:max-w-lg md:space-y-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 items-center gap-6 md:gap-8"
            >
              {row.map((item) => (
                <div
                  key={item.id}
                  className={`flex ${
                    item.side === "left" ? "justify-start" : "justify-end"
                  }`}
                >
                  <AudienceCell item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
