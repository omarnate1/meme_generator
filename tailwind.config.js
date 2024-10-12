/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      headerColor: {
        "custom-gradient":
          "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
      },
    },
  },
  plugins: [],
};
