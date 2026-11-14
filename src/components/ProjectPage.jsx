import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { PROJECTS, projectHref } from "../projects";
import "./ProjectPage.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay },
});

const pad = (n) => String(n).padStart(2, "0");

export default function ProjectPage({ slug }) {
  const { t } = useLang();
  const ui = t.projectPage;
  const index = PROJECTS.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return (
      <main className="pp pp--missing">
        <div className="pp__bleed">
          <a href="#projects" className="pp__back">← {ui.back}</a>
          <h1 className="pp__title">404</h1>
          <p className="pp__tagline italic">{ui.missing}</p>
        </div>
      </main>
    );
  }

  const project = PROJECTS[index];
  const text = t.projects[slug];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const nextText = t.projects[next.slug];

  return (
    <main className="pp" key={slug}>
      <div className="pp__bleed">
        <motion.div
          className="pp__top"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#projects" className="pp__back">← {ui.back}</a>
          <span className="pp__counter">
            {pad(index + 1)} / {pad(PROJECTS.length)}
          </span>
        </motion.div>

        <motion.header
          className="pp__head"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <h1 className="pp__title">{project.label}</h1>
          <p className="pp__tagline italic">{text.tagline}</p>
        </motion.header>

        <motion.figure
          className="pp__cover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <img src={project.cover} alt={`${project.label} — ${text.tagline}`} />
        </motion.figure>
      </div>

      <section className="wrap pp__overview">
        <motion.dl className="pp__meta" {...fade()}>
          <div>
            <dt>{ui.role}</dt>
            <dd>{text.role}</dd>
          </div>
          <div>
            <dt>{ui.year}</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>{ui.stack}</dt>
            <dd className="pp__chips">
              {project.stack.map((s) => (
                <span key={s} className="pp__chip">{s}</span>
              ))}
            </dd>
          </div>
          {(project.links.live || project.links.github) && (
            <div className="pp__links">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noreferrer" className="pp__btn pp__btn--solid">
                  {ui.live} ↗
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="pp__btn">
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </motion.dl>

        <motion.div className="pp__about" {...fade(0.1)}>
          <span className="kicker">{ui.about}</span>
          <p className="pp__lead">{text.description}</p>
          <p className="pp__badge">{text.badge}</p>
        </motion.div>
      </section>

      <section className="wrap pp__inside">
        <motion.h2 className="pp__h2" {...fade()}>
          {ui.inside1} <span className="italic">{ui.inside2}</span>
        </motion.h2>
        <motion.ol className="pp__points" {...fade(0.1)}>
          {text.highlights.map((h, i) => (
            <li key={h.title} className="pp__point">
              <span className="pp__point-num">{pad(i + 1)}</span>
              <h3 className="pp__point-title">{h.title}</h3>
              <p className="pp__point-text">{h.text}</p>
            </li>
          ))}
        </motion.ol>
      </section>

      {project.gallery.length > 0 && (
        <section className="pp__gallery" aria-label={ui.screens}>
          {project.gallery.map((row, r) => (
            <motion.div
              className={`pp__row${row.some((s) => s.phone) ? " pp__row--phones" : ""}`}
              key={r}
              {...fade()}
            >
              {row.map((shot) => (
                <figure
                  key={shot.src}
                  className={`pp__shot${shot.phone ? " pp__shot--phone" : ""}`}
                  style={{ flexGrow: shot.w / shot.h, aspectRatio: `${shot.w} / ${shot.h}` }}
                >
                  <img src={shot.src} alt="" loading="lazy" width={shot.w} height={shot.h} />
                </figure>
              ))}
            </motion.div>
          ))}
        </section>
      )}

      <a href={projectHref(next.slug)} className="pp__next">
        <span className="pp__next-label">{ui.next}</span>
        <span className="pp__next-row">
          <span className="pp__next-name">{next.label}</span>
          <span className="pp__next-arrow" aria-hidden="true">→</span>
        </span>
        <span className="pp__next-tagline">{nextText.tagline}</span>
      </a>
    </main>
  );
}
