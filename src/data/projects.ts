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

import scalarisMapLight from '../assets/projects/scalaris/map-light.jpg';
import scalarisPanelDark from '../assets/projects/scalaris/panel-dark.jpg';
import scalarisProfileLight from '../assets/projects/scalaris/profile-light.jpg';
import scalarisMPanelDark from '../assets/projects/scalaris/m-panel-dark.jpg';
import scalarisMPanelLight from '../assets/projects/scalaris/m-panel-light.jpg';
import scalarisMChatDark from '../assets/projects/scalaris/m-chat-dark.jpg';
import scalarisMResultsLight from '../assets/projects/scalaris/m-results-light.jpg';
import scalarisMProfileDark from '../assets/projects/scalaris/m-profile-dark.jpg';
import scalarisMLeaderboardLight from '../assets/projects/scalaris/m-leaderboard-light.jpg';
import scalarisMFiltersDark from '../assets/projects/scalaris/m-filters-dark.jpg';

import worldlogLanding from '../assets/projects/worldlog/landing.jpg';
import worldlogWorlds from '../assets/projects/worldlog/worlds.jpg';
import worldlogWorld from '../assets/projects/worldlog/world.jpg';
import worldlogWiki from '../assets/projects/worldlog/wiki.jpg';
import worldlogMLanding from '../assets/projects/worldlog/m-landing.jpg';

import britvaGallery from '../assets/projects/britva/gallery.jpg';
import britvaHero from '../assets/projects/britva/hero.jpg';
import britvaServices from '../assets/projects/britva/services.jpg';
import britvaBooking from '../assets/projects/britva/booking.jpg';

import usuchaHero from '../assets/projects/usucha/hero.jpg';
import usuchaAnatomy from '../assets/projects/usucha/anatomy.jpg';
import usuchaSignature from '../assets/projects/usucha/signature.jpg';
import usuchaMenu from '../assets/projects/usucha/menu.jpg';
import usuchaVisit from '../assets/projects/usucha/visit.jpg';
import usuchaMHero from '../assets/projects/usucha/m-hero.jpg';
import usuchaMAnatomy from '../assets/projects/usucha/m-anatomy.jpg';
import usuchaMSignature from '../assets/projects/usucha/m-signature.jpg';

import grafitHero from '../assets/projects/grafit/hero.jpg';
import grafitServices from '../assets/projects/grafit/services.jpg';
import grafitWorks from '../assets/projects/grafit/works.jpg';
import grafitPrices from '../assets/projects/grafit/prices.jpg';
import grafitMHero from '../assets/projects/grafit/m-hero.jpg';
import grafitMWorks from '../assets/projects/grafit/m-works.jpg';
import grafitMContact from '../assets/projects/grafit/m-contact.jpg';

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
  /** Значення може залежати від мови (порядкові числівники: 3-тє / 3rd). */
  stats: { value: string | L; label: L }[];
  cover: { desktop: ImageMetadata; phone?: ImageMetadata };
  /** Ряди скріншотів; у ряду кадри однакової висоти. */
  gallery: Shot[][];
}

const TEAM = {
  artem: { name: 'Artem Tsvelykh', url: 'https://github.com/TrrippleV' },
  dergo: { name: 'Serhii Deineha', url: 'https://github.com/dergo0-0' },
};

