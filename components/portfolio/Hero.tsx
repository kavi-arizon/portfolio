"use client";

import React from "react";
import { ArrowRight, Mail, FileText, Github, Linkedin, Award, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" aria-labelledby="hero-title">
      {/* Ambient background illumination */}
      <div className="absolute inset-0 grid-pattern-refined opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-radial-soft opacity-60 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Role & Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-850 border border-white/[0.08] text-xs text-slate-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-500" />
              </span>
              <span className="text-forest-400 font-medium">Associate Software Engineer (L1)</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Arizon Digital</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin size={11} className="text-slate-500" />
                Chennai, India
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
              >
                Kaviyarasu <span className="text-forest-400">C.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight leading-snug">
                Full Stack Software Engineer | React, Next.js &amp; Headless Commerce
              </p>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PROFILE.introHeadline} Experienced in delivering scalable e-commerce storefronts, reusable component architectures, and robust API integrations.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-2.5 font-medium">
                Production Stack &amp; Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.currentlyWorkingWith.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-charcoal-850 border border-white/[0.08] text-xs font-medium text-slate-200 hover:border-forest-500/40 hover:text-forest-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-medium text-sm transition-all shadow-sm hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              >
                <span>View Selected Work</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 border border-white/[0.08] hover:border-white/[0.18] text-slate-200 hover:text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              >
                <Mail size={16} className="text-forest-400" />
                <span>Get in Touch</span>
              </button>

              {PROFILE.resumeUrl && (
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/[0.08] text-slate-300 hover:text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
                  aria-label="Download Curriculum Vitae"
                >
                  <FileText size={16} className="text-forest-400" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Direct Profiles */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="font-medium text-slate-500">Profiles:</span>
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-forest-300 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                  <span>github.com/kavi-22</span>
                </a>
              )}
              <span className="text-slate-600">•</span>
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-forest-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                  <span>kaviyarasu-c-bsc</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Editorial Engineering Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="p-6 sm:p-7 rounded-2xl bg-charcoal-850 border border-white/[0.08] shadow-editorial-card space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">Engineering Focus</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Headless Storefronts &amp; Full-Stack Systems</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-forest-950/60 text-forest-300 border border-forest-500/30">
                  Active
                </span>
              </div>

              {/* Core Deliverables */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-charcoal-800 border border-white/[0.06] text-forest-400 shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Associate Software Engineer</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Engineering modern e-commerce storefronts with BigCommerce Catalyst, Makeswift CMS visual builder, and Next.js 15 at Arizon Digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-charcoal-800 border border-white/[0.06] text-amber-400 shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Rock Star Award (2026)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Recognized at Arizon Digital for high-impact ownership, consistent client delivery, and technical dependability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-charcoal-800 border border-white/[0.06] text-slate-300 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">B.Sc. in Computer Science</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Annamalai University · Graduated with First Class distinction (75%).
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Stats Row inside spotlight card */}
              <div className="pt-4 border-t border-white/[0.07] grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-charcoal-900/70 border border-white/[0.05]">
                  <div className="text-lg font-bold text-white">1+ Yr</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Experience</div>
                </div>
                <div className="p-2.5 rounded-xl bg-charcoal-900/70 border border-white/[0.05]">
                  <div className="text-lg font-bold text-white">3</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Shipped Apps</div>
                </div>
                <div className="p-2.5 rounded-xl bg-charcoal-900/70 border border-white/[0.05]">
                  <div className="text-lg font-bold text-white">15+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
