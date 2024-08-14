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
        'homepage-intro': "url('/intro.webp')",
      },
      colors: {
        'primary': '#1E1464',
        'card': '#F2F2F8',
        'notation': '#373D40',
        'heading': '#000000',
        'paragraph': '#0A0A0A',
      }
    },
  },
  plugins: [],
};
