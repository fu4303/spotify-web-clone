module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat","-apple-system", "BlinkMacSystemFont", "sans-serif"],
    },
    minWidth: {
      15: "15%",
      20: "20%",
      75: "75%",
      80: "80%",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      footer: "#282828",
      body: "#121212",
    }),
    textColor: (theme) => ({ ...theme("colors"), sidebarFont: "#b3b3b3" }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      sidebarLine: "#282828",
    }),
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
