import { ProjectCard } from "@/components/project-card";
import { ResumeAgent } from "@/components/resume-agent";
import { SiteShell } from "@/components/site-shell";
import { education, experience, profile, projects, skillGroups } from "@/lib/content";

export default function Home() {
  return (
    <SiteShell>
      <main id="main">
        <section className="hero shell">
          <div className="hero-status"><span className="status-dot" />{profile.status}</div>
          <div className="hero-grid">
            <div>
              <p className="hero-overline">Backend engineering × Agentic AI</p>
              <h1>Systems<br />that <em>talk.</em></h1>
            </div>
            <div className="hero-aside">
              <p>{profile.introduction}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="/projects">Explore selected work <span>↗</span></a>
                {profile.resumePath && <a className="text-link" href={profile.resumePath} target="_blank" rel="noreferrer">View résumé ↗</a>}
              </div>
            </div>
          </div>
          <div className="hero-machine" aria-hidden="true">
            <div className="machine-core"><span>MCP</span><i /></div>
            <div className="machine-node node-one">01<small>PLAN</small></div>
            <div className="machine-node node-two">02<small>CALL</small></div>
            <div className="machine-node node-three">03<small>TRACE</small></div>
            <div className="machine-wire wire-one" /><div className="machine-wire wire-two" /><div className="machine-wire wire-three" />
          </div>
          <div className="hero-meta">
            <span>Based in {profile.location}</span>
            <span>Scroll to inspect <b>↓</b></span>
          </div>
        </section>

        <section className="section shell" aria-labelledby="build-heading">
          <div className="section-heading"><span className="section-number">01</span><div><p className="kicker">What I build</p><h2 id="build-heading">Intelligence, with<br />engineering underneath.</h2></div></div>
          <div className="capability-grid">
            {skillGroups.map((group, index) => (
              <article className="capability" key={group.title}>
                <span className="capability-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tag-row">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section agent-section" aria-labelledby="agent-heading">
          <div className="shell agent-layout">
            <div>
              <p className="kicker">Résumé agent · Grounded Q&A</p>
              <h2 id="agent-heading">Ask once.<br /><em>Get the signal.</em></h2>
              <p className="agent-intro">A concise, privacy-friendly guide to my experience—designed for recruiters and engineering leaders who need the relevant answer quickly.</p>
            </div>
            <ResumeAgent />
          </div>
        </section>

        <section className="section work-section" aria-labelledby="work-heading">
          <div className="shell section-heading"><span className="section-number">02</span><div><p className="kicker">Selected work</p><h2 id="work-heading">Complex systems,<br />made legible.</h2></div></div>
          <div className="shell projects-list">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
          <div className="shell section-end"><a className="text-link" href="/projects">View all case studies ↗</a></div>
        </section>

        <section className="section shell" aria-labelledby="experience-heading">
          <div className="section-heading"><span className="section-number">03</span><div><p className="kicker">Experience</p><h2 id="experience-heading">Built in production.</h2></div></div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content"><p>{item.company} · {item.location}</p><h3>{item.role}</h3><span>{item.summary}</span></div>
              </article>
            ))}
          </div>
          <div className="education-row">
            <p className="kicker">Education</p>
            {education.map((item) => <div key={item.school}><strong>{item.degree}</strong><span>{item.school} · {item.period}{item.detail ? ` · ${item.detail}` : ""}</span></div>)}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
