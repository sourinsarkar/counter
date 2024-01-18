/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circle': "url('/images/circle.png')",
        'counterContainer': "url('/images/counterHolderImage.svg')",
      }
    },
  },
  plugins: [],
}

