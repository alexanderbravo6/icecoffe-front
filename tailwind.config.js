/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  //darkMode: 'class',
  //darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

