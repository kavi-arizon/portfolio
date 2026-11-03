"use client";

import React from "react";
import { ExternalLink, Github, ArrowRight, CloudRain, Calculator, Laptop, Sparkles } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
  variant?: "featured" | "standard";
}

export default function ProjectCard({
  project,
  index,
  onOpenModal,
}: ProjectCardProps) {
  // Render authentic UI visual preview canvas based on project id
  const renderVisualCanvas = () => {
    if (project.id === "weather-pro") {
      return (
        <div className="relative h-48 sm:h-52 lg:h-56 w-full rounded-xl bg-gradient-to-tr from-[#EEF1FF] via-white to-surface-muted/50 border border-surface-border overflow-hidden p-5 sm:p-6 flex flex-col justify-between group-hover:border-accent/40 transition-colors shadow-soft-sm">
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono text-accent font-bold">OPENWEATHER LIVE</span>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-ink-secondary">LAT: 13.0827° N · CHENNAI</span>
          </div>

          <div className="relative z-10 flex items-baseline justify-between my-2">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">28°C</div>
              <div className="text-xs sm:text-sm text-ink-secondary font-medium mt-1">Scattered Clouds · Humid</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
              <CloudRain size={28} />
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-2 pt-2.5 border-t border-surface-border text-[11px] sm:text-xs text-ink-secondary">
            <div>Humidity: <span className="text-ink font-semibold">68%</span></div>
            <div>Wind: <span className="text-ink font-semibold">12 km/h</span></div>
            <div className="text-right">Pressure: <span className="text-ink font-semibold">1012 hPa</span></div>
          </div>
        </div>
      );
    }

    if (project.id === "grade-calculator-pro") {
      return (
        <div className="relative h-48 sm:h-52 lg:h-56 w-full rounded-xl bg-gradient-to-tr from-[#EEF4FF] via-white to-surface-muted/50 border border-surface-border overflow-hidden p-5 sm:p-6 flex flex-col justify-between group-hover:border-accent/40 transition-colors shadow-soft-sm">
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] sm:text-xs font-mono text-accent font-bold">COMPUTATIONAL MATRIX</span>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-ink-secondary">SCALE: 10.0 / 4.0</span>
          </div>

          <div className="relative z-10 flex items-baseline justify-between my-2">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                8.75 <span className="text-sm sm:text-base font-semibold text-accent">CGPA</span>
              </div>
              <div className="text-xs sm:text-sm text-ink-secondary font-medium mt-1">First Class Distinction</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
              <Calculator size={28} />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-surface-border text-[11px] sm:text-xs text-ink-secondary">
            <span>6 Courses Evaluated</span>
            <span className="px-2 py-0.5 rounded bg-surface-muted text-ink font-semibold">
              PDF Export Ready
            </span>
          </div>
        </div>
      );
    }

    // Default: Developer Portfolio
    return (
      <div className="relative h-48 sm:h-52 lg:h-56 w-full rounded-xl bg-gradient-to-tr from-[#EEF1FF] via-white to-surface-muted/50 border border-surface-border overflow-hidden p-5 sm:p-6 flex flex-col justify-between group-hover:border-accent/40 transition-colors shadow-soft-sm">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[11px] sm:text-xs font-mono text-accent font-bold">NEXT.JS 15 APP ROUTER</span>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-ink-secondary">REACT 19 · TS 5</span>
        </div>

        <div className="relative z-10 flex items-baseline justify-between my-2">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">Software Portfolio</div>
            <div className="text-xs sm:text-sm text-ink-secondary font-medium mt-1">Resend Serverless Handler &amp; WCAG 2.2</div>
          </div>
          <div className="p-3 sm:p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
            <Laptop size={28} />
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-surface-border text-[11px] sm:text-xs text-ink-secondary">
          <span>Route: /api/contact</span>
          <span className="px-2 py-0.5 rounded bg-surface-muted text-ink font-semibold">
            Zero Layout Shift
          </span>
        </div>
      </div>
    );
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-white border border-surface-border hover:border-accent/40 hover:shadow-soft-lg transition-all duration-300 overflow-hidden p-6 sm:p-7 xl:p-8 shadow-soft-sm w-full h-full">
      <div className="space-y-4">
        {/* Visual Canvas Mockup */}
        <div className="mb-2">
          {renderVisualCanvas()}
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-accent">
            0{index + 1} · {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs text-ink-secondary font-medium">
              <Sparkles size={12} className="text-accent" />
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-accent transition-colors tracking-tight">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-ink font-medium">
          {project.tagline}
        </p>

        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed line-clamp-3 font-normal">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-canvas border border-surface-border text-xs font-medium text-ink"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded bg-surface-muted/50 text-xs font-mono text-ink-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Links Bar */}
      <div className="pt-5 mt-5 border-t border-surface-border flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/btn focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded py-1"
        >
          <span>Case Study</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.v1GithubUrl && (
            <a
              href={project.v1GithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded bg-canvas hover:bg-surface-muted/60 border border-surface-border text-xs font-mono text-ink-secondary hover:text-ink transition-colors"
              title={`Legacy v1 Repo: ${project.v1Title || "v1"}`}
              aria-label={`Legacy v1 repository for ${project.title}`}
            >
              v1
            </a>
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas hover:bg-surface-muted/60 border border-surface-border text-ink hover:text-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent shadow-soft-sm"
              aria-label={`Source code for ${project.title}`}
              title="View GitHub Repository"
            >
              <Github size={16} />
            </a>
          )}

          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-accent-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label={`Open live demonstration for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
