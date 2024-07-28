/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary : "#aa6d6b",
        brandDark : "#151616"
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Poppins', 'serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}

