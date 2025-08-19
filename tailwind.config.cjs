/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{js,jsx,ts,tsx}',   // <- make sure this is exactly your src path
  ],
  darkMode: 'class',
  theme: {
    container: {                    // consistent container width + padding
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1440px' },
    },
    extend: {
      borderRadius: { DEFAULT: '1rem' }, // used by .card
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
