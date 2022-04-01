module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      ptserif: ["PT Serif", "serif"],
    },
    colors: {
      green: "#8BBC78",
      lightgreen: "#E7F5D9",
      carrot: "#FB7E56",
      darkcarrot: "#D9593D",
      ricewhite: "#F6F8ED",
      darkbrown: "#513131",
      white: "#FFFFFF",
    },

    extend: {
      backgroundImage: {
        "recipe-img": "url('/assets/pics/test.png')",
      },
      spacing: {
        navh: "3.125rem",
        navw: "62.5%",
        cardw: "81.25%",
        cardh: "56.34%",
        cardheaderh: "3.75rem",
        buttonh: "10.56%",
        smallbuttonw: "5.625rem",
        midbuttonw: "7.5rem",
        bigbuttonw: "14.688rem",
      },
    },
  },
  plugins: [],
};
