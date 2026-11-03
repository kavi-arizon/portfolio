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
        canvas: '#F5F5F0',
        ink: {
          DEFAULT: '#171923',
          primary: '#171923',
          secondary: '#707586',
          muted: '#8F94A6',
        },
        accent: {
          DEFAULT: '#536DFF',
          primary: '#536DFF',
          hover: '#425CF0',
          secondary: '#A8B5FF',
          light: '#F0F3FF',
          tint: 'rgba(83, 109, 255, 0.08)',
        },
        surface: {
          muted: '#DCE2F0',
          border: '#D0D7E7',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(23, 25, 35, 0.04), 0 0 0 1px rgba(220, 226, 240, 0.6)',
        'soft-md': '0 4px 16px -2px rgba(23, 25, 35, 0.06), 0 0 0 1px rgba(208, 215, 231, 0.7)',
        'soft-lg': '0 12px 32px -4px rgba(23, 25, 35, 0.08), 0 0 0 1px rgba(208, 215, 231, 0.8)',
        'accent-sm': '0 4px 14px -1px rgba(83, 109, 255, 0.28)',
        'accent-hover': '0 8px 24px -2px rgba(83, 109, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
