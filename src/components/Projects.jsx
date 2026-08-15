import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <div className="projects__head">
          <div className="projects__head-text">
            <motion.p
              className="kicker"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Раунд 01 — проєкти
            </motion.p>

            <motion.h2
              className="projects__title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Два проєкти в активній розробці —
              <br />
              з реальними користувачами й багом.
            </motion.h2>
          </div>

        </div>

        <div className="projects__list">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        <motion.p
          className="projects__note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Далі в сітці — ще проєкти. Слідкуйте за оновленнями.
        </motion.p>
      </div>
    </section>
  );
}