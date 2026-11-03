"use client";

import React, { useState } from "react";
import { Layers, Code2, ShoppingBag, Server, Database, Wrench, Cloud } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SkillCategory, SkillItem } from "@/types/portfolio";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "ecommerce", label: "E-Commerce & CMS", icon: ShoppingBag },
    { id: "backend", label: "Backend & APIs", icon: Server },
    { id: "databases", label: "Databases", icon: Database },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "cloud", label: "Cloud & CI/CD", icon: Cloud },
  ];

  const filteredCategories: SkillCategory[] =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-obsidian-950/60 border-y border-white/[0.08]" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2 font-medium">
              <span>[ 02 // TECHNICAL STACK ]</span>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Skills, Frameworks &amp; Tooling
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-white/[0.08] self-start md:self-auto"
            role="tablist"
            aria-label="Filter skills by technical domain"
          >
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isSelected
                      ? "bg-obsidian-800 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={12} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grouped Technical Inventory */}
        <div className="space-y-12">
          {filteredCategories.map((category, idx) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              {category.description && (
                <p className="text-xs text-slate-400 max-w-2xl">
                  {category.description}
                </p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className={`group p-4 rounded-xl bg-obsidian-900/70 border transition-all duration-200 relative ${
                      skill.highlight
                        ? "border-white/[0.08] hover:border-emerald-500/50 hover:bg-obsidian-850 hover:shadow-card-hover"
                        : "border-white/[0.05] hover:border-white/[0.12] hover:bg-obsidian-850/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      {skill.highlight && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20"
                          title="Core daily technology"
                          aria-label="Core technology"
                        />
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
