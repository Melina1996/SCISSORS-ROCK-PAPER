/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage:{
      //   "triangle": "url('./src/assets/img/bg-triangle.svg')"
      // },
      fontFamily:{
        "barlow" : ['Barlow Semi Condensed','sans-serif']
      },
      boxShadow:{
        "lila": '3px 8px 1px 1px #2945C0ff',
        "yellow": '3px 8px 1px 1px #C76C1Cff',
        "red": '3px 8px 1px 1px #9E1731ff'
      }
    },
  },
  plugins: [],
}



