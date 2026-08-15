import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>Олексій © {new Date().getFullYear()}</span>
        <span>Зроблено на React + Framer Motion</span>
      </div>
    </footer>
  );
}
