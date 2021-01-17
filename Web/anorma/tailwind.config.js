module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        top: "4px 0 0 0 rgba(0, 0, 0, 0.1)"
      }
    },
  },
  variants: {
    outline: ["focus"],
    extend: {},
  },
  plugins: []
}
