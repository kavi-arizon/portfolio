"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS } from "@/data/social";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-rule pt-14 pb-10 overflow-hidden w-full" aria-label="Site Footer">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-rule w-full">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="inline-flex items-center gap-2.5 group" aria-label={`${PROFILE.name} - Back to top`}>
              <div className="w-8 h-8 rounded-lg bg-surface-muted border border-rule-subtle group-hover:border-accent flex items-center justify-center font-mono font-bold text-accent text-xs transition-colors shadow-soft-sm">
                {PROFILE.name.charAt(0)}
              </div>
              <span className="font-bold text-content-primary text-base tracking-tight">
                {PROFILE.name}
                <span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-sm sm:text-base text-content-secondary max-w-md leading-relaxed font-normal">
              {PROFILE.role} at Arizon Digital. Engineering scalable e-commerce storefronts, reusable component architectures, and reliable web interfaces.
            </p>
            {time && (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-content-secondary pt-1">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Chennai, IN: {time} (IST)</span>
              </div>
            )}
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs uppercase tracking-wider text-content-secondary font-semibold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-content-secondary hover:text-accent transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-content-secondary font-semibold block">
              Network &amp; Profiles
            </span>
            <div className="flex items-center gap-2">
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-background border border-rule text-content-primary hover:text-accent hover:border-accent/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent shadow-soft-sm"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
              )}
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-background border border-rule text-content-primary hover:text-accent hover:border-accent/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent shadow-soft-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {PROFILE.social.email && (
                <a
                  href={PROFILE.social.email}
                  className="p-2.5 rounded-lg bg-background border border-rule text-content-primary hover:text-accent hover:border-accent/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent shadow-soft-sm"
                  aria-label="Direct Email"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>

            {PROFILE.resumeUrl && (
              <div className="pt-1">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-content-secondary hover:text-accent font-medium transition-colors"
                >
                  <FileText size={13} className="text-accent" />
                  <span>Curriculum Vitae</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-content-secondary font-sans w-full">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} {PROFILE.name}. Built with Next.js 15, TypeScript &amp; Tailwind CSS.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-rule hover:border-accent/40 text-content-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent shadow-soft-sm"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
