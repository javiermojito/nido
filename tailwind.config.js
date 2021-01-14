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
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
