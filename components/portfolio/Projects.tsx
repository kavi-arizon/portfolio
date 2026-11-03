"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "frontend", label: "Frontend & API" },
    { id: "tools", label: "Web Utility / Engine" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "featured") return project.featured;
    return project.category === selectedFilter;
  });

  // Asymmetrical layout when viewing "all" or "featured":
  // Featured project (Weather Pro) gets prominent top showcase, remaining projects sit in complementary 2-column grid.
  const isDefaultView = selectedFilter === "all" || selectedFilter === "featured";
  const primaryFeaturedProject = isDefaultView
    ? filteredProjects.find((p) => p.id === "weather-pro") || filteredProjects[0]
    : null;
  const secondaryProjects = isDefaultView
    ? filteredProjects.filter((p) => p.id !== primaryFeaturedProject?.id)
    : filteredProjects;

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="projects-heading">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-forest-400 mb-2 block">
              Portfolio
            </span>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Selected Applications &amp; Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-normal">
              Production web applications engineered with modular component systems, reactive calculation engines, and real-time APIs.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-charcoal-850 border border-white/[0.08] self-start md:self-auto"
            role="tablist"
            aria-label="Filter applications by category"
          >
            {filters.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 ${
                    isSelected
                      ? "bg-forest-950/60 text-forest-300 border border-forest-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Showcase Container */}
        {filteredProjects.length > 0 ? (
          <div>
            {/* Primary Dominant Showcase if in default view */}
            {isDefaultView && primaryFeaturedProject && (
              <ProjectCard
                key={primaryFeaturedProject.id}
                project={primaryFeaturedProject}
                index={0}
                variant="featured"
                onOpenModal={(p) => setActiveModalProject(p)}
              />
            )}

            {/* Complementary Grid for remaining or filtered projects */}
            <div className={`grid gap-7 ${isDefaultView ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
              {secondaryProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={isDefaultView ? index + 1 : index}
                  variant="standard"
                  onOpenModal={(p) => setActiveModalProject(p)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-charcoal-850/60 border border-white/[0.08]">
            <p className="text-sm text-slate-400">No projects found matching this filter.</p>
          </div>
        )}

        {/* In-Depth Case Study Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
