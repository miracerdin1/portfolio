import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Seçili İşler</div>
          <h2>Projeler</h2>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
