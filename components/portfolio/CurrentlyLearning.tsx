import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CurrentlyLearning() {
  if (!PROFILE.currentlyLearning || PROFILE.currentlyLearning.length === 0) return null;

  return (
    <section className="py-14 relative border-t border-surface-border bg-white/40" aria-label="Continuous Growth">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-soft-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <BookOpen size={14} />
              <span>Continuous Growth</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
              Expanding Full-Stack &amp; Systems Frontiers
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed font-normal">
              Deepening architectural understanding in full-stack data flow, serverless edge runtimes, containerization, and scalable database integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 max-w-lg">
            {PROFILE.currentlyLearning.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-canvas border border-surface-border text-xs font-medium text-ink shadow-soft-sm"
              >
                <Sparkles size={12} className="text-accent shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
