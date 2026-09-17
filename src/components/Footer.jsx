const GITHUB = 'https://github.com/miracerdin1'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <h2>Birlikte bir şeyler inşa edelim</h2>
        <p className="footer-lede">
          Yeni bir proje, iş birliği ya da sadece merhaba demek için ulaşabilirsin.
        </p>
        <div className="footer-cta">
          <a className="btn btn-primary" href={GITHUB} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="btn btn-ghost" href="mailto:miracerdin@gmail.com">
            E-posta Gönder
          </a>
        </div>
        <div className="footer-fine">
          <span>© {year} Miraç Erdin</span>
          <span>·</span>
          <span>React & Three.js ile inşa edildi</span>
        </div>
      </div>
    </footer>
  )
}
