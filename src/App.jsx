import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TextLoop from "./components/TextLoop";
import AccordionGallery from "./components/AccordionGallery";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LangContext, translations } from "./i18n";

function buildGalleryItems(t) {
  return [
    {
      image: "projects/vector.png",
      label: "Vector",
      link: "https://github.com/ttjelky/vector",
      tagline: t.projects.vector.tagline,
      description: t.projects.vector.description,
      badge: t.projects.vector.badge,
      stack: ["Django", "DRF", "Channels", "Celery", "Redis", "React", "SimpleJWT"],
    },
    {
      image: "projects/scalaris.png",
      label: "Scalaris",
      link: "https://github.com/ttjelky/Scalaris",
      tagline: t.projects.scalaris.tagline,
      description: t.projects.scalaris.description,
      badge: t.projects.scalaris.badge,
      stack: ["Django", "GeoDjango", "Leaflet", "WebSockets", "React", "Docker"],
    },
  ];
}

export default function App() {
  const [lang, setLang] = useState("uk");
  const [supportsHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches
  );
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "uk" ? "uk" : "en";
  }, [lang]);

  const items = buildGalleryItems(t);

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <Nav />
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
        <section className="section" id="projects">
          <div style={{ padding: "0 clamp(12px, 1.5vw, 20px)" }}>
            <AccordionGallery
              items={items}
              defaultIndex={0}
              accentColor="#2f4cf2"
              trigger={supportsHover ? "hover" : "click"}
              height={560}
              radius={20}
              gap={14}
              expandRatio={0.7}
              parallax={0.3}
            />
          </div>
        </section>
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}