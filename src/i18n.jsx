import { createContext, useContext } from "react";

export const translations = {
  uk: {
    nav: {
      projects: "проєкти",
      projectsAria: "Проєкти",
      certificates: "сертифікати",
      certificatesAria: "Сертифікати",
      about: "про мене",
      aboutAria: "Про мене",
      contact: "контакт",
      contactAria: "Контакт",
      write: "написати →",
      writeAria: "Написати",
      menuAria: "Відкрити меню",
      langAria: "Перемкнути на англійську",
    },
    hero: {
      line1: "КОД, ЯКИЙ",
      line2: "ВИРІШУЄ",
      line3: "ЗАДАЧІ.",
      aria: "КОД, ЯКИЙ ВИРІШУЄ ЗАДАЧІ.",
      scroll: "Проєкти",
      sub: "Самостійно вивчаю розробку — від структур даних до WebSocket-інфраструктури. Будую застосунки з реальними користувачами, а не навчальні приклади.",
      stack: "Django · React · WebSockets · PostgreSQL · Docker.",
    },
    marquee: "Будую продукти",
    projectsSection: {
      title1: "Вибрані",
      title2: "проєкти",
      hintHover: "Наведіть, щоб розгорнути. Клік — огляд проєкту.",
      hintTap: "Торкніться картки, щоб відкрити огляд проєкту.",
      open: "Огляд",
    },
    projectPage: {
      back: "Усі проєкти",
      role: "Роль",
      year: "Рік",
      stack: "Стек",
      live: "Відкрити сайт",
      about: "Про проєкт",
      inside1: "Що",
      inside2: "всередині",
      screens: "Скріншоти",
      next: "Наступний проєкт",
      missing: "Такого проєкту немає.",
    },
    projects: {
      vector: {
        tagline: "Платформа для проведення академічних турнірів",
        description:
          "Повноцінна система для організації академічних змагань: реєстрація команд, турнірна сітка в реальному часі, WebSocket-сповіщення та автоматична генерація PDF-сертифікатів. Проєкт розроблявся командою з трьох розробників, яку я очолював. З Vector ми дійшли до фіналу Всеукраїнського турніру з програмування.",
        badge: "Фіналіст Всеукраїнського турніру з програмування — 2026",
        role: "Тімлід команди з трьох розробників, fullstack",
        highlights: [
          { title: "Конструктор турнірів", text: "Організатор збирає турнір з будь-якого предмета: раунди, задачі, журі, сертифікати. Індивідуальний або командний формат." },
          { title: "Три ролі — три інтерфейси", text: "Організатор, учасник і журі бачать різне. Доступ розмежовано на рівні API, авторизація — JWT." },
          { title: "Живий турнір", text: "Таблиця лідерів і сповіщення про нові задачі, результати й запрошення приходять у реальному часі через Django Channels." },
          { title: "Сертифікати без ручної роботи", text: "Після завершення турніру PDF-сертифікати генеруються у фоні через Celery і Redis." },
        ],
      },
      scalaris: {
        tagline: "Соціальний застосунок для вуличної активності",
        description:
          "Mobile-first платформа, що показує на карті людей поруч, готових долучитися до спонтанної активності. Реалізовано власну кластеризацію аватарів на Leaflet-карті та обмін даними в реальному часі. Проєкт посів 3 місце у фіналі Всеукраїнського турніру з програмування.",
        badge: "3 місце у фіналі Всеукраїнського турніру з програмування — 2026",
        role: "Fullstack-розробник у команді з трьох",
        highlights: [
          { title: "Люди поруч на карті", text: "GeoDjango шукає користувачів у радіусі, Leaflet показує їх на карті міста." },
          { title: "Власна кластеризація", text: "Коли аватарів багато, вони збираються в кластери, а не накладаються один на одного." },
          { title: "Реальний час", text: "Позиції й запрошення до активності оновлюються через WebSockets без перезавантаження." },
          { title: "Mobile-first", text: "Інтерфейс проєктувався під телефон: застосунком користуються на вулиці, а не за столом." },
        ],
      },
      clarity: {
        tagline: "AI-команда для важких рішень",
        description:
          "Кілька AI-учасників із різними характерами обговорюють ваше питання, модератор зводить аргументи в рішення, AI Devil шукає в ньому слабкі місця — і ви отримуєте висновок із плюсами, ризиками та наступним кроком. Командний проєкт, у якому я написав більшу частину бекенду (рушій дебатів на Django) та інтерфейсу на React.",
        badge: "Основний розробник у команді — 2026",
        role: "Основний розробник у команді: бекенд і інтерфейс",
        highlights: [
          { title: "Рушій дебатів", text: "Стан-машина на Django проводить дискусію крок за кроком: уточнення, вступ, раунди дебатів, рішення модератора, перевірка AI Devil, висновок." },
          { title: "Будь-яка модель", text: "OpenAI, Anthropic, Gemini, Groq, DeepSeek, Mistral, OpenRouter, Ollama або власний endpoint — кожен учасник може працювати на своїй." },
          { title: "Контекст із реального світу", text: "Пошук у вебі (Tavily, Brave, SearXNG, Wikipedia) і вкладення: PDF, Word, текст, фото." },
          { title: "Після рішення", text: "Журнал рішень із нагадуванням «Як воно?» поштою, публічні посилання на дискусію, інтерфейс українською та англійською." },
        ],
      },
      britva: {
        tagline: "Концепт лендингу для барбершопу",
        description:
          "Односторінковий сайт для барбершопу в темному editorial-стилі: великий серифний заголовок, колаж робіт, прайс-меню, майстри, онлайн-запис і карта. Дизайн і адаптивна верстка — від ідеї до деплою, без фреймворків.",
        badge: "Концепт: дизайн і розробка — 2026",
        role: "Дизайн і верстка",
        highlights: [
          { title: "Editorial-дизайн", text: "Темна палітра, великий серифний заголовок поверх фото, колаж робіт із накладаннями — сайт виглядає як журнал, а не як шаблон." },
          { title: "Окремо зібраний мобільний", text: "На телефоні перший екран перекомпоновано, меню повноекранне, а кнопка запису з’являється після першого екрана й ховається біля форми." },
          { title: "Запис без дзвінків", text: "Форма з валідацією телефону й дати, готова до підключення Telegram-бота, щоб заявки одразу йшли власнику." },
          { title: "Нічого зайвого", text: "HTML, CSS і трохи JavaScript без фреймворків і збирання. Деплой — GitHub Pages." },
        ],
      },
      glaze: {
        tagline: "Концепт сайту студії манікюру",
        description:
          "Світлий односторінковий сайт для студії манікюру — навмисно протилежний темній Britva. Фото в арках, що повторюють форму нігтя, палітра «кольорів сезону», прайс як у меню, блок про стерильність і онлайн-запис. Дизайн і верстка з нуля, без фреймворків.",
        badge: "Концепт: дизайн і розробка — 2026",
        role: "Дизайн і верстка",
        highlights: [
          { title: "Палітра, що записує", text: "Кольори сезону намальовані як нігтики з відблиском лаку. Натискаєш на відтінок — і він одразу з’являється в полі «Колір» форми запису." },
          { title: "Довіра через стерильність", text: "Окремий блок із чотирма етапами обробки інструментів: для клієнток манікюру це головне питання перед першим візитом." },
          { title: "Ціни без сюрпризів", text: "Прайс у три колонки з крапковими лідерами, як у меню ресторану: манікюр, педикюр, дизайн." },
          { title: "Телефон — головний екран", text: "На мобільному фото йде першим, галерея гортається вбік, меню повноекранне, кнопка запису з’являється після першого екрана." },
        ],
      },
    },
    about: {
      title1: "Учень 11 класу, який",
      title2: "будує продукти",
      aria: "Учень 11 класу, який будує продукти",
      p1: "Я вивчаю розробку самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels. Люблю розбиратись у тому, як влаштовані системи всередині, і не боюсь читати чужий код, щоб зрозуміти патерн, а не скопіювати рішення.",
      p2: "Я очолював команду з трьох розробників проєкту Vector, з яким ми дійшли до фіналу Всеукраїнського турніру з програмування. Проєкт Scalaris приніс команді 3 місце у фіналі турніру. Зараз розробляю Clarity — сервіс, де команда AI-учасників допомагає ухвалювати важкі рішення, — і роблю сайти для малого бізнесу.",
      facts: [
        {
          num: "01",
          label: "Освіта",
          text: "Самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels.",
        },
        {
          num: "02",
          label: "Команда",
          text: "Тім-лід команди з трьох розробників проєкту Vector — фіналіст Всеукраїнського турніру з програмування.",
        },
        {
          num: "03",
          label: "Далі",
          text: "Clarity — AI-сервіс для важких рішень, і сайти для малого бізнесу.",
        },
      ],
    },
    certificates: {
      title: "Мої сертифікати",
      fixed: "Мої",
      words: ["сертифікати", "досягнення", "дипломи", "грамоти", "знання", "навички"],
      viewCta: "Переглянути сертифікат",
      close: "Закрити",
      viewerAria: "Зображення сертифіката",
      navAria: "Перемикання сертифікатів",
      prevAria: "Попередній сертифікат",
      nextAria: "Наступний сертифікат",
      items: [
        {
          title: "AI Foundations",
          company: "OpenAI",
          companyLogo: "logos/openai.webp",
          link: "https://openai.com",
          image: "certificates/ai-foundations.png",
          description:
            "Проходження курсу AI Foundations від OpenAI: основи штучного інтелекту, машинного навчання та практична робота з сучасними AI-інструментами.",
        },
        {
          title: "Applied AI Foundations",
          company: "OpenAI",
          companyLogo: "logos/openai.webp",
          link: "https://openai.com",
          image: "certificates/applied-ai-foundations.png",
          description:
            "Проходження курсу Applied AI Foundations від OpenAI Academy: практичне застосування штучного інтелекту та машинного навчання, розробка додатків на основі AI і робота з сучасними інструментами.",
        },
        {
          title: "Agents and Workflow",
          company: "OpenAI",
          companyLogo: "logos/openai.webp",
          link: "https://openai.com",
          image: "certificates/agents-workflow.png",
          description:
            "Проходження курсу OpenAI Agents and Workflow: проєктування агентів і робочих процесів на основі ШІ, оркестрація інструментів та побудова автоматизованих рішень.",
        },
        {
          title: "Tech Camp · ІІІ місце",
          company: "Star for Life Ukraine",
          companyLogo: "logos/starforlife.png",
          link: "https://www.sflua.org",
          image: "certificates/tech-camp-3rd.png",
          description:
            "ІІІ місце у Всеукраїнському командному турнірі з програмування 2026 від БФ «Star for Life Ukraine»: командна робота, розробка програмного продукту та виконання турнірного завдання. 3 лютого — 22 липня 2026.",
        },
        {
          title: "Tech Camp · МАН",
          company: "МАН України",
          companyLogo: "logos/MAN.png",
          link: "https://man.gov.ua",
          image: "certificates/tech-camp-man.png",
          description:
            "Капітан команди «Vector»: ІІІ місце в Tech Camp від Малої академії наук України — командна робота, розробка програмного продукту та виконання турнірного завдання.",
        },
      ],
    },
    contact: {
      title: "Є проєкт?",
      talk: "Поговорімо.",
      copy: "Копіювати",
      copied: "Скопійовано ✓",
    },
    footer: {
      name: "Олексій Безклинський, 2026.",
      credit: "Зроблено на React + Framer Motion",
    },
  },
  en: {
    nav: {
      projects: "projects",
      projectsAria: "Projects",
      certificates: "certificates",
      certificatesAria: "Certificates",
      about: "about",
      aboutAria: "About",
      contact: "contact",
      contactAria: "Contact",
      write: "write me →",
      writeAria: "Write me",
      menuAria: "Open menu",
      langAria: "Switch to Ukrainian",
    },
    hero: {
      line1: "CODE THAT",
      line2: "SOLVES",
      line3: "PROBLEMS.",
      aria: "CODE THAT SOLVES PROBLEMS.",
      scroll: "Projects",
      sub: "Self-taught developer — from data structures to WebSocket infrastructure. I build apps with real users, not school examples.",
      stack: "Django · React · WebSockets · PostgreSQL · Docker.",
    },
    marquee: "Building products",
    projectsSection: {
      title1: "Selected",
      title2: "projects",
      hintHover: "Hover to expand. Click to open the case study.",
      hintTap: "Tap a card to open the case study.",
      open: "Case study",
    },
    projectPage: {
      back: "All projects",
      role: "Role",
      year: "Year",
      stack: "Stack",
      live: "Open site",
      about: "About",
      inside1: "What’s",
      inside2: "inside",
      screens: "Screenshots",
      next: "Next project",
      missing: "There is no such project.",
    },
    projects: {
      vector: {
        tagline: "Platform for academic tournaments",
        description:
          "A complete system for organizing academic competitions: team registration, real-time tournament brackets, WebSocket notifications, and automated PDF certificate generation. I led the three-developer team; Vector took us to the final of the All-Ukrainian Programming Tournament.",
        badge: "Finalist — All-Ukrainian Programming Tournament 2026",
        role: "Team lead of three developers, full-stack",
        highlights: [
          { title: "Tournament builder", text: "Organizers set up a tournament in any subject: rounds, tasks, jury, certificates. Individual or team format." },
          { title: "Three roles, three interfaces", text: "Organizers, participants and jury see different things. Access is enforced in the API, auth is JWT." },
          { title: "A live tournament", text: "The leaderboard and notifications about new tasks, results and invites arrive in real time via Django Channels." },
          { title: "Certificates on autopilot", text: "When a tournament ends, PDF certificates are generated in the background with Celery and Redis." },
        ],
      },
      scalaris: {
        tagline: "Social app for street activity",
        description:
          "A mobile-first platform that shows nearby people on a map who are ready to join spontaneous activity. Features custom avatar clustering on a Leaflet map and real-time data exchange. Scalaris earned the team 3rd place in the tournament final.",
        badge: "3rd place — All-Ukrainian Programming Tournament final 2026",
        role: "Full-stack developer in a team of three",
        highlights: [
          { title: "People nearby on a map", text: "GeoDjango finds users within a radius, Leaflet shows them on the city map." },
          { title: "Custom clustering", text: "When there are many avatars, they group into clusters instead of piling up on each other." },
          { title: "Real time", text: "Positions and activity invites update over WebSockets without reloading." },
          { title: "Mobile-first", text: "Designed for the phone: people use it outside, not at a desk." },
        ],
      },
      clarity: {
        tagline: "An AI team for hard decisions",
        description:
          "Several AI participants with different personalities debate your question, a moderator turns the arguments into a decision, and an AI Devil looks for its weak spots — you get a conclusion with pros, risks and a next step. A team project where I wrote most of the backend (the Django debate engine) and the React interface.",
        badge: "Lead developer in a team — 2026",
        role: "Lead developer in a team: backend and interface",
        highlights: [
          { title: "Debate engine", text: "A Django state machine runs the discussion step by step: clarification, openings, debate rounds, the moderator’s decision, the AI Devil check, the conclusion." },
          { title: "Any model", text: "OpenAI, Anthropic, Gemini, Groq, DeepSeek, Mistral, OpenRouter, Ollama or a custom endpoint — each participant can run on its own." },
          { title: "Real-world context", text: "Web search (Tavily, Brave, SearXNG, Wikipedia) and attachments: PDF, Word, text, photos." },
          { title: "After the decision", text: "A decision journal that emails a “How did it go?” follow-up, public links to discussions, Ukrainian and English UI." },
        ],
      },
      britva: {
        tagline: "Barbershop landing page concept",
        description:
          "A one-page site for a barbershop in a dark editorial style: oversized serif headline, work collage, price menu, barbers, online booking and a map. Design and responsive build from concept to deploy, no frameworks.",
        badge: "Concept: design & development — 2026",
        role: "Design and front-end",
        highlights: [
          { title: "Editorial design", text: "A dark palette, an oversized serif headline over photography, an overlapping work collage — it reads like a magazine, not a template." },
          { title: "A mobile layout of its own", text: "On phones the first screen is recomposed, the menu goes full-screen, and the booking button appears after the first screen and hides near the form." },
          { title: "Booking without calls", text: "A form with phone and date validation, ready to be wired to a Telegram bot so requests go straight to the owner." },
          { title: "Nothing extra", text: "HTML, CSS and a little JavaScript, no frameworks or build step. Deployed on GitHub Pages." },
        ],
      },
      glaze: {
        tagline: "Nail studio website concept",
        description:
          "A light one-page site for a nail studio — the deliberate opposite of the dark Britva. Arch-shaped photos echoing the shape of a nail, a palette of seasonal colours, a menu-style price list, a sterility section and online booking. Designed and built from scratch, no frameworks.",
        badge: "Concept: design & development — 2026",
        role: "Design and front-end",
        highlights: [
          { title: "A palette that books", text: "Seasonal colours are drawn as glossy little nails. Tap a shade and it lands straight in the booking form’s colour field." },
          { title: "Trust through sterility", text: "A dedicated section with the four steps of tool sterilisation — the main question clients have before a first visit." },
          { title: "Prices with no surprises", text: "A three-column price list with dotted leaders, like a restaurant menu: manicure, pedicure, nail art." },
          { title: "Phone first", text: "On mobile the photo comes first, the gallery scrolls sideways, the menu is full-screen and the booking button appears after the first screen." },
        ],
      },
    },
    about: {
      title1: "An 11th-grader who",
      title2: "builds products",
      aria: "An 11th-grader who builds products",
      p1: "I teach myself development — from data structures in JavaScript to WebSocket infrastructure on Django Channels. I love understanding how systems work inside and I'm not afraid of reading foreign code to grasp a pattern rather than copy a solution.",
      p2: "I led a three-developer team building Vector, which reached the final of the All-Ukrainian Programming Tournament, and Scalaris, which earned the team 3rd place in the final. Right now I'm building Clarity — a service where a team of AI participants helps you make hard decisions — and making websites for small businesses.",
      facts: [
        {
          num: "01",
          label: "Learning",
          text: "Self-taught — from data structures in JavaScript to WebSocket infrastructure on Django Channels.",
        },
        {
          num: "02",
          label: "Team",
          text: "Team lead of a three-developer team on Vector — finalist of the All-Ukrainian Programming Tournament.",
        },
        {
          num: "03",
          label: "Next",
          text: "Clarity — an AI service for hard decisions, plus websites for small businesses.",
        },
      ],
    },
    contact: {
      title: "Got a project?",
      talk: "Let's talk.",
      copy: "Copy",
      copied: "Copied ✓",
    },
    certificates: {
      title: "My certificates",
      fixed: "My",
      words: ["certificates", "achievements", "diplomas", "awards", "knowledge", "skills"],
      viewCta: "View certificate",
      close: "Close",
      viewerAria: "Certificate image",
      navAria: "Certificate navigation",
      prevAria: "Previous certificate",
      nextAria: "Next certificate",
      items: [
        {
          title: "AI Foundations",
          company: "OpenAI",
          companyLogo: "logos/openai.webp",
          link: "https://openai.com",
          image: "certificates/ai-foundations.png",
          description:
            "Completed OpenAI's AI Foundations course: core concepts of artificial intelligence and machine learning, with hands-on practice using modern AI tools.",
        },
        {
          title: "Applied AI Foundations",
          company: "OpenAI",
          companyLogo: "logos/openai.webp",
          link: "https://openai.com",
          image: "certificates/applied-ai-foundations.png",
          description:
            "Completed OpenAI Academy's Applied AI Foundations course: putting artificial intelligence and machine learning into practice — building AI-powered applications with modern tools.",
        },
        {
          title: "Agents and Workflow",
          company: "OpenAI",
          companyLogo: "logos/openai.webp",
          link: "https://openai.com",
          image: "certificates/agents-workflow.png",
          description:
            "Completed OpenAI's Agents and Workflow course: designing AI agents and workflows, orchestrating tools, and building automated solutions.",
        },
        {
          title: "Tech Camp · 3rd place",
          company: "Star for Life Ukraine",
          companyLogo: "logos/starforlife.png",
          link: "https://www.sflua.org",
          image: "certificates/tech-camp-3rd.png",
          description:
            "3rd place in the All-Ukrainian team programming tournament 2026 by the Star for Life Ukraine Charity Foundation: teamwork, building a software product, and completing the tournament task. Feb 3 — Jul 22, 2026.",
        },
        {
          title: "Tech Camp · МАН",
          company: "Junior Academy of Sciences",
          companyLogo: "logos/MAN.png",
          link: "https://man.gov.ua",
          image: "certificates/tech-camp-man.png",
          description:
            "Captain of team Vector: 3rd place at the Tech Camp of the Junior Academy of Sciences of Ukraine — teamwork, building a software product, and completing the tournament task.",
        },
      ],
    },
    footer: {
      name: "Olexiy Bezklynskiy, 2026.",
      credit: "Built with React + Framer Motion",
    },
  },
};

export const LangContext = createContext({ lang: "uk", t: translations.uk, setLang: () => {} });

export const useLang = () => useContext(LangContext);