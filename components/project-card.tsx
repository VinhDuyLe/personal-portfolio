import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal">
      <div className="card-topline">
        <span>{project.index}</span>
        <span>{project.category}</span>
      </div>
      <div>
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="card-summary">{project.summary}</p>
      </div>
      <div className="card-footer">
        <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
        <a href={`/projects/${project.slug}`} aria-label={`Read case study: ${project.title}`}>Read case study <span>↗</span></a>
      </div>
    </article>
  );
}
