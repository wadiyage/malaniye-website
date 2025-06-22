/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f5',
          100: '#fce7ed',
          200: '#f9d0dd',
          300: '#f4a8c2',
          400: '#ed739f',
          500: '#e0477a',
          600: '#cc2b5e',
          700: '#b01e4a',
          800: '#8b1538',
          900: '#771532',
        },
        gold: {
          50: '#fffdf0',
          100: '#fffacd',
          200: '#fff5a1',
          300: '#ffed75',
          400: '#ffe249',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9c7a15',
          800: '#80600e',
          900: '#644608',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};