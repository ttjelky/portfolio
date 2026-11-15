import type { ImageMetadata } from 'astro';
import type { L } from '../i18n';

// Скріншоти
import clarityLightChat from '../assets/projects/clarity/light-chat.jpg';
import clarityLightHome from '../assets/projects/clarity/light-home.jpg';
import clarityLightHistory from '../assets/projects/clarity/light-history.jpg';
import clarityLightJournal from '../assets/projects/clarity/light-journal.jpg';
import clarityLightMHome from '../assets/projects/clarity/light-m-home.jpg';
import clarityLightMVerdict from '../assets/projects/clarity/light-m-verdict.jpg';
import clarityLightMJournal from '../assets/projects/clarity/light-m-journal.jpg';
import clarityDarkVerdict from '../assets/projects/clarity/verdict.jpg';

import vectorLanding from '../assets/projects/vector/landing.jpg';
import vectorTournament from '../assets/projects/vector/tournament.jpg';
import vectorRounds from '../assets/projects/vector/rounds.jpg';
import vectorMDashboard from '../assets/projects/vector/m-dashboard.jpg';
import vectorMTournament from '../assets/projects/vector/m-tournament.jpg';

import scalarisMap from '../assets/projects/scalaris/map.jpg';
import scalarisNearby from '../assets/projects/scalaris/nearby.jpg';
import scalarisCross from '../assets/projects/scalaris/cross.jpg';
import scalarisMMap from '../assets/projects/scalaris/m-map.jpg';
import scalarisMSheet from '../assets/projects/scalaris/m-sheet.jpg';
import scalarisMQuest from '../assets/projects/scalaris/m-quest.jpg';
import scalarisMZone from '../assets/projects/scalaris/m-zone.jpg';

import worldlogLanding from '../assets/projects/worldlog/landing.jpg';
import worldlogWorlds from '../assets/projects/worldlog/worlds.jpg';
import worldlogWorld from '../assets/projects/worldlog/world.jpg';
import worldlogWiki from '../assets/projects/worldlog/wiki.jpg';
import worldlogMLanding from '../assets/projects/worldlog/m-landing.jpg';

import britvaGallery from '../assets/projects/britva/gallery.jpg';
import britvaHero from '../assets/projects/britva/hero.jpg';
import britvaServices from '../assets/projects/britva/services.jpg';
import britvaBooking from '../assets/projects/britva/booking.jpg';

import glazePalette from '../assets/projects/glaze/palette.jpg';
import glazePrices from '../assets/projects/glaze/prices.jpg';
import glazeBooking from '../assets/projects/glaze/booking.jpg';
import glazeMHero from '../assets/projects/glaze/m-hero.jpg';
import glazeMColors from '../assets/projects/glaze/m-colors.jpg';
import glazeMBooking from '../assets/projects/glaze/m-booking.jpg';

// Логотипи продуктів (з їхніх репозиторіїв)
import clarityLogo from '../assets/logos/clarity.svg';
import vectorLogo from '../assets/logos/vector.svg';
import scalarisLogo from '../assets/logos/scalaris.svg';
import worldlogLogo from '../assets/logos/worldlog.png';

export interface Shot {
  src: ImageMetadata;
  alt: L;
  phone?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  kind: 'product' | 'site';
  /** Фірмовий колір проєкту — акцент на сайті портфоліо. */
  accent: string;
  /** Текст поверх акценту. */
  onAccent: string;
  /** Фон панелі зі скріншотами (колір або градієнт) і чи вона темна. */
  panel: string;
  dark: boolean;
  /** Логотип продукту — показується поруч із назвою. */
  logo?: ImageMetadata;
  tagline: L;
  summary: L;
  context: L;
  role: L;
  period: L;
  status: L;
  award?: L;
  stack: string[];
  team?: { name: string; url: string }[];
  links: { live?: string; github?: string };
  highlights: { title: L; text: L }[];
  stats: { value: string; label: L }[];
  cover: { desktop: ImageMetadata; phone?: ImageMetadata };
  /** Ряди скріншотів; у ряду кадри однакової висоти. */
  gallery: Shot[][];
}

const TEAM = {
  artem: { name: 'Artem Tsvelykh', url: 'https://github.com/TrrippleV' },
  dergo: { name: 'dergo', url: 'https://github.com/dergo0-0' },
};

