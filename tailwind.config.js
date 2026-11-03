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
        background: '#0d111a',
        charcoal: {
          950: '#090d15',
          900: '#0d111a',
          850: '#111723',
          800: '#161e2e',
          750: '#1c263a',
          700: '#233049',
          600: '#2f4061',
        },
        surface: {
          base: '#0d111a',
          card: '#111723',
          elevated: '#161e2e',
          highlight: '#1d273c',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(255, 255, 255, 0.15)',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        ivory: {
          DEFAULT: '#f8fafc',
          muted: '#94a3b8',
          subtle: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(1200px circle at 50% -10%, rgba(34, 197, 94, 0.07), transparent 60%)',
        'subtle-dot': 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.005) 100%)',
      },
      boxShadow: {
        'editorial-subtle': '0 1px 3px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'editorial-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.07)',
        'editorial-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(34, 197, 94, 0.25)',
      },
    },
  },
  plugins: [],
};
