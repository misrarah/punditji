/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#fff8f0',
          100: '#ffefd6',
          200: '#ffd9a0',
          300: '#ffbc5c',
          400: '#ff9c20',
          500: '#f07c00',
          600: '#c45f00',
          700: '#9a4700',
          800: '#7a3800',
          900: '#5c2a00',
        },
        maroon: {
          50:  '#fdf2f4',
          100: '#fbe6e9',
          200: '#f4c0c8',
          300: '#e98899',
          400: '#d94d65',
          500: '#c0283e',
          600: '#991e30',
          700: '#751827',
          800: '#5a1320',
          900: '#3e0d16',
        },
        gold: {
          400: '#e8b84b',
          500: '#d4a017',
          600: '#b8860b',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
