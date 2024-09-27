/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
		"./index.html", 
		"./src/**/*.{js,ts,jsx,tsx}", 
	], 
  theme: {
    extend: {
      transform: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [require('tailwindcss-3d'),],
}

