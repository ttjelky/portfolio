import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TextLoop from "./components/TextLoop";
import AccordionGallery from "./components/AccordionGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GALLERY_ITEMS = [
  {
    image: "/projects/vector.png",
    label: "Vector",
    link: "https://github.com/ttjelky/vector",
    tagline: "Платформа для проведення академічних турнірів",
    description:
      "Повноцінна система для організації змагань: реєстрація команд, турнірна сітка в реальному часі, WebSocket-сповіщення та автоматична генерація PDF-сертифікатів. Розробляється командою з трьох людей.",
    badge: "Призер Всеукраїнського турніру з програмування 2026",
    stack: ["Django", "DRF", "Channels", "Celery", "Redis", "React", "SimpleJWT"],
  },
  {
    image: "/projects/scalaris.png",
    label: "Scalaris",
    link: "https://github.com/ttjelky/Scalaris",
    tagline: "Соціальний застосунок для вуличної активності",
    description:
      "Mobile-first платформа, яка показує на карті людей поруч, готових приєднатися до спонтанної активності. Власна кластеризація аватарів на Leaflet-карті та обмін даними в реальному часі.",
    badge: "У розробці",
    stack: ["Django", "GeoDjango", "Leaflet", "WebSockets", "React", "Docker"],
  },
];

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TextLoop
          text="Будую продукти"
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
              items={GALLERY_ITEMS}
              defaultIndex={0}
              accentColor="#2f4cf2"
              trigger="hover"
              height={560}
              radius={20}
              gap={14}
              expandRatio={0.7}
              parallax={0.3}
            />
          </div>
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
