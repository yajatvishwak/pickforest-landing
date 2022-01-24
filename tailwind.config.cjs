module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  plugins:[
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          yellow50: "#FFFDF0",
          yellow100: "#FFF6D2",
          yellow200: "#FFF8DC",
          yellow300: "#FBE89D",
          yellow400: "#F1C40F",
          gray: "#E9E9E9",
          darkGray: "#9E9E9E",
        },
      },
    },
  },
  plugins: [],
};
