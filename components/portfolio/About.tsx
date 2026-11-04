import React from "react";
import { FileText, ArrowUpRight, GraduationCap, Award, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function About() {
  const principles = [
    {
      num: "01",
      title: "Component Modularity & Strict Type Safety",
      description: "Architecting reusable, type-safe UI components with TypeScript generics and clean props interfaces that scale reliably across large e-commerce teams.",
    },
    {
      num: "02",
      title: "Headless Composable Commerce",
      description: "Decoupling frontend presentation from e-commerce backends via BigCommerce Catalyst and Makeswift CMS for rapid rendering, visual page building, and flexible content operations.",
    },
    {
      num: "03",
      title: "Defensive Engineering & Accessibility",
      description: "Prioritizing resilient error boundaries, graceful API fallbacks, semantic HTML5, and WCAG 2.2 compliant keyboard navigation for all users.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden w-full" aria-labelledby="about-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-rule gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
              Overview
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-content-primary tracking-tight"
            >
              Background &amp; Engineering Philosophy
            </h2>
          </div>
          <p className="text-sm sm:text-base text-content-secondary max-w-sm text-left md:text-right font-medium">
            Associate Software Engineer (L1) at Arizon Digital
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start w-full">
          {/* Left Column: Narrative & Principles */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg xl:text-xl text-content-secondary leading-relaxed font-normal max-w-4xl">
              <p>
                I am an <strong className="text-content-primary font-semibold">Associate Software Engineer (L1) at Arizon Digital</strong> based in Chennai, India. My journey began as a frontend engineering intern, where I quickly took ownership of production storefront features and transitioned into an engineering role.
              </p>
              <p>
                In my current work, I specialize in building high-performance headless e-commerce storefronts using <strong className="text-content-primary font-semibold">Next.js, React, TypeScript, BigCommerce Catalyst</strong>, and the <strong className="text-content-primary font-semibold">Makeswift CMS</strong> visual builder. I bridge the gap between composable commerce backends and snappy, accessible user interfaces.
              </p>
              <p>
                Beyond daily production delivery, I continuously deepen my full-stack capabilities—exploring advanced server actions, resilient edge API architectures, database design, and automated CI/CD workflows. In 2026, I was honored with the <strong className="text-content-primary font-semibold">Rock Star Award</strong> at Arizon Digital for consistent ownership and technical contribution.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                Core Engineering Principles
              </h3>
              <div className="space-y-3.5 max-w-4xl">
                {principles.map((item) => (
                  <div
                    key={item.num}
                    className="p-5 sm:p-6 rounded-xl bg-surface border border-rule hover:border-accent/40 shadow-soft-sm transition-all"
                  >
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-mono text-xs font-bold text-accent">
                        {item.num}.
                      </span>
                      <h4 className="text-base sm:text-lg font-semibold text-content-primary">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-content-secondary leading-relaxed pl-7 font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile & Facts */}
          <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-4 space-y-6 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-rule shadow-soft-md space-y-6">
              {/* Profile Monogram */}
              <div className="flex items-center gap-4 pb-5 border-b border-rule">
                <div className="w-14 h-14 rounded-xl bg-surface-muted border border-rule-subtle flex items-center justify-center font-mono font-bold text-accent text-xl shadow-sm">
                  KC
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-content-primary tracking-tight">{PROFILE.name}</h3>
                  <p className="text-xs sm:text-sm text-accent font-semibold">{PROFILE.role}</p>
                  <p className="text-xs text-content-secondary mt-0.5">Arizon Digital · Chennai, India</p>
                </div>
              </div>

              {/* Verified Facts List */}
              <div className="space-y-3.5 text-sm sm:text-base">
                <div className="flex items-start justify-between py-1.5 border-b border-rule-subtle">
                  <span className="text-content-secondary flex items-center gap-2">
                    <Building2 size={16} className="text-accent" />
                    Organization
                  </span>
                  <span className="text-content-primary font-semibold text-right">Arizon Digital</span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-rule-subtle">
                  <span className="text-content-secondary flex items-center gap-2">
                    <Award size={16} className="text-amber-400" />
                    Recognition
                  </span>
                  <span className="text-amber-400 font-semibold text-right">Rock Star Award (2026)</span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-rule-subtle">
                  <span className="text-content-secondary flex items-center gap-2">
                    <GraduationCap size={16} className="text-content-secondary" />
                    Education
                  </span>
                  <span className="text-content-primary font-semibold text-right">B.Sc. CS · First Class (75%)</span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-rule-subtle">
                  <span className="text-content-secondary flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    Location
                  </span>
                  <span className="text-content-primary font-medium text-right">Chennai, Tamil Nadu, India</span>
                </div>

                <div className="flex items-start justify-between py-1.5">
                  <span className="text-content-secondary flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    Availability
                  </span>
                  <span className="text-accent font-semibold text-right">{PROFILE.availability || "Open to Opportunities"}</span>
                </div>
              </div>

              {/* CV Action */}
              {PROFILE.resumeUrl && (
                <div className="pt-2">
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-background hover:bg-surface-muted border border-rule text-sm font-semibold text-content-primary hover:text-accent transition-all shadow-soft-sm"
                  >
                    <FileText size={16} className="text-accent" />
                    <span>Download Curriculum Vitae</span>
                    <ArrowUpRight size={14} className="text-content-muted" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
