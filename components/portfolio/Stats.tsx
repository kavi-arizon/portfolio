import React from "react";
import { FolderGit2, Code2, Clock, Award } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Stats() {
  if (!PROFILE.stats) return null;

  const statItems = [
    {
      label: "Portfolio Applications",
      value: "3 Shipped Apps",
      detail: "Weather Pro · Grade Calc · Next.js Portfolio",
      icon: <FolderGit2 size={15} className="text-emerald-400" />,
    },
    {
      label: "Production Stack",
      value: "15+ Technologies",
      detail: "Next.js 15 · React 19 · TS · Catalyst · CMS",
      icon: <Code2 size={15} className="text-teal-400" />,
    },
    {
      label: "Professional Experience",
      value: "1+ Year Engineering",
      detail: "Associate SE (L1) & Former Intern @ Arizon",
      icon: <Clock size={15} className="text-emerald-400" />,
    },
    {
      label: "Verified Recognition",
      value: "Rock Star Award",
      detail: "Recognized for ownership & client delivery",
      icon: <Award size={15} className="text-amber-400" />,
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" aria-label="Key Qualifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2 rounded-2xl bg-obsidian-850/80 border border-white/[0.08] backdrop-blur-xl shadow-lg">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-4 rounded-xl bg-obsidian-950/60 border border-white/[0.05] hover:border-white/[0.12] transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                {item.label}
              </span>
              <div className="p-1.5 rounded-md bg-obsidian-800 border border-white/[0.06]">
                {item.icon}
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {item.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
