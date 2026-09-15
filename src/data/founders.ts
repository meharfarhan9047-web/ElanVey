export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote?: string;
  linkedinUrl?: string;
  imageUrl?: string;
}

export const founders: Founder[] = [
  {
    id: "founder-khushan",
    name: "Khushan Rathor",
    role: "Founder",
    bio: "Dedicated to marketing learning and creating powerful brand identities that resonate with the target audience.",
    quote: "Your spotlight won't wait.",
    linkedinUrl: "https://www.linkedin.com/in/khushan-rathor-926032408",
    imageUrl: "/images/founders/Khushan Rathor.png",
  },
  {
    id: "founder-sriyansh",
    name: "Sriyansh Vemulakonda",
    role: "Founder",
    bio: "Passionate about creating ideas that stand out and helping creators reach their full potential.",
    quote: "If you can dream it, we can design it.",
    linkedinUrl: "https://www.linkedin.com/in/sriyansh-vemulakonda-949809428",
    imageUrl: "/images/founders/sriyansh vemulakonda.png",
  },
  {
    id: "founder-raghav",
    name: "Raghav Dadheech",
    role: "Founder",
    bio: "Focused on strategic growth and building foundations that allow content and businesses to scale sustainably.",
    quote: "Small steps every day lead to big things.",
    linkedinUrl: "https://www.linkedin.com/in/raghav-dadheech-434467415",
    imageUrl: "/images/founders/RAGHAV DADHEECH.png",
  },
];
