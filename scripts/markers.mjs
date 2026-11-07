// Считает незакрытые метки в текстах: npm run markers
// Перед запуском сайта здесь должно быть 0 (кроме страниц с draft: true).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = 'content/pages';
const RE = /\[(УТОЧНИТЬ|ПРОВЕРИТЬ|КЕЙС|ОТЗЫВ|ФОТО|БРЕНД|Калькулятор|Карта)[^\]]*\]/g;

function files(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : p.endsWith('.md') ? [p] : [];
  });
}

const totals = {};
for (const file of files(ROOT)) {
  const text = readFileSync(file, 'utf8');
  const draft = /^draft:\s*true/m.test(text);
  const found = [...text.matchAll(RE)];
  if (!found.length) continue;
  console.log(`\n${relative(ROOT, file)}${draft ? '  (черновик)' : ''}`);
  for (const m of found) {
    totals[m[1]] = (totals[m[1]] || 0) + 1;
    const line = text.slice(0, m.index).split('\n').length;
    console.log(`  ${String(line).padStart(4)}  ${m[0]}`);
  }
}
console.log('\nИтого:', Object.entries(totals).map(([k, v]) => `${k} ${v}`).join(' · ') || '0');
