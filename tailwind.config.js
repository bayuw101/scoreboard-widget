/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'arsc-', // 👈 this is key!
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false // <== avoid global reset
  },
  plugins: [],
};
