import React from "react";
import { FolderGit2, Code2, Briefcase, Award } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Stats() {
  if (!PROFILE.stats) return null;

  const highlights = [
    {
      title: "Production Storefronts & Apps",
      subtitle: "Weather Pro · Grade Calculator · Portfolio",
      icon: <FolderGit2 size={16} className="text-forest-400" />,
    },
    {
      title: "Modern Full-Stack Stack",
      subtitle: "Next.js 15, React 19, TypeScript, Catalyst",
      icon: <Code2 size={16} className="text-forest-400" />,
    },
    {
      title: "Arizon Digital Experience",
      subtitle: "Associate Software Engineer (L1) & Former Intern",
      icon: <Briefcase size={16} className="text-forest-400" />,
    },
    {
      title: "Rock Star Award (2026)",
      subtitle: "Recognized for ownership & client delivery",
      icon: <Award size={16} className="text-amber-400" />,
    },
  ];

  return (
    <section className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 mb-20" aria-label="Key Highlights">
      <div className="py-6 px-6 sm:px-8 rounded-2xl bg-charcoal-850/60 border border-white/[0.07] backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x divide-white/[0.07]">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3.5 ${index !== 0 ? "lg:pl-6" : ""}`}
            >
              <div className="p-2 rounded-lg bg-charcoal-800 border border-white/[0.06] shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white tracking-tight">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
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
