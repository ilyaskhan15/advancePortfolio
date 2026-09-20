import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/').at(-1);
const defaultSite = 'https://ilyaskhan15.github.io';
const site = process.env.PUBLIC_SITE ?? defaultSite;
const base = process.env.PUBLIC_BASE ?? (repository && !repository.endsWith('.github.io') ? `/${repository}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
