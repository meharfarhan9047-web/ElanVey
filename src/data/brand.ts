export const brand = {
  name: "Elan Vey",
  style: "neo-brutalism",
  tagline: "Architect your limelight",

  colors: {
    yellow: "#FFE600",
    pink: "#FF0066",
    red: "#FF0033",
    cyan: "#00CCFF",
    blue: "#0066FF",
    orange: "#FF8C00",
    cream: "#F5F0E1",
    paper: "#E8E8E4",
    black: "#000000",
    white: "#FFFFFF",
  },

  gradients: {
    pill: "linear-gradient(90deg, #FF0066 0%, #FF0033 50%, #CC0000 100%)",
    progress: "linear-gradient(90deg, #66FF00 0%, #0066FF 100%)",
  },

  typography: {
    display: "Archivo Black",
    body: "DM Sans",
  },

  shadows: {
    text: "4px 4px 0 #000, 5px 5px 0 #000",
    textLarge: "6px 6px 0 #000, 7px 7px 0 #000",
    box: "4px 4px 0 0 #000000",
    boxLarge: "6px 6px 0 0 #000000",
  },

  patterns: {
    checkerboard: "Black & white 20px checkerboard dividers",
    stampEdge: "Scalloped postage-stamp section dividers",
    paperTexture: "Subtle crumpled paper noise overlay",
  },

  components: {
    navbar: "Gradient pill with yellow logo + Subscribe Now button",
    buttonPrimary: "Yellow fill, red text, brutal shadow",
    buttonSecondary: "Cream fill, black border, brutal shadow",
    card: "Solid fill, 3px black border, hard offset shadow — no blur, no glass",
  },

  voice: {
    tone: ["Bold", "Confident", "Direct", "Creative", "Ambitious"],
    avoid: ["Generic corporate", "Soft luxury", "Over-polished SaaS"],
  },
} as const;

export type BrandColor = keyof typeof brand.colors;
