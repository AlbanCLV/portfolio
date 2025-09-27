export const projectsData = [
  {
    id: 1,
    title: "Breezy - Advanced Web Development Project",
    description: "A modern social network platform built with React and Node.js, featuring user authentication and real-time posts made by users.",
    technologies: ["React", "Node.js", "MongoDB", "CI/CD"],
    image: `${process.env.PUBLIC_URL}/assets/images/project-1.jpg`,
    demoUrl: "https://demo-social-network.com",
    githubUrl: `${process.env.PUBLIC_URL}/assets/documents/project-1-report.pdf`,
    featured: true
  },
  {
    id: 2,
    title: "Operational Research",
    description: "Scholar project focused on operational research techniques, including optimization models and decision analysis.",
    technologies: ["Math", "Optimization", "Python"],
    image: `${process.env.PUBLIC_URL}/assets/images/project-2.jpg`,
    demoUrl: null,
    githubUrl: "https://github.com/AlbanCLV/Recherche-Operationnelle",
    reportUrl: `${process.env.PUBLIC_URL}/assets/documents/project-2-report.pdf`,
    featured: true
  },
  {
    id: 3,
    title: "EasySave - Application Development project",
    description: "Backup software that automates file saving and synchronization tasks, ensuring data integrity and security across multiple devices.",
    technologies: ["C#", "WPF", "MVVM", "File Systems"],
    image: `${process.env.PUBLIC_URL}/assets/images/project-3.jpg`,
    githubUrl: "https://github.com/AlbanCLV/EasySave",
    reportUrl: `${process.env.PUBLIC_URL}/assets/documents/project-3-report.pdf`,
    featured: false
  },
  {
    id: 4,
    title: "Information System Security - Scholar Project",
    description: "A comprehensive study on information system security, focusing on risk management, security policies, and compliance with standards.",
    technologies: ["Active Directory", "Risk Management", "Security Policies", "Firewalls", "PowerShell"],
    image: `${process.env.PUBLIC_URL}/assets/images/project-4.jpg`,
    reportUrl: `${process.env.PUBLIC_URL}/assets/documents/project-4-report.pdf`,
    featured: false
  }
];

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript ES6+", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "SASS/SCSS", level: 90 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "REST API", level: 80 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 70 },
      { name: "Figma", level: 80 }
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    company: "Visiativ",
    position: "CISO Junior",
    period: "2024 - Present",
    description: "Implementation and management of information security policies, risk assessment, and cybersecurity measures to protect corporate data and infrastructure.",
    technologies: ["Cybersecurity", "Risk Management", "Security Policies", "ISO 27001"]
  },
  {
    id: 2,
    company: "Vizyon",
    position: "Network & Security Administrator",
    period: "2023 - 2024",
    description: "Administration and security of network infrastructure, monitoring security incidents, and maintaining firewall configurations and network security protocols.",
    technologies: ["Network Security", "Firewalls", "Monitoring", "Network Administration"]
  }
];

export const formationData = [
  {
    id: 1,
    school: "CESI Engineering School",
    degree: "Engineering Degree in Computer Science",
    period: "2024 - 2027",
    description: "Computer science engineering program in a large scale of subjects.",
    subjects: ["Networks", "Programming", "Project Management", "Cybersecurity"]
  },
  {
    id: 2,
    school: "IUT1 Grenoble",
    degree: "Network and Telecommunications BUT",
    period: "2021 - 2024",
    description: "Program of a large panel of skills in computer networks and telecommunications.",
    subjects: ["Systems", "Networks", "Telecommunications", "Security", "Cloud Computing"]
  },
  {
    id: 3,
    school: "Private High School Saint-Vincent de Paul",
    degree: "Numeric Systems Degree",
    period: "2018 - 2021",
    description: "Numeric Systems degree, computer science and communicating systems.",
    subjects: ["Mathematics", "Networks", "Programming", "Electronics"]
  }
];