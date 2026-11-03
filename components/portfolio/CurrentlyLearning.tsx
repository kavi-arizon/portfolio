import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CurrentlyLearning() {
  if (!PROFILE.currentlyLearning || PROFILE.currentlyLearning.length === 0) return null;

  return (
    <section className="py-14 relative border-t border-white/[0.08] bg-obsidian-950/60" aria-label="Continuous Growth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-card border border-white/[0.08] backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 font-medium">
              <BookOpen size={13} />
              <span>Continuous Growth</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Expanding Full-Stack &amp; Systems Frontiers
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Deepening architectural understanding in full-stack data flow, serverless edge runtimes, and scalable backend integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-lg">
            {PROFILE.currentlyLearning.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-950 border border-white/[0.08] text-xs font-mono text-slate-300"
              >
                <Sparkles size={11} className="text-emerald-400 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
