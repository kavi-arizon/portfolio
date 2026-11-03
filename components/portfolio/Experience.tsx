import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  if (EXPERIENCES.length === 0) return null;

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="experience-heading">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-forest-400 mb-2 block">
              Timeline
            </span>
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Professional Engineering Experience
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm text-left md:text-right font-medium">
            Production Storefronts &amp; Feature Delivery
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-6 before:w-[2px] before:bg-gradient-to-b before:from-forest-500/50 before:via-white/[0.1] before:to-transparent">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16 group">
              {/* Timeline marker */}
              <div className="absolute left-[3px] md:left-[17px] top-2 w-3.5 h-3.5 rounded-full bg-charcoal-900 border-2 border-forest-400 group-hover:bg-forest-400 group-hover:shadow-sm transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-white/[0.16] shadow-editorial-card backdrop-blur-md transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-400">
                      <span className="text-forest-400 font-semibold">{exp.company}</span>
                      {exp.employmentType && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span>{exp.employmentType}</span>
                        </>
                      )}
                      {exp.location && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-slate-500" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-white/[0.08] text-xs font-medium text-forest-300 self-start sm:self-auto shrink-0">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {exp.description}
                  </p>
                )}

                {/* Deliverables */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Key Deliverables &amp; Engineering Contributions:
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 size={15} className="text-forest-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Milestones / Awards Callout */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2 mb-6 p-4 sm:p-5 rounded-xl bg-forest-950/20 border border-forest-500/25">
                    <span className="text-xs font-semibold uppercase tracking-wider text-forest-300 flex items-center gap-1.5">
                      <Award size={15} />
                      Milestones &amp; Recognition:
                    </span>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                          <span className="text-forest-400 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
                    <span className="text-xs text-slate-400 font-medium mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-charcoal-900 border border-white/[0.06] text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
