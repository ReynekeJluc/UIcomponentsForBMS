/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        blue: {
          120: "#3C5099",
          100: "#3256B0",
          50: "#6C8BC9",
          40: "#99C0F0",
          20: "#E4ECFC",
          10: "#F5F8FE",
          5: "#FAFCFF",
        },
        black: {
          100: "#333333",
          50: "#7B7D8A",
          40: "#33333366",
          35: "#9FA2B4",
          20: "#C7D2E3",
          15: "#C3C6CE",
          10: "#E5E5EB",
          5: "#F5F7FA",
        },
        red: {
          100: "#C61C1C",
          10: "#FDECEF",
        },
        orange: {
          100: "#FDA52C",
          10: "#FFF9E5",
          5: "#FFFCF2",
        },
        green: {
          100: "#37C570",
          10: "#EBF9F1",
        },
        white: {
          100: "#FFFFFF",
          60: "#FFFFFF99",
        },
        purple: {
          100: "#944EE0",
          10: "#F5EEFB",
        },
      },
    },
    fontFamily: {
      sans: ["Golos Text"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('postcss-import')
  ],
};
