import React from "react";
import { Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  if (EXPERIENCES.length === 0) return null;

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden w-full" aria-labelledby="experience-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-rule gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
              Timeline
            </span>
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-content-primary tracking-tight"
            >
              Professional Engineering Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-content-secondary max-w-sm text-left md:text-right font-medium">
            Production Storefronts &amp; Feature Delivery
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-6 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-rule before:to-transparent w-full">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16 group w-full">
              {/* Timeline marker */}
              <div className="absolute left-[3px] md:left-[17px] top-2 w-3.5 h-3.5 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface border border-rule hover:border-accent/40 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 w-full">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4 pb-4 border-b border-rule">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-content-primary tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-content-secondary">
                      <span className="text-accent font-semibold">{exp.company}</span>
                      {exp.employmentType && (
                        <>
                          <span className="text-rule">•</span>
                          <span>{exp.employmentType}</span>
                        </>
                      )}
                      {exp.location && (
                        <>
                          <span className="text-rule">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-accent" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background border border-rule text-xs font-semibold text-accent self-start sm:self-auto shrink-0 shadow-soft-sm">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 font-normal max-w-4xl">
                    {exp.description}
                  </p>
                )}

                {/* Deliverables */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary block">
                      Key Deliverables &amp; Engineering Contributions:
                    </span>
                    <ul className="space-y-2 max-w-4xl">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary leading-relaxed">
                          <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                          <span className="font-normal">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Milestones / Awards Callout */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2 mb-6 p-4 sm:p-5 rounded-xl bg-accent/5 border border-accent/20 max-w-4xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
                      <Award size={15} />
                      Milestones &amp; Recognition:
                    </span>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-content-primary flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span className="font-medium">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-rule">
                    <span className="text-xs text-content-secondary font-medium mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-background border border-rule text-xs font-medium text-content-primary"
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
