const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    flowbite.content(),
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
        "other" :{'min':'340px' , 'max':'1200px'},
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

