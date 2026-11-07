// Интеграция Astro для предпросмотра на GitHub Pages.
// Включается переменной окружения PAGES_BASE (например "/ag-law-site").
// После сборки:
//  1) дописывает base ко всем внутренним ссылкам href="/..." и src="/..." в HTML
//     (в коде и текстах ссылки остаются вида "/uslugi/...", как на будущем домене);
//  2) закрывает предпросмотр от индексации: robots.txt «Disallow: /» и meta noindex,
//     чтобы черновик на github.io не стал дублем будущего aglawstudio.ru.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith('.html') ? [p] : [];
  });
}

export function pagesPreview(base) {
  const b = base.replace(/\/$/, '');
  return {
    name: 'pages-preview',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const out = fileURLToPath(dir);
        let files = 0;
        for (const file of htmlFiles(out)) {
          let html = readFileSync(file, 'utf8');
          // внутренние абсолютные ссылки без base (не "//host", не уже с base)
          html = html.replace(/(\s(?:href|src)=")\/(?!\/)/g, (m, attr, offset, s) =>
            s.startsWith(b + '/', offset + attr.length) ? m : `${attr}${b}/`,
          );
          if (!html.includes('name="robots"')) {
            html = html.replace('<head>', '<head><meta name="robots" content="noindex, nofollow">');
          }
          writeFileSync(file, html);
          files++;
        }
        writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
        console.log(`[pages-preview] base ${b}: обработано ${files} HTML, индексация закрыта`);
      },
    },
  };
}
