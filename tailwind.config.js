/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'desktop': '992px',
      },
      backgroundImage: {
        'homepage-product': "url('/homepage-product-bg.png')",
      },
    },
  },
  plugins: [],
};
