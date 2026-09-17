import practiceProjects from '../data/practiceProjects.js'

export default function PracticeProjects() {
  return (
    <section className="practice">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Arşiv</div>
          <h2>Erken Dönem & Pratik Projeler</h2>
        </div>
        <p className="practice-lede">
          Öğrenme sürecimde React, Vue ve Firebase üzerine küçük ölçekte geliştirdiğim, eski
          GitHub hesabımda (
          <a href="https://github.com/miracerdin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-2)' }}>
            @miracerdin
          </a>
          ) duran bazı projeler:
        </p>
        <div className="practice-grid">
          {practiceProjects.map((p) => (
            <a className="pill-link" href={p.href} target="_blank" rel="noopener noreferrer" key={p.href}>
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
