import type { Metadata } from "next";
import { Archivo_Black, Nunito_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const sans = Nunito_Sans({ variable: "--font-sans", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vinh-duy-le-portfolio.saferoot4097.chatgpt.site"),
  title: { default: "Vinh Duy Le — Backend & AI Engineer", template: "%s — Vinh Duy Le" },
  description: "Backend and AI engineer building reliable agentic systems, developer tools, and distributed services.",
  icons: { icon: "/icon.png", shortcut: "/icon.png" },
  openGraph: {
    type: "website",
    title: "Vinh Duy Le — Backend & AI Engineer",
    description: "Reliable agentic systems. Production backend engineering.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vinh Duy Le, Backend and AI Engineer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
