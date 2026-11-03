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
  variant = "standard",
}: ProjectCardProps) {
  // Render authentic UI visual preview canvas based on project id
  const renderVisualCanvas = () => {
    if (project.id === "weather-pro") {
      return (
        <div className="relative h-48 sm:h-52 w-full rounded-xl bg-charcoal-900 border border-white/[0.08] overflow-hidden p-5 flex flex-col justify-between group-hover:border-forest-500/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/20 via-charcoal-900/60 to-charcoal-950 pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
              <span className="text-[11px] font-mono text-forest-300 font-medium">OPENWEATHER LIVE</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">LAT: 13.0827° N · CHENNAI</span>
          </div>

          <div className="relative z-10 flex items-baseline justify-between my-2">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">28°C</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Scattered Clouds · Humid</div>
            </div>
            <div className="p-3.5 rounded-xl bg-forest-500/10 border border-forest-500/20 text-forest-400">
              <CloudRain size={28} />
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-2 pt-2.5 border-t border-white/[0.07] text-[11px] text-slate-400">
            <div>Humidity: <span className="text-white font-medium">68%</span></div>
            <div>Wind: <span className="text-white font-medium">12 km/h</span></div>
            <div className="text-right">Pressure: <span className="text-white font-medium">1012 hPa</span></div>
          </div>
        </div>
      );
    }

    if (project.id === "grade-calculator-pro") {
      return (
        <div className="relative h-48 sm:h-52 w-full rounded-xl bg-charcoal-900 border border-white/[0.08] overflow-hidden p-5 flex flex-col justify-between group-hover:border-forest-500/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/20 via-charcoal-900/60 to-charcoal-950 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-[11px] font-mono text-teal-300 font-medium">COMPUTATIONAL MATRIX</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">SCALE: 10.0 / 4.0</span>
          </div>

          <div className="relative z-10 flex items-baseline justify-between my-2">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                8.75 <span className="text-sm font-normal text-teal-300">CGPA</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">First Class Distinction</div>
            </div>
            <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <Calculator size={28} />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/[0.07] text-[11px] text-slate-400">
            <span>6 Courses Evaluated</span>
            <span className="px-2 py-0.5 rounded bg-teal-950/60 text-teal-300 border border-teal-500/30 font-medium">
              PDF Export Ready
            </span>
          </div>
        </div>
      );
    }

    // Default: Developer Portfolio
    return (
      <div className="relative h-48 sm:h-52 w-full rounded-xl bg-charcoal-900 border border-white/[0.08] overflow-hidden p-5 flex flex-col justify-between group-hover:border-forest-500/30 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/20 via-charcoal-900/60 to-charcoal-950 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest-400" />
            <span className="text-[11px] font-mono text-forest-300 font-medium">NEXT.JS 15 APP ROUTER</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">REACT 19 · TS 5</span>
        </div>

        <div className="relative z-10 flex items-baseline justify-between my-2">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Software Portfolio</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Resend Serverless Handler &amp; WCAG 2.2</div>
          </div>
          <div className="p-3.5 rounded-xl bg-forest-500/10 border border-forest-500/20 text-forest-400">
            <Laptop size={28} />
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-white/[0.07] text-[11px] text-slate-400">
          <span>Route: /api/contact</span>
          <span className="px-2 py-0.5 rounded bg-forest-950/60 text-forest-300 border border-forest-500/30 font-medium">
            Zero Layout Shift
          </span>
        </div>
      </div>
    );
  };

  // Featured Hero Presentation (e.g. for Weather Pro)
  if (variant === "featured") {
    return (
      <article className="group relative rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-forest-500/40 hover:shadow-editorial-hover transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10 mb-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Narrative & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-forest-950/60 border border-forest-500/30 text-xs font-medium text-forest-300 inline-flex items-center gap-1.5">
                <Sparkles size={12} className="text-forest-400" />
                Featured Project 0{index + 1}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {project.categoryLabel}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-forest-300 transition-colors tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-snug">
              {project.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Feature Highlights */}
            {project.features && (
              <ul className="space-y-1.5 py-2">
                {project.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-forest-400 mt-1 shrink-0">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-charcoal-900 border border-white/[0.07] text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-forest-600 hover:bg-forest-500 text-white text-xs sm:text-sm font-medium transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
                  aria-label={`Open live demonstration for ${project.title}`}
                >
                  <span>Open Live Application</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 border border-white/[0.08] text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
                  aria-label={`Source code for ${project.title}`}
                >
                  <Github size={14} />
                  <span>Source Code</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 border border-white/[0.07] text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              >
                <span>Read Case Study</span>
                <ArrowRight size={14} />
              </button>

              {project.v1GithubUrl && (
                <a
                  href={project.v1GithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 border border-white/[0.07] text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                  title={`Legacy v1 Repo: ${project.v1Title || "v1"}`}
                >
                  v1 Archive
                </a>
              )}
            </div>
          </div>

          {/* Visual Preview Canvas (5 cols) */}
          <div className="lg:col-span-5">
            {renderVisualCanvas()}
          </div>
        </div>
      </article>
    );
  }

  // Standard Editorial Card
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-forest-500/40 hover:shadow-editorial-hover transition-all duration-300 overflow-hidden p-6 sm:p-7">
      <div className="space-y-4">
        {/* Visual Canvas Mockup */}
        <div className="mb-2">
          {renderVisualCanvas()}
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-forest-400">
            0{index + 1} · {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Sparkles size={12} className="text-forest-400" />
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-forest-300 transition-colors tracking-tight">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-medium">
          {project.tagline}
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-charcoal-900 border border-white/[0.06] text-xs font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 rounded bg-charcoal-900/60 text-xs font-mono text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Links Bar */}
      <div className="pt-5 mt-5 border-t border-white/[0.07] flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-forest-400 hover:text-forest-300 transition-colors group/btn focus:outline-none focus-visible:ring-1 focus-visible:ring-forest-400 rounded py-1"
        >
          <span>Case Study</span>
          <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.v1GithubUrl && (
            <a
              href={project.v1GithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded bg-charcoal-800 hover:bg-charcoal-750 border border-white/[0.08] text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
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
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-forest-400"
              aria-label={`Source code for ${project.title}`}
              title="View GitHub Repository"
            >
              <Github size={15} />
            </a>
          )}

          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-forest-600 hover:bg-forest-500 text-white text-xs font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-forest-400"
              aria-label={`Open live demonstration for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
