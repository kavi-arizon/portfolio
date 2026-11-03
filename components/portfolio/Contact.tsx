import React from "react";
import { Mail, Github, Linkedin, MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2 font-medium">
              <span>[ 07 // INQUIRIES ]</span>
            </div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Get in Touch &amp; Start a Conversation
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-xs text-right hidden md:block">
            Chennai, India · Open to Opportunities
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            {PROFILE.email && (
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-white/[0.08] hover:border-emerald-500/40 transition-all shadow-card-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="p-3 rounded-xl bg-obsidian-800 border border-white/[0.08] text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate mt-0.5">
                    {PROFILE.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Fastest response for inquiries &amp; opportunities
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-slate-500 group-hover:text-emerald-300 transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* GitHub Card */}
            {PROFILE.social.github && (
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-white/[0.08] hover:border-emerald-500/40 transition-all shadow-card-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="p-3 rounded-xl bg-obsidian-800 border border-white/[0.08] text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                  <Github size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    GitHub Profile
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate mt-0.5">
                    {PROFILE.social.github.replace("https://", "")}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Source repositories &amp; open-source projects
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-slate-500 group-hover:text-emerald-300 transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* LinkedIn Card */}
            {PROFILE.social.linkedin && (
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-white/[0.08] hover:border-emerald-500/40 transition-all shadow-card-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="p-3 rounded-xl bg-obsidian-800 border border-white/[0.08] text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    LinkedIn Network
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate mt-0.5">
                    Professional Profile
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Career background &amp; professional recommendations
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-slate-500 group-hover:text-emerald-300 transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* Response Time Badge */}
            <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/[0.06] flex items-center gap-2.5 text-xs text-slate-400">
              <Clock size={15} className="text-emerald-400 shrink-0" />
              <span>Standard response time is within <strong>24 business hours</strong>.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
