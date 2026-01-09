import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { name: "C++", level: 90, category: "programming" },
  { name: "Python", level: 85, category: "programming" },
  { name: "SQL", level: 80, category: "programming" },

  // Tools & Technologies
  { name: "Docker", level: 85, category: "tool" },
  { name: "AWS", level: 80, category: "tool" },
  { name: "Git", level: 90, category: "tool" },
  { name: "Atlassian (JIRA)", level: 85, category: "tool" },
  { name: "CI/CD Pipelines", level: 85, category: "tool" },

  // Project Management & Leadership
  { name: "Team Leadership", level: 95, category: "soft" },
  { name: "Performance Management", level: 93, category: "soft" },
  { name: "Agile/Scrum", level: 90, category: "soft" },
  { name: "Project Planning", level: 90, category: "soft" },
  { name: "Process Optimization", level: 85, category: "soft" },
  { name: "Hiring & Evaluation", level: 85, category: "soft" },
  { name: "Budget Management", level: 80, category: "soft" },

  // Domain Expertise
  { name: "DoD Systems", level: 90, category: "framework" },
  { name: "Cloud Infrastructure", level: 85, category: "framework" },
  { name: "High-Rate Data Processing", level: 85, category: "framework" },
  { name: "Software-Defined Radio", level: 80, category: "framework" },
  { name: "Hardware Integration", level: 80, category: "framework" },
  { name: "Enterprise Software", level: 85, category: "framework" }
]; 