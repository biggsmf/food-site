import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50:  '#fdf8f0',
          100: '#f9edda',
          200: '#f0d5a8',
          300: '#e4b870',
          400: '#d4943a',
          500: '#c07a20',
          600: '#a06218',
          700: '#7d4c14',
          800: '#5c3810',
          900: '#3d250a',
        },
        forest: {
          50:  '#f2f7f0',
          100: '#dcecd8',
          200: '#b5d5ac',
          300: '#85b679',
          400: '#5a954d',
          500: '#3d7535',
          600: '#2e5c28',
          700: '#22451e',
          800: '#173016',
          900: '#0d1e0c',
        },
        sand: {
          100: '#fdf5e8',
          200: '#f9e6c4',
          300: '#f3d099',
        },
        terracotta: {
          50:  '#fdf2ee',
          100: '#fae0d5',
          400: '#de6442',
          500: '#c94a28',
          900: '#38140c',
        },
        cream: '#fef9f0',
        ink:   '#1a1208',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        accent:  ['var(--font-accent)', 'cursive'],
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'fade-up':  'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
