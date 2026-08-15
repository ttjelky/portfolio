import BubbleMenu from "./Bubblemenu";

const ACCENT_HOVER = { bgColor: "var(--accent)", textColor: "var(--paper)" };
const INK_HOVER = { bgColor: "var(--ink)", textColor: "var(--paper)" };

const LINKS = [
  { label: "проєкти", href: "#projects", ariaLabel: "Проєкти", rotation: -8, hoverStyles: ACCENT_HOVER },
  { label: "про мене", href: "#about", ariaLabel: "Про мене", rotation: 8, hoverStyles: ACCENT_HOVER },
  { label: "контакт", href: "#contact", ariaLabel: "Контакт", rotation: 8, hoverStyles: ACCENT_HOVER },
  { label: "написати →", href: "#contact", ariaLabel: "Написати", rotation: -8, hoverStyles: INK_HOVER },
];

export default function Nav() {
  return (
    <BubbleMenu
      logo={
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          OL<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      }
      items={LINKS}
      menuAriaLabel="Відкрити меню"
      menuBg="var(--paper)"
      menuContentColor="var(--ink)"
      useFixedPosition
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}