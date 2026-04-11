/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#141414',
        'border': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A3',
        'text-tertiary': '#737373',
        'accent': '#333333',
      },
      fontFamily: {
        sans: [
          'Inter, Manrope, system-ui, -apple-system, sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
