import React from "react";
import { Mail, Github, Linkedin, Clock, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden w-full" aria-labelledby="contact-heading">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-surface-border gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
              Contact
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ink tracking-tight"
            >
              Get in Touch &amp; Start a Conversation
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-sm text-left md:text-right font-medium">
            Chennai, India · Open to Opportunities
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start w-full">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4 w-full">
            {/* Direct Email Card */}
            {PROFILE.email && (
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-start gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-surface-border hover:border-accent/40 transition-all shadow-soft-sm hover:shadow-soft-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-secondary font-semibold">
                    Direct Email
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-ink group-hover:text-accent transition-colors truncate mt-1">
                    {PROFILE.email}
                  </div>
                  <div className="text-xs sm:text-sm text-ink-secondary mt-0.5 font-normal">
                    Fastest response for inquiries &amp; opportunities
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-accent transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* GitHub Card */}
            {PROFILE.social.github && (
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-surface-border hover:border-accent/40 transition-all shadow-soft-sm hover:shadow-soft-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border text-ink shrink-0 group-hover:scale-105 transition-transform">
                  <Github size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-secondary font-semibold">
                    GitHub Profile
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-ink group-hover:text-accent transition-colors truncate mt-1">
                    {PROFILE.social.github.replace("https://", "")}
                  </div>
                  <div className="text-xs sm:text-sm text-ink-secondary mt-0.5 font-normal">
                    Source repositories &amp; open-source projects
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-accent transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* LinkedIn Card */}
            {PROFILE.social.linkedin && (
              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-surface-border hover:border-accent/40 transition-all shadow-soft-sm hover:shadow-soft-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-ink-secondary font-semibold">
                    LinkedIn Network
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-ink group-hover:text-accent transition-colors truncate mt-1">
                    Professional Profile
                  </div>
                  <div className="text-xs sm:text-sm text-ink-secondary mt-0.5 font-normal">
                    Career background &amp; professional updates
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-accent transition-colors shrink-0 mt-1" />
              </a>
            )}

            {/* Response Time Notice */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-muted/40 border border-surface-border flex items-center gap-3 text-xs sm:text-sm text-ink-secondary">
              <Clock size={18} className="text-accent shrink-0" />
              <span>Standard response time is within <strong className="text-ink font-semibold">24 business hours</strong>.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 xl:col-span-8 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
