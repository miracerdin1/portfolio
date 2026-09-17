import skills from '../data/skills.js'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Araç Kutusu</div>
          <h2>Yetenekler</h2>
        </div>
        <div className="skill-grid">
          {skills.map((g) => (
            <div key={g.group}>
              <div className="skill-group-title">{g.group}</div>
              <div className="skill-tags">
                {g.items.map((it) => (
                  <span className="pill" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
