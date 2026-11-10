"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/content";
import { ProjectCard } from "./project-card";

const categories: Array<"All" | ProjectCategory> = ["All", "AI & Agents", "Backend", "Distributed Systems"];

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = projects.filter((project) => active === "All" || project.category === active || project.secondaryCategories.includes(active));

  return (
    <>
      <div className="filter-row" aria-label="Filter case studies">
        {categories.map((category) => (
          <button key={category} type="button" className={active === category ? "active" : ""} onClick={() => setActive(category)} aria-pressed={active === category}>
            {category}<sup>{category === "All" ? projects.length : projects.filter((p) => p.category === category || p.secondaryCategories.includes(category as ProjectCategory)).length}</sup>
          </button>
        ))}
      </div>
      <div className="projects-list">
        {visible.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </>
  );
}
