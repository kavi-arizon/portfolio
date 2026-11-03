import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Achievements from "@/components/portfolio/Achievements";
import CurrentlyLearning from "@/components/portfolio/CurrentlyLearning";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-charcoal-900 text-slate-100 selection:bg-forest-500/20 selection:text-forest-300">
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="relative flex-1">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <CurrentlyLearning />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
