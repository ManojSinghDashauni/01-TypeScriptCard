/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-bottom": "url('../src/assets/images/bg-pattern-bottom.svg')",
        "pattern-card": "url('../src/assets/images/bg-pattern-card.svg')",
        "pattern-top": "url('../src/assets/images/bg-pattern-top.svg')",
        "pattern-victor": "url('../src/assets/images/image-victor.jpg')",
      },
    },
  },
  plugins: [],
};
