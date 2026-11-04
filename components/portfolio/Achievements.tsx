import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function Achievements() {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="py-16 md:py-24 relative bg-background border-t border-rule w-full" aria-labelledby="achievements-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="mb-10 pb-6 border-b border-rule">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Recognition
          </span>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-content-primary tracking-tight"
          >
            Awards &amp; Professional Milestones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-rule hover:border-accent/40 shadow-soft-sm hover:shadow-soft-md flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-accent flex items-center gap-1.5">
                    <Calendar size={13} />
                    {item.date}
                  </span>
                  {item.issuer && (
                    <span className="text-xs uppercase tracking-wider text-content-secondary font-semibold">
                      {item.issuer}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-content-primary mb-2 tracking-tight">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>
                )}
              </div>

              {item.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-rule flex justify-end">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded py-0.5"
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
