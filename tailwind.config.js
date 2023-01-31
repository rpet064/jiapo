/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    mode: 'jit',
    theme: {
      colors: {
      "dark-green": "#47886c",
      "light-green": "#c9e265",
      "brown": "#dbbfa1",
      "white-1": "#f5f5ef",
      "gold": "#f4c01e",
      "dark-red": "#c52626",
      "light-red": "#df5959",
      "black": "#000000",
      "white": "#ffffff",
      },
      extend: {
        backgroundImage: () => ({
          meal: "url('./assets/images/1.jpg')",
        }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
  mode: 'jit',
}