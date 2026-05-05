import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/chernitovets.github.io/",
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});