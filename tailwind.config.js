/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    mode: 'jit',
    darkMode: false,
    theme: {
      colors: {
      "green-1": "#c9e265",
      "brown-1": "#dbbfa1",
      "white-1": "#f5f5ef",
      "gold-1": "#f4c01e",
      "red-1": "#df5959",
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
  }
}