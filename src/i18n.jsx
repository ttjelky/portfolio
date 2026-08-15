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
          "Повноцінна система для організації змагань: реєстрація команд, турнірна сітка в реальному часі, WebSocket-сповіщення та автоматична генерація PDF-сертифікатів. Я був тім-лідом команди з трьох розробників — з Vector ми пройшли у фінал Всеукраїнського турніру з програмування.",
        badge: "Фіналіст Всеукраїнського турніру з програмування 2026",
      },
      scalaris: {
        tagline: "Соціальний застосунок для вуличної активності",
        description:
          "Mobile-first платформа, яка показує на карті людей поруч, готових приєднатися до спонтанної активності. Власна кластеризація аватарів на Leaflet-карті та обмін даними в реальному часі. Зі Scalaris ми посіли 3 місце у фіналі Всеукраїнського турніру з програмування.",
        badge: "3 місце у фіналі Всеукраїнського турніру з програмування 2026",
      },
    },
    about: {
      title1: "Учень 11 класу, який",
      title2: "будує продукти",
      aria: "Учень 11 класу, який будує продукти",
      p1: "Я вивчаю розробку самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels. Люблю розбиратись у тому, як влаштовані системи всередині, і не боюсь читати чужий код, щоб зрозуміти патерн, а не скопіювати рішення.",
      p2: "Я був тім-лідом команди з трьох розробників над Vector — з ним ми пройшли у фінал Всеукраїнського турніру з програмування. Зі Scalaris посіли 3 місце у фіналі. Зараз працюю над крутими новими проєктами!",
      facts: [
        {
          num: "01",
          label: "Освіта",
          text: "Самостійно — від структур даних у JavaScript до WebSocket-інфраструктури на Django Channels.",
        },
        {
          num: "02",
          label: "Команда",
          text: "Тім-лід команди з трьох розробників над Vector — фіналісти Всеукраїнського турніру з програмування.",
        },
        {
          num: "03",
          label: "Далі",
          text: "Працюю над крутими новими проєктами!",
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
          "A complete system for organizing competitions: team registration, real-time tournament brackets, WebSocket notifications, and automatic PDF certificate generation. I led a team of three developers, and Vector took us to the final of the All-Ukrainian Programming Tournament.",
        badge: "Finalist of the All-Ukrainian Programming Tournament 2026",
      },
      scalaris: {
        tagline: "Social app for street activity",
        description:
          "A mobile-first platform showing people nearby on a map who are ready to join a spontaneous activity. Custom avatar clustering on a Leaflet map with real-time data exchange. With Scalaris we took 3rd place at the tournament final.",
        badge: "3rd place at the All-Ukrainian Programming Tournament final 2026",
      },
    },
    about: {
      title1: "An 11th-grader who",
      title2: "builds products",
      aria: "An 11th-grader who builds products",
      p1: "I teach myself development — from data structures in JavaScript to WebSocket infrastructure on Django Channels. I love understanding how systems work inside and I'm not afraid of reading foreign code to grasp a pattern rather than copy a solution.",
      p2: "I led a team of three developers on Vector — it took us to the final of the All-Ukrainian Programming Tournament. With Scalaris we took 3rd place in the final. Right now I'm working on cool new projects!",
      facts: [
        {
          num: "01",
          label: "Learning",
          text: "Self-taught — from data structures in JavaScript to WebSocket infrastructure on Django Channels.",
        },
        {
          num: "02",
          label: "Team",
          text: "Team lead of three developers on Vector — finalists of the All-Ukrainian Programming Tournament.",
        },
        {
          num: "03",
          label: "Next",
          text: "Working on cool new projects!",
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