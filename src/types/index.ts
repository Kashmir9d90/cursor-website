export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  avatar: string;
  resumeUrl: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'programming' | 'framework' | 'tool' | 'soft';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  gpa?: string;
  relevantCoursework?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
} 