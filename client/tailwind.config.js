/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#020617",
      "mine-shaft": "#333333",
      "bondie-blue": "#00b2b3",
      "golden-tainoi": "#ffcc66",
      "neon-carrot": "#ff9933",
    },
    extend: {
      screens: {
        "1bp": { max: "1300px" },
        "2bp": { max: "1160px" },
        "3bp": { max: "868px" },
        "4bp": { max: "640px" },
        "5bp": { max: "543px" },
      },
    },
  },
  plugins: [],
};
