// Достаёт вопросы-ответы из раздела «## Частые вопросы» Markdown-страницы
// для микроразметки FAQPage. Формат в тексте:
//   **Вопрос?**
//   Ответ (одна или несколько строк до пустой строки).
// Вопросы, где в ответе остались метки [УТОЧНИТЬ]/[ПРОВЕРИТЬ], в разметку не идут.

const MARKER = /\[(УТОЧНИТЬ|ПРОВЕРИТЬ|КЕЙС|ОТЗЫВ|ФОТО|БРЕНД)[^\]]*\]/;

function plain(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // ссылки → текст
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractFaq(body: string | undefined): { q: string; a: string }[] {
  if (!body) return [];
  const start = body.search(/^##\s+Частые вопросы\s*$/m);
  if (start < 0) return [];
  const rest = body.slice(start).split('\n').slice(1).join('\n');
  const end = rest.search(/^##\s+/m);
  const section = end < 0 ? rest : rest.slice(0, end);

  const out: { q: string; a: string }[] = [];
  for (const block of section.split(/\n\s*\n/)) {
    const m = block.trim().match(/^\*\*(.+?)\*\*\s*\n([\s\S]+)$/);
    if (!m) continue;
    const [, q, a] = m;
    if (MARKER.test(q) || MARKER.test(a)) continue;
    out.push({ q: plain(q), a: plain(a) });
  }
  return out;
}
