module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)"
          },
          "66%": {
            transform: "translate(20px, -20px) scale(0.8)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      },
      animation: {
        blob: "blob 7s infinite"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};