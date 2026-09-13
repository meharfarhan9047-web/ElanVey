export interface Service {
  id: string;
  index: string;
  name: string;
  description: string;
  benefits: string[];
  tag?: string;
}

export const services: Service[] = [
  {
    id: "foundation",
    index: "01",
    name: "Build Your Foundation",
    description:
      "We help you figure out the best way to present your ideas so that people actually notice and remember them.",
    benefits: [
      "Clear Content Direction.",
      "Strong Positioning & Identity.",
      "Understanding Your Audience.",
      "A Strategy Built Around You.",
    ],
    tag: "Planning",
  },
  {
    id: "create-and-grow",
    index: "02",
    name: "Create & Grow",
    description:
      "Get noticed on the internet! We help you build your presence online so more people can find and follow what you do.",
    benefits: [
      "Content Ideas That Stand Out.",
      "Better Titles & Thumbnails.",
      "Actionable Feedback & Optimisation.",
      "A Roadmap For Consistent Growth.",
    ],
    tag: "Growth",
  },
];
