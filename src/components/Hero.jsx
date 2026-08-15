import { motion } from "framer-motion";
import BlurText from "./BlurText";
import "./Hero.css";

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const BLUR_COMMON = {
  animateBy: "words",
  direction: "top",
  delay: 110,
  stepDuration: 0.25,
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bleed">
        <h1 className="hero__title" aria-label="КОД, ЯКИЙ ВИРІШУЄ ЗАДАЧІ.">
          <BlurText
            {...BLUR_COMMON}
            as="div"
            text="КОД, ЯКИЙ"
            className="hero__title-line"
          />
          <div className="hero__title-line hero__title-line--split">
            <BlurText
              {...BLUR_COMMON}
              as="div"
              text="ВИРІШУЄ"
              startDelay={300}
              className="hero__title-word hero__title-word--accent"
            />
            <BlurText
              {...BLUR_COMMON}
              as="div"
              text="ЗАДАЧІ."
              startDelay={450}
              className="hero__title-word"
            />
          </div>
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
