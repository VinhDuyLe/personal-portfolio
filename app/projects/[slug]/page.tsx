import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { SiteShell } from "@/components/site-shell";
import { getProject, projects } from "@/lib/content";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const current = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(current + 1) % projects.length];

  return (
    <SiteShell>
      <main id="main">
        <article>
          <header className="case-hero shell">
            <Link href="/projects" className="back-link">← All work</Link>
            <div className="case-meta"><span>{project.index}</span><span>{project.eyebrow}</span></div>
            <h1>{project.title}</h1>
            <p className="case-lede">{project.summary}</p>
            <div className="case-facts"><div><span>Role</span><strong>{project.role}</strong></div><div><span>Impact</span><strong>{project.impact}</strong></div></div>
          </header>
          <section className="case-architecture">
            <div className="shell"><p className="kicker">System view</p><ArchitectureFlow steps={project.architecture} /></div>
          </section>
          <section className="case-body shell">
            <aside><p className="kicker">Technology</p><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></aside>
            <div className="case-sections">
              <div className="case-problem"><span>Problem statement</span><p>{project.problem}</p></div>
              {project.sections.map((section, index) => <section key={section.title}><span>0{index + 1}</span><h2>{section.title}</h2><p>{section.body}</p></section>)}
            </div>
          </section>
          <Link className="next-case" href={`/projects/${next.slug}`}><span>Next case study</span><strong>{next.title}</strong><i>↗</i></Link>
        </article>
      </main>
    </SiteShell>
  );
}
