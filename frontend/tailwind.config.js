module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
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
        drop: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.24), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.8rem rgba(0, 0, 0, 0.18)",
        inner:
          "inset 0.4rem 0.4rem 1rem 0 rgba(255, 0, 0, 0.25), inset -0.4rem -0.4rem 1rem 0 rgba(255, 0, 0, 0.25)",
      },
      spacing: {
        navh: "3.125rem",
        navw: "62.5%",
        cardw: "81.25%",
        cardh: "56.34%",
      },
    },
  },
  plugins: [],
};
