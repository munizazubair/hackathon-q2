import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: "#272343",
        color2: "#FFFFFF",
        color3: "#F0F2F3",
        color4: "#636270",
        color5: "#029FAE",
        color6: "#007580",
        color7: "#01AD5A",
        color8: "#F5813F",
        color9: "#9A9CAA",
        color10: "#000000B2",
        color11: "#E5E5E5",
        color12: "#757575",
        color13: "#F4F4F4",
        color14: "#898989",
        color15: "#9F9F9F",
        color16: "#B88E2F",
        color17: "#1E28320D",
        color18: "#1E2832",
        color19: "#F7F7F7",
        color20: "#4F4F4F",
        color21: "#007580",
        color22: "#F9F9F926",
        color23: "#F9F9F9",
        color24: "#E1E3E5",
        color25: "#9A9CAA"
      },
    },
  },
  plugins: [],
};
export default config;
