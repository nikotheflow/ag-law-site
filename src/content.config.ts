import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Страницы лежат в /content/pages — там же, где мы их писали.
const pages = defineCollection({
  loader: glob({ base: './content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    slug: z.string().startsWith('/').endsWith('/'),
    query: z.string().optional(),
    queries: z.array(z.string()).default([]),
    // draft: страница собирается, но закрыта от индексации и не попадает в sitemap
    draft: z.boolean().default(false),
    // показывать ли блок связи (кнопки звонка и мессенджеров) внизу страницы
    form: z.boolean().default(true),
    // заголовок и подводка блока заявки внизу страницы
    cta_title: z.string().optional(),
    cta_text: z.string().optional(),
  }),
});

export const collections = { pages };