const TOURNAMENT_FINAL: L = {
  uk: '3 місце у фіналі Всеукраїнського командного турніру з програмування 2026',
  en: '3rd place at the All-Ukrainian Team Programming Tournament 2026 final',
};

export const PROJECTS: Project[] = [
  {
    slug: 'clarity',
    name: 'Clarity',
    kind: 'product',
    accent: '#f29bb0',
    onAccent: '#0b0b0b',
    panel: 'linear-gradient(135deg, #f6c4d2 0%, #f1d9c2 38%, #d9ecf2 70%, #bfe6f6 100%)',
    dark: false,
    logo: clarityLogo,
    tagline: { uk: 'AI-рада для складних рішень', en: 'An AI council for hard decisions' },
    summary: {
      uk: 'Ви ставите питання, а кілька AI-учасників із різними характерами його обговорюють. Модератор зводить аргументи в рішення, AI Devil шукає в ньому слабкі місця. На виході — висновок із плюсами, ризиками, думкою меншості й наступним кроком.',
      en: 'You ask a question and several AI participants with different personalities debate it. A moderator turns the arguments into a decision, and an AI Devil hunts for its weak spots. You get a conclusion with pros, risks, the minority view and a next step.',
    },
    context: {
      uk: 'Коли рішення справді важке, одна відповідь чат-бота лише підтверджує те, що ви хотіли почути. Clarity влаштовує справжню дискусію: різні погляди, суперечка, перевірка — і лише потім висновок. Це мій найновіший і технічно найскладніший проєкт.',
      en: 'When a decision is genuinely hard, a single chatbot answer just confirms what you wanted to hear. Clarity runs a real discussion: different views, an argument, a check — and only then a conclusion. It is my newest and most technically ambitious project.',
    },
    role: {
      uk: 'Ідея, логотип, увесь код і архітектура, фінальний дизайн',
      en: 'Idea, logo, all of the code and architecture, final design',
    },
    period: { uk: 'Вересень — листопад 2026', en: 'Sep — Nov 2026' },
    status: { uk: 'Працює онлайн', en: 'Live' },
    stack: ['Django 6', 'Django REST Framework', 'React 19', 'Vite', 'React Router', 'PostgreSQL', 'Docker', 'nginx', 'LLM APIs'],
    links: { live: 'https://clarity-three-xi.vercel.app/' },
    highlights: [
      {
        title: { uk: 'Рушій дебатів', en: 'Debate engine' },
        text: {
          uk: 'Стан-машина на Django проводить дискусію крок за кроком: уточнення, вступ, раунди дебатів, рішення модератора, перевірка AI Devil, висновок. Кроки виконує потік у вебсервері або окремий воркер.',
          en: 'A Django state machine runs the discussion step by step: clarification, openings, debate rounds, the moderator’s decision, the AI Devil check, the conclusion. Steps run in a web-server thread or a separate worker.',
        },
      },
      {
        title: { uk: 'Будь-яка модель', en: 'Any model' },
        text: {
          uk: 'OpenAI, Anthropic, Gemini, Groq, Cerebras, DeepSeek, Mistral, OpenRouter, Ollama або власний endpoint — кожен учасник може думати на своїй моделі.',
          en: 'OpenAI, Anthropic, Gemini, Groq, Cerebras, DeepSeek, Mistral, OpenRouter, Ollama or a custom endpoint — each participant can think on its own model.',
        },
      },
      {
        title: { uk: 'Контекст із реального світу', en: 'Real-world context' },
        text: {
          uk: 'Пошук у вебі через Tavily, Brave, SearXNG або Wikipedia і вкладення: PDF, Word, текст і фото.',
          en: 'Web search via Tavily, Brave, SearXNG or Wikipedia, plus attachments: PDF, Word, text and photos.',
        },
      },
      {
        title: { uk: 'Після рішення', en: 'After the decision' },
        text: {
          uk: 'Журнал рішень згодом питає листом «Як воно?», дискусією можна поділитися посиланням, а інтерфейс і відповіді AI — українською чи англійською.',
          en: 'A decision journal later emails a “How did it go?”, discussions can be shared by link, and both the UI and the AI answers are in Ukrainian or English.',
        },
      },
    ],
    stats: [
      { value: '450+', label: { uk: 'тестів бекенду', en: 'backend tests' } },
      { value: '9', label: { uk: 'провайдерів моделей', en: 'model providers' } },
      { value: '2', label: { uk: 'мови інтерфейсу', en: 'UI languages' } },
    ],
    cover: { desktop: clarityLightChat, phone: clarityLightMHome },
    gallery: [
      [{ src: clarityLightChat, alt: { uk: 'Висновок дискусії з планом на тиждень і ризиками', en: 'Discussion verdict with a weekly plan and risks' } }],
      [
        { src: clarityLightHome, alt: { uk: 'Головний екран із полем для питання', en: 'Home screen with the question field' } },
        { src: clarityLightHistory, alt: { uk: 'Історія дискусій', en: 'Discussion history' } },
      ],
      [
        { src: clarityLightMHome, alt: { uk: 'Головний екран на телефоні', en: 'Home screen on a phone' }, phone: true },
        { src: clarityLightMVerdict, alt: { uk: 'Висновок на телефоні', en: 'Verdict on a phone' }, phone: true },
        { src: clarityLightMJournal, alt: { uk: 'Журнал рішень на телефоні', en: 'Decision journal on a phone' }, phone: true },
      ],
      [
        { src: clarityLightJournal, alt: { uk: 'Журнал рішень', en: 'Decision journal' } },
        { src: clarityDarkVerdict, alt: { uk: 'Висновок у темній темі', en: 'Verdict in the dark theme' } },
      ],
    ],
  },
  {
    slug: 'vector',
    name: 'Vector',
    kind: 'product',
    accent: '#2f6bff',
    onAccent: '#ffffff',
    panel: 'linear-gradient(150deg, #e9e6fb 0%, #d9d8fa 45%, #f3d6d6 100%)',
    dark: false,
    logo: vectorLogo,
    tagline: { uk: 'Платформа для турнірів з будь-якого предмета', en: 'A platform for tournaments in any subject' },
    summary: {
      uk: 'Організатор збирає турнір під себе: раунди, задачі, журі, сертифікати, індивідуальний чи командний формат. Учасники бачать задачі й таблицю лідерів у реальному часі, журі — свою панель оцінювання.',
      en: 'An organizer sets up a tournament their way: rounds, tasks, jury, certificates, individual or team format. Participants see tasks and a live leaderboard; the jury gets its own grading panel.',
    },
    context: {
      uk: 'Проєкт для онлайн-етапу Всеукраїнського командного турніру з програмування. Технічне завдання описувало платформу для турнірів, а ми розширили ідею й дали організатору свободу: Vector підходить для турніру з будь-якого предмета й у будь-якому форматі. З ним наша команда пройшла в топ-9 зі 121 команди, а після онлайн-захисту — у топ-4 і у фінал.',
      en: 'Built for the online stage of the All-Ukrainian Team Programming Tournament. The brief described a tournament platform; we pushed the idea further and gave organizers freedom: Vector works for a tournament in any subject and any format. It took our team into the top 9 of 121 teams, and after the online defence into the top 4 and the final.',
    },
    role: {
      uk: 'Тімлід команди з трьох · 70% коду · весь дизайн і логотип',
      en: 'Team lead of three · 70% of the code · all design and the logo',
    },
    period: { uk: 'Лютий — травень 2026', en: 'Feb — May 2026' },
    status: { uk: 'Завершено', en: 'Completed' },
    award: {
      uk: 'Топ-4 зі 121 команди — вихід у фінал турніру',
      en: 'Top 4 of 121 teams — qualified for the tournament final',
    },
    stack: ['Django 6', 'Django REST Framework', 'Django Channels', 'SimpleJWT', 'ReportLab', 'React 18', 'Vite', 'CSS Modules'],
    team: [TEAM.artem, TEAM.dergo],
    links: { github: 'https://github.com/ttjelky/vector' },
    highlights: [
      {
        title: { uk: 'Конструктор турнірів', en: 'Tournament builder' },
        text: {
          uk: 'Будь-який предмет, раунди й задачі, дедлайни, журі, обкладинка й колір турніру. Індивідуальний або командний формат із запрошеннями в команду.',
          en: 'Any subject, rounds and tasks, deadlines, jury, a cover and an accent colour. Individual or team format with team invites.',
        },
      },
      {
        title: { uk: 'Три ролі — три інтерфейси', en: 'Three roles, three interfaces' },
        text: {
          uk: 'Організатор, учасник і журі бачать різне. Доступ розмежовано на рівні API, вхід — через JWT з автоматичним оновленням токена.',
          en: 'Organizers, participants and jury see different things. Access is enforced in the API; sign-in uses JWT with automatic token refresh.',
        },
      },
      {
        title: { uk: 'Живий турнір', en: 'A live tournament' },
        text: {
          uk: 'Сповіщення про нові задачі, результати й запрошення приходять миттєво через WebSocket на Django Channels.',
          en: 'Notifications about new tasks, results and invites arrive instantly over WebSockets on Django Channels.',
        },
      },
      {
        title: { uk: 'Сертифікати без ручної роботи', en: 'Certificates on autopilot' },
        text: {
          uk: 'Після турніру платформа сама генерує PDF-сертифікати учасникам.',
          en: 'When the tournament ends, the platform generates PDF certificates for participants.',
        },
      },
    ],
    stats: [
      { value: '121 → 4', label: { uk: 'команд до фіналу', en: 'teams down to the final' } },
      { value: '3', label: { uk: 'місяці розробки', en: 'months of work' } },
      { value: '130+', label: { uk: 'тестів', en: 'tests' } },
    ],
    cover: { desktop: vectorTournament, phone: vectorMDashboard },
    gallery: [
      [{ src: vectorLanding, alt: { uk: 'Лендинг Vector', en: 'Vector landing page' } }],
      [
        { src: vectorTournament, alt: { uk: 'Сторінка турніру', en: 'Tournament page' } },
        { src: vectorRounds, alt: { uk: 'Раунди й задачі', en: 'Rounds and tasks' } },
      ],
      [
        { src: vectorMDashboard, alt: { uk: 'Дашборд на телефоні', en: 'Dashboard on a phone' }, phone: true },
        { src: vectorMTournament, alt: { uk: 'Турнір на телефоні', en: 'Tournament on a phone' }, phone: true },
      ],
    ],
  },
  {
    slug: 'scalaris',
    name: 'Scalaris',
    kind: 'product',
    accent: '#c6f135',
    onAccent: '#0b0b0b',
    panel: '#c6f135',
    dark: false,
    logo: scalarisLogo,
    tagline: { uk: 'Соціальна карта для активностей поруч', en: 'A social map for activities nearby' },
    summary: {
      uk: 'Відкриваєш карту — бачиш людей поруч, готових до активності просто зараз. Збір, крос із чекпоінтами, ігрова зона чи квест: створюєш за хвилину, а учасники приєднуються в реальному часі.',
      en: 'Open the map and see people nearby who are up for something right now. A meetup, a cross-country run with checkpoints, a game zone or a quest: create one in a minute and people join in real time.',
    },
    context: {
      uk: 'Фінальне завдання турніру ми отримали в Карпатах, і на весь продукт було 5 днів. Спали по 4–5 годин і писали ночами. На захисті Scalaris приніс команді 3 місце.',
      en: 'We got the final tournament brief in the Carpathian mountains and had 5 days for the whole product. We slept 4–5 hours a night and coded through the nights. At the defence Scalaris won our team 3rd place.',
    },
    role: {
      uk: 'Тімлід · 50% коду · дизайн, логотип і всі технічні рішення',
      en: 'Team lead · 50% of the code · design, logo and all technical decisions',
    },
    period: { uk: 'Липень 2026 · 5 днів', en: 'July 2026 · 5 days' },
    status: { uk: 'Завершено', en: 'Completed' },
    award: TOURNAMENT_FINAL,
    stack: ['Django 6', 'Django REST Framework', 'Django Channels', 'PostGIS', 'Redis', 'React 19', 'Leaflet', 'Docker'],
    team: [TEAM.artem, TEAM.dergo],
    links: { github: 'https://github.com/ttjelky/Scalaris' },
    highlights: [
      {
        title: { uk: 'Люди поруч', en: 'People nearby' },
        text: {
          uk: 'PostGIS шукає користувачів у радіусі 5 км, а карта показує, хто зараз готовий долучитися.',
          en: 'PostGIS finds users within 5 km, and the map shows who is ready to join right now.',
        },
      },
      {
        title: { uk: 'Чотири види активностей', en: 'Four kinds of activity' },
        text: {
          uk: 'Збір у точці, крос із маршрутом із чекпоінтів, ігрова зона з геозоною та квест — хто пройде більше кілометрів за час.',
          en: 'A meetup at a spot, a run along checkpoints, a game zone with a geofence, and a quest — who covers the most kilometres in time.',
        },
      },
      {
        title: { uk: 'Власна кластеризація', en: 'Custom clustering' },
        text: {
          uk: 'Коли аватарів багато, вони збираються в кластери з лічильником, а не накладаються один на одного.',
          en: 'When there are many avatars they merge into counted clusters instead of piling up.',
        },
      },
      {
        title: { uk: 'Реальний час і приватність', en: 'Real time and privacy' },
        text: {
          uk: 'Запрошення й позиції оновлюються через WebSocket. Можна сховатися з карти, показувати себе лише друзям або заблокувати людину.',
          en: 'Invites and positions update over WebSockets. You can hide from the map, show yourself only to friends, or block someone.',
        },
      },
    ],
    stats: [
      { value: '5', label: { uk: 'днів на весь продукт', en: 'days for the whole product' } },
      { value: '3', label: { uk: 'місце у фіналі', en: 'place at the final' } },
      { value: '180+', label: { uk: 'тестів', en: 'tests' } },
    ],
    cover: { desktop: scalarisMap, phone: scalarisMSheet },
    gallery: [
      [{ src: scalarisMap, alt: { uk: 'Карта з кластерами людей поруч', en: 'Map with clusters of people nearby' } }],
      [
        { src: scalarisNearby, alt: { uk: 'Список людей поруч', en: 'People nearby list' } },
        { src: scalarisCross, alt: { uk: 'Створення кросу з маршрутом', en: 'Creating a run with a route' } },
      ],
      [
        { src: scalarisMMap, alt: { uk: 'Карта на телефоні', en: 'Map on a phone' }, phone: true },
        { src: scalarisMQuest, alt: { uk: 'Створення квесту', en: 'Creating a quest' }, phone: true },
        { src: scalarisMZone, alt: { uk: 'Ігрова зона з геозоною', en: 'Game zone with a geofence' }, phone: true },
      ],
    ],
  },
  {
    slug: 'worldlog',
    name: 'WorldLog',
    kind: 'product',
    accent: '#f0a830',
    onAccent: '#0b0b0b',
    panel: 'linear-gradient(160deg, #f6b744 0%, #f0a830 55%, #e58a3c 100%)',
    dark: false,
    logo: worldlogLogo,
    tagline: { uk: 'Паспорт Minecraft-світу', en: 'A passport for a Minecraft world' },
    summary: {
      uk: 'Командний щоденник ігрового світу: гравці, локації з координатами, задачі й проєкти, хроніка подій за епохами, вікі з посиланнями між сторінками і граф зв’язків. У кожного світу — своя тема оформлення.',
      en: 'A shared journal for a game world: players, locations with coordinates, tasks and projects, a timeline split into eras, a wiki with links between pages and a relationship graph. Every world gets its own visual theme.',
    },
    context: {
      uk: 'Великі сервери живуть місяцями, і історія світу губиться в чатах і скріншотах. WorldLog збирає все в одному місці, щоб команда пам’ятала, що, де і коли сталося. Проєкт моєї команди DiJital, відкритий код під ліцензією MIT.',
      en: 'Big servers live for months, and a world’s history gets lost in chats and screenshots. WorldLog keeps it all in one place so the team remembers what happened, where and when. A project by my team DiJital, open source under the MIT licence.',
    },
    role: {
      uk: 'Ідея · 90% коду · дизайн, логотип і айдентика · керую напарником',
      en: 'Idea · 90% of the code · design, logo and identity · lead a teammate',
    },
    period: { uk: 'Серпень 2026 — зараз', en: 'Aug 2026 — now' },
    status: { uk: 'У розробці', en: 'In progress' },
    stack: ['Django 6', 'Django REST Framework', 'SimpleJWT', 'React 19', 'React Router 7', 'MUI', 'TanStack Query', 'D3', 'PostgreSQL'],
    team: [TEAM.dergo],
    links: { github: 'https://github.com/ttjelky/Worldlog' },
    highlights: [
      {
        title: { uk: 'Увесь світ на одній сторінці', en: 'The whole world on one page' },
        text: {
          uk: 'Гравці, локації, задачі, хроніка, нотатки, проєкти, планер, закладки, ідеї з голосуванням — картки, які можна переставляти й ховати.',
          en: 'Players, locations, tasks, timeline, notes, projects, planner, bookmarks, ideas with voting — cards you can rearrange and hide.',
        },
      },
      {
        title: { uk: 'Вікі й граф зв’язків', en: 'Wiki and relationship graph' },
        text: {
          uk: 'Сторінки персонажів, фракцій і подій з інфобоксами й [[посиланнями]]. Зв’язки між ними видно на інтерактивному графі на D3.',
          en: 'Pages for characters, factions and events with infoboxes and [[links]]. Their relationships show up on an interactive D3 graph.',
        },
      },
      {
        title: { uk: 'Хроніка за епохами', en: 'A timeline in eras' },
        text: {
          uk: 'Події з датою, ігровим днем, координатами й учасниками складаються в дорожню карту історії світу.',
          en: 'Events with a date, in-game day, coordinates and participants form a roadmap of the world’s history.',
        },
      },
      {
        title: { uk: 'Дев’ять тем і спільнота', en: 'Nine themes and a community' },
        text: {
          uk: 'Теми за біомами Minecraft, публічні світи, друзі, запити на доступ і сповіщення.',
          en: 'Themes based on Minecraft biomes, public worlds, friends, access requests and notifications.',
        },
      },
    ],
    stats: [
      { value: '14', label: { uk: 'розділів світу', en: 'world sections' } },
      { value: '9', label: { uk: 'тем оформлення', en: 'visual themes' } },
      { value: 'MIT', label: { uk: 'відкритий код', en: 'open source' } },
    ],
    cover: { desktop: worldlogWorld, phone: worldlogMLanding },
    gallery: [
      [{ src: worldlogLanding, alt: { uk: 'Лендинг WorldLog', en: 'WorldLog landing page' } }],
      [
        { src: worldlogWorld, alt: { uk: 'Сторінка світу з картками розділів', en: 'World page with section cards' } },
        { src: worldlogWiki, alt: { uk: 'Вікі, прогрес і граф зв’язків', en: 'Wiki, progress and relationship graph' } },
      ],
      [{ src: worldlogWorlds, alt: { uk: 'Список світів', en: 'List of worlds' } }],
    ],
  },
  {
    slug: 'britva',
    name: 'Britva',
    kind: 'site',
    accent: '#c9a27a',
    onAccent: '#0b0b0b',
    panel: '#1a1612',
    dark: true,
    tagline: { uk: 'Сайт барбершопу в центрі Кременчука', en: 'A website for a barbershop in Kremenchuk' },
    summary: {
      uk: 'Односторінковий сайт у темному журнальному стилі: великий серифний заголовок, колаж робіт, прайс, майстри, онлайн-запис і карта.',
      en: 'A one-page site in a dark editorial style: an oversized serif headline, a work collage, prices, barbers, online booking and a map.',
    },
    context: {
      uk: 'Концепт, який показує, як може виглядати сайт локального бізнесу, якщо робити його з нуля, а не з шаблону.',
      en: 'A concept that shows what a local business website can look like when it is made from scratch rather than a template.',
    },
    role: { uk: 'Дизайн і розробка', en: 'Design and development' },
    period: { uk: '2026', en: '2026' },
    status: { uk: 'Концепт', en: 'Concept' },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { live: 'https://ttjelky.github.io/barbershop-landing/', github: 'https://github.com/ttjelky/barbershop-landing' },
    highlights: [
      {
        title: { uk: 'Журнальний дизайн', en: 'Editorial design' },
        text: {
          uk: 'Темна палітра, серифний заголовок поверх фото й колаж робіт із накладаннями — сайт виглядає як журнал, а не як шаблон.',
          en: 'A dark palette, a serif headline over photography and an overlapping work collage — it reads like a magazine, not a template.',
        },
      },
      {
        title: { uk: 'Окрема мобільна версія', en: 'A mobile layout of its own' },
        text: {
          uk: 'На телефоні перший екран перекомпоновано, а кнопка запису з’являється після першого екрана й ховається біля форми.',
          en: 'On phones the first screen is recomposed, and the booking button appears after the first screen and hides near the form.',
        },
      },
      {
        title: { uk: 'Запис без дзвінків', en: 'Booking without calls' },
        text: {
          uk: 'Форма з перевіркою телефону й дати, готова до підключення Telegram-бота.',
          en: 'A form with phone and date validation, ready to be wired to a Telegram bot.',
        },
      },
    ],
    stats: [],
    cover: { desktop: britvaGallery, phone: britvaHero },
    gallery: [
      [{ src: britvaGallery, alt: { uk: 'Колаж робіт', en: 'Work collage' } }],
      [
        { src: britvaHero, alt: { uk: 'Перший екран на телефоні', en: 'First screen on a phone' }, phone: true },
        { src: britvaServices, alt: { uk: 'Прайс', en: 'Prices' }, phone: true },
        { src: britvaBooking, alt: { uk: 'Онлайн-запис', en: 'Online booking' }, phone: true },
      ],
    ],
  },
  {
    slug: 'glaze',
    name: 'Glaze',
    kind: 'site',
    accent: '#7a1a2c',
    onAccent: '#ffffff',
    panel: '#e9e3d8',
    dark: false,
    tagline: { uk: 'Сайт студії манікюру', en: 'A website for a nail studio' },
    summary: {
      uk: 'Сайт, зібраний як каталог кольорів: строга сітка, тонкі лінії, зразки лаку з кодами, прайс-таблиця з часом і ціною та запис кнопками.',
      en: 'A site built like a colour catalogue: a strict grid, hairline rules, lacquer swatches with codes, a price table with time and cost, and booking with buttons.',
    },
    context: {
      uk: 'Концепт для б’юті-бізнесу: головне — колір, довіра й швидкий запис з телефона.',
      en: 'A concept for a beauty business where colour, trust and quick booking from a phone matter most.',
    },
    role: { uk: 'Дизайн і розробка', en: 'Design and development' },
    period: { uk: '2026', en: '2026' },
    status: { uk: 'Концепт', en: 'Concept' },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { live: 'https://ttjelky.github.io/nail-studio-landing/', github: 'https://github.com/ttjelky/nail-studio-landing' },
    highlights: [
      {
        title: { uk: 'Колір як головний експонат', en: 'Colour as the hero' },
        text: {
          uk: 'Вісім зразків лаку з кодами й фінішем. Натискаєш на зразок — і він одразу з’являється в заявці.',
          en: 'Eight lacquer swatches with codes and finish. Tap one and it lands straight in the booking request.',
        },
      },
      {
        title: { uk: 'Довіра через стерильність', en: 'Trust through sterility' },
        text: {
          uk: 'Окремий блок про чотири етапи обробки інструментів — головне питання перед першим візитом.',
          en: 'A section on the four steps of tool sterilisation — the main question before a first visit.',
        },
      },
      {
        title: { uk: 'Запис без випадних списків', en: 'Booking without dropdowns' },
        text: {
          uk: 'Послуга, день і час обираються кнопками, зайняті слоти перекреслені.',
          en: 'Service, day and time are picked with buttons; taken slots are struck through.',
        },
      },
    ],
    stats: [],
    cover: { desktop: glazePalette, phone: glazeMHero },
    gallery: [
      [{ src: glazePalette, alt: { uk: 'Палітра кольорів', en: 'Colour palette' } }],
      [
        { src: glazePrices, alt: { uk: 'Прайс-таблиця', en: 'Price table' } },
        { src: glazeBooking, alt: { uk: 'Запис', en: 'Booking' } },
      ],
      [
        { src: glazeMHero, alt: { uk: 'Перший екран на телефоні', en: 'First screen on a phone' }, phone: true },
        { src: glazeMColors, alt: { uk: 'Зразки на телефоні', en: 'Swatches on a phone' }, phone: true },
        { src: glazeMBooking, alt: { uk: 'Запис на телефоні', en: 'Booking on a phone' }, phone: true },
      ],
    ],
  },
];

export const PRODUCTS = PROJECTS.filter((p) => p.kind === 'product');
export const SITES = PROJECTS.filter((p) => p.kind === 'site');
