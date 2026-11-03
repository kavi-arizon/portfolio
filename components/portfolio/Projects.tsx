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

  const isDefaultView = selectedFilter === "all" || selectedFilter === "featured";
  const primaryFeaturedProject = isDefaultView
    ? filteredProjects.find((p) => p.id === "weather-pro") || filteredProjects[0]
    : null;
  const secondaryProjects = isDefaultView
    ? filteredProjects.filter((p) => p.id !== primaryFeaturedProject?.id)
    : filteredProjects;

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden w-full" aria-labelledby="projects-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-surface-border gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
              Portfolio
            </span>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ink tracking-tight"
            >
              Selected Applications &amp; Case Studies
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary mt-2 max-w-3xl font-normal">
              Production web applications engineered with modular component systems, reactive calculation engines, and real-time APIs.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white border border-surface-border shadow-soft-sm self-start md:self-auto"
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
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? "bg-accent text-white shadow-sm font-semibold"
                      : "text-ink-secondary hover:text-ink hover:bg-surface-muted/50"
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
          <div className="w-full">
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
            <div className={`grid gap-8 w-full ${isDefaultView ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
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
          <div className="p-12 text-center rounded-2xl bg-white border border-surface-border shadow-soft-sm w-full">
            <p className="text-sm text-ink-secondary">No projects found matching this filter.</p>
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
