import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import { EDUCATION_LIST } from "@/data/education";

export default function Education() {
  if (EDUCATION_LIST.length === 0) return null;

  return (
    <section id="education" className="py-20 relative bg-obsidian-950/40 border-t border-white/[0.08]" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2 font-medium">
            <span>[ 05 // EDUCATION ]</span>
          </div>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Academic Foundation in Computer Science
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Solid undergraduate background in algorithmic problem solving, relational databases, operating systems, and software engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-card border border-white/[0.08] shadow-card-subtle backdrop-blur-md relative overflow-hidden"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs sm:text-sm text-slate-400">
                    <span className="text-emerald-400 font-semibold">{edu.institution}</span>
                    {edu.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-slate-500" />
                          {edu.location}
                        </span>
                      </>
                    )}
                    {edu.grade && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-emerald-300 font-semibold">{edu.grade}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-850 border border-white/[0.08] text-xs font-mono text-emerald-300 self-start">
                  <Calendar size={12} />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mb-6 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 flex items-center gap-1.5 font-semibold">
                    <BookOpen size={12} className="text-emerald-400" />
                    Core Coursework &amp; Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md bg-obsidian-950 border border-white/[0.06] text-xs text-slate-300 font-mono"
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
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 flex items-center gap-1.5 font-semibold">
                    <Star size={12} className="text-emerald-400" />
                    Academic Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="text-emerald-400 mt-0.5 font-bold">•</span>
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
