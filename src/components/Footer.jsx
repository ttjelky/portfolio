import { useLang } from "../i18n";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>{t.footer.name}</span>
        <span>{t.footer.credit}</span>
      </div>
    </footer>
  );
}