import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'1.5rem', // => 24px
      },
      transitionDuration: {
        '300': '300ms', // Define the transition duration as 300ms
        // Add more custom durations if needed
      },
    },
  },
  plugins: [],
};
export default config;
