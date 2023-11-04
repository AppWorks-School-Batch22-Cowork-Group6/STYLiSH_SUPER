/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "1279px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      lg: { min: "1280px", max: "1921px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
