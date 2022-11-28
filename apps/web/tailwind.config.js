/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/images/bg-galaxy.png')",
        "duo-gradient": "linear-gradient(89.86deg, #9572FC, #43E7AD, #E1D55D)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {
        base: {
          300: "#121214",
        },
      },
    },
  },
  plugins: [],
};
