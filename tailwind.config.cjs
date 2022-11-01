/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9eb6ed",
          secondary: "#66f480",
          accent: "#5e6cc9",
          neutral: "#2E2833",
          "base-100": "#FAFAFA",
          info: "#469BC8",
          success: "#71EAA3",
          warning: "#F5BD2E",
          error: "#F7472B",
        },
      },
    ],
  },
};
