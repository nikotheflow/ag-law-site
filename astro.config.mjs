import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeTodoMarks } from './scripts/rehype-todo-marks.mjs';
import { pagesPreview } from './scripts/pages-preview.mjs';

// Список черновиков, которые не должны попасть в sitemap (синхронизировать с draft: true)
const DRAFT_PATHS = ['/uslugi/vozmeshchenie-ushcherba/', '/uslugi/zhkh/', '/uslugi/potrebiteli/', '/keysy/', '/otzyvy/', '/blog/'];

// Предпросмотр на GitHub Pages: сайт живёт в подпапке /<репозиторий>/ и закрыт от индексации.
// Задаётся в .github/workflows/pages.yml. Без переменной — обычная сборка для боевого домена.
const PAGES_BASE = process.env.PAGES_BASE;

export default defineConfig({
  site: process.env.PAGES_SITE || 'https://aglawstudio.ru', // [УТОЧНИТЬ: домен] — держать в sync с src/data/site.ts
  base: PAGES_BASE || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !DRAFT_PATHS.some((p) => page.endsWith(p)),
    }),
    ...(PAGES_BASE ? [pagesPreview(PAGES_BASE)] : []),
  ],
  markdown: {
    rehypePlugins: [rehypeTodoMarks],
  },
});
