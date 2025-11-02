/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}",              // Include all JS/TS/JSX/TSX files in src
    "./src/app/**/*.{js,ts,jsx,tsx}",        // App Router pages
    "./src/components/**/*.{js,ts,jsx,tsx}"  // Components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
