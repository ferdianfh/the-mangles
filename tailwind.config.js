module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "628px" }
      },
      colors: {
        gloomyPurple: "#bfa2db",
        gloomyPurpleHover: "#ad7dda",
        gloomyPurpleActive: "#976dbe",
        softPurple: "#f7dbf0",
        veryDarkBlue: "#0d253c",
        veryPeachy: "#fcd2d7",
        gloomyTeal: "#caf7e3",
        gloomyGrayForText: "#7f7c82"
      }
    }
  },
  plugins: []
};
