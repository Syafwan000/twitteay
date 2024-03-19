/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear': "url(./src/assets/axiom-pattern.png)",
        'geometry': "url(./src/assets/inspiration-geometry.png)",
      },
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.twy-container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '920px',
          },
          '@screen xl': {
            maxWidth: '1080px',
          },
          '@screen 2xl': {
            maxWidth: '1200px',
          },
        } 
      })
    }
  ],
}

