/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cerulean": {
          100: "#EAF6FF",
          400: "#3D6F95",
          DEFAULT: "#184E77"
        },
        "ocean-green": {
          DEFAULT: "#52B69A"
        },
        "key-lime": {
          DEFAULT: "#D9ED92"
        }
      }
    },
  },
  plugins: [],
};
