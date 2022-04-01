module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      ptserif: ["PT Serif", "serif"],
    },
    fontSize: {
      xxs: "9pt",
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
      boxShadow: {
        drop: "0 0.1rem 0.2rem rgba(81, 49, 49, 0.24), 0 0.2rem 0.4rem rgba(81, 49, 49, 0.2), 0 0.1rem 0.8rem rgba(81, 49, 49, 0.18)",
        inner:
          "inset 0 0.1rem 0.2rem 0 rgba(81, 49, 49, 0.24), inset 0 0.2rem 0.4rem 0 rgba(81, 49, 49, 0.2), inset 0 0.1rem 0.8rem 0 rgba(81, 49, 49, 0.18)",
      },
      spacing: {
        navh: "3.125rem",
        navw: "62.5%",
        cardw: "81.25%",
        cardh: "56.34%",
        cardheaderh: "3.75rem",
        buttonh: "10.56%",
        smallbuttonw: "40.625%",
        smallbuttonh: "11.268%",
        midbuttonw: "7.5rem",
        bigbuttonw: "14.688rem",
      },
      backgroundImage: {
        "recipe-img": "url('/assets/pics/test.png')",
      },
    },
  },
  plugins: [],
};
