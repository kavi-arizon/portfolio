import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CurrentlyLearning() {
  if (!PROFILE.currentlyLearning || PROFILE.currentlyLearning.length === 0) return null;

  return (
    <section className="py-14 relative border-t border-rule bg-surface-muted/20 w-full" aria-label="Continuous Growth">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-surface border border-rule shadow-soft-sm flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <BookOpen size={14} />
              <span>Continuous Growth</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-content-primary tracking-tight">
              Expanding Full-Stack &amp; Systems Frontiers
            </h3>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
              Deepening architectural understanding in full-stack data flow, serverless edge runtimes, containerization, and scalable database integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 max-w-xl">
            {PROFILE.currentlyLearning.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-rule text-xs sm:text-sm font-medium text-content-primary shadow-soft-sm"
              >
                <Sparkles size={13} className="text-accent shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
