/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", 
        tulips: "#22C55E",    // Primary Accent (Green)
        meadow: "#10B981",    // Secondary Accent
        daffodils: "#FBBF24", // Contrast Accent
        "clear-sky": "#6366F1", // Structure Accent
        surface: "rgba(255, 255, 255, 0.05)",
        border: "rgba(255, 255, 255, 0.1)",
        ink: "#FFFFFF",
        "ink-light": "rgba(255, 255, 255, 0.6)"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
