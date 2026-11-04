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
    <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden w-full" aria-labelledby="hero-title">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center w-full">
          {/* Main Editorial Narrative */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-8 space-y-6">
            {/* Live Role & Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-rule text-xs text-content-primary shadow-soft-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-accent font-semibold">Associate Software Engineer (L1)</span>
              <span className="text-rule">|</span>
              <span className="text-content-primary font-medium">Arizon Digital</span>
              <span className="text-rule">|</span>
              <span className="text-content-secondary flex items-center gap-1">
                <MapPin size={12} className="text-accent" />
                Chennai, India
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3.5">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content-primary leading-[1.08]"
              >
                Kaviyarasu <span className="text-accent">C.</span>
              </h1>
              <p className="text-xl sm:text-2xl xl:text-3xl font-semibold text-content-primary tracking-tight leading-snug">
                Full Stack Software Engineer | React, Next.js &amp; Headless Commerce
              </p>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg xl:text-xl text-content-secondary leading-relaxed max-w-3xl font-normal">
              {PROFILE.introHeadline} Experienced in delivering scalable e-commerce storefronts, reusable component architectures, and robust API integrations.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="pt-1">
              <div className="text-xs uppercase tracking-wider text-content-secondary mb-2.5 font-semibold">
                Production Stack &amp; Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.currentlyWorkingWith.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-surface border border-rule text-xs sm:text-sm font-medium text-content-primary hover:border-accent hover:text-accent shadow-soft-sm transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all shadow-sm hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>View Selected Work</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface hover:bg-surface-muted/60 border border-rule text-content-primary font-medium text-sm transition-all shadow-soft-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail size={16} className="text-accent" />
                <span>Get in Touch</span>
              </button>

              {PROFILE.resumeUrl && (
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface hover:bg-surface-muted/60 border border-rule text-content-secondary hover:text-content-primary font-medium text-sm transition-all shadow-soft-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Download Curriculum Vitae"
                >
                  <FileText size={16} className="text-accent" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Direct Profiles */}
            <div className="flex items-center gap-4 pt-1 text-xs sm:text-sm text-content-secondary">
              <span className="font-medium text-content-secondary">Verified Profiles:</span>
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-content-primary hover:text-accent transition-colors font-medium"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                  <span>github.com/kavi-22</span>
                </a>
              )}
              <span className="text-rule">•</span>
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-content-primary hover:text-accent transition-colors font-medium"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                  <span>kaviyarasu-c-bsc</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Editorial Engineering Spotlight Card */}
          <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-4 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-rule shadow-soft-md space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-rule">
                <div>
                  <h3 className="text-base font-bold text-content-primary tracking-tight">Engineering Focus</h3>
                  <p className="text-xs text-content-secondary mt-0.5">Headless Storefronts &amp; Full-Stack Systems</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                  Arizon Digital
                </span>
              </div>

              {/* Core Deliverables */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-muted border border-rule-subtle text-accent shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-content-primary">Associate Software Engineer (L1)</h4>
                    <p className="text-xs sm:text-sm text-content-secondary mt-1 leading-relaxed font-normal">
                      Engineering modern e-commerce storefronts with BigCommerce Catalyst, Makeswift CMS visual builder, and Next.js 15.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-muted border border-rule-subtle text-amber-400 shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-content-primary">Rock Star Award (2026)</h4>
                    <p className="text-xs sm:text-sm text-content-secondary mt-1 leading-relaxed font-normal">
                      Recognized at Arizon Digital for high-impact ownership, consistent client delivery, and technical dependability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-muted border border-rule-subtle text-accent shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-content-primary">B.Sc. in Computer Science</h4>
                    <p className="text-xs sm:text-sm text-content-secondary mt-1 leading-relaxed font-normal">
                      Annamalai University · Graduated with First Class distinction (75%).
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Stats Row inside spotlight card */}
              <div className="pt-4 border-t border-rule grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-background border border-rule">
                  <div className="text-lg sm:text-xl font-bold text-content-primary">1+ Yr</div>
                  <div className="text-[11px] text-content-secondary mt-0.5">Experience</div>
                </div>
                <div className="p-3 rounded-xl bg-background border border-rule">
                  <div className="text-lg sm:text-xl font-bold text-content-primary">3</div>
                  <div className="text-[11px] text-content-secondary mt-0.5">Shipped Apps</div>
                </div>
                <div className="p-3 rounded-xl bg-background border border-rule">
                  <div className="text-lg sm:text-xl font-bold text-content-primary">15+</div>
                  <div className="text-[11px] text-content-secondary mt-0.5">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
