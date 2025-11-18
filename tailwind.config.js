/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pure neutral grays - no blue tint
        gray: {
          50: '#fafafa',   // Pure neutral
          100: '#f5f5f5',  // Pure neutral
          200: '#e5e5e5', // Pure neutral
          300: '#d4d4d4', // Pure neutral
          400: '#a3a3a3', // Pure neutral
          500: '#737373', // Pure neutral
          600: '#525252', // Pure neutral
          700: '#404040', // Pure neutral
          800: '#262626', // Pure neutral
          900: '#171717', // Pure neutral
          950: '#0a0a0a', // Pure neutral
        },
        // Pure blacks for dark mode - no blue tint
        dark: {
          50: '#1a1a1a',   // Pure neutral dark gray
          100: '#0f0f0f',  // Pure neutral very dark
          200: '#000000',  // Pure black
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
