const GITHUB = 'https://github.com/miracerdin1'

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-row">
        <div className="brand">
          <span className="brand-dot" />
          miraç erdin
        </div>
        <ul className="nav-links">
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#projects">Projeler</a></li>
          <li><a href="#skills">Yetenekler</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
        <a className="nav-gh" href={GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
