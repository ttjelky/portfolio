import { motion } from "framer-motion";
import "./Hero.css";

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bleed">
        <h1 className="hero__title">
          <span className="hero__title-line">КОД, ЯКИЙ</span>
          <span className="hero__title-line">
            <span className="hero__title-accent">ВИРІШУЄ</span> ЗАДАЧІ.
          </span>
        </h1>

        <motion.div
          className="hero__foot"
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="hero__foot-left">
            <a href="mailto:bezklinskiyalexey@gmail.com" className="hero__email">
              bezklinskiyalexey@gmail.com
            </a>
            <motion.a
              href="#projects"
              className="hero__scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Проєкти <span className="hero__scroll-arrow">↓</span>
            </motion.a>
          </div>
          <p className="hero__sub">
            Самостійно вивчаю розробку — від структур даних до
            WebSocket-інфраструктури. Будую застосунки з реальними
            користувачами, а не навчальні приклади.
            <span className="hero__stack">
              {" "}Django · React · WebSockets · PostgreSQL · Docker.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
