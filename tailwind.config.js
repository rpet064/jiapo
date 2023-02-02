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
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
    variants: {
      extend: {},
    },
    plugins: [],
  },
  mode: 'jit',
}