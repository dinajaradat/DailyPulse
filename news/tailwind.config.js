/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bgLight: "#EAF4F4",
        bgDark: "#14242B",

        minHeaderLight: "#CCE3DE",
        minHeaderDark: "#2F4550",
        buttonbg: "#6B9080",

        fontDark: "#F6FFF8",
        signup: "#02a8ae",
      },
      width: {
        120: "35rem",
        100: "40rem",
      },
      padding: {
        100: "402px",
      },
      gap: {
        100: "40rem",
      },
      height: {
        100: "32rem",
        99: "80vh",
      },
      maxHeight: {
        107: "6.688rem",
      },
    },
  },
  plugins: [],
});

// font - serif;
