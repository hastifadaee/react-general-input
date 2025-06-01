const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     0: "#000",
      //     1: "#000A09",
      //     2: "#00110f",
      //     3: "#00211d",
      //     4: "#00322c",
      //     5: "#00423b",
      //     6: "#00a693",
      //     7: "#1AAF9E",
      //     8: "#33B8A9",
      //     9: "#4DC1B3",
      //     10: "#80d3c9",
      //     11: "#B3E4DF",
      //     12: "#E6F6F4",
      //     13: "#F0FAF8",
      //     14: "#F4FBFA",
      //     15: "#FFFFFF",
      //   },
      //   secondary: {
      //     0: "#000",
      //     1: "#1C080B",
      //     2: "#290C10",
      //     3: "#45141B",
      //     4: "#601C25",
      //     5: "#7A222F",
      //     6: "#CC2430",
      //     7: "#DB333F",
      //     8: "#E04D57",
      //     9: "#E97F87",
      //     10: "#F2B3B7",
      //     11: "#F6CCCF",
      //     12: "#FBE6E7",
      //   },
      //   neutral: {
      //     0: "#000",
      //     1: "#11151C",
      //     2: "#181D27",
      //     3: "#252B37",
      //     4: "#414651",
      //     5: "#535862",
      //     6: "#717680",
      //     7: "#A4A7AE",
      //     8: "#D5D7DA",
      //     9: "#E9EAEB",
      //     10: "#F5F5F5",
      //     11: "#FAFAFA",
      //     12: "#FBFEFF",
      //     13: "#FFFFFF",
      //   },
      //   danger: {
      //     0: "#F04438",
      //   },
      //   warning: {
      //     0: "#F79009",
      //   },
      //   success: {
      //     0: "#12B76A",
      //   },
      //   lowLevel: {
      //     0: "#F0D800",
      //   },
      // },
    },
  },
  plugins: [],
});
export default config;
