import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Component-driven web applications with modern state management, responsive styling, and accessible markup",
    skills: [
      { name: "Next.js", category: "frontend", description: "App Router, SSR, Server Components, API routes", highlight: true },
      { name: "React", category: "frontend", description: "Hooks, Context, modular component architecture", highlight: true },
      { name: "TypeScript", category: "frontend", description: "Strict type safety, generic interfaces, utility types", highlight: true },
      { name: "JavaScript (ES6+)", category: "frontend", description: "Modern syntax, async patterns, DOM manipulation", highlight: true },
      { name: "Tailwind CSS", category: "frontend", description: "Design systems, utility architecture, dark mode", highlight: true },
      { name: "HTML5 & Semantic Web", category: "frontend", description: "Accessible hierarchy (WCAG 2.2), SEO structure", highlight: true },
      { name: "CSS3 & Modern Layouts", category: "frontend", description: "Flexbox, CSS Grid, animations, media queries" },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Headless CMS",
    description: "Modern headless commerce architectures, composable storefronts, and content management systems",
    skills: [
      { name: "BigCommerce Catalyst", category: "ecommerce", description: "Composable storefront framework & Next.js integration", highlight: true },
      { name: "BigCommerce APIs", category: "ecommerce", description: "Storefront REST/GraphQL APIs, Cart & Checkout flows", highlight: true },
      { name: "Makeswift CMS", category: "ecommerce", description: "Visual builder integration for dynamic Next.js marketing pages", highlight: true },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Server-side integration, API endpoints, and data processing workflows",
    skills: [
      { name: "Node.js", category: "backend", description: "Server-side JavaScript runtimes, script automation, packages" },
      { name: "REST APIs", category: "backend", description: "Endpoint design, integration, status codes, payload validation", highlight: true },
      { name: "Serverless Route Handlers", category: "backend", description: "Next.js API routes, rate limiting, secure form handling", highlight: true },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Data persistence, schema design, and query management grounded in computer science coursework and projects",
    skills: [
      { name: "SQL / Relational DBs", category: "databases", description: "Relational queries, schema design, joins, foreign keys" },
      { name: "MongoDB", category: "databases", description: "Document-oriented schemas, collections, CRUD operations" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Platforms",
    description: "Version control, package management, API testing, and continuous delivery",
    skills: [
      { name: "Git & GitHub", category: "tools", description: "Branching strategies, PR reviews, code collaboration", highlight: true },
      { name: "Postman", category: "tools", description: "REST API testing, request debugging, environments", highlight: true },
      { name: "pnpm / npm", category: "tools", description: "Package management, dependency resolution, lockfiles" },
      { name: "VS Code", category: "tools", description: "Debugging, extensions, TypeScript and ESLint configuration" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description: "Platform deployment, hosting, and continuous deployment workflows",
    skills: [
      { name: "Vercel", category: "cloud", description: "Edge deployments, preview URLs, analytics, domain setup", highlight: true },
      { name: "CI / CD Basics", category: "cloud", description: "Automated build checks, GitHub Actions workflows" },
    ],
  },
];
