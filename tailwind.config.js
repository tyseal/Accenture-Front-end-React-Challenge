const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			xs: "475px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1280px",
			"2xl": "1400px",
		},
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        inter: [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        'accenture': {
          400: '#D100C9',
          700: '#70259B',
          900: '#430964'
        }
      }
    },
  },
  plugins: [],
}

