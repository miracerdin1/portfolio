import ParticleField from './ParticleField.jsx'

const GITHUB = 'https://github.com/miracerdin1'

export default function Hero() {
  return (
    <section className="hero">
      <ParticleField />
      <div className="wrap hero-inner">
        <div className="eyebrow">Frontend Developer</div>
        <h1>Miraç Erdin</h1>
        <p className="hero-lede">
          Vue ve React ekosisteminde, TypeScript ile duyarlı ve akıcı arayüzler tasarlıyorum;
          zaman zaman mobil ve otomasyon tarafında da ürün geliştiriyorum.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">Projeleri Gör</a>
          <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">
            GitHub'da İncele
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">79</div>
            <div className="stat-label">repository (2 hesap)</div>
          </div>
          <div>
            <div className="stat-num">195</div>
            <div className="stat-label">yıllık katkı</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">temel stack: Vue · React · TypeScript</div>
          </div>
        </div>
      </div>
    </section>
  )
}
