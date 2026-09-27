import type { ComponentType, SVGProps } from 'react';

/** Structural shape shared by lucide-react and react-icons components. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface Project {
  title: string;
  category: 'Development' | 'Design';
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export interface DesignWork {
  title: string;
  description: string;
  image: string;
  images?: string[];
  tools: string[];
  category: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  image: string;
  skills?: string[];
  link?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface TechnicalSkill {
  name: string;
  icon: IconComponent;
  color: string;
}

export interface SoftSkill {
  name: string;
  icon: IconComponent;
}
