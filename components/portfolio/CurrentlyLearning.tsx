import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CurrentlyLearning() {
  if (!PROFILE.currentlyLearning || PROFILE.currentlyLearning.length === 0) return null;

  return (
    <section className="py-16 relative border-t border-white/[0.07] bg-charcoal-950/40" aria-label="Continuous Growth">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-850 border border-white/[0.08] shadow-editorial-card backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-400">
              <BookOpen size={14} />
              <span>Continuous Growth</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Expanding Full-Stack &amp; Systems Frontiers
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Deepening architectural understanding in full-stack data flow, serverless edge runtimes, containerization, and scalable database integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 max-w-lg">
            {PROFILE.currentlyLearning.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/[0.07] text-xs font-medium text-slate-200"
              >
                <Sparkles size={12} className="text-forest-400 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
