module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1920px",
    },
    fontFamily: {
      /* display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"], */
      display: ["Roboto"],
      body: ["Roboto"],
      poppins: ["Poppins"],
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "180": "45rem",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
