import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'earth': {
          500: '#c07a20',
          600: '#a66a1a',
          900: '#6b4510',
        },
        'forest': {
          500: '#3d7535',
          600: '#2f5c2b',
          900: '#1d4420',
        },
        'terracotta': '#c94a28',
        'cream': '#fef9f0',
        'ink': '#1a1208',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        accent: 'var(--font-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
