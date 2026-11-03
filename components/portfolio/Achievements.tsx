import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function Achievements() {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="py-20 md:py-24 relative bg-charcoal-900 border-t border-white/[0.07]" aria-labelledby="achievements-heading">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="mb-10 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-semibold tracking-wider uppercase text-forest-400 mb-2 block">
            Recognition
          </span>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Awards &amp; Professional Milestones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-white/[0.16] shadow-editorial-card flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-forest-400 flex items-center gap-1.5">
                    <Calendar size={13} />
                    {item.date}
                  </span>
                  {item.issuer && (
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                      {item.issuer}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-400 hover:text-forest-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-forest-400 rounded py-0.5"
                  >
                    <span>View GitHub Repositories</span>
                    <ExternalLink size={13} />
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
