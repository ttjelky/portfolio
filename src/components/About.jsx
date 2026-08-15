import { motion } from "framer-motion";
import SplitText from "./SplitText";
import CurvedLoop from "./CurvedLoop";
import "./About.css";

const STACK = [
  "Python", "Django", "DRF", "GeoDjango",
  "React", "Vite", "JavaScript", "TypeScript",
  "PostgreSQL", "Redis", "WebSockets", "Docker",
];

const FACTS = [
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
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about__bleed">
        <div className="about__grid">
        <h2
          className="about__title"
          aria-label="Учень 11 класу, який будує продукти"
        >
          <SplitText
            tag="div"
            text="Учень 11 класу, який"
            className="about__title-line"
            splitType="chars"
            delay={35}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="left"
          />
          <div className="about__title-line">
            <SplitText
              tag="div"
              text="будує продукти"
              className="italic"
              splitType="chars"
              delay={40}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-60px"
              textAlign="left"
            />
          </div>
        </h2>

          <motion.div className="about__text" {...fade(0.15)}>
            <p>
              Я вивчаю розробку самостійно — від структур даних у JavaScript до
              WebSocket-інфраструктури на Django Channels. Люблю розбиратись у
              тому, як влаштовані системи всередині, і не боюсь читати чужий код,
              щоб зрозуміти патерн, а не скопіювати рішення.
            </p>
            <p>
              Зараз працюю в команді з трьох розробників над Vector —
              платформою для академічних турнірів, і паралельно веду власний
              проєкт Scalaris.
            </p>
          </motion.div>
        </div>

        <motion.ul className="about__facts" {...fade(0.2)}>
          {FACTS.map((f) => (
            <li key={f.num} className="about__fact">
              <span className="about__fact-num">{f.num}</span>
              <span className="about__fact-label">{f.label}</span>
              <p className="about__fact-text">{f.text}</p>
            </li>
          ))}
        </motion.ul>

        <CurvedLoop
          marqueeText={STACK.join(" ✦ ")}
          speed={1.5}
          curveAmount={200}
        />
      </div>
    </section>
  );
}
