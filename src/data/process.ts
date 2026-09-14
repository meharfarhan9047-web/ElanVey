export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Tell us your vision",
    description:
      "Tell us what you want to create, who you want to reach, and where you want to go.",
  },
  {
    index: "02",
    title: "We build your game-plan",
    description:
      "We dive into your niche, study your competitors, find what's working, spot opportunities, and build a content strategy tailored to you.",
  },
  {
    index: "03",
    title: "You Create. We Refine.",
    description:
      "Bring the ideas. We help with hooks, scripts, editing, design, titles and everything in between.",
  },
  {
    index: "04",
    title: "Learn. Improve. Repeat.",
    description:
      "We study what worked, what didn't, and use it to make your next piece even better.",
  },
  {
    index: "05",
    title: "Watch Yourself Grow",
    description:
      "Better content. Bigger reach. A growing audience. And a creator who gets better with every upload.",
  },
];

/** Steps shown on homepage section 4 mockup */
export const homepageProcessSteps = processSteps.slice(0, 2);
