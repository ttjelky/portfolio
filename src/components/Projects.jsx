import { useState } from "react";
import { motion } from "framer-motion";
import AccordionGallery from "./AccordionGallery";
import { useLang } from "../i18n";
import { PROJECTS, projectHref } from "../projects";
import "./Projects.css";

export default function Projects() {
  const { t } = useLang();
  const [supportsHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches
  );

  const items = PROJECTS.map((p) => ({
    image: p.cover,
    label: p.label,
    sub: t.projects[p.slug].tagline,
    link: projectHref(p.slug),
  }));

  return (
    <section className="section projects" id="projects">
      <div className="projects__bleed">
        <motion.div
          className="projects__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects__title">
            {t.projectsSection.title1} <span className="italic">{t.projectsSection.title2}</span>
          </h2>
          <p className="projects__hint">
            {supportsHover ? t.projectsSection.hintHover : t.projectsSection.hintTap}
          </p>
        </motion.div>

        <AccordionGallery
          items={items}
          defaultIndex={0}
          accentColor="#2f4cf2"
          trigger={supportsHover ? "hover" : "click"}
          openLabel={t.projectsSection.open}
          height={560}
          radius={20}
          gap={14}
          expandRatio={0.7}
          parallax={0.3}
        />
      </div>
    </section>
  );
}
