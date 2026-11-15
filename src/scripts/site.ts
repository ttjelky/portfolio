// Уся інтерактивність сайту: без фреймворків, лише кілька маленьких функцій.

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Поява блоків під час прокрутки ---------- */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-clip]');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Навбар: активний пункт і колір секції під ним ---------- */
function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const indicator = nav?.querySelector<HTMLElement>('[data-nav-indicator]');
  if (!nav || !indicator) return;
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
  // елементи, чий --accent фарбує індикатор: секції та окремі проєкти
  const tinted = [...document.querySelectorAll<HTMLElement>('[data-section], [data-section-accent]')];

  const moveTo = (link: HTMLAnchorElement | undefined) => {
    links.forEach((l) => l.classList.toggle('is-active', l === link));
    nav.classList.toggle('has-active', !!link);
    if (link) {
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translateX(${link.offsetLeft}px)`;
    }
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const probe = innerHeight * 0.45;
    // активна секція — та, що перетинає лінію на 45% висоти екрана
    const current = sections.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= probe && r.bottom > probe;
    });
    moveTo(links.find((l) => l.dataset.navLink === current?.id && getComputedStyle(l).display !== 'none'));

    // найглибший «тонований» елемент під лінією
    let tint: HTMLElement | undefined;
    for (const el of tinted) {
      const r = el.getBoundingClientRect();
      if (r.top <= probe && r.bottom > probe) tint = el;
    }
    if (tint) {
      const cs = getComputedStyle(tint);
      nav.style.setProperty('--nav-accent', cs.getPropertyValue('--accent').trim() || '#f3f2ee');
      nav.style.setProperty('--nav-on-accent', cs.getPropertyValue('--on-accent').trim() || '#0b0b0b');
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  document.fonts?.ready.then(update);
  update();
}

/* ---------- Запам’ятати мову, яку людина обрала вручну ---------- */
function initLangMemory() {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((a) =>
    a.addEventListener('click', () => {
      try {
        localStorage.setItem('lang', a.dataset.langSwitch ?? '');
      } catch {
        /* приватний режим — не страшно */
      }
    }),
  );
}

/* ---------- Копіювання пошти ---------- */
function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    const label = btn.querySelector('[data-copy-label]');
    const initial = label?.textContent ?? '';
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? '');
        if (label) label.textContent = `${btn.dataset.copiedLabel} ✓`;
        setTimeout(() => label && (label.textContent = initial), 1800);
      } catch {
        location.href = `mailto:${btn.dataset.copy}`;
      }
    });
  });
}

/* ---------- Час в Україні ---------- */
function initClock() {
  const el = document.querySelector<HTMLTimeElement>('[data-local-time]');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat(document.documentElement.lang, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Kyiv',
  });
  const tick = () => (el.textContent = fmt.format(new Date()));
  tick();
  setInterval(tick, 30_000);
}

/* ---------- Величезне ім’я на всю ширину ---------- */
function initFitName() {
  document.querySelectorAll<HTMLElement>('[data-fit-name]').forEach((h1) => {
    const words = [...h1.querySelectorAll<HTMLElement>('[data-fit-word]')];
    const fit = () => {
      h1.style.setProperty('--name-size', '100px');
      const cs = getComputedStyle(h1);
      const available = h1.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const widest = Math.max(...words.map((w) => w.scrollWidth));
      if (widest > 0) h1.style.setProperty('--name-size', `${Math.floor((available / widest) * 100 * 0.99)}px`);
    };
    fit();
    document.fonts?.ready.then(fit);
    new ResizeObserver(fit).observe(h1);
  });
}

/* ---------- Світіння на першому екрані м’яко тягнеться за курсором ---------- */
function initGlow() {
  const glow = document.querySelector<HTMLElement>('[data-glow]');
  const host = glow?.parentElement;
  if (!glow || !host || reducedMotion || !finePointer) return;
  host.addEventListener('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    glow.style.setProperty('--gx', `${x * 12}%`);
    glow.style.setProperty('--gy', `${y * 10}%`);
  });
}

/* ---------- Стікери на дошці послуг можна перетягувати ---------- */
function initStickers() {
  const board = document.querySelector<HTMLElement>('[data-board]');
  if (!board) return;
  board.querySelectorAll<HTMLElement>('[data-sticker]').forEach((el) => {
    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let bounds: DOMRect;
    let base: DOMRect;

    el.addEventListener('pointerdown', (e) => {
      el.setPointerCapture(e.pointerId);
      el.classList.add('is-dragging');
      startX = e.clientX - dx;
      startY = e.clientY - dy;
      bounds = board.getBoundingClientRect();
      base = el.getBoundingClientRect();
      base = new DOMRect(base.x - dx, base.y - dy, base.width, base.height);
      e.preventDefault();
    });
    el.addEventListener('pointermove', (e) => {
      if (!el.hasPointerCapture(e.pointerId)) return;
      // не даємо стікеру вилетіти за межі дошки
      dx = Math.min(Math.max(e.clientX - startX, bounds.left - base.left), bounds.right - base.right);
      dy = Math.min(Math.max(e.clientY - startY, bounds.top - base.top), bounds.bottom - base.bottom);
      el.style.setProperty('--dx', `${dx}px`);
      el.style.setProperty('--dy', `${dy}px`);
    });
    const end = (e: PointerEvent) => {
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      el.classList.remove('is-dragging');
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  });
}

/* ---------- Перегляд сертифікатів ---------- */
function initLightbox() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
  const img = dialog?.querySelector<HTMLImageElement>('[data-lightbox-img]');
  if (!dialog || !img) return;

  document.querySelectorAll<HTMLButtonElement>('[data-lightbox]').forEach((btn) =>
    btn.addEventListener('click', () => {
      img.src = btn.dataset.lightbox ?? '';
      img.alt = btn.dataset.lightboxAlt ?? '';
      dialog.showModal();
    }),
  );
  dialog.addEventListener('click', (e) => e.target === dialog && dialog.close());
}

initReveal();
initNav();
initLangMemory();
initCopy();
initClock();
initFitName();
initGlow();
initStickers();
initLightbox();
