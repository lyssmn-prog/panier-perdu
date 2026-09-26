import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C2B2D",
        sage: "#8FA998",
        cream: "#F5F3EE",
        slateink: "#5B6663",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
