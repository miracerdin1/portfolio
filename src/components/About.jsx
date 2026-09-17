export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-body">
          <div className="section-head">
            <div className="section-kicker">Hakkımda</div>
            <h2>Fikirden çalışan arayüze</h2>
          </div>
          <p>
            <strong>Vue</strong> ve <strong>React</strong> ekosisteminde, <strong>TypeScript</strong> ile
            duyarlı ve performanslı arayüzler kuruyorum. Nuxt 3, Pinia ve Tailwind gibi araçlarla
            frontend tarafında derinleşiyorum.
          </p>
          <p>
            Bunun yanında React Native ile mobil uygulamalar (LinkFlow), zaman zaman da Python
            tabanlı otomasyon araçları geliştiriyorum.
          </p>
          <p>Kullanıcı deneyimine ve temiz, okunabilir koda önem veriyorum.</p>
        </div>
        <div className="panel">
          <div className="panel-title">Şu anda</div>
          <ul className="panel-list">
            <li><span>Odak</span><span>Frontend geliştirme</span></li>
            <li><span>Diller</span><span>TypeScript · JavaScript</span></li>
            <li><span>Mobil</span><span>React Native / Expo</span></li>
            <li><span>Konum</span><span>İstanbul, Türkiye</span></li>
            <li>
              <span>GitHub</span>
              <span>
                <a href="https://github.com/miracerdin1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>
                  @miracerdin1
                </a>{' '}
                /{' '}
                <a href="https://github.com/miracerdin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>
                  @miracerdin
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
