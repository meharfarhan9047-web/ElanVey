export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya S.",
    role: "Owner",
    company: "Local Boutique",
    review:
      "Elan Vey completely transformed how our shop looks online. The designs are so pretty and the team was so easy to talk to. Customers have noticed and we're getting more orders!",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul M.",
    role: "Founder",
    company: "Cafe Startup",
    review:
      "We didn't know where to start with our menu design and social media. Elan Vey explained everything simply and the results blew us away. Worth every rupee!",
    rating: 5,
  },
  {
    id: "3",
    name: "Ananya K.",
    role: "Content Creator",
    company: "Personal Page",
    review:
      "I'm a regular person trying to grow my socials. Elan Vey never made me feel silly for asking simple questions. They helped me find my style and my followers tripled!",
    rating: 5,
  },
  {
    id: "4",
    name: "Vikram T.",
    role: "Manager",
    company: "Family Shop",
    review:
      "Our family shop was stuck in the old days. Elan Vey modernized everything for us without losing our charm. Even my dad approves — that says everything!",
    rating: 5,
  },
];
