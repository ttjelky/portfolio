// Дані проєктів, які не залежать від мови. Тексти — у i18n.jsx → projects.<slug>.
// gallery: масив рядів; у ряду кадри мають однакову висоту (ширина — за пропорцією w/h).
export const PROJECTS = [
  {
    slug: "vector",
    label: "Vector",
    year: "2026",
    cover: "projects/vector.jpg",
    stack: ["Django", "DRF", "Channels", "Celery", "Redis", "React", "SimpleJWT"],
    links: { github: "https://github.com/ttjelky/vector" },
    gallery: [
      [{ src: "projects/vector/landing.jpg", w: 2000, h: 1250 }],
      [
        { src: "projects/vector/tournament.jpg", w: 2000, h: 1250 },
        { src: "projects/vector/rounds.jpg", w: 2000, h: 1250 },
      ],
      [
        { src: "projects/vector/m-dashboard.jpg", w: 647, h: 1400, phone: true },
        { src: "projects/vector/m-tournament.jpg", w: 647, h: 1400, phone: true },
      ],
    ],
  },
  {
    slug: "scalaris",
    label: "Scalaris",
    year: "2026",
    cover: "projects/scalaris.png",
    stack: ["Django", "GeoDjango", "Leaflet", "WebSockets", "React", "Docker"],
    links: { github: "https://github.com/ttjelky/Scalaris" },
    gallery: [],
  },
  {
    slug: "clarity",
    label: "Clarity",
    year: "2026",
    cover: "projects/clarity.jpg",
    stack: ["Django", "DRF", "React", "Vite", "LLM APIs", "Vercel", "Render"],
    links: { live: "https://clarity-three-xi.vercel.app/" },
    gallery: [
      [{ src: "projects/clarity/verdict.jpg", w: 2000, h: 1250 }],
      [
        { src: "projects/clarity/home.jpg", w: 2000, h: 1250 },
        { src: "projects/clarity/journal.jpg", w: 2000, h: 1250 },
      ],
      [
        { src: "projects/clarity/m-home.jpg", w: 647, h: 1400, phone: true },
        { src: "projects/clarity/m-chat.jpg", w: 647, h: 1400, phone: true },
      ],
    ],
  },
  {
    slug: "britva",
    label: "Britva",
    year: "2026",
    cover: "projects/britva.jpg",
    stack: ["HTML", "CSS", "JavaScript", "UI/UX", "GitHub Pages"],
    links: {
      live: "https://ttjelky.github.io/barbershop-landing/",
      github: "https://github.com/ttjelky/barbershop-landing",
    },
    gallery: [
      [{ src: "projects/britva/gallery.jpg", w: 2000, h: 1250 }],
      [
        { src: "projects/britva/hero.jpg", w: 647, h: 1400, phone: true },
        { src: "projects/britva/services.jpg", w: 647, h: 1400, phone: true },
        { src: "projects/britva/booking.jpg", w: 647, h: 1400, phone: true },
      ],
    ],
  },
  {
    slug: "glaze",
    label: "Glaze",
    year: "2026",
    cover: "projects/glaze.jpg",
    stack: ["HTML", "CSS", "JavaScript", "UI/UX", "GitHub Pages"],
    links: {
      live: "https://ttjelky.github.io/nail-studio-landing/",
      github: "https://github.com/ttjelky/nail-studio-landing",
    },
    gallery: [
      [
        { src: "projects/glaze/palette.jpg", w: 2000, h: 1250 },
        { src: "projects/glaze/care.jpg", w: 2000, h: 1250 },
      ],
      [
        { src: "projects/glaze/m-hero.jpg", w: 647, h: 1400, phone: true },
        { src: "projects/glaze/m-prices.jpg", w: 647, h: 1400, phone: true },
        { src: "projects/glaze/m-booking.jpg", w: 647, h: 1400, phone: true },
      ],
    ],
  },
];

export const projectHref = (slug) => `#/project/${slug}`;
