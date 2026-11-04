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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-surface border border-rule shadow-2xl overflow-hidden my-auto"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-background border-b border-rule shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
              {project.categoryLabel}
            </span>
            {project.completionDate && (
              <span className="text-xs text-content-secondary flex items-center gap-1 font-medium">
                <Calendar size={13} />
                {project.completionDate}
              </span>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface hover:bg-surface-muted text-content-secondary hover:text-content-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-soft-sm"
            aria-label="Close project case study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title and Tagline */}
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold text-content-primary tracking-tight"
            >
              {project.title}
            </h3>
            <p className="text-sm text-accent font-semibold mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ExternalLink size={14} />
                <span>Open Live Application</span>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-background hover:bg-surface-muted border border-rule text-content-primary hover:text-accent font-medium text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-soft-sm"
              >
                <Github size={14} />
                <span>View Source Code</span>
              </a>
            )}
            {project.v1GithubUrl && (
              <a
                href={project.v1GithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-background hover:bg-surface-muted border border-rule text-content-secondary hover:text-content-primary text-xs font-mono transition-colors"
              >
                <Github size={13} />
                <span>{project.v1Title || "View v1 Archive"}</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="p-5 rounded-xl bg-background border border-rule space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
              <BookOpen size={14} className="text-accent" />
              Project Overview
            </h4>
            <p className="text-sm text-content-secondary leading-relaxed font-normal">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Problem & Architectural Solution */}
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-5 rounded-xl bg-background border border-rule space-y-1.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    The Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-xl bg-accent/5 border border-accent/20 space-y-1.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
                    <Lightbulb size={14} />
                    The Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
                <Sparkles size={14} className="text-accent" />
                Key Features &amp; Implementation Details
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-background border border-rule-subtle text-xs sm:text-sm text-content-secondary"
                  >
                    <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                    <span className="font-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
              <Layers size={14} className="text-accent" />
              Engineering Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-background border border-rule text-xs font-medium text-content-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
