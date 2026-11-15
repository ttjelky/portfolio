// Генерує OG-картинки (public/og) і CV у PDF (public/cv) через Chrome.
// Запуск: npm run assets  (шлях до Chrome можна задати через CHROME_PATH)
import puppeteer from 'puppeteer-core';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const tpl = (file) => pathToFileURL(`${root}scripts/${file}`).href;

const site = {
  uk: { title: 'Безклинський', sub: 'Олексій — дизайн і розробка сайтів та вебзастосунків', tag: 'Україна' },
  en: { title: 'Bezklynskyi', sub: 'Oleksii — design & development of websites and web apps', tag: 'Ukraine' },
};

// Назви й підзаголовки мають збігатися з src/data/projects.ts
const projects = {
  clarity: { uk: 'AI-рада для складних рішень', en: 'An AI council for hard decisions' },
  vector: { uk: 'Платформа для турнірів з будь-якого предмета', en: 'A platform for tournaments in any subject' },
  scalaris: { uk: 'Соціальна карта для активностей поруч · 3-тє місце у фіналі турніру', en: 'A social map for activities nearby · 3rd place at the tournament final' },
  worldlog: { uk: 'Паспорт Minecraft-світу', en: 'A passport for a Minecraft world' },
  grafit: { uk: 'Сайт студії автодетейлінгу', en: 'A website for a car detailing studio' },
  britva: { uk: 'Сайт барбершопу', en: 'A website for a barbershop' },
  glaze: { uk: 'Сайт студії манікюру', en: 'A website for a nail studio' },
};
// кольори світіння — з самих проєктів
const glow = {
  clarity: ['#f29bb0', '#9ed8ee'],
  vector: ['#2f6bff', '#c04848'],
  scalaris: ['#c6f135', '#607818'],
  worldlog: ['#f0a830', '#c06078'],
  grafit: ['#ff3b1f', '#3a3a3a'],
  britva: ['#c9a27a', '#603018'],
  glaze: ['#7a1a2c', '#e9e3d8'],
};
const names = { clarity: 'Clarity', vector: 'Vector', scalaris: 'Scalaris', worldlog: 'WorldLog', grafit: 'Grafit', britva: 'Britva', glaze: 'Glaze' };

await mkdir(`${root}public/og`, { recursive: true });
await mkdir(`${root}public/cv`, { recursive: true });

const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

async function og(out, params) {
  await page.goto(`${tpl('og.html')}?${new URLSearchParams(params)}`, { waitUntil: 'load' });
  await page.waitForSelector('body[data-ready]');
  await page.screenshot({ path: `${root}public/og/${out}.png` });
  console.log('og', out);
}

for (const lang of ['uk', 'en']) {
  await og(lang, site[lang]);
  for (const [slug, tagline] of Object.entries(projects)) {
    const [c1, c2] = glow[slug];
    await og(`${lang}-${slug}`, { title: names[slug], sub: tagline[lang], tag: lang === 'uk' ? 'Олексій Безклинський' : 'Oleksii Bezklynskyi', c1, c2 });
  }
}

for (const lang of ['uk', 'en']) {
  await page.goto(`${tpl('cv.html')}?lang=${lang}`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: `${root}public/cv/oleksii-bezklynskyi-cv-${lang}.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('cv', lang);
}

// Іконки для закріплення сайту (iOS/macOS «На початковий екран», Chrome/Android PWA).
// Квадрат на весь розмір: заокруглення додає сама система.
// У maskable-версії знак менший, щоб влізти в безпечну зону (коло 80% від розміру).
await mkdir(`${root}public/icons`, { recursive: true });
for (const [out, size, scale] of [
  ['apple-touch-icon', 180, 1],
  ['icon-192', 192, 1],
  ['icon-512', 512, 1],
  ['icon-maskable-512', 512, 0.86],
]) {
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  await page.goto(`${tpl('icon.html')}?size=${size}&scale=${scale}`, { waitUntil: 'load' });
  await page.waitForSelector('body[data-ready]');
  await page.screenshot({ path: `${root}public/icons/${out}.png` });
  console.log('icon', out);
}

await browser.close();
