export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
}

export interface ProfileStats {
  yearsExperience?: string;
  projectsBuilt?: string;
  technologies?: string;
  currentRole?: string;
}

export interface Profile {
  name: string;
  role: string;
  headline?: string;
  introHeadline?: string;
  secondaryRole?: string;
  location: string;
  email: string;
  availability: "Available for opportunities" | "Open to select projects" | "Actively looking" | null;
  bio: string;
  summary: string;
  currentlyWorkingWith: string[];
  currentlyLearning: string[];
  lookingFor: string[];
  social: SocialLinks;
  resumeUrl: string | null;
  stats?: ProfileStats;
  avatarUrl?: string;
}

export interface SkillItem {
  name: string;
  category?: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  role?: string;
  category: "all" | "fullstack" | "frontend" | "react" | "tools" | "api";
  categoryLabel: string;
  tags: string[];
  technologies: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  v1GithubUrl?: string;
  v1LiveUrl?: string;
  v1Title?: string;
  v1Tech?: string[];
  featured: boolean;
  completionDate?: string;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType?: string;
  location?: string;
  period: string;
  description?: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  grade?: string;
  coursework?: string[];
  highlights?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer?: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  category: "certification" | "award" | "hackathon" | "milestone" | "course";
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}
