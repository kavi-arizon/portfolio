import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "weather-pro",
    title: "Weather Pro",
    tagline: "Real-time meteorological web application with 5-day forecasting and responsive analytics",
    description: "An advanced real-time weather platform featuring geolocation detection, multi-day forecasting, responsive visualization cards, and climate-adaptive dark/light theming via the OpenWeather API.",
    longDescription: "Weather Pro provides clear meteorological information with sub-second response times. Built with modular component architecture, debounced location search, and defensive state handling for edge-case network conditions.",
    problem: "Many free weather websites are cluttered with intrusive ads, suffer from slow API waterfalls, and fail to provide clean, mobile-optimized visual summaries.",
    solution: "Engineered a responsive dashboard with debounced city search, geolocation auto-detection with fallback, 5-day predictive cards, and climate-reactive styling synchronized with live atmospheric conditions.",
    role: "Lead Frontend Engineer",
    category: "frontend",
    categoryLabel: "Frontend & API",
    tags: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "Geolocation"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "HTML5 Geolocation", "Lucide Icons"],
    features: [
      "Real-time temperature, humidity, wind velocity, and atmospheric pressure metrics",
      "5-day predictive forecasting with daily high/low temperatures",
      "Browser geolocation auto-detection with global city search fallback",
      "Dynamic background gradient engine reflecting live weather and daylight conditions",
      "Responsive layout optimized for mobile screens up to 4K displays"
    ],
    challenges: [
      "Handling asynchronous rate limits and network latency gracefully with clear user feedback",
      "Parsing nested JSON weather payloads with error boundaries for unlisted city queries"
    ],
    learnings: [
      "Implemented debounced input handlers to prevent unnecessary API invocations",
      "Strengthened defensive UI state management across loading, error, and empty states"
    ],
    liveUrl: "https://weather-pro-woad.vercel.app/",
    githubUrl: "https://github.com/kavi-22/Weather-Pro",
    v1Title: "Weather Dashboard (v1)",
    v1GithubUrl: "https://github.com/kavi-22/Weather-Dashboard",
    v1LiveUrl: "https://kavi-22.github.io/Weather-Dashboard/",
    v1Tech: ["HTML5", "CSS3", "JavaScript (ES6)", "OpenWeather API"],
    featured: true,
    completionDate: "2024",
  },
  {
    id: "grade-calculator-pro",
    title: "Grade Calculator Pro",
    tagline: "Dynamic GPA/CGPA computation engine with multi-subject evaluation and PDF export",
    description: "A precision academic computation tool supporting customizable grading scales, weighted credit calculations, real-time percentage analysis, and print/PDF export formatting.",
    longDescription: "Grade Calculator Pro simplifies academic grade analysis for students across different university grading schemes. Designed with reactive state updates, instant validation bounds (0–100), and clean table formatting.",
    problem: "Calculating complex cumulative GPAs across variable subject credits and diverse grading scales often results in manual mathematical errors and confusion.",
    solution: "Engineered a reactive computational engine providing instant recalculations upon subject entry, dynamic row management, validation boundaries, and clean export formatting.",
    role: "Frontend Developer",
    category: "tools",
    categoryLabel: "Web Utility / Engine",
    tags: ["React", "TypeScript", "Tailwind CSS", "Math Logic", "PDF Export"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "DOM APIs", "Print/PDF Engine"],
    features: [
      "Dynamic subject addition and deletion with instant weight and GPA recalculation",
      "Support for percentage-based scoring, 4.0/10.0 scales, and weighted credit calculations",
      "Visual performance indicators with real-time feedback thresholds",
      "Optimized print and PDF export formatting for academic records",
      "Local state preservation preventing accidental data loss during refreshes"
    ],
    challenges: [
      "Ensuring calculation updates render smoothly across dynamic form elements without latency",
      "Formatting responsive tables cleanly for standard printable page dimensions"
    ],
    learnings: [
      "Deepened understanding of mathematical state lifecycles and calculation memoization",
      "Implemented strict input validation and boundary checks for calculation precision"
    ],
    liveUrl: "https://grade-calculator-pro.vercel.app/",
    githubUrl: "https://github.com/kavi-22/Grade-Calculator-Pro",
    v1Title: "Grade Calculator Pro (v1)",
    v1GithubUrl: "https://github.com/kavi-22/grade-calculator-pro-v1",
    v1LiveUrl: "https://kavi-22.github.io/Academic-percentage-calculator-/",
    v1Tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
    featured: true,
    completionDate: "2024",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    tagline: "High-performance software engineer portfolio with dark aesthetic and serverless contact handling",
    description: "A responsive software engineering portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Resend API. Features modular configuration architecture, accessible modals, and verified case studies.",
    longDescription: "Engineered to reflect modern software engineering standards. Highlights clean TypeScript types, centralized data configuration, WCAG 2.2 AA accessibility, responsive layouts, and serverless email handling.",
    problem: "Static portfolio websites often duplicate content across files, fail on ultra-compact mobile screens, and rely on unreliable mailto links instead of server-handled contact dispatch.",
    solution: "Architected a modular system where all experience, skills, and projects are decoupled into typed configurations, with an accessible modal system and a serverless Resend contact route with spam protection.",
    role: "Full-Stack Engineer",
    category: "fullstack",
    categoryLabel: "Next.js & Serverless",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Resend API"],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Resend API"],
    features: [
      "Data-driven separation: profile, skills, projects, and career timeline decoupled from UI",
      "Accessible project modal with problem/solution breakdowns and version history",
      "Working Resend contact handler with rate limiting, server-side validation, and honeypot spam trap",
      "High-contrast dark design system with restrained emerald accents",
      "Tested responsiveness from 320px mobile to 1920px desktop viewports"
    ],
    challenges: [
      "Balancing clean visual design with lightweight performance and zero layout shifts",
      "Ensuring flawless responsive wrapping on compact 320px mobile viewports"
    ],
    learnings: [
      "Implemented WCAG 2.2 accessibility principles, keyboard focus trapping, and ARIA attributes",
      "Structured Next.js Server and Client components cleanly to minimize client JS footprint"
    ],
    liveUrl: "https://portfolio-hazel-gamma-94.vercel.app/",
    githubUrl: "https://github.com/kavi-22/portfolio",
    v1Title: "Portfolio (v1)",
    v1GithubUrl: "https://github.com/kavi-22/Portfolio-v1",
    v1Tech: ["HTML5", "CSS3"],
    featured: true,
    completionDate: "2024",
  },
];
