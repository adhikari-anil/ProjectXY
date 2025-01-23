/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        blink: 'blink 1s steps(2, start) infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          '0%, 100%':{opacity: 1},
          '50%': {opacity: 0},
        }
      },
    },
  },
  plugins: [],
};
