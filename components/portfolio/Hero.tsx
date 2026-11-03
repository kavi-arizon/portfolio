"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, FileText, Github, Linkedin, CheckCircle2, ShoppingBag, Code2, Server } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"storefronts" | "components" | "apis">("storefronts");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capabilities = {
    storefronts: {
      title: "Headless E-Commerce Storefronts",
      badge: "BigCommerce Catalyst & Next.js",
      description: "Engineering composable commerce experiences migrating legacy architectures into high-performance, mobile-first web storefronts.",
      metrics: [
        { label: "Core Pages", value: "Home, PLP, PDP, Cart" },
        { label: "Content Control", value: "Makeswift CMS Visuals" },
        { label: "Data Layer", value: "Real-Time GraphQL & REST" },
      ],
      tags: ["Next.js 15", "React 19", "BigCommerce Catalyst", "Makeswift CMS"],
    },
    components: {
      title: "Design Systems & Component Architecture",
      badge: "Type-Safe & Scalable",
      description: "Architecting modular, accessible UI systems using strict TypeScript generics, consistent spacing tokens, and clean separation of concerns.",
      metrics: [
        { label: "Accessibility", value: "WCAG 2.2 Standards" },
        { label: "Styling", value: "Tailwind CSS Utility Scale" },
        { label: "Type Safety", value: "Strict Interfaces & Schemas" },
      ],
      tags: ["TypeScript 5", "Tailwind CSS", "Semantic HTML5", "Framer Motion"],
    },
    apis: {
      title: "Serverless Route Handlers & APIs",
      badge: "Production Feature Delivery",
      description: "Developing resilient server-side endpoints, edge runtime operations, rate limiting, and defensive data validation for modern applications.",
      metrics: [
        { label: "Delivery", value: "Resend Email Handler" },
        { label: "Security", value: "Honeypot & Rate Limiting" },
        { label: "Integrations", value: "Third-Party REST Services" },
      ],
      tags: ["Next.js Route Handlers", "Node.js", "Resend API", "REST Protocols"],
    },
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" aria-labelledby="hero-title">
      {/* Ambient subtle glow and grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-radial-top opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-obsidian-850 border border-white/[0.08] text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-medium">Associate Software Engineer (L1)</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Arizon Digital</span>
            </div>

            {/* Name & Primary Headline */}
            <div className="space-y-3">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Kaviyarasu <span className="text-gradient">C.</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-tight leading-snug">
                Full Stack Software Engineer | React, Next.js &amp; Headless Commerce
              </p>
            </div>

            {/* Introductory Statement */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {PROFILE.introHeadline} Experienced in delivering scalable e-commerce storefronts, reusable component architectures, and robust API integrations.
            </p>

            {/* Stack Micro-Badges */}
            <div className="pt-1">
              <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-2 font-medium">
                Primary Engineering Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PROFILE.currentlyWorkingWith.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-obsidian-850 border border-white/[0.08] text-xs font-mono text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-emerald-glow hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span>View Selected Work</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-700 border border-white/[0.08] hover:border-white/[0.18] text-slate-200 hover:text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Mail size={15} className="text-emerald-400" />
                <span>Get in Touch</span>
              </button>

              {PROFILE.resumeUrl && (
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-obsidian-850 hover:bg-obsidian-750 border border-white/[0.08] text-slate-300 hover:text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-label="Download Curriculum Vitae"
                >
                  <FileText size={15} className="text-emerald-400" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Verified Profile Links */}
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-500 font-mono">
              <span>Verified profiles:</span>
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={14} />
                  <span>github.com/kavi-22</span>
                </a>
              )}
              <span className="text-slate-700">•</span>
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={14} />
                  <span>kaviyarasu-c-bsc</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Architecture Console */}
          <div className="lg:col-span-5 w-full">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-card border border-white/[0.09] shadow-card-subtle backdrop-blur-xl space-y-5">
              {/* Console Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono tracking-wider uppercase text-slate-300 font-semibold">
                    Core Specializations
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Chennai, IN · UTC+5:30
                </span>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-obsidian-950 border border-white/[0.06]" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "storefronts"}
                  onClick={() => setActiveTab("storefronts")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono transition-colors ${
                    activeTab === "storefronts"
                      ? "bg-obsidian-800 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <ShoppingBag size={12} />
                  <span className="truncate">Storefronts</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "components"}
                  onClick={() => setActiveTab("components")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono transition-colors ${
                    activeTab === "components"
                      ? "bg-obsidian-800 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Code2 size={12} />
                  <span className="truncate">UI System</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "apis"}
                  onClick={() => setActiveTab("apis")}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono transition-colors ${
                    activeTab === "apis"
                      ? "bg-obsidian-800 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Server size={12} />
                  <span className="truncate">APIs</span>
                </button>
              </div>

              {/* Active Tab Content Display */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      {capabilities[activeTab].badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      [ SPEC_0{activeTab === "storefronts" ? "1" : activeTab === "components" ? "2" : "3"} ]
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {capabilities[activeTab].title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {capabilities[activeTab].description}
                  </p>
                </div>

                {/* Metrics Spec Sheet */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {capabilities[activeTab].metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-obsidian-950/70 border border-white/[0.06]">
                      <div className="text-[10px] font-mono uppercase text-slate-400 truncate">
                        {m.label}
                      </div>
                      <div className="text-xs font-medium text-slate-200 truncate mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {capabilities[activeTab].tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-obsidian-900 border border-white/[0.06] text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Accolade Banner */}
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Rock Star Award Recipient</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400">Arizon Digital · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
