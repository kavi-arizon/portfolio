"use client";

import React from "react";
import { ExternalLink, Github, ArrowRight, Sparkles, CloudRain, Calculator, Laptop } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  // Render authentic UI visual preview canvas based on project id
  const renderVisualCanvas = () => {
    if (project.id === "weather-pro") {
      return (
        <div className="relative h-44 sm:h-48 w-full rounded-xl bg-obsidian-950 border border-white/[0.08] overflow-hidden p-4 flex flex-col justify-between group-hover:border-emerald-500/30 transition-colors">
          {/* Subtle gradient background simulation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 via-slate-900/40 to-obsidian-950 pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-300 font-medium">OPENWEATHER LIVE</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">LAT: 13.0827° N</span>
          </div>

          <div className="relative z-10 flex items-baseline justify-between">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">28°C</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Scattered Clouds · Chennai</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CloudRain size={24} />
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
            <div>HUMIDITY: <span className="text-white font-medium">68%</span></div>
            <div>WIND: <span className="text-white font-medium">12 km/h</span></div>
            <div className="text-right">PRESSURE: <span className="text-white font-medium">1012 hPa</span></div>
          </div>
        </div>
      );
    }

    if (project.id === "grade-calculator-pro") {
      return (
        <div className="relative h-44 sm:h-48 w-full rounded-xl bg-obsidian-950 border border-white/[0.08] overflow-hidden p-4 flex flex-col justify-between group-hover:border-emerald-500/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/20 via-slate-900/40 to-obsidian-950 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-[10px] font-mono text-teal-300 font-medium">COMPUTATIONAL MATRIX</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">SCALE: 10.0 / 4.0</span>
          </div>

          <div className="relative z-10 flex items-baseline justify-between">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">8.75 <span className="text-xs font-mono text-teal-400">CGPA</span></div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">First Class Distinction Threshold</div>
            </div>
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <Calculator size={24} />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
            <span>6 SUBJECTS EVALUATED</span>
            <span className="px-2 py-0.5 rounded bg-teal-950/50 text-teal-300 border border-teal-500/30">PDF EXPORT READY</span>
          </div>
        </div>
      );
    }

    // Default: Developer Portfolio
    return (
      <div className="relative h-44 sm:h-48 w-full rounded-xl bg-obsidian-950 border border-white/[0.08] overflow-hidden p-4 flex flex-col justify-between group-hover:border-emerald-500/30 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 via-slate-900/40 to-obsidian-950 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-300 font-medium">NEXT.js 15 APP ROUTER</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">REACT 19 · TS</span>
        </div>

        <div className="relative z-10 flex items-baseline justify-between">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Architecture Pro</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Resend Serverless Handler &amp; WCAG 2.2</div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Laptop size={24} />
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
          <span>STATUS: 200 OK</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">118 KB FIRST LOAD</span>
        </div>
      </div>
    );
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-obsidian-900/80 border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* Top Meta Strip */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Visual Canvas Mockup */}
          <div className="mb-4">
            {renderVisualCanvas()}
          </div>

          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              [ 0{index + 1} // {project.categoryLabel} ]
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <Sparkles size={11} className="text-emerald-400" />
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-1.5">
            {project.title}
          </h3>

          <p className="text-xs text-slate-300 font-medium mb-2 line-clamp-1">
            {project.tagline}
          </p>

          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/[0.06] text-[10px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-obsidian-950/60 text-[10px] font-mono text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Links Bar */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/btn focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded py-1"
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
                className="px-2 py-1 rounded bg-obsidian-800 hover:bg-obsidian-750 border border-white/[0.08] text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors"
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
                className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                aria-label={`Source code for ${project.title}`}
                title="View GitHub Repository"
              >
                <Github size={14} />
              </a>
            )}

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                aria-label={`Open live demonstration for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
