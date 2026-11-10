import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { education, experience, profile } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: "About Vinh Duy Le, a backend and AI engineer in California." };

const principles = [
  ["Make boundaries explicit", "Clear protocols, typed contracts, and narrow interfaces make complex systems easier to change."],
  ["Design for failure", "Fallbacks, trace logging, tests, and observable errors are product features—not cleanup work."],
  ["Earn complexity", "Start with the smallest dependable architecture and add machinery only when the problem demands it."],
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main" className="page-main shell">
        <header className="about-intro">
          <div><p className="hero-overline">About · {profile.location}</p><h1>Curious about<br /><em>how systems behave.</em></h1></div>
          <div className="about-copy"><p>I’m Vinh, a software engineer working at the intersection of backend systems and applied AI.</p><p>My work spans MCP-based developer tools, agent planning, asynchronous Python services, Java microservices, streaming data, and search infrastructure. I care about the parts that make intelligent systems trustworthy: explicit contracts, graceful failures, useful traces, and disciplined testing.</p></div>
        </header>
        <section className="about-section"><p className="kicker">Engineering principles</p><div className="principles">{principles.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section>
        <section className="about-section"><p className="kicker">Full experience</p><div className="expanded-experience">{experience.map((item) => <article key={item.company}><div><span>{item.period}</span><strong>{item.company}</strong><small>{item.location}</small></div><div><h2>{item.role}</h2><p>{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div></section>
        <section className="about-section education-detail"><p className="kicker">Education</p>{education.map((item) => <article key={item.school}><h2>{item.degree}</h2><p>{item.school}</p><span>{item.period}{item.detail ? ` · ${item.detail}` : ""}</span></article>)}</section>
      </main>
    </SiteShell>
  );
}
