import { useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import { useLang } from "../i18n";
import "./Contact.css";

const EMAIL = "bezklinskiyalexey@gmail.com";

export default function Contact() {
  const { t } = useLang();
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
        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <ShinyText
            text={t.contact.title}
            color="#14140f"
            shineColor="#ffffff"
            speed={3}
            spread={140}
            direction="left"
          />
          <br />
          <span className="italic">{t.contact.talk}</span>
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
            {copied ? t.contact.copied : t.contact.copy}
          </button>
        </motion.div>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://github.com/ttjelky" target="_blank" rel="noreferrer">
            <img src="logos/github.svg" alt="" />
            GitHub
          </a>
          <a href="https://t.me/ttjelky" target="_blank" rel="noreferrer">
            <img src="logos/telegram.svg.png" alt="" />
            Telegram
          </a>
          <a href="https://x.com/CuteJelky" target="_blank" rel="noreferrer">
            <img src="logos/x.webp" alt="" />
            X
          </a>
        </motion.div>
      </div>
    </section>
  );
}