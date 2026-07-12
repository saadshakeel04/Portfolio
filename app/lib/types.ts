export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  category: string;
  featured: boolean;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  demoVideo?: string;
  features: string[];
  screenshots: string[];
  challenges?: string[]; 
  overview?: string;
}

export interface Experience {
  id: string;
  company: string;
  logo?: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  honors?: string;
  logo?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
