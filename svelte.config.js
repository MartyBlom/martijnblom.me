import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Preprocessing (e.g., TypeScript, SCSS) handled by vitePreprocess
  preprocess: vitePreprocess(),

  kit: {
    // Use the Cloudflare adapter for deployment
    adapter: adapter()
  }
};

export default config;