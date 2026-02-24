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
          // this primary selected not working why
          selected: '#F6F2FF',
        
        },
        
        // Additional colors for dashboard UI
      
        border: {
          DEFAULT: '#e5e7eb',
          light: '#f3f4f6',
          dark: '#d1d5db',
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

