import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "Global Navigation Monitoring System",
    description: "Mission critical software-defined radio system for DoD global navigation monitoring. Designed and developed high-rate data processing systems deployed at sites worldwide, with secure cloud migration for large-scale data storage and processing.",
    image: "/projects/gnss-monitoring.jpg",
    technologies: ["C++", "Python", "Software-Defined Radio", "Cloud Infrastructure", "High-Rate Data Processing", "DoD Systems"],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true
  },
  {
    id: "2",
    title: "Engineering Organization Management Platform",
    description: "Led development of comprehensive process, standards, and best practices for a 70-person engineering organization supporting $30M/year in contracts. Implemented hiring and evaluation systems, project planning tools, and budget management processes.",
    image: "/projects/engineering-management.jpg",
    technologies: ["Process Optimization", "Team Leadership", "Project Management", "Budget Management", "Hiring Systems"],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true
  },
  {
    id: "3",
    title: "Infrastructure Repair Automation System",
    description: "Developed automation software with integrated hardware controls for underground infrastructure repairs using advanced composite materials. Built custom productivity metrics tracking and automated factory equipment for a startup environment.",
    image: "/projects/infrastructure-automation.jpg",
    technologies: ["Automation Software", "Hardware Controls", "Factory Equipment", "Productivity Metrics", "Composite Materials"],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false
  },
  {
    id: "4",
    title: "Enterprise Transportation Management Platform",
    description: "Full-stack development on enterprise-scale multitenant shipping/transportation management product. Performance tuning on large-scale MS SQL server instance and coordination of QA activities with local and offshore teams.",
    image: "/projects/transportation-platform.jpg",
    technologies: ["Full Stack Development", "MS SQL Server", "Enterprise Software", "Multitenant Architecture", "Performance Tuning"],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false
  },
  {
    id: "5",
    title: "Cloud Migration & Data Processing Pipeline",
    description: "Developed systems migrating large-scale on-premise data storage and processing to secure cloud environments. Designed high-rate data processing and analysis systems for hardware deployed at sites worldwide.",
    image: "/projects/cloud-migration.jpg",
    technologies: ["Cloud Infrastructure", "Data Processing", "Migration Systems", "Security", "High-Rate Processing"],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false
  },
  {
    id: "6",
    title: "Brain-Computer Interface Security Research",
    description: "Authored research paper on the security implications of brain-computer interfaces during undergraduate studies at UC Berkeley. Combined electrical engineering and computer science principles for innovative security analysis.",
    image: "/projects/bci-security.jpg",
    technologies: ["Research", "Security Analysis", "Brain-Computer Interfaces", "Electrical Engineering", "Computer Science"],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false
  }
]; 