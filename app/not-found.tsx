import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return <SiteShell><main id="main" className="not-found shell"><span>404 · Route not found</span><h1>This path reached<br /><em>a graceful failure.</em></h1><p>The page may have moved, but the system is healthy.</p><Link className="button button-primary" href="/">Return home ↗</Link></main></SiteShell>;
}
