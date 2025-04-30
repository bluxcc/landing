import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#0C1083",
        gray: "#999999",
      },
      screens: {
        short: { raw: "(max-width: 1924px) and (max-height: 849px)" },
        tall: { raw: "(min-width: 1500px) and (min-height: 850px)" },
        mobile: { max: "771px" },
        tablet: { min: "771px", max: "1279px" },
        desktop: { min: "1280px" },
      },
    },
  },
};

export default config;
