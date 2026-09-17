/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080B14',
        panel: '#0F1424',
        line: '#1B2136',
        accent: '#2B4BF2',
        accentDim: '#16204F',
        paper: '#F4F6FB',
        muted: '#8790A8',
      },
            keyframes: {
        logoMarquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        logoMarquee: 'logoMarquee 40s linear infinite',
      },
      fontFamily: {
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
