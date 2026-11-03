import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function Achievements() {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="py-20 relative bg-obsidian-950/40 border-t border-white/[0.08]" aria-labelledby="achievements-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2 font-medium">
            <span>[ 06 // HONORS ]</span>
          </div>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Awards &amp; Milestones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-gradient-card border border-white/[0.08] hover:border-white/[0.16] shadow-card-subtle backdrop-blur-md flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-medium">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                  {item.issuer && (
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500">
                      {item.issuer}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {item.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-white/[0.06] flex justify-end">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded py-0.5"
                  >
                    <span>View GitHub Repositories</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
