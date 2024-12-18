import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'], // Add Cabin as the default sans-serif font
      },
    },
  },

  plugins: [],
} satisfies Config;