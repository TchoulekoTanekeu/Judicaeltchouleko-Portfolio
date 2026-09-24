export type ProjectCategory = 'all' | 'metallurgy' | 'fullstack' | 'cad-hardware' | 'ventures';

export interface DesignSection {
  title: string;
  subtitle?: string;
  narrative: string;
  points?: string[];
  image?: string;
  imageCaption?: string;
  calloutBox?: {
    label: string;
    text: string;
  };
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'metallurgy' | 'fullstack' | 'cad-hardware' | 'ventures';
  leadText: string;
  fullDescription: string;
  image: string;
  galleryImages?: { url: string; caption: string }[];
  tags: string[];
  metrics: { label: string; value: string }[];
  engineeringSpecs: {
    material?: string;
    cadSoftware?: string;
    analysisMethod?: string;
    operatingParams?: string;
    codeStack?: string;
  };
  designSections?: DesignSection[];
  keyFeatures: string[];
  resultsAndImpact: string;
  demoUrl?: string;
}

export type SkillLevel = 'Introduced' | 'Proficient' | 'Expert';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  percentage: number; // 0 to 100 for visual slider
  context: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  period: string;
  institution: string;
  location: string;
  degree: string;
  gpa?: string;
  logoBadge?: string;
  coursework?: string[];
  involvement?: {
    role: string;
    details: string[];
  }[];
  honors?: string[];
}

export interface ExperienceEntry {
  period: string;
  company: string;
  location: string;
  role: string;
  logoBadge?: string;
  bullets: string[];
  technologiesUsed?: string[];
}

export interface VentureItem {
  name: string;
  tagline: string;
  stage: string;
  description: string;
  metrics: string;
  iconName: string;
}
