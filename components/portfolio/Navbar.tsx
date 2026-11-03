"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, FileText, ArrowUpRight, Send } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS } from "@/data/social";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-900/90 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-xl shadow-black/20"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 rounded-lg p-1"
          aria-label={`${PROFILE.name} - Back to top`}
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-charcoal-800 border border-white/[0.1] group-hover:border-forest-500/50 transition-colors duration-300 shadow-sm">
            <span className="font-mono text-xs font-bold tracking-tight text-white group-hover:text-forest-400 transition-colors">
              {PROFILE.name.charAt(0)}
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-forest-500 ring-2 ring-charcoal-900" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-forest-300 transition-colors">
              {PROFILE.name}
            </span>
            <span className="text-[11px] text-slate-400 font-normal -mt-0.5 hidden xs:inline-block">
              Associate Software Engineer
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav
          className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-charcoal-850/90 border border-white/[0.08] backdrop-blur-lg shadow-sm"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 ${
                  isActive
                    ? "text-forest-300 bg-forest-950/60 border border-forest-500/30 shadow-sm font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {PROFILE.resumeUrl && (
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-800 hover:bg-charcoal-750 border border-white/[0.08] hover:border-white/[0.16] text-xs font-medium text-slate-300 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
              aria-label="View Resume (opens in new tab)"
            >
              <FileText size={13} className="text-forest-400" />
              <span>Resume</span>
              <ArrowUpRight size={11} className="text-slate-500" />
            </a>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-forest-600 hover:bg-forest-500 text-white font-medium text-xs transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
          >
            <span>Let&apos;s Connect</span>
            <Send size={11} />
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-2">
          {PROFILE.resumeUrl && (
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-charcoal-800 border border-white/[0.08] text-[11px] font-medium text-slate-300"
              aria-label="View Resume"
            >
              <FileText size={12} className="text-forest-400" />
              <span>Resume</span>
            </a>
          )}

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-charcoal-850 border border-white/[0.1] text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          ref={mobileMenuRef}
          className="fixed inset-0 top-[60px] z-40 bg-charcoal-950/98 backdrop-blur-2xl border-t border-white/[0.08] p-6 flex flex-col justify-between md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-1.5 py-2">
            <div className="text-[11px] tracking-wider uppercase text-slate-500 px-3 pb-2 font-medium">
              Navigation
            </div>
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-forest-950/50 text-forest-300 border border-forest-500/30"
                      : "text-slate-300 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-3 pb-6">
            {PROFILE.resumeUrl && (
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-800 border border-white/[0.08] text-slate-200 font-medium text-sm"
              >
                <FileText size={15} className="text-forest-400" />
                <span>Download Curriculum Vitae</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </a>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <Send size={15} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
