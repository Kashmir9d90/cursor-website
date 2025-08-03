import { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: "1",
    company: "Applied Research Labs - Space and Geophysics Lab, University of Texas – Austin",
    position: "Head of Software Engineering | Product Owner | Engineering Scientist",
    startDate: "2021-07",
    endDate: "2024-01",
    location: "Austin, TX",
    description: "Managed software engineering organization of ~70 engineers, with 6 personnel managers as direct reports in an organization supporting $30mil/year in contracts.",
    achievements: [
      "Managed software engineering organization of ~70 engineers, with 6 personnel managers as direct reports in an organization supporting $30mil/year in contracts",
      "Established process, standards, and best practices in a recently reorganized business unit",
      "Led hiring and personnel evaluation for the software development department",
      "As product owner, maintained project plan, schedule, and budget for a team of six engineers developing a software package successfully deployed to new monitoring installations across US territories",
      "Worked as a senior individual contributor designing and developing systems (primarily C++ and Python) for high-rate data processing and analysis on-hardware deployed at sites world-wide",
      "Developed systems migrating large-scale on-premise data storage and processing to run in secure cloud environments",
      "Software development and hardware integration for mission critical software-defined radio global navigation monitoring systems delivered to DoD Sponsors"
    ],
    technologies: ["C++", "Python", "Cloud Infrastructure", "Software-Defined Radio", "High-Rate Data Processing", "DoD Systems"]
  },
  {
    id: "2",
    company: "Composites for Infrastructure",
    position: "Senior Engineer, Technology Development and Production",
    startDate: "2017-01",
    endDate: "2020-12",
    location: "California and Texas",
    description: "Developed and improved technologies for a new approach to underground infrastructure repairs using advanced composite materials.",
    achievements: [
      "Developed and improved technologies for a new approach to underground infrastructure repairs using advanced composite materials",
      "Designed and built automation software (including integrated hardware controls), automated factory equipment, and custom-built productivity metrics tracking",
      "Took on various additional roles as needed in a small startup environment"
    ],
    technologies: ["Automation Software", "Hardware Controls", "Factory Equipment", "Productivity Metrics", "Composite Materials"]
  },
  {
    id: "3",
    company: "GT Nexus",
    position: "Full Stack Software Engineer",
    startDate: "2013-06",
    endDate: "2016-09",
    location: "California",
    description: "Front- and back- end development on an enterprise-scale multitenant shipping/transportation management product.",
    achievements: [
      "Front- and back- end development on an enterprise-scale multitenant shipping/transportation management product",
      "Development and performance tuning on a large-scale MS SQL server instance",
      "Coordinated QA activities with both local and remote (offshore) offices"
    ],
    technologies: ["Full Stack Development", "MS SQL Server", "Enterprise Software", "Multitenant Architecture", "Performance Tuning", "QA Coordination"]
  }
]; 