/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "spectral": ["Spectral", "serif"],
        "source-sans": ["Source Sans Pro", "sans-serif"],
        "instrument": ["Instrument Serif", "serif"],
        "antic-didone": ["Antic Didone", "serif"],
      },
    },
  },
  plugins: [],
}

