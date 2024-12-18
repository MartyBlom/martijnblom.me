import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Place content here
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;