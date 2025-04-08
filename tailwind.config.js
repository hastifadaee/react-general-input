const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // slider: "url(/assets/images/thumb2.png)",
        "gradient-slider":
          "linear-gradient(90deg,rgb(0% 65.1% 57.65%)0%, rgb(0% 65.1% 57.65%) 100%)",
        collaborating:
          "linear-gradient(180deg, rgba(0,166,147,1) 0%, rgba(77,193,179,1) 35%, rgba(0,166,147,1) 100%);",
        search:
          "linear-gradient(180deg, rgba(0,166,147,1) 0%, rgba(77,193,179,1) 35%, rgba(0,166,147,1) 100%);",
      },
      screens: {
        xs: "320px",
        sm: "481px",
        md: "769px",
        lg: "1025px",
        xl: "1129px",
        "2xl": "1300px",
        "3xl": "1721px",
        "4xl": "1921px",
      },
      container: {
        center: true,
        screens: {
          xs: "370px",
          sm: "480px",
          md: "768px",
          lg: "1024px",
          xl: "1128px",
        },
      },
      colors: {
        primary: {
          "0": "#000",
          "1": "#000A09",
          "2": "#00110f",
          "3": "#00211d",
          "4": "#00322c",
          "5": "#00423b",
          "6": "#00a693",
          "7": "#1AAF9E",
          "8": "#33B8A9",
          "9": "#4DC1B3",
          "10": "#80d3c9",
          "11": "#B3E4DF",
          "12": "#E6F6F4",
          "13": "#F0FAF8",
          "14": "#F4FBFA",
          "15": "#FFFFFF",
        },
        secondary: {
          "0": "#000",
          "1": "#1C080B",
          "2": "#290C10",
          "3": "#45141B",
          "4": "#601C25",
          "5": "#7A222F",
          "6": "#CC2430",
          "7": "#DB333F",
          "8": "#E04D57",
          "9": "#E97F87",
          "10": "#F2B3B7",
          "11": "#F6CCCF",
          "12": "#FBE6E7",
        },
        neutral: {
          "0": "#000",
          "1": "#11151C",
          "2": "#181D27",
          "3": "#252B37",
          "4": "#414651",
          "5": "#535862",
          "6": "#717680",
          "7": "#A4A7AE",
          "8": "#D5D7DA",
          "9": "#E9EAEB",
          "10": "#F5F5F5",
          "11": "#FAFAFA",
          "12": "#FBFEFF",
          "13": "#FFFFFF",
        },
        danger: {
          "0": "#F04438",
        },
        warning: {
          "0": "#F79009",
        },
        success: {
          "0": "#12B76A",
        },
        lowLevel: {
          "0": "#F0D800",
        },
      },
      fontFamily: {
        sans: ["IranSans", "sans-serif"],
      },
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  plugins: [],
});
export default config;
