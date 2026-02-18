/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: '#F5F3FF',
          surface: '#EDE9FE',
          card: '#FFFFFF',
          cardBorder: '#C4B5FD',
          primary: '#7C3AED',
          primaryLight: '#6D28D9',
          accent: '#0891B2',
          textPrimary: '#1E1B4B',
          textSecondary: '#4C1D95',
          textMuted: '#94A3B8',
          success: '#059669',
          danger: '#DC2626',
          inputBg: '#FFFFFF',
          inputBorder: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
};
