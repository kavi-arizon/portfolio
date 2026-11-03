"use client";

import React, { useEffect, useRef } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      clearTimeout(timer);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[#080d15] border border-white/[0.1] shadow-2xl overflow-hidden my-auto"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-obsidian-900/95 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              {project.categoryLabel}
            </span>
            {project.completionDate && (
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar size={12} />
                {project.completionDate}
              </span>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Close project case study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Title and Tagline */}
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
            >
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-emerald-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <ExternalLink size={13} />
                <span>Open Live Application</span>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/[0.08] text-slate-200 hover:text-white font-medium text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Github size={13} />
                <span>View Source Code</span>
              </a>
            )}
            {project.v1GithubUrl && (
              <a
                href={project.v1GithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-obsidian-900 hover:bg-obsidian-800 border border-white/[0.06] text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
              >
                <Github size={13} />
                <span>{project.v1Title || "View v1 Archive"}</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="p-4 sm:p-5 rounded-xl bg-obsidian-900/60 border border-white/[0.06] space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-semibold">
              <BookOpen size={13} className="text-emerald-400" />
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Problem & Architectural Solution */}
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-3.5">
              {project.problem && (
                <div className="p-4 rounded-xl bg-obsidian-900/50 border border-white/[0.06] space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 font-semibold">
                    <AlertTriangle size={13} />
                    The Problem
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/25 space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <Lightbulb size={13} />
                    The Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-semibold">
                <Sparkles size={13} className="text-emerald-400" />
                Key Features &amp; Implementation Details
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-obsidian-900/40 border border-white/[0.05] text-xs text-slate-300"
                  >
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-semibold">
                <Layers size={13} className="text-emerald-400" />
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-obsidian-950 border border-white/[0.06] font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Learnings */}
          {(project.challenges || project.learnings) && (
            <div className="grid md:grid-cols-2 gap-3.5 pt-1">
              {project.challenges && project.challenges.length > 0 && (
                <div className="p-3.5 rounded-xl bg-obsidian-900/40 border border-white/[0.06] space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Technical Challenges:
                  </h4>
                  <ul className="space-y-1">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-slate-500">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.learnings && project.learnings.length > 0 && (
                <div className="p-3.5 rounded-xl bg-obsidian-900/40 border border-white/[0.06] space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Takeaways:
                  </h4>
                  <ul className="space-y-1">
                    {project.learnings.map((l, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-obsidian-900/95 border-t border-white/[0.08] flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-xs font-medium text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
