import BubbleMenu from "./Bubblemenu";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLang } from "../i18n";

const ACCENT_HOVER = { bgColor: "var(--accent)", textColor: "var(--paper)" };
const INK_HOVER = { bgColor: "var(--ink)", textColor: "var(--paper)" };

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const reducedMotion = useReducedMotion();
  const langLabel = lang === "uk" ? "en" : "ua";

  const LINKS = [
    { label: t.nav.projects, href: "#projects", ariaLabel: t.nav.projectsAria, rotation: -8, hoverStyles: ACCENT_HOVER },
    { label: t.nav.about, href: "#about", ariaLabel: t.nav.aboutAria, rotation: 8, hoverStyles: ACCENT_HOVER },
    { label: t.nav.contact, href: "#contact", ariaLabel: t.nav.contactAria, rotation: 8, hoverStyles: ACCENT_HOVER },
    { label: t.nav.write, href: "#contact", ariaLabel: t.nav.writeAria, rotation: -8, hoverStyles: INK_HOVER },
  ];

  return (
    <BubbleMenu
      logo={
        <span className="nav-logo">
          {lang === "uk" ? "Олексій Безклинський" : "Olexiy Bezklynskiy"}
        </span>
      }
      items={LINKS}
      menuAriaLabel={t.nav.menuAria}
      menuBg="var(--paper)"
      menuContentColor="var(--ink)"
      useFixedPosition
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
      rightSlot={
        <motion.button
          type="button"
          className="bubble lang-btn"
          onClick={() => setLang(lang === "uk" ? "en" : "uk")}
          aria-label={t.nav.langAria}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          <span className="lang-label">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={lang}
                className="lang-label__text"
                initial={reducedMotion ? false : { filter: "blur(4px)" }}
                animate={{
                  filter: "blur(0px)",
                  transition: { duration: reducedMotion ? 0 : 0.22, ease: "easeOut" },
                }}
                exit={
                  reducedMotion
                    ? undefined
                    : { filter: "blur(4px)", transition: { duration: 0.12, ease: "easeOut" } }
                }
              >
                {langLabel}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.button>
      }
    />
  );
}