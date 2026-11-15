export const LANGS = ['uk', 'en'] as const;
export type Lang = (typeof LANGS)[number];

/** Текст двома мовами. */
export type L = Record<Lang, string>;

export const t = (text: L, lang: Lang) => text[lang];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Шлях до файлу чи сторінки з урахуванням base (`/portfolio`). */
export const url = (path = '') => `${BASE}/${path.replace(/^\//, '')}`;

/** Сторінка мовою `lang`: langPath('uk', 'work/clarity') → /portfolio/uk/work/clarity/ */
export const langPath = (lang: Lang, path = '') => {
  const clean = path.replace(/^\/|\/$/g, '');
  return url(`${lang}/${clean ? `${clean}/` : ''}`);
};

export const CONTACT = {
  email: 'bezklinskiyalexey@gmail.com',
  telegram: 'https://t.me/ttjelky',
  telegramHandle: '@ttjelky',
  github: 'https://github.com/ttjelky',
  linkedin: 'https://www.linkedin.com/in/olexiy-bezklynskiy-694a243b5/',
  x: 'https://x.com/CuteJelky',
};

export const ui = {
  name: { uk: 'Олексій Безклинський', en: 'Oleksii Bezklynskyi' },
  nameLines: { uk: ['Олексій', 'Безклинський'], en: ['Oleksii', 'Bezklynskyi'] },
  role: { uk: 'Дизайн і розробка сайтів та вебзастосунків', en: 'Design & development of websites and web apps' },
  location: { uk: 'Кременчук, Україна', en: 'Kremenchuk, Ukraine' },
  available: { uk: 'Приймаю замовлення', en: 'Available for projects' },
  skip: { uk: 'Перейти до змісту', en: 'Skip to content' },

  nav: {
    work: { uk: 'Роботи', en: 'Work' },
    services: { uk: 'Послуги', en: 'Services' },
    about: { uk: 'Про мене', en: 'About' },
    contact: { uk: 'Контакт', en: 'Contact' },
    main: { uk: 'Основна навігація', en: 'Main navigation' },
    switchTo: { uk: 'English version', en: 'Українська версія' },
    close: { uk: 'Закрити', en: 'Close' },
  },

  hero: {
    hello: { uk: 'Привіт! Я Олексій.', en: 'Hi! I’m Oleksii.' },
    lead: {
      uk: 'Проєктую і розробляю сайти, які запам’ятовуються, — від ідеї й логотипу до коду та запуску.',
      en: 'I design and build websites people remember — from idea and logo to code and launch.',
    },
    col1: {
      uk: 'Роблю сайти для локального бізнесу і власні продукти: AI-сервіс, соціальну карту, турнірну платформу.',
      en: 'I build websites for local businesses and my own products: an AI service, a social map, a tournament platform.',
    },
    col2: {
      uk: '3 місце у фіналі Всеукраїнського командного турніру з програмування 2026 — зі 121 команди.',
      en: '3rd place at the All-Ukrainian Team Programming Tournament 2026 final — out of 121 teams.',
    },
    cta: { uk: 'Обговорити проєкт', en: 'Start a project' },
  },

  work: {
    kicker: { uk: 'Вибрані роботи', en: 'Selected work' },
    title: { uk: 'Роботи', en: 'Work' },
    lead: {
      uk: 'Продукти, які я придумав, намалював і написав — сам або очолюючи команду.',
      en: 'Products I came up with, designed and built — on my own or leading a team.',
    },
    open: { uk: 'Відкрити кейс', en: 'Open case study' },
    inDev: { uk: 'У розробці', en: 'In progress' },
  },

  services: {
    kicker: { uk: 'Послуги', en: 'Services' },
    title: { uk: 'Сайти для бізнесу', en: 'Websites for business' },
    stickers: {
      landing: { uk: 'Лендинг', en: 'Landing page' },
      booking: { uk: 'Онлайн-запис', en: 'Online booking' },
      business: { uk: 'Сайт для бізнесу', en: 'Business site' },
      app: { uk: 'Вебзастосунок', en: 'Web app' },
      design: { uk: 'Дизайн з нуля', en: 'Custom design' },
      mobile: { uk: 'Адаптив', en: 'Mobile-first' },
    },
    dragHint: { uk: 'Стікери можна перетягувати', en: 'Drag the stickers around' },
    lead: {
      uk: 'Роблю сайти для локального бізнесу: салонів, барбершопів, кав’ярень, студій. Дизайн з нуля, без шаблонів, — і код, який швидко відкривається на телефоні.',
      en: 'I build websites for local businesses: salons, barbershops, cafés, studios. Custom design, no templates, and code that loads fast on a phone.',
    },
    items: [
      { title: { uk: 'Лендинг', en: 'Landing page' }, text: { uk: 'Одна сторінка, яка продає послугу: пропозиція, роботи, ціни, команда й запис.', en: 'One page that sells your service: offer, work, prices, team and booking.' } },
      { title: { uk: 'Сайт для бізнесу', en: 'Business website' }, text: { uk: 'Кілька сторінок: послуги, портфоліо, про вас, контакти й карта.', en: 'A few pages: services, portfolio, about, contacts and a map.' } },
      { title: { uk: 'Онлайн-запис і заявки', en: 'Online booking' }, text: { uk: 'Клієнт обирає послугу й час сам, а заявка одразу приходить вам у Telegram.', en: 'Clients pick a service and a time themselves, and the request lands straight in your Telegram.' } },
      { title: { uk: 'Вебзастосунок', en: 'Web app' }, text: { uk: 'Кабінет клієнта, бронювання, внутрішній інструмент — коли звичайного сайту вже замало.', en: 'Client accounts, bookings, an internal tool — when a regular website is no longer enough.' } },
    ],
    included: { uk: 'У кожному проєкті', en: 'Every project includes' },
    includedList: {
      uk: ['дизайн з нуля', 'адаптив під телефон', 'швидке завантаження', 'базове SEO і прев’ю в соцмережах', 'допомога з доменом і хостингом'],
      en: ['custom design', 'mobile-first layout', 'fast loading', 'basic SEO and social previews', 'help with domain and hosting'],
    },
    processTitle: { uk: 'Як ми працюємо', en: 'How we work' },
    process: [
      { title: { uk: 'Розмова', en: 'Talk' }, text: { uk: 'Розбираємося, хто ваші клієнти і що сайт має для них зробити.', en: 'We figure out who your clients are and what the site should do for them.' } },
      { title: { uk: 'Дизайн', en: 'Design' }, text: { uk: 'Показую макет головного екрана й мобільної версії, правимо до «так».', en: 'I show the main screen and the mobile version, and we iterate until it is a yes.' } },
      { title: { uk: 'Розробка', en: 'Build' }, text: { uk: 'Верстаю, підключаю форми, перевіряю на різних телефонах.', en: 'I build it, wire up the forms and test it on different phones.' } },
      { title: { uk: 'Запуск', en: 'Launch' }, text: { uk: 'Публікую на вашому домені і лишаюся на зв’язку для змін.', en: 'I publish it on your domain and stay in touch for changes.' } },
    ],
    demosTitle: { uk: 'Приклади сайтів', en: 'Website examples' },
    demosNote: {
      uk: 'Концепти, які я зробив, щоб показати підхід: дизайн і верстка з нуля, без фреймворків.',
      en: 'Concepts I made to show the approach: designed and built from scratch, no frameworks.',
    },
    visit: { uk: 'Відкрити сайт', en: 'Visit site' },
    details: { uk: 'Деталі', en: 'Details' },
    cta: { uk: 'Обговорити ваш сайт', en: 'Discuss your website' },
  },

  awards: {
    kicker: { uk: 'Визнання', en: 'Recognition' },
    place: { uk: 'місце', en: 'place' },
    title: {
      uk: 'Всеукраїнський командний турнір з програмування 2026',
      en: 'All-Ukrainian Team Programming Tournament 2026',
    },
    org: {
      uk: 'БФ «Star for Life Ukraine» разом із МОН, НАН і Малою академією наук України',
      en: 'Star for Life Ukraine foundation with the Ministry of Education, the National Academy of Sciences and the Junior Academy of Sciences of Ukraine',
    },
    path: [
      { value: '121', label: { uk: 'команда на старті', en: 'teams at the start' } },
      { value: '9', label: { uk: 'на онлайн-захисті з Vector', en: 'at the online defence with Vector' } },
      { value: '4', label: { uk: 'у фіналі в Карпатах', en: 'in the final in the Carpathians' } },
      { value: '3', label: { uk: 'місце зі Scalaris, зробленим за 5 днів', en: 'place with Scalaris, built in 5 days' } },
    ],
    docs: { uk: 'Документи', en: 'Documents' },
    certSfl: { uk: 'Сертифікат Star for Life', en: 'Star for Life certificate' },
    certMan: { uk: 'Грамота МАН', en: 'Junior Academy diploma' },
    more: { uk: 'Також', en: 'Also' },
    olympiads: {
      uk: 'Багато років поспіль — призер олімпіад з математики та англійської мови',
      en: 'Prize winner in maths and English olympiads, year after year',
    },
    courses: { uk: 'Курси OpenAI Academy', en: 'OpenAI Academy courses' },
    view: { uk: 'Переглянути', en: 'View' },
  },

  about: {
    kicker: { uk: 'Про мене', en: 'About' },
    title: { uk: 'Роблю продукт цілком — від ідеї до деплою', en: 'I build the whole product, from idea to deploy' },
    p: {
      uk: [
        'Мене звати Олексій, я з Кременчука і зараз навчаюся в 11 класі. Розробку вивчаю самостійно, а найбільше кайфую від моменту, коли людина відкриває сайт і каже «вау».',
        'У командах я майже завжди тімлід: придумую ідею, малюю логотип та інтерфейс, проєктую архітектуру, пишу більшу частину коду й тримаю команду в темпі. Проєкт для мене готовий тоді, коли я сам ним пишаюся.',
      ],
      en: [
        'I’m Oleksii, I live in Kremenchuk, Ukraine, and I’m in my final year of school. I’m self-taught, and my favourite moment is when someone opens a site and says “wow”.',
        'In teams I’m almost always the lead: I come up with the idea, design the logo and the interface, plan the architecture, write most of the code and keep the team moving. A project is done when I’m proud of it myself.',
      ],
    },
    skillsTitle: { uk: 'Інструменти', en: 'Tools' },
    skills: [
      { level: { uk: 'Впевнено', en: 'Confident' }, items: ['React', 'Django', 'Django REST Framework', { uk: 'Тести', en: 'Testing' }] },
      { level: { uk: 'Працював', en: 'Used in projects' }, items: ['PostgreSQL · PostGIS', 'Docker', 'WebSockets · Django Channels', 'Redis'] },
      { level: { uk: 'Дизайн', en: 'Design' }, items: [{ uk: 'Інтерфейси', en: 'Interfaces' }, { uk: 'Логотипи й айдентика', en: 'Logos & identity' }] },
      { level: { uk: 'Знайомий і вивчаю', en: 'Familiar & learning' }, items: ['TypeScript', 'Celery'] },
    ],
    cv: { uk: 'Завантажити CV', en: 'Download CV' },
  },

  contact: {
    kicker: { uk: 'Контакт', en: 'Contact' },
    title: { uk: 'Є ідея для сайту?', en: 'Have an idea for a website?' },
    lead: {
      uk: 'Напишіть кілька слів про ваш бізнес і що потрібно — я відповім і запропоную, як це зробити.',
      en: 'Tell me a few words about your business and what you need — I’ll reply with how we can do it.',
    },
    copy: { uk: 'Скопіювати', en: 'Copy' },
    copied: { uk: 'Скопійовано', en: 'Copied' },
    telegram: { uk: 'Написати в Telegram', en: 'Message on Telegram' },
  },

  footer: {
    rights: { uk: 'Дизайн і код — мої.', en: 'Designed and built by me.' },
    source: { uk: 'Код сайту', en: 'Site source' },
    top: { uk: 'Нагору', en: 'Back to top' },
    time: { uk: 'Зараз у Кременчуці', en: 'Local time' },
  },

  project: {
    back: { uk: 'Усі роботи', en: 'All work' },
    role: { uk: 'Моя роль', en: 'My role' },
    year: { uk: 'Період', en: 'Timeline' },
    status: { uk: 'Статус', en: 'Status' },
    team: { uk: 'Команда', en: 'Team' },
    stack: { uk: 'Стек', en: 'Stack' },
    live: { uk: 'Відкрити сайт', en: 'Visit site' },
    code: { uk: 'Код на GitHub', en: 'Code on GitHub' },
    context: { uk: 'Контекст', en: 'Context' },
    inside: { uk: 'Що всередині', en: 'What’s inside' },
    numbers: { uk: 'У цифрах', en: 'By the numbers' },
    screens: { uk: 'Екрани', en: 'Screens' },
    next: { uk: 'Наступний проєкт', en: 'Next project' },
    concept: { uk: 'Концепт', en: 'Concept' },
  },
};
