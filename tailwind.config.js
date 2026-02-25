/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8925D3',          
          selected: '#F6F2FF',
        },
        secondary: {
          DEFAULT: '#667085',          
          text: '#667085',
          selected: '#F6F2FF',
        },
      
        border: {
          DEFAULT: '#e5e7eb',
          light: '#f3f4f6',
          dark: '#d1d5db',
        },
        shadow: {
          DEFAULT: 'shadow-xs #0000000D',
        },
        success: {
          DEFAULT: '#10b981',
          light: '#d1fae5',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fee2e2',
        },
      
      },
    },
  },
  plugins: [],
}

