import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const EMAIL = "your-email@example.com"; // заміни на свою пошту

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard недоступний — просто ігноруємо, посилання mailto все одно працює
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <motion.p
          className="kicker"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Раунд 03 — контакт
        </motion.p>

        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Є проєкт?
          <br />
          <span className="italic">Поговорімо.</span>
        </motion.h2>

        <motion.div
          className="contact__row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href={`mailto:${EMAIL}`} className="contact__email">
            {EMAIL}
          </a>
          <button className="contact__copy" onClick={handleCopy} type="button">
            {copied ? "Скопійовано ✓" : "Копіювати"}
          </button>
        </motion.div>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://t.me/" target="_blank" rel="noreferrer">
            Telegram ↗
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
