import React from "react";
import { FolderGit2, Code2, Briefcase, Award } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Stats() {
  if (!PROFILE.stats) return null;

  const highlights = [
    {
      title: "Production Storefronts & Apps",
      subtitle: "Weather Pro · Grade Calculator · Portfolio",
      icon: <FolderGit2 size={18} className="text-accent" />,
    },
    {
      title: "Modern Full-Stack Stack",
      subtitle: "Next.js 15, React 19, TypeScript, Catalyst",
      icon: <Code2 size={18} className="text-accent" />,
    },
    {
      title: "Arizon Digital Experience",
      subtitle: "Associate Software Engineer (L1) & Former Intern",
      icon: <Briefcase size={18} className="text-accent" />,
    },
    {
      title: "Rock Star Award (2026)",
      subtitle: "Recognized for ownership & client delivery",
      icon: <Award size={18} className="text-amber-400" />,
    },
  ];

  return (
    <section className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 mb-16" aria-label="Key Highlights">
      <div className="w-full py-6 px-6 sm:px-8 lg:px-10 rounded-2xl bg-surface border border-rule shadow-soft-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x divide-rule">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${index !== 0 ? "lg:pl-6 xl:pl-8" : ""}`}
            >
              <div className="p-2.5 rounded-lg bg-surface-muted border border-rule-subtle shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <div className="text-sm sm:text-base font-semibold text-content-primary tracking-tight">
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
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
