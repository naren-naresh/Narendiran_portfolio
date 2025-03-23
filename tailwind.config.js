export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure your files are included
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      keyframes: {
        fade1: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        fade2: {
          "0%, 50%": { opacity: "0" },
          "51%, 100%": { opacity: "1" },
        },
      },
      animation: {
        fade1: "fade1 10s infinite",
        fade2: "fade2 10s infinite",
      },
    },
  },
  plugins: [],
};
