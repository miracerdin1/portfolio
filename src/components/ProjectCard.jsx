export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-tag">{project.tag}</div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="stack-row">
        {project.stack.map((s) => (
          <span className="pill" key={s}>{s}</span>
        ))}
      </div>
      <div className="card-links">
        {project.links.map((l) => (
          <a href={l.href} target="_blank" rel="noopener noreferrer" key={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </article>
  )
}
