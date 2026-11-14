import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TextLoop from "./components/TextLoop";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LangContext, translations } from "./i18n";
import { PROJECTS } from "./projects";
import { useHashRoute } from "./useHashRoute";

// Миттєва прокрутка без smooth-анімації з index.css (для зміни сторінки).
function jumpTo(y) {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, y);
  html.style.scrollBehavior = prev;
}

export default function App() {
  const [lang, setLang] = useState("uk");
  const t = translations[lang];
  const route = useHashRoute();
  const prevPage = useRef(route.page);

  useEffect(() => {
    document.documentElement.lang = lang === "uk" ? "uk" : "en";
  }, [lang]);

  // Прокрутка при зміні сторінки: проєкт — нагору; повернення на головну —
  // до секції з hash (або до проєктів, якщо hash порожній).
  useLayoutEffect(() => {
    const from = prevPage.current;
    prevPage.current = route.page;

    if (route.page === "project") {
      jumpTo(0);
      return;
    }
    if (from === "project") {
      const el = document.getElementById(route.anchor || "projects");
      if (el) jumpTo(el.getBoundingClientRect().top + window.scrollY - 24);
    }
  }, [route]);

  useEffect(() => {
    const project = route.page === "project" && PROJECTS.find((p) => p.slug === route.slug);
    document.title = project
      ? `${project.label} — ${t.projects[project.slug].tagline} · Olexiy B.`
      : "Olexiy B. — portfolio";
  }, [route, t]);

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <Nav />
      {route.page === "project" ? (
        <>
          <ProjectPage slug={route.slug} />
          <Contact />
        </>
      ) : (
        <main>
          <Hero />
          <TextLoop
            key={lang}
            text={t.marquee}
            shape="wave"
            speed={80}
            direction="forward"
            separator="✦"
            curviness={70}
            fontSize={46}
            fontWeight={800}
            letterSpacing={2}
            uppercase
            color="#faf9f5"
            ribbon
            ribbonColor="#2f4cf2"
            ribbonWidth={86}
            pauseOnHover={false}
            style={{ marginTop: "-32px" }}
          />
          <Projects />
          <About />
          <Certificates />
          <Contact />
        </main>
      )}
      <Footer />
    </LangContext.Provider>
  );
}
