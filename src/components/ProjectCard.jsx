import { motion } from "framer-motion";
import "./ProjectCard.css";

const cardReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className={`pcard ${project.featured ? "pcard--featured" : ""}`}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
    >
      <a href={project.href} className="pcard__link" aria-label={`Відкрити проєкт ${project.name}`}>
        <div className="pcard__visual">
          {/* Заглушка під превʼю проєкту — заміни на скріншот/GIF з інтерфейсу */}
          <span className="pcard__mark">{project.name[0]}</span>
          <div className={`pcard__pattern pcard__pattern--${project.index}`} aria-hidden="true" />
        </div>

        <div className="pcard__body">
          <div className="pcard__top">
            <span className="pcard__index">{project.index}</span>
            <span className="pcard__round">{project.round}</span>
            <span className="pcard__badge">{project.badge}</span>
          </div>

          <h3 className="pcard__name">{project.name}</h3>
          <p className="pcard__tagline">{project.tagline}</p>
          <p className="pcard__desc">{project.description}</p>

          <ul className="pcard__stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <span className="pcard__cta">
            Дивитись проєкт
            <span className="pcard__cta-arrow">→</span>
          </span>
        </div>
      </a>
    </motion.article>
  );
}
