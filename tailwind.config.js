/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070a11',
        obsidian: {
          950: '#05070c',
          900: '#070a11',
          850: '#0a0e18',
          800: '#0f1422',
          700: '#151c2e',
          600: '#1c263d',
        },
        surface: {
          card: '#0a0e18',
          elevated: '#0f1524',
          highlight: '#151e32',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          950: '#022c22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'radial-top': 'radial-gradient(1000px circle at 50% 0%, rgba(16, 185, 129, 0.08), transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'gradient-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'card-subtle': '0 0 0 1px rgba(255, 255, 255, 0.07), 0 4px 20px -2px rgba(0, 0, 0, 0.7)',
        'card-hover': '0 0 0 1px rgba(16, 185, 129, 0.35), 0 12px 32px -4px rgba(0, 0, 0, 0.8), 0 0 24px -4px rgba(16, 185, 129, 0.15)',
        'emerald-glow': '0 0 20px -3px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [],
};
