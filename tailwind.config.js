import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#21f2233',
        'green': '#16A085',
        'text': '#ECF0F1',
        'highlight': '#ff5755',
        'lightGray': '#BDC3C7',
        'tercolor': '#25273e',
        'secondary': '#ff5b62'
      },
    },
  },
  plugins: [
    daisyui
  ],
}

