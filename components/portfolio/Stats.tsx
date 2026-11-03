import React from "react";
import { FolderGit2, Code2, Briefcase, Award } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Stats() {
  if (!PROFILE.stats) return null;

  const highlights = [
    {
      title: "Production Storefronts & Apps",
      subtitle: "Weather Pro · Grade Calculator · Portfolio",
      icon: <FolderGit2 size={16} className="text-accent" />,
    },
    {
      title: "Modern Full-Stack Stack",
      subtitle: "Next.js 15, React 19, TypeScript, Catalyst",
      icon: <Code2 size={16} className="text-accent" />,
    },
    {
      title: "Arizon Digital Experience",
      subtitle: "Associate Software Engineer (L1) & Former Intern",
      icon: <Briefcase size={16} className="text-accent" />,
    },
    {
      title: "Rock Star Award (2026)",
      subtitle: "Recognized for ownership & client delivery",
      icon: <Award size={16} className="text-amber-500" />,
    },
  ];

  return (
    <section className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 mb-16" aria-label="Key Highlights">
      <div className="py-6 px-6 sm:px-8 rounded-2xl bg-white border border-surface-border shadow-soft-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x divide-surface-border">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3.5 ${index !== 0 ? "lg:pl-6" : ""}`}
            >
              <div className="p-2 rounded-lg bg-surface-muted/60 border border-surface-border shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-semibold text-ink tracking-tight">
                  {item.title}
                </div>
                <div className="text-xs text-ink-secondary leading-relaxed font-normal">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
