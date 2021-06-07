module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.1)"
          },
          "66%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)"
          },
        },
      },
      animation: {
        blob: "blob 4s infinite"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};