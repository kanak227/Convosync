/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure it includes your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], 
}
