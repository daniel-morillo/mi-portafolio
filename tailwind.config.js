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
        primary: '#1d232a',
        green: '#16A085',
        text: '#ECF0F1',
        highlight: '#ff5755',
        lightGray: '#BDC3C7',
        tercolor: '#25273e',
        secondary: '#ff5b62',
      },
      fontFamily: {
        sans: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0, 0, 0, 0.35)',
        glow: '0 0 0 1px rgba(255, 87, 85, 0.25), 0 10px 36px rgba(255, 87, 85, 0.18)',
      },
      backgroundImage: {
        'section-fade':
          'linear-gradient(180deg, rgba(29,35,42,0) 0%, rgba(29,35,42,0.6) 100%)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#ff5b62',
          secondary: '#ff5755',
          accent: '#25273e',
          neutral: '#1d232a',
          'base-100': '#1d232a',
          'base-200': '#25273e',
          'base-300': '#2f334d',
          info: '#ECF0F1',
          success: '#16A085',
          warning: '#f59e0b',
          error: '#ff5755',
        },
      },
    ],
    darkTheme: 'portfolio',
  },
}
