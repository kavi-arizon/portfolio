"use client";

import React, { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: "All Works" },
    { id: "featured", label: "Featured" },
    { id: "frontend", label: "Frontend & API" },
    { id: "tools", label: "Web Engines" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "featured") return project.featured;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2 font-medium">
              <span>[ 03 // FEATURED WORK ]</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Selected Applications &amp; Case Studies
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Production web applications engineered with modular component systems, reactive state management, and real-time APIs.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-white/[0.08] self-start md:self-auto"
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isSelected
                      ? "bg-obsidian-800 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-obsidian-900/40 border border-white/[0.08]">
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
