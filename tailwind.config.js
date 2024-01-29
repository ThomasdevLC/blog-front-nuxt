/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
      screens: {
        sm: "640px", // Small screens,
        md: "768px", // Medium screens,
        lg: "1024px", // Large screens,
        xl: "1600px", // Large screens,
        xxl: "1920px", // Extra large screens,
      },
    },
  },
  plugins: [],
};
