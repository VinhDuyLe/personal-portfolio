"use client";

export function ThemeToggle() {
  function toggle() {
    const current = document.documentElement.dataset.theme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label="Toggle light and dark theme">
      <span aria-hidden="true">◐</span>
      <span className="theme-label">Theme</span>
    </button>
  );
}
