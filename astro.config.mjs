import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeTodoMarks } from './scripts/rehype-todo-marks.mjs';

// Список черновиков, которые не должны попасть в sitemap (синхронизировать с draft: true)
const DRAFT_PATHS = ['/uslugi/vozmeshchenie-ushcherba/', '/uslugi/zhkh/', '/uslugi/potrebiteli/', '/keysy/', '/otzyvy/', '/blog/'];

export default defineConfig({
  site: 'https://aglawstudio.ru', // [УТОЧНИТЬ: домен] — держать в sync с src/data/site.ts
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !DRAFT_PATHS.some((p) => page.endsWith(p)),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeTodoMarks],
  },
});
