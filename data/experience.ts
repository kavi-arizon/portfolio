import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-arizon-ase",
    role: "Associate Software Engineer (L1)",
    company: "Arizon Digital",
    employmentType: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    period: "Jan 2026 – Present",
    description: "Develop and optimize scalable e-commerce storefronts and web interfaces using Next.js, React, and the BigCommerce Catalyst framework, integrating real-time APIs and headless CMS workflows.",
    responsibilities: [
      "Develop and optimize scalable e-commerce storefronts using Next.js and the BigCommerce Catalyst framework.",
      "Build and maintain core commerce pages (Homepage, Product Listing Pages, Product Detail Pages, Cart) with REST and GraphQL API integrations.",
      "Integrate Makeswift CMS to enable content editors to build dynamic landing pages and marketing layouts efficiently.",
      "Collaborate with design and backend engineering teams to deliver production-ready features in an Agile environment.",
      "Maintain clean TypeScript typings, component reusability, and responsive layouts across all device form factors."
    ],
    achievements: [
      "Recognized with the 'Rock Star Award' for consistent performance, ownership, and impactful contributions to client platforms.",
      "Engineered responsive, reusable component systems with high lighthouse scores and fast page rendering."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "BigCommerce Catalyst",
      "Makeswift CMS",
      "REST APIs",
      "Git"
    ],
    current: true,
  },
  {
    id: "exp-arizon-intern",
    role: "Software Engineer Intern",
    company: "Arizon Digital",
    employmentType: "Internship",
    location: "Chennai, Tamil Nadu, India",
    period: "Jun 2025 – Dec 2025",
    description: "Completed intensive training in headless commerce and modern web frameworks, contributing to storefront rebuilds and legacy architecture migrations.",
    responsibilities: [
      "Completed intensive onboarding in BigCommerce Catalyst, Next.js, and Makeswift CMS, transitioning to active project delivery.",
      "Contributed to modernizing legacy e-commerce storefronts into mobile-first Next.js applications.",
      "Developed responsive, accessible UI components using React, TypeScript, and Tailwind CSS.",
      "Built content-driven page templates with Makeswift CMS for non-technical marketing teams."
    ],
    achievements: [
      "Successfully delivered key components for client storefront migrations from legacy architectures.",
      "Promoted to full-time Associate Software Engineer (L1) following proven reliability and quality of work."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "BigCommerce Catalyst",
      "Makeswift CMS",
      "HTML5",
      "CSS3",
      "Git"
    ],
    current: false,
  },
];
