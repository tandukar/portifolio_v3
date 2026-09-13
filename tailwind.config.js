/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#fdfcf7',
        'canvas-muted': '#f7f5ed',
        blob: '#ded2a8',
        ink: '#1c1917',
        'ink-light': '#57534e',
        'ink-subtle': '#8c887b',
        accent: '#44403c',
        dock: '#09090b',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
