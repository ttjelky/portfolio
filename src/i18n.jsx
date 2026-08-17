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
    projects: {
      vector: {
        tagline: "Платформа для проведення академічних турнірів",
        description:
          "Повноцінна система для організації академічних змагань: реєстрація команд, турнірна сітка в реальному часі, WebSocket-сповіщення та автоматична генерація PDF-сертифікатів. Проєкт розроблявся командою з трьох розробників, яку я очолював. З Vector ми дійшли до фіналу Всеукраїнського турніру з програмування.",
        badge: "Фіналіст Всеукраїнського турніру з програмування — 2026",
      },
      scalaris: {
        tagline: "Соціальний застосунок для вуличної активності",
        description:
          "Mobile-first платформа, що показує на карті людей поруч, готових долучитися до спонтанної активності. Реалізовано власну кластеризацію аватарів на Leaflet-карті та обмін даними в реальному часі. Проєкт посів 3 місце у фіналі Всеукраїнського турніру з програмування.",
        badge: "3 місце у фіналі Всеукраїнського турніру з програмування — 2026",
      },
    },
    about: {
      title1: "Учень 11 класу, який",
      title2: "будує продукти",
      aria: "Учень 11 класу, який будує продукти",
      p1: "Я вивчаю розробку самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels. Люблю розбиратись у тому, як влаштовані системи всередині, і не боюсь читати чужий код, щоб зрозуміти патерн, а не скопіювати рішення.",
      p2: "Я очолював команду з трьох розробників проєкту Vector, з яким ми дійшли до фіналу Всеукраїнського турніру з програмування. Проєкт Scalaris приніс команді 3 місце у фіналі турніру. Наразі працюю над новими амбітними продуктами.",
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
          text: "Працюю над новими амбітними продуктами.",
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
    projects: {
      vector: {
        tagline: "Platform for academic tournaments",
        description:
          "A complete system for organizing academic competitions: team registration, real-time tournament brackets, WebSocket notifications, and automated PDF certificate generation. I led the three-developer team; Vector took us to the final of the All-Ukrainian Programming Tournament.",
        badge: "Finalist — All-Ukrainian Programming Tournament 2026",
      },
      scalaris: {
        tagline: "Social app for street activity",
        description:
          "A mobile-first platform that shows nearby people on a map who are ready to join spontaneous activity. Features custom avatar clustering on a Leaflet map and real-time data exchange. Scalaris earned the team 3rd place in the tournament final.",
        badge: "3rd place — All-Ukrainian Programming Tournament final 2026",
      },
    },
    about: {
      title1: "An 11th-grader who",
      title2: "builds products",
      aria: "An 11th-grader who builds products",
      p1: "I teach myself development — from data structures in JavaScript to WebSocket infrastructure on Django Channels. I love understanding how systems work inside and I'm not afraid of reading foreign code to grasp a pattern rather than copy a solution.",
      p2: "I led a three-developer team building Vector, which reached the final of the All-Ukrainian Programming Tournament, and Scalaris, which earned the team 3rd place in the final. I'm currently working on new ambitious products.",
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
          text: "Currently working on new ambitious products.",
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