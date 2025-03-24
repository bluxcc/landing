import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        short: { raw: "(min-width: 1500px) and (max-height: 900px)" },
        tall: { raw: "(min-width: 1500px) and (min-height: 901px)" },
        mobile: { max: "770px" },
        tablet: { min: "771px", max: "1297px" },
        desktop: { min: "1298px" },
      },
    },
  },
};

export default config;
