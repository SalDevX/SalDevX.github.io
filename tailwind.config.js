/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html',
    './**/*.js',
    './**/*.vue',
    './**/*.md',
    './assets/**/*.css',
  ],
  fontFamily: {
    custom: ['Helvetica', 'Arial', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),],
}

