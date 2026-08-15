import { motion } from "framer-motion";
import "./About.css";

const STACK = [
  "Python", "Django", "DRF", "GeoDjango",
  "React", "Vite", "JavaScript", "TypeScript",
  "PostgreSQL", "Redis", "WebSockets", "Docker",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about__grid">
        <div className="about__col">
          <motion.p
            className="kicker"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Раунд 02 — про мене
          </motion.p>

          <motion.h2
            className="about__title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Учень 11 класу, який
            <span className="italic"> будує продукти</span>, а не
            навчальні приклади.
          </motion.h2>
        </div>

        <motion.div
          className="about__col about__text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>
            Я вивчаю розробку самостійно — від структур даних у JavaScript до
            WebSocket-інфраструктури на Django Channels. Люблю розбиратись у
            тому, як влаштовані системи всередині, і не боюсь читати чужий код,
            щоб зрозуміти патерн, а не скопіювати рішення.
          </p>
          <p>
            Зараз працюю в команді з трьох розробників над Vector —
            платформою для академічних турнірів, і паралельно веду власний
            проєкт Scalaris. Наступний крок — TypeScript і перші фриланс-проєкти
            для реальних клієнтів.
          </p>

          <ul className="about__stack">
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