const TOURNAMENT_FINAL: L = {
  uk: '3-тє місце у фіналі Всеукраїнського командного турніру з програмування 2026',
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
      en: 'You ask a question, and several AI participants with different personalities debate it. A moderator turns the arguments into a decision, and an AI Devil hunts for its weak spots. You get a conclusion with pros, risks, the minority view and a next step.',
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
    links: { live: 'https://clarity-three-xi.vercel.app/', github: 'https://github.com/team2-Vought/Clarity' },
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
          en: 'A decision journal later sends a “How did it go?” email, discussions can be shared by link, and both the UI and the AI answers are in Ukrainian or English.',
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
      en: 'An organiser sets up a tournament their way: rounds, tasks, jury, certificates, individual or team format. Participants see tasks and a live leaderboard; the jury gets its own grading panel.',
    },
    context: {
      uk: 'Проєкт для онлайн-етапу Всеукраїнського командного турніру з програмування. Технічне завдання описувало платформу для турнірів, а ми розширили ідею й дали організатору свободу: Vector підходить для турніру з будь-якого предмета й у будь-якому форматі. З ним наша команда пройшла в топ-9 зі 121 команди, а після онлайн-захисту — у топ-4 та фінал.',
      en: 'Built for the online stage of the All-Ukrainian Team Programming Tournament. The brief described a tournament platform; we pushed the idea further and gave organisers freedom: Vector works for a tournament in any subject and any format. It took our team into the top 9 of 121 teams, and after the online defence into the top 4 and the final.',
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
          en: 'Organisers, participants and the jury see different things. Access is enforced in the API; sign-in uses JWT with automatic token refresh.',
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
      uk: 'Відкриваєш карту — бачиш людей поруч, готових до активності просто зараз. Збір, крос із чекпоінтами, ігрова зона чи квест: створюєш за хвилину, кличеш друзів або відкриваєш для всіх, а після фінішу отримуєш результати, досвід і досягнення.',
      en: 'Open the map and see people nearby who are up for something right now. A meetup, a run with checkpoints, a game zone or a quest: create one in a minute, invite friends or open it to everyone, and get results, XP and badges after the finish.',
    },
    context: {
      uk: 'Фінальне завдання турніру ми отримали в Карпатах, і на весь продукт було 5 днів. Спали по 4–5 годин і писали ночами. На захисті Scalaris приніс команді 3-тє місце. Після турніру я повністю переробив дизайн, закрив аудит із 49 пунктів і додав другу хвилю механік.',
      en: 'We got the final tournament brief in the Carpathian Mountains and had 5 days for the whole product. We slept 4–5 hours a night and coded through the nights. At the defence, Scalaris won our team 3rd place. After the tournament I fully redesigned it, closed a 49-item audit and added a second wave of mechanics.',
    },
    role: {
      uk: 'Тімлід · 50% коду · дизайн, логотип і всі технічні рішення',
      en: 'Team lead · 50% of the code · design, logo and all technical decisions',
    },
    period: { uk: 'Липень 2026 · 5 днів', en: 'July 2026 · 5 days' },
    status: { uk: 'Розвивається після турніру', en: 'Evolving after the tournament' },
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
          uk: 'Збір у точці, крос із маршрутом із чекпоінтів, ігрова зона з геозоною та квест — хто пройде більше кілометрів за відведений час.',
          en: 'A meetup at a spot, a run along checkpoints, a game zone with a geofence, and a quest where whoever covers the most kilometres in the time limit wins.',
        },
      },
      {
        title: { uk: 'Відкриті й заплановані', en: 'Open and scheduled' },
        text: {
          uk: 'Активність можна запланувати на потім, відкрити для всіх із лімітом місць чи схваленням і поширити посиланням. Учасники бачать ETA, тиснуть «запізнююсь», а погода підтягується сама.',
          en: 'Plan an activity for later, open it to everyone with a spot limit or approval, and share it by link. People see ETAs, tap “running late”, and the weather shows up on its own.',
        },
      },
      {
        title: { uk: 'Чесна гра й результати', en: 'Fair play and results' },
        text: {
          uk: 'Сервер відсіює пересування на транспорті за швидкістю. Після фінішу — таблиця місць із часом на чекпоінтах і подяки учасникам.',
          en: 'The server filters out travel by vehicle using speed checks. After the finish there is a results table with checkpoint splits and kudos for teammates.',
        },
      },
      {
        title: { uk: 'Рівні й рейтинг тижня', en: 'Levels and a weekly leaderboard' },
        text: {
          uk: 'Досвід, рівні, серії тижнів і дев’ять досягнень, а ще рейтинг серед друзів, що щопонеділка починається з нуля.',
          en: 'XP, levels, weekly streaks and nine badges, plus a friends leaderboard that resets every Monday.',
        },
      },
      {
        title: { uk: 'Реальний час і приватність', en: 'Real time and privacy' },
        text: {
          uk: 'Запрошення, чат і позиції оновлюються через WebSocket. Можна сховатися з карти, показувати себе лише друзям, заблокувати людину або надіслати близьким посилання, де видно, де ти зараз.',
          en: 'Invites, chat and positions update over WebSockets. You can hide from the map, show yourself only to friends, block someone, or send loved ones a live-location link.',
        },
      },
    ],
    stats: [
      { value: '5', label: { uk: 'днів на весь продукт', en: 'days for the whole product' } },
      { value: { uk: '3-тє', en: '3rd' }, label: { uk: 'місце у фіналі', en: 'place at the final' } },
      { value: '450+', label: { uk: 'тестів', en: 'tests' } },
    ],
    cover: { desktop: scalarisMapLight, phone: scalarisMPanelDark },
    // кадри чергують світлу й темну теми — застосунок має обидві
    gallery: [
      [{ src: scalarisMapLight, alt: { uk: 'Карта з людьми й активностями поруч, світла тема', en: 'Map with people and activities nearby, light theme' } }],
      [
        { src: scalarisPanelDark, alt: { uk: 'Панель активності з учасниками й ETA, темна тема', en: 'Activity panel with participants and ETAs, dark theme' } },
        { src: scalarisProfileLight, alt: { uk: 'Профіль із рівнем і досягненнями', en: 'Profile with level and badges' } },
      ],
      [
        { src: scalarisMPanelLight, alt: { uk: 'Активність на телефоні', en: 'Activity on a phone' }, phone: true },
        { src: scalarisMChatDark, alt: { uk: 'Чат активності з точкою на карті', en: 'Activity chat with a map pin' }, phone: true },
        { src: scalarisMResultsLight, alt: { uk: 'Результати квесту з подяками', en: 'Quest results with kudos' }, phone: true },
      ],
      [
        { src: scalarisMProfileDark, alt: { uk: 'Досягнення в темній темі', en: 'Badges in the dark theme' }, phone: true },
        { src: scalarisMLeaderboardLight, alt: { uk: 'Рейтинг тижня серед друзів', en: 'Weekly friends leaderboard' }, phone: true },
        { src: scalarisMFiltersDark, alt: { uk: 'Фільтри карти', en: 'Map filters' }, phone: true },
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
      en: 'Idea · 90% of the code · design, logo and identity · leading a teammate',
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
    slug: 'usucha',
    name: 'USUCHA',
    kind: 'site',
    accent: '#9cc25a',
    onAccent: '#15291a',
    panel: '#1d3a22',
    dark: true,
    tagline: { uk: 'Сайт матча-бару', en: 'A website for a matcha bar' },
    summary: {
      uk: 'Світлий редакційний сайт для матча-бару: гігантська типографіка з курсивними акцентами, «розібраний» напій із шести шарів, каталог із фільтрами, меню, замовлення наперед, бронь столика. Англійська та українська.',
      en: 'A light editorial site for a matcha bar: oversized type with italic accents, a drink taken apart into six layers, a filterable catalogue, a full menu, order-ahead and table booking. In English and Ukrainian.',
    },
    context: {
      uk: 'Концепт для кафе, де продається ритуал, а не просто напій. Сайт має бути таким самим неспішним і свіжим, як чашка матчі, — і водночас давати замовити її за два кліки.',
      en: 'A concept for a café that sells a ritual rather than just a drink. The site had to feel as calm and fresh as a cup of matcha — and still let you order one in two clicks.',
    },
    role: { uk: 'Дизайн і розробка', en: 'Design and development' },
    period: { uk: 'Листопад 2026', en: 'November 2026' },
    status: { uk: 'Концепт', en: 'Concept' },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { live: 'https://ttjelky.github.io/usucha/', github: 'https://github.com/ttjelky/usucha' },
    highlights: [
      {
        title: { uk: 'Напій у розрізі', en: 'A drink, taken apart' },
        text: {
          uk: 'Шість шарів — матча, пінка, молоко, лід, сироп — намальовані лише на CSS. Під час прокрутки вони розходяться, а біля кожного з’являється підпис.',
          en: 'Six layers — matcha, foam, milk, ice, syrup — drawn in CSS alone. As you scroll they drift apart and each one gets its label.',
        },
      },
      {
        title: { uk: 'Від чипса до замовлення', en: 'From a chip to an order' },
        text: {
          uk: 'Чипси на фото першого екрана фільтрують каталог, «+» додає напій у кошик збоку, а вміст кошика переживає перезавантаження сторінки.',
          en: 'The chips on the hero photo filter the catalogue, “+” drops a drink into a side cart, and the cart survives a page reload.',
        },
      },
      {
        title: { uk: 'Дві мови без компромісів', en: 'Two languages, no compromises' },
        text: {
          uk: 'Мова визначається за пристроєм, перемикач — у футері. Шрифти оригіналу не мають кирилиці, тож для української вони замінюються на близькі за характером.',
          en: 'The language follows the device, with a switch in the footer. The original fonts have no Cyrillic, so the Ukrainian version swaps in faces with the same character.',
        },
      },
      {
        title: { uk: 'Ритуал крок за кроком', en: 'The ritual, step by step' },
        text: {
          uk: 'Чотири кроки приготування з прогрес-баром: заголовок стоїть на місці, а поточний крок підсвічується. Уся анімація вимикається системним налаштуванням.',
          en: 'Four preparation steps with a progress bar: the heading stays put while the current step lights up. All motion switches off with the system setting.',
        },
      },
    ],
    stats: [],
    cover: { desktop: usuchaHero, phone: usuchaMHero },
    gallery: [
      [{ src: usuchaHero, alt: { uk: 'Перший екран із великою типографікою', en: 'First screen with oversized type' } }],
      [{ src: usuchaAnatomy, alt: { uk: 'Напій, розібраний на шість шарів', en: 'A drink taken apart into six layers' } }],
      [
        { src: usuchaMHero, alt: { uk: 'Перший екран на телефоні', en: 'First screen on a phone' }, phone: true },
        { src: usuchaMAnatomy, alt: { uk: 'Шари напою на телефоні', en: 'Drink layers on a phone' }, phone: true },
        { src: usuchaMSignature, alt: { uk: 'Каталог на телефоні', en: 'Catalogue on a phone' }, phone: true },
      ],
      [
        { src: usuchaSignature, alt: { uk: 'Каталог напоїв із фільтрами', en: 'Drinks catalogue with filters' } },
        { src: usuchaMenu, alt: { uk: 'Повне меню з вкладками', en: 'Full menu with tabs' } },
      ],
      [{ src: usuchaVisit, alt: { uk: 'Інтер’єр, години роботи та бронь столика', en: 'Interior, opening hours and table booking' } }],
    ],
  },
  {
    slug: 'grafit',
    name: 'Grafit',
    kind: 'site',
    accent: '#ff3b1f',
    onAccent: '#ffffff',
    panel: '#141414',
    dark: true,
    tagline: { uk: 'Сайт студії автодетейлінгу', en: 'A website for a car detailing studio' },
    summary: {
      uk: 'Сайт у стилі серії постерів: контурні номери, чорно-білі фото авто, зернистість і гігантська типографіка. Принципи студії, послуги з прев’ю, кейс із повзунком «до / після», пакети й запис.',
      en: 'A site styled like a poster series: outlined numerals, black-and-white car photography, film grain and oversized type. Studio principles, services with previews, a before/after case, packages and booking.',
    },
    context: {
      uk: 'Концепт для преміального детейлінгу, де клієнт купує не мийку, а відчуття нового авто. Сайт має продавати так само, як результат: спокійно, дорого й без зайвого.',
      en: 'A concept for a premium detailing studio, where clients buy the feeling of a new car rather than a wash. The site has to sell the way the result does: calm, premium and with nothing extra.',
    },
    role: { uk: 'Дизайн і розробка', en: 'Design and development' },
    period: { uk: 'Листопад 2026', en: 'November 2026' },
    status: { uk: 'Концепт', en: 'Concept' },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { live: 'https://ttjelky.github.io/car-detailing-landing/', github: 'https://github.com/ttjelky/car-detailing-landing' },
    highlights: [
      {
        title: { uk: 'Постерна айдентика', en: 'A poster identity' },
        text: {
          uk: 'Перший екран — триптих «Принципів Графіту» з контурними номерами 01–03. Ті самі номери проходять крізь увесь сайт: послуги, роботи, процес.',
          en: 'The first screen is a triptych of the studio’s principles with outlined numerals 01–03. The same numerals run through the whole site: services, work, process.',
        },
      },
      {
        title: { uk: 'До й після під пальцем', en: 'Before and after under your finger' },
        text: {
          uk: 'Головний кейс можна порівняти повзунком — він сам ледь ворушиться, коли з’являється, щоб підказати, що його можна тягнути.',
          en: 'The main case has a comparison slider that nudges itself when it appears, hinting that it can be dragged.',
        },
      },
      {
        title: { uk: 'Від послуги до заявки', en: 'From service to request' },
        text: {
          uk: 'При наведенні на послугу за курсором летить її фото; клік відмічає послугу у формі запису. Пакети працюють так само.',
          en: 'Hovering a service brings its photo along with the cursor; a click ticks it in the booking form. Packages work the same way.',
        },
      },
      {
        title: { uk: 'Рух із повагою', en: 'Motion with restraint' },
        text: {
          uk: 'Слова виїжджають з-під маски, фото розкриваються, лічильники рахують — і все це вимикається системним налаштуванням або кнопкою «Менше анімації».',
          en: 'Words rise from a mask, photos unfold and counters tick up — and all of it switches off with the system setting or a “Less motion” button.',
        },
      },
    ],
    stats: [],
    cover: { desktop: grafitHero, phone: grafitMHero },
    gallery: [
      [{ src: grafitHero, alt: { uk: 'Перший екран: триптих принципів студії', en: 'First screen: a triptych of studio principles' } }],
      [
        { src: grafitWorks, alt: { uk: 'Кейс із повзунком «до / після»', en: 'Case study with a before/after slider' } },
        { src: grafitServices, alt: { uk: 'Послуги з прев’ю фото', en: 'Services with photo previews' } },
      ],
      [
        { src: grafitMHero, alt: { uk: 'Перший екран на телефоні', en: 'First screen on a phone' }, phone: true },
        { src: grafitMWorks, alt: { uk: 'Кейс на телефоні', en: 'Case study on a phone' }, phone: true },
        { src: grafitMContact, alt: { uk: 'Запис на телефоні', en: 'Booking on a phone' }, phone: true },
      ],
      [{ src: grafitPrices, alt: { uk: 'Пакети послуг', en: 'Service packages' } }],
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
    tagline: { uk: 'Сайт барбершопу', en: 'A website for a barbershop' },
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
          en: 'Eight lacquer swatches with codes and finishes. Tap one and it lands straight in the booking request.',
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
