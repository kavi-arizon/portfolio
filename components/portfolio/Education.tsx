import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import { EDUCATION_LIST } from "@/data/education";

export default function Education() {
  if (EDUCATION_LIST.length === 0) return null;

  return (
    <section id="education" className="py-16 md:py-24 relative bg-surface-muted/30 border-t border-rule w-full" aria-labelledby="education-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-rule">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Academic Background
          </span>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-content-primary tracking-tight"
          >
            Academic Foundation in Computer Science
          </h2>
          <p className="text-sm sm:text-base text-content-secondary mt-2 max-w-3xl font-normal">
            Solid undergraduate degree focused on algorithmic problem solving, relational database systems, operating systems, and software engineering principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="w-full">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="w-full p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface border border-rule shadow-soft-sm relative overflow-hidden"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-5 border-b border-rule">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-content-primary tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-content-secondary">
                    <span className="text-accent font-semibold">{edu.institution}</span>
                    {edu.location && (
                      <>
                        <span className="text-rule">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-accent" />
                          {edu.location}
                        </span>
                      </>
                    )}
                    {edu.grade && (
                      <>
                        <span className="text-rule">•</span>
                        <span className="text-accent font-semibold">{edu.grade}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background border border-rule text-xs font-semibold text-accent self-start shadow-soft-sm">
                  <Calendar size={13} />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mb-6 space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
                    <BookOpen size={14} className="text-accent" />
                    Core Academic Curriculum:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-md bg-background border border-rule text-xs sm:text-sm font-medium text-content-primary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-4 border-t border-rule space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary flex items-center gap-1.5">
                    <Star size={14} className="text-accent" />
                    Academic Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-content-secondary">
                        <span className="text-accent mt-0.5 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
