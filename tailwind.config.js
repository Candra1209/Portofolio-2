/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
        'poppins' : 'Poppins',
        'racingone' : 'Racing Sans One',
        'satisfy' : 'Satisfy',
      },
      colors: {
        'teal-primary': '#003C43',
        'teal-second': '#135D66',
        'teal-third': '#77B0AA',
        'teal-four': '#E3FEF7',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'extra' : '100px',
    },

  },
  plugins: [require("daisyui")],
}

