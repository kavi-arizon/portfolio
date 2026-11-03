import React from "react";
import { User, FileText, Github, ArrowUpRight, CheckCircle2, Code2, Layers, Cpu } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function About() {
  const principles = [
    {
      num: "01",
      title: "Component Reusability & Type Safety",
      description: "Strict TypeScript interfaces and modular components that keep e-commerce codebases maintainable as catalogs and team sizes scale.",
    },
    {
      num: "02",
      title: "Headless Composable Architecture",
      description: "Decoupling frontend presentation from e-commerce backends via BigCommerce Catalyst and Makeswift CMS for fast rendering and flexible content updates.",
    },
    {
      num: "03",
      title: "Defensive API Integration & Accessibility",
      description: "Handling asynchronous network bounds gracefully with clear fallbacks, semantic HTML5, and WCAG 2.2 compliant keyboard interactions.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2 font-medium">
              <span>[ 01 // OVERVIEW ]</span>
            </div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Background, Specialization &amp; Engineering Philosophy
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-xs text-right hidden md:block">
            Associate Software Engineer (L1) @ Arizon Digital
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Spec Sheet & Profile Meta */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-card border border-white/[0.08] shadow-card-subtle backdrop-blur-md space-y-6">
              {/* Profile Monogram & Name */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-800 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-lg shadow-sm">
                    {PROFILE.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">{PROFILE.name}</h3>
                    <p className="text-xs font-mono text-emerald-400">{PROFILE.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/20">
                  Verified
                </span>
              </div>

              {/* Spec Sheet Table (Inspired by Inspo 'table' archetype) */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="font-mono text-slate-400 uppercase text-[10px] tracking-wider">Current Position</span>
                  <span className="text-slate-200 font-medium text-right">Associate SE (L1) · Arizon</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="font-mono text-slate-400 uppercase text-[10px] tracking-wider">Primary Stack</span>
                  <span className="text-slate-200 font-medium text-right">Next.js · React · Catalyst</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="font-mono text-slate-400 uppercase text-[10px] tracking-wider">Education</span>
                  <span className="text-slate-200 font-medium text-right">B.Sc. CS · First Class (75%)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="font-mono text-slate-400 uppercase text-[10px] tracking-wider">Honors</span>
                  <span className="text-emerald-300 font-medium text-right">Rock Star Award (2026)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="font-mono text-slate-400 uppercase text-[10px] tracking-wider">Location</span>
                  <span className="text-slate-200 font-medium text-right">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-mono text-slate-400 uppercase text-[10px] tracking-wider">Status</span>
                  <span className="text-emerald-400 font-medium text-right">{PROFILE.availability || "Open to Opportunities"}</span>
                </div>
              </div>

              {/* CV Action */}
              <div className="pt-2 flex items-center gap-2">
                {PROFILE.resumeUrl && (
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/[0.08] hover:border-white/[0.18] text-xs font-medium text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label="Download Curriculum Vitae"
                  >
                    <FileText size={14} className="text-emerald-400" />
                    <span>Download Curriculum Vitae</span>
                    <ArrowUpRight size={12} className="text-slate-400" />
                  </a>
                )}
                {PROFILE.social.github && (
                  <a
                    href={PROFILE.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Target Engineering Roles Box */}
            <div className="p-5 rounded-2xl bg-obsidian-950/70 border border-white/[0.07] space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-semibold block">
                Target Engineering Roles
              </span>
              <div className="space-y-2">
                {PROFILE.lookingFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Architecture Principles */}
          <div className="lg:col-span-7 space-y-6">
            {/* Core Narrative Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-card border border-white/[0.08] space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Building scalable web storefronts, maintainable component systems, and resilient software interfaces
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {PROFILE.summary}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                My day-to-day focus centers around building robust composable storefronts using Next.js 15 App Router, React 19, and the BigCommerce Catalyst framework. I work closely with visual content management through Makeswift CMS, designing dynamic landing pages that empower marketing teams while maintaining clean, maintainable engineering foundations.
              </p>
            </div>

            {/* Architecture Principles Stack */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-semibold block">
                Engineering Approach &amp; Focus Areas
              </span>
              <div className="space-y-2.5">
                {principles.map((p) => (
                  <div
                    key={p.num}
                    className="p-4 rounded-xl bg-obsidian-950/70 border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-start gap-4"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-400 mt-0.5 shrink-0">
                      [{p.num}]
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
