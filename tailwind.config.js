module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'greenNido': '#A0D762',
      'redNido': '#E57B7B',
      'purpleNido': '#6B406F',
      'blueNido': '#5975AB',
      'whiteNido': '#F4F4F4',
      'grayNido': '#3C3C3C'
    }),

    textColor: {
      'greenNido': '#A0D762',
      'redNido': '#E57B7B',
      'purpleNido': '#6B406F',
      'blueNido': '#5975AB',
      'white': '#FFF',
      'gray': '#707070'
    },

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
        "screen/90v": "60vh",
        "screen/70v": "70vh",
        "screen/80v": "80vh",
        "screen/90v": "90vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "180": "45rem",
      }),
      width: (theme) => ({
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

