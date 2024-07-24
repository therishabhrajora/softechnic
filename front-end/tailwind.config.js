/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUpVerTop: {
          '0%': {
            transform: 'scaleY(0.4)',
            transformOrigin: '100% 0%'
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: '100% 0%',
          },
        }
      },
    },
    animation: {
      scaleUpVerTop: 'scaleUpVerTop .1s linear'
    },
    bgColor: {
      'blue': '#1fb6ff',
    },
    plugins: [],
  }
}