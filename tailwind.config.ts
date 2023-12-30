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
        primary: "#6dbe45",
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(#fff, rgba(86, 168, 119, 0.2), #fff);",
      },
    },
  },
  plugins: [],
};
export default config;
