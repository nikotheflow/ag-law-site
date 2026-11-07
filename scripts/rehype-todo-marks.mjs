// Подсвечивает метки [УТОЧНИТЬ…], [ПРОВЕРИТЬ…], [КЕЙС…] и т. п. в тексте страниц,
// чтобы черновик было видно глазами. Перед запуском меток быть не должно: см. npm run markers.

const RE = /\[(?:УТОЧНИТЬ|ПРОВЕРИТЬ|КЕЙС|ОТЗЫВ|ФОТО|БРЕНД|Калькулятор|Карта)[^\]]*\]/g;

function splitText(value) {
  const out = [];
  let last = 0;
  for (const m of value.matchAll(RE)) {
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    out.push({
      type: 'element',
      tagName: 'mark',
      properties: { className: ['todo'] },
      children: [{ type: 'text', value: m[0] }],
    });
    last = m.index + m[0].length;
  }
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

function walk(node) {
  if (!node.children) return;
  const next = [];
  for (const child of node.children) {
    if (child.type === 'text' && RE.test(child.value)) {
      RE.lastIndex = 0;
      next.push(...splitText(child.value));
    } else {
      walk(child);
      next.push(child);
    }
  }
  node.children = next;
}

export function rehypeTodoMarks() {
  return (tree) => walk(tree);
}
