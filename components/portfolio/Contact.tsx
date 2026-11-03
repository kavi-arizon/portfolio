import React from "react";
import { Mail, Github, Linkedin, Clock, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-forest-400 mb-2 block">
              Contact
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Get in Touch &amp; Start a Conversation
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm text-left md:text-right font-medium">
            Chennai, India · Open to Opportunities
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Communication Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            {PROFILE.email && (
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-forest-500/40 transition-all shadow-editorial-card focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              >
                <div className="p-3 rounded-xl bg-charcoal-800 border border-white/[0.08] text-forest-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Direct Email
                  </div>
                  <div className="text-base font-semibold text-white group-hover:text-forest-300 transition-colors truncate mt-1">
                    {PROFILE.email}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Fastest response for inquiries &amp; opportunities
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-forest-300 transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* GitHub Card */}
            {PROFILE.social.github && (
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-forest-500/40 transition-all shadow-editorial-card focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              >
                <div className="p-3 rounded-xl bg-charcoal-800 border border-white/[0.08] text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                  <Github size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    GitHub Profile
                  </div>
                  <div className="text-base font-semibold text-white group-hover:text-forest-300 transition-colors truncate mt-1">
                    {PROFILE.social.github.replace("https://", "")}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Source repositories &amp; open-source projects
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-forest-300 transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* LinkedIn Card */}
            {PROFILE.social.linkedin && (
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-charcoal-850 border border-white/[0.08] hover:border-forest-500/40 transition-all shadow-editorial-card focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              >
                <div className="p-3 rounded-xl bg-charcoal-800 border border-white/[0.08] text-forest-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    LinkedIn Network
                  </div>
                  <div className="text-base font-semibold text-white group-hover:text-forest-300 transition-colors truncate mt-1">
                    Professional Profile
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Career background &amp; professional updates
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-forest-300 transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* Response Time Notice */}
            <div className="p-4 rounded-xl bg-charcoal-900 border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <Clock size={16} className="text-forest-400 shrink-0" />
              <span>Standard response time is within <strong className="text-slate-200">24 business hours</strong>.</span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
