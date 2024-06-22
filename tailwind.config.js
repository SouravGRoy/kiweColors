/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "shadows-into-light": ["Shadows Into Light", "cursive"],
        "spicy-rice": ["Spicy Rice", "cursive"],
        NeueMontreal: ["NeueMontreal-Regular", "sans-serif"],
        founders: ["Founders Grotesk", "sans-serif"],
        foundersCond: ["Founders Grotesk X-Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
