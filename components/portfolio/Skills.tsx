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
    { id: "tools", label: "Tooling", icon: Wrench },
    { id: "cloud", label: "Cloud & CI/CD", icon: Cloud },
  ];

  const filteredCategories: SkillCategory[] =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-white/60 border-y border-surface-border" aria-labelledby="skills-heading">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-surface-border gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
              Capabilities
            </span>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-bold text-ink tracking-tight"
            >
              Technical Stack &amp; Tooling
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary mt-2 max-w-2xl font-normal">
              Frameworks, languages, and modern tools applied daily across production storefronts and full-stack software.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white border border-surface-border shadow-soft-sm self-start md:self-auto"
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? "bg-accent text-white shadow-sm font-semibold"
                      : "text-ink-secondary hover:text-ink hover:bg-surface-muted/50"
                  }`}
                >
                  <Icon size={13} />
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
                  <span className="font-mono text-xs text-accent font-bold">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-ink tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs text-ink-muted">
                  {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              {category.description && (
                <p className="text-sm text-ink-secondary max-w-2xl font-normal">
                  {category.description}
                </p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {category.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-xl bg-white border border-surface-border hover:border-accent/40 hover:shadow-soft-md transition-all duration-200 relative"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-semibold text-sm text-ink group-hover:text-accent transition-colors">
                        {skill.name}
                      </h4>
                      {skill.highlight && (
                        <span
                          className="w-2 h-2 rounded-full bg-accent ring-2 ring-accent/20"
                          title="Core daily technology"
                          aria-label="Core technology"
                        />
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-ink-secondary leading-relaxed font-normal">
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
