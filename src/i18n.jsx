import { createContext, useContext } from "react";

export const translations = {
  uk: {
    nav: {
      projects: "проєкти",
      projectsAria: "Проєкти",
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
          "Повноцінна система для організації змагань: реєстрація команд, турнірна сітка в реальному часі, WebSocket-сповіщення та автоматична генерація PDF-сертифікатів. Розробляється командою з трьох людей.",
        badge: "Призер Всеукраїнського турніру з програмування 2026",
      },
      scalaris: {
        tagline: "Соціальний застосунок для вуличної активності",
        description:
          "Mobile-first платформа, яка показує на карті людей поруч, готових приєднатися до спонтанної активності. Власна кластеризація аватарів на Leaflet-карті та обмін даними в реальному часі.",
        badge: "У розробці",
      },
    },
    about: {
      title1: "Учень 11 класу, який",
      title2: "будує продукти",
      aria: "Учень 11 класу, який будує продукти",
      p1: "Я вивчаю розробку самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels. Люблю розбиратись у тому, як влаштовані системи всередині, і не боюсь читати чужий код, щоб зрозуміти патерн, а не скопіювати рішення.",
      p2: "Зараз працюю в команді з трьох розробників над Vector — платформою для академічних турнірів, і паралельно веду власний проєкт Scalaris.",
      facts: [
        {
          num: "01",
          label: "Освіта",
          text: "Самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels.",
        },
        {
          num: "02",
          label: "Команда",
          text: "Три розробники працюють над Vector — платформою академічних турнірів.",
        },
        {
          num: "03",
          label: "Далі",
          text: "TypeScript і перші фриланс-проєкти для реальних клієнтів.",
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
          "A complete system for organizing competitions: team registration, real-time tournament brackets, WebSocket notifications, and automatic PDF certificate generation. Built by a team of three people.",
        badge: "Prize-winner of the All-Ukrainian Programming Tournament 2026",
      },
      scalaris: {
        tagline: "Social app for street activity",
        description:
          "A mobile-first platform showing people nearby on a map who are ready to join a spontaneous activity. Custom avatar clustering on a Leaflet map with real-time data exchange.",
        badge: "In development",
      },
    },
    about: {
      title1: "An 11th-grader who",
      title2: "builds products",
      aria: "An 11th-grader who builds products",
      p1: "I teach myself development — from data structures in JavaScript to WebSocket infrastructure on Django Channels. I love understanding how systems work inside and I'm not afraid of reading foreign code to grasp a pattern rather than copy a solution.",
      p2: "Right now I'm working with a team of three developers on Vector — a platform for academic tournaments — while also building my own project, Scalaris.",
      facts: [
        {
          num: "01",
          label: "Learning",
          text: "Self-taught — from data structures in JavaScript to WebSocket infrastructure on Django Channels.",
        },
        {
          num: "02",
          label: "Team",
          text: "Three developers working on Vector — a platform for academic tournaments.",
        },
        {
          num: "03",
          label: "Next",
          text: "TypeScript and the first freelance projects for real clients.",
        },
      ],
    },
    contact: {
      title: "Got a project?",
      talk: "Let's talk.",
      copy: "Copy",
      copied: "Copied ✓",
    },
    footer: {
      name: "Olexiy Bezklynskiy, 2026.",
      credit: "Built with React + Framer Motion",
    },
  },
};

export const LangContext = createContext({ lang: "uk", t: translations.uk, setLang: () => {} });

export const useLang = () => useContext(LangContext);