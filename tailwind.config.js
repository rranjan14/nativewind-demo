const {theme:colors} = require("./theme/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  darkMode: "class",
  theme: {
    extend: {},
    colors: Object.fromEntries(
      Object.keys(colors.light || {}).map((name) => [name, `rgb(var(--color-${name}) / <alpha-value>)`]),
    ),
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ":root": Object.fromEntries(
          Object.entries(colors.light).map(([name, value]) => [`--color-${name}`, value]),
        ),
        ".dark": Object.fromEntries(
          Object.entries(colors.dark).map(([name, value]) => [`--color-${name}`, value]),
        ) ,
      }),
  ],
};
