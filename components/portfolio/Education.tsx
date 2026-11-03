import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import { EDUCATION_LIST } from "@/data/education";

export default function Education() {
  if (EDUCATION_LIST.length === 0) return null;

  return (
    <section id="education" className="py-20 md:py-24 relative bg-charcoal-950/40 border-t border-white/[0.07]" aria-labelledby="education-heading">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-semibold tracking-wider uppercase text-forest-400 mb-2 block">
            Academic Background
          </span>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Academic Foundation in Computer Science
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-normal">
            Solid undergraduate degree focused on algorithmic problem solving, relational database systems, operating systems, and software engineering principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="grid lg:grid-cols-12 gap-8">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-charcoal-850 border border-white/[0.08] shadow-editorial-card relative overflow-hidden"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-5 border-b border-white/[0.07]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-400">
                    <span className="text-forest-400 font-semibold">{edu.institution}</span>
                    {edu.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-slate-500" />
                          {edu.location}
                        </span>
                      </>
                    )}
                    {edu.grade && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-forest-300 font-medium">{edu.grade}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-white/[0.08] text-xs font-medium text-forest-300 self-start">
                  <Calendar size={13} />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mb-6 space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-forest-400" />
                    Core Academic Curriculum:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md bg-charcoal-900 border border-white/[0.06] text-xs text-slate-300 font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Star size={14} className="text-forest-400" />
                    Academic Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-forest-400 mt-1 font-bold">•</span>
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
