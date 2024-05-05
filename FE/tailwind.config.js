/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      textColor: {
        "orange": "#FFB86C",
        "dracula-comment": "#6272A4",
        "dracula-yellow": "#F1FA8C"

      },
      backgroundColor: {
        "dracula-yellow": "#f7f5be",
        "dracula-theme": "#282A36"
      }
      ,
      backgroundImage: {
        "home": "url()"
      },
      spacing: {
        "480px": "480px",
        "640px": "640px"
      }
    },
    
  },
  plugins: [],
}