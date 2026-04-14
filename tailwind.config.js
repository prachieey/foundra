/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        tulips: "#E37083",
        meadow: "#A8BF8A",
        magnolia: "#F49AA2",
        daffodils: "#F6CD86",
        "clear-sky": "#89B7C2",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(227, 112, 131, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(227, 112, 131, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
