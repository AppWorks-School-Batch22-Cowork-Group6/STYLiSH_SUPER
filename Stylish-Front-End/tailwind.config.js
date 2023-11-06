/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "1279px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      lg: { min: "1280px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      colors: {
        default: "#3f3a3a",
        button: "#fcc89b",
        lightgreen: "#ddffbb",
        lightbrown: "#bb7744",
      },
    },
  },
  plugins: [],
};
