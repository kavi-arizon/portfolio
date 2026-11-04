"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, FileText, ArrowUpRight, Send, Sun, Moon } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS } from "@/data/social";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
          ? "bg-background/90 backdrop-blur-xl border-b border-rule py-3 shadow-soft-sm"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
          aria-label={`${PROFILE.name} - Back to top`}
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-rule group-hover:border-accent transition-colors duration-300 shadow-soft-sm">
            <span className="font-mono text-xs font-bold tracking-tight text-content-primary group-hover:text-accent transition-colors">
              {PROFILE.name.charAt(0)}
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-background" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-content-primary group-hover:text-accent transition-colors">
              {PROFILE.name}
            </span>
            <span className="text-[11px] text-content-secondary font-normal -mt-0.5 hidden xs:inline-block">
              Associate Software Engineer
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav
          className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-surface/90 border border-rule shadow-soft-sm backdrop-blur-md"
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
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-white bg-accent shadow-sm font-semibold"
                    : "text-content-secondary hover:text-content-primary hover:bg-surface-muted/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Desktop Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface hover:bg-surface-muted/70 border border-rule text-content-secondary hover:text-accent transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-soft-sm"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <Sun size={15} className="text-amber-400 transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon size={15} className="text-accent transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>

          {PROFILE.resumeUrl && (
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface hover:bg-surface-muted/70 border border-rule text-xs font-medium text-content-secondary hover:text-content-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-soft-sm"
              aria-label="View Resume (opens in new tab)"
            >
              <FileText size={13} className="text-accent" />
              <span>Resume</span>
              <ArrowUpRight size={11} className="text-content-muted" />
            </a>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent hover:bg-accent-hover text-white font-medium text-xs transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Let&apos;s Connect</span>
            <Send size={11} />
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface border border-rule text-content-secondary hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-soft-sm"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-accent" />
            )}
          </button>

          {PROFILE.resumeUrl && (
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface border border-rule text-[11px] font-medium text-content-primary shadow-soft-sm"
              aria-label="View Resume"
            >
              <FileText size={12} className="text-accent" />
              <span>Resume</span>
            </a>
          )}

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface border border-rule text-content-primary hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-soft-sm"
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
          className="fixed inset-0 top-[60px] z-40 bg-background/98 backdrop-blur-2xl border-t border-rule p-6 flex flex-col justify-between md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-1.5 py-2">
            <div className="flex items-center justify-between px-3 pb-2">
              <span className="text-[11px] tracking-wider uppercase text-content-secondary font-medium">
                Navigation
              </span>
              <span className="text-xs font-mono text-accent">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
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
                      ? "bg-accent text-white shadow-sm font-semibold"
                      : "text-content-primary hover:bg-surface-muted/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-rule space-y-3 pb-6">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface border border-rule text-content-primary font-medium text-sm shadow-soft-sm"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={15} className="text-amber-400" />
                  <span>Switch to Light Theme</span>
                </>
              ) : (
                <>
                  <Moon size={15} className="text-accent" />
                  <span>Switch to Dark Theme</span>
                </>
              )}
            </button>

            {PROFILE.resumeUrl && (
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface border border-rule text-content-primary font-medium text-sm shadow-soft-sm"
              >
                <FileText size={15} className="text-accent" />
                <span>Download Curriculum Vitae</span>
                <ArrowUpRight size={13} className="text-content-muted" />
              </a>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-colors shadow-sm"
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
