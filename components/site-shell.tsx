import { profile } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="ticker" aria-hidden="true"><div>
        <span>AGENTS THAT PLAN</span><b>✦</b><span>BACKENDS THAT ENDURE</span><b>✦</b><span>TOOLS THAT TALK</span><b>✦</b>
        <span>AGENTS THAT PLAN</span><b>✦</b><span>BACKENDS THAT ENDURE</span><b>✦</b><span>TOOLS THAT TALK</span><b>✦</b>
      </div></div>
      <div className="shell header-inner">
        <a href="/" className="wordmark" aria-label="VDL — Vinh Duy Le, home">
          <span>VINH<br />DUY LE</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/projects">Work</a>
          <a href="/about">About</a>
          <a href={profile.resumePath ?? "#"} target="_blank" rel="noreferrer">Résumé</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="kicker">Let’s build something dependable.</span>
          <p className="footer-title">Let’s make<br />systems talk.</p>
        </div>
        <div className="footer-links">
          <a href="/projects">Selected work ↗</a>
          {profile.resumePath && <a href={profile.resumePath} target="_blank" rel="noreferrer">Résumé ↗</a>}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          {profile.linkedIn && <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
          {profile.email && <a href={`mailto:${profile.email}`}>Email ↗</a>}
        </div>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Vinh Duy Le</span>
        <span>Designed for clarity. Engineered for change.</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>;
}
