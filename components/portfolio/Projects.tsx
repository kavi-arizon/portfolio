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

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden w-full" aria-labelledby="projects-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-rule gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
              Portfolio
            </span>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-content-primary tracking-tight"
            >
              Selected Applications &amp; Case Studies
            </h2>
            <p className="text-sm sm:text-base text-content-secondary mt-2 max-w-3xl font-normal">
              Production web applications engineered with modular component systems, reactive calculation engines, and real-time APIs.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface border border-rule shadow-soft-sm self-start md:self-auto"
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
                      : "text-content-secondary hover:text-content-primary hover:bg-surface-muted/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects 3-in-a-Row Container */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="standard"
                onOpenModal={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-surface border border-rule shadow-soft-sm w-full">
            <p className="text-sm text-content-secondary">No projects found matching this filter.</p>
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
