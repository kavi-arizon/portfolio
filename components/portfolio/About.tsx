import React from "react";
import { User, FileText, CheckCircle2, ArrowUpRight, GraduationCap, Award, MapPin, Building2 } from "lucide-react";
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
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-forest-400 mb-2 block">
              Overview
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Background &amp; Engineering Philosophy
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm text-left md:text-right">
            Associate Software Engineer (L1) at Arizon Digital
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                I am an <strong className="text-white font-medium">Associate Software Engineer (L1) at Arizon Digital</strong> based in Chennai, India. My journey began as a frontend engineering intern, where I quickly took ownership of production features and transitioned into a full-time engineering role.
              </p>
              <p>
                In my current work, I specialize in building high-performance headless e-commerce storefronts using <strong className="text-white font-medium">Next.js, React, TypeScript, BigCommerce Catalyst</strong>, and the <strong className="text-white font-medium">Makeswift CMS</strong> visual builder. I bridge the gap between composable commerce backends and snappy, accessible user interfaces.
              </p>
              <p>
                Beyond daily production delivery, I continuously deepen my full-stack capabilities—exploring advanced server actions, resilient edge API architectures, database design, and automated CI/CD workflows. In 2026, I was honored with the <strong className="text-white font-medium">Rock Star Award</strong> at Arizon Digital for consistent ownership and technical contribution.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-semibold text-white tracking-tight uppercase tracking-wider text-xs text-slate-400">
                Core Engineering Principles
              </h3>
              <div className="space-y-4">
                {principles.map((item) => (
                  <div
                    key={item.num}
                    className="p-5 rounded-xl bg-charcoal-850/70 border border-white/[0.07] hover:border-white/[0.14] transition-colors"
                  >
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-mono text-xs font-semibold text-forest-400">
                        {item.num}.
                      </span>
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile & Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-charcoal-850 border border-white/[0.08] shadow-editorial-card space-y-6">
              {/* Profile Monogram */}
              <div className="flex items-center gap-4 pb-5 border-b border-white/[0.07]">
                <div className="w-14 h-14 rounded-xl bg-charcoal-800 border border-forest-500/30 flex items-center justify-center font-mono font-bold text-forest-400 text-xl shadow-sm">
                  KC
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{PROFILE.name}</h3>
                  <p className="text-xs text-forest-400 font-medium">{PROFILE.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Arizon Digital · Chennai, India</p>
                </div>
              </div>

              {/* Verified Facts List */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start justify-between py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Building2 size={15} className="text-forest-400" />
                    Organization
                  </span>
                  <span className="text-slate-200 font-medium text-right">Arizon Digital</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Award size={15} className="text-amber-400" />
                    Recognition
                  </span>
                  <span className="text-amber-300 font-medium text-right">Rock Star Award (2026)</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap size={15} className="text-slate-400" />
                    Education
                  </span>
                  <span className="text-slate-200 font-medium text-right">B.Sc. CS · First Class (75%)</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin size={15} className="text-slate-400" />
                    Location
                  </span>
                  <span className="text-slate-200 font-medium text-right">Chennai, Tamil Nadu, India</span>
                </div>

                <div className="flex items-start justify-between py-1">
                  <span className="text-slate-400 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-forest-400" />
                    Availability
                  </span>
                  <span className="text-forest-300 font-medium text-right">{PROFILE.availability || "Open to Opportunities"}</span>
                </div>
              </div>

              {/* CV Action */}
              {PROFILE.resumeUrl && (
                <div className="pt-2">
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 border border-white/[0.08] hover:border-white/[0.18] text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
                  >
                    <FileText size={16} className="text-forest-400" />
                    <span>Download Curriculum Vitae</span>
                    <ArrowUpRight size={14} className="text-slate-400" />
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
