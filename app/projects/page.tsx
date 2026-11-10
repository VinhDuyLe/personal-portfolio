import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Selected Work", description: "Case studies in agentic AI, backend engineering, and distributed systems." };

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main id="main" className="page-main shell">
        <header className="page-intro">
          <p className="hero-overline">Selected work · 2020—Present</p>
          <h1>Engineering that<br /><em>earns trust.</em></h1>
          <p>Professional case studies focused on the architecture, boundaries, and measurable outcomes behind production systems.</p>
        </header>
        <ProjectFilter />
      </main>
    </SiteShell>
  );
}
