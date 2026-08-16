import { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import OptionWheel from "./OptionWheel";
import RotatingText from "./RotatingText";
import { useLang } from "../i18n";
import "./Certificates.css";

const titleSpring = { type: "spring", damping: 30, stiffness: 320 };
const currentYear = new Date().getFullYear();

function TitleGroup({ fixed, words }) {
  const elRef = useRef(null);
  const prevWidth = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    prevWidth.current = el.offsetWidth;
    const ro = new ResizeObserver(() => {
      const width = el.offsetWidth;
      const prev = prevWidth.current;
      prevWidth.current = width;
      const dx = (prev - width) / 2;
      if (dx === 0) return;
      // Pin the group back to its previous spot synchronously — a
      // layout animation started in a rAF would let the flexbox
      // re-centering flicker through for one frame.
      el.style.transform = `translateX(${-dx}px)`;
      animation.current?.stop();
      animation.current = animate(
        el,
        { x: [-dx, 0] },
        {
          ...titleSpring,
          onComplete: () => {
            el.style.transform = "";
            animation.current = null;
          },
        }
      );
    });
    ro.observe(el);
    return () => {
      ro.disconnect();
      animation.current?.stop();
    };
  }, []);

  return (
    <span ref={elRef} className="certificates__group">
      <span className="certificates__title-fixed">{fixed}</span>
      <RotatingText
        texts={words}
        rotationInterval={2400}
        staggerFrom="last"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-120%", opacity: 0 }}
        staggerDuration={0.03}
        transition={titleSpring}
        mainClassName="certificates__rotating"
      />
    </span>
  );
}

export default function Certificates() {
  const { lang, t } = useLang();
  const items = t.certificates.items;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const current = items[selectedIndex];
  const wheelItems = [...items.map((c) => c.title), ...items.map((c) => c.title)];

  useEffect(() => {
    if (!viewerOpen) return;
    const onKey = (e) => e.key === "Escape" && setViewerOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [viewerOpen]);

  return (
    <section className="section certificates" id="certificates">
      <div className="certificates__bleed">
        <h2 key={lang} className="certificates__title" aria-label={t.certificates.title}>
          <TitleGroup fixed={t.certificates.fixed} words={t.certificates.words} />
        </h2>

        <div className="certificates__grid">
          <motion.div
            className="certificates__wheel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <OptionWheel
              items={wheelItems}
              defaultSelected={0}
              onChange={(index) => setSelectedIndex(index % items.length)}
              side="left"
              textColor="#9b988b"
              activeColor="#2f4cf2"
              fontSize={2.5}
              spacing={1.75}
              curve={1}
              tilt={8}
              blur={2}
              fade={0.3}
              minOpacity={0.04}
              smoothing={160}
              inset={28}
              loop
              draggable
            />
          </motion.div>

          <div className="certificates__details">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={selectedIndex}
                className="certificates__card"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                <header className="certificates__card-head">
                  <span className="certificates__card-logo">
                    <img src={current.companyLogo} alt={current.company} />
                  </span>
                  <div className="certificates__card-titles">
                    <h3 className="certificates__card-title">{current.title}</h3>
                    <p className="certificates__card-meta">
                      <a
                        className="certificates__card-company"
                        href={current.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {current.company}
                        <span aria-hidden="true">↗</span>
                      </a>
                      {" · "}
                      {currentYear}
                    </p>
                  </div>
                </header>

                <p className="certificates__card-desc">{current.description}</p>

                <div className="certificates__card-divider" />

                <button
                  type="button"
                  className="certificates__card-cta"
                  onClick={() => setViewerOpen(true)}
                >
                  {t.certificates.viewCta}
                  <span aria-hidden="true">→</span>
                </button>
              </motion.article>
            </AnimatePresence>

            <AnimatePresence>
              {viewerOpen && (
                <motion.div
                  className="certificates__viewer"
                  role="dialog"
                  aria-modal="true"
                  aria-label={t.certificates.viewerAria}
                  onClick={() => setViewerOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.figure
                    className="certificates__viewer-figure"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 24, stiffness: 320 }}
                  >
                    <button
                      type="button"
                      className="certificates__viewer-close"
                      onClick={() => setViewerOpen(false)}
                      aria-label={t.certificates.close}
                      autoFocus
                    >
                      ✕
                    </button>
                    <img src={current.image} alt={current.title} />
                  </motion.figure>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}