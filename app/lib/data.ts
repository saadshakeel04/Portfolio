import type { Project, Experience, Education, SkillCategory, SocialLink, NavItem } from './types';

export const personalInfo = {
  name: 'Saad Shakeel',
  title: 'Full Stack Software Engineer',
  tagline: 'Building responsive, scalable web applications with clean code and powerful engineering.',
  email: 'ultrasaad04@gmail.com',
  location: 'Islamabad, Pakistan',
  github: 'https://github.com/saadshakeel04',
  linkedin: 'https://www.linkedin.com/in/saad-shakeel-419063259/',
  twitter: '', // Add your Twitter profile handle here if desired
  resume: '/resume.pdf',
  photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800', // Feel free to update with your personal image path
  bio: "I'm a Full Stack Software Engineer with hands-on experience building responsive and scalable web applications. I specialize in React.js, Next.js, and Node.js, with a passion for optimizing performance and creating seamless user experiences.",
  about: [
    "My journey into software engineering focuses on writing clean, maintainable, and efficient code. I enjoy building reusable components, integrating robust APIs, and optimizing system reliability across the entire development lifecycle.",
    "Today, I work actively across Frontend and Full Stack ecosystems—collaborating in Agile workflows, translating product requirements into high-performance web applications, and resolving complex architectural challenges.",
    "When I'm not writing code, I explore AI architectures, set up automation pipelines, practice software requirements mapping, or keep up with mobile ecosystem innovations."
  ],
  interests: ['Frontend Architecture', 'AI & Machine Learning Integration', 'DevOps & CI/CD', 'Mobile App Development', 'System Optimization'],
  stats: [
    { label: 'Projects Built', value: 6 },
    { label: 'Months Experience', value: 14 },
    { label: 'API Integrations', value: 12 },
    { label: 'Core Technical Skills', value: 15 },
  ],
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/saadshakeel04', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saad-shakeel-419063259/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:ultrasaad04@gmail.com', icon: 'Mail' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: 'Monitor',
    color: '#06b6d4',
    skills: [
      { name: 'React.js', level: 93 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Tailwind CSS / CSS3', level: 95 },
      { name: 'HTML5', level: 95 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    icon: 'Server',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js / Fastify', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Firebase', level: 82 },
      { name: 'Supabase', level: 80 },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    icon: 'Smartphone',
    color: '#10b981',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Expo Router', level: 78 },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    color: '#f59e0b',
    skills: [
      { name: 'PostgreSQL', level: 83 },
      { name: 'MySQL / SQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: 'Code2',
    color: '#ef4444',
    skills: [
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 78 },
      { name: 'C# / C++', level: 75 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools, DevOps & Workflows',
    icon: 'Wrench',
    color: '#06b6d4',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'GitHub Actions (CI/CD)', level: 82 },
      { name: 'Jira / Agile', level: 88 },
      { name: 'Vercel / Deployment', level: 90 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Softations',
    position: 'Junior Frontend Engineer',
    duration: 'Nov 2025 – Present',
    startDate: '2025-11',
    endDate: 'Present',
    location: 'Gujrat, Pakistan (Hybrid)',
    type: 'Full-time',
    current: true,
    description: [
      'Developed and maintained responsive web applications using React.js and Next.js framework architectures.',
      'Integrated GraphQL endpoints and REST APIs to manage, bind, and render data dynamically and efficiently.',
      'Debugged complex structural issues, linting configurations, and layout problems to secure frontend reliability.',
      'Collaborated within fast-paced Agile development sprints utilizing Jira and Git based version workflows.',
    ],
    technologies: ['React.js', 'Next.js', 'GraphQL', 'TypeScript', 'Tailwind CSS', 'Git', 'Jira'],
  },
  {
    id: '2',
    company: 'DevSum',
    position: 'Frontend Developer Intern',
    duration: 'Aug 2025 – Oct 2025',
    startDate: '2025-08',
    endDate: '2025-10',
    location: 'Islamabad, Pakistan (Remote)',
    type: 'Internship',
    description: [
      'Built interactive UI elements and responsive components utilizing React, Tailwind CSS, and ecosystem modules.',
      'Optimized application bundle loading speeds, layout states, and local storage values.',
      'Collaborated closely across teams to deliver high-quality, pixel-perfect layouts under precise milestone constraints.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'State Management'],
  },
  {
    id: '3',
    company: 'Siber Koza',
    position: 'Web Developer Intern',
    duration: 'July 2025 – Aug 2025',
    startDate: '2025-07',
    endDate: '2025-08',
    location: 'Kharian, Pakistan',
    type: 'Internship',
    description: [
      'Configured semantic structures to maximize multi-device cross-compatibility and platform reliability.',
      'Enhanced web search performance and SEO visibility using metadata optimizations and structured clean-ups.',
      'Evaluated UI/UX designs alongside seasoned developers to build robust customer experiences.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Optimization', 'SEO Analytics'],
  },
  {
    id: '4',
    company: 'Realz Solution',
    position: 'Web Development Intern',
    duration: 'Sep 2024 – Dec 2024',
    startDate: '2024-09',
    endDate: '2024-12',
    location: 'Islamabad, Pakistan (Remote)',
    type: 'Internship',
    description: [
      'Constructed modular full-stack applications leveraging React.js views mapped to Node.js backend pipelines.',
      'Integrated Twilio communication APIs to manage automated SMS routing and voice calling metrics.',
      'Engineered clean user interfaces prioritizing usability, performance scores, and user accessibility.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'Twilio API', 'RESTful Services'],
  },
  {
    id: '5',
    company: 'Urbanloop Tech',
    position: 'Full Stack Developer Intern',
    duration: 'July 2024 – Aug 2024',
    startDate: '2024-07',
    endDate: '2024-08',
    location: 'Islamabad, Pakistan',
    type: 'Internship',
    description: [
      'Constructed background mechanisms for an AI-powered parsing script evaluating user queries into visual outputs.',
      'Assembled robust transactional backend endpoints using Fastify, Node.js, and PostgreSQL schemas.',
      'Designed dynamic server-side template routing paths utilizing Embedded JavaScript (EJS) interfaces.',
    ],
    technologies: ['Node.js', 'Fastify', 'PostgreSQL', 'AI Systems', 'EJS', 'CRUD Operations'],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Gujrat',
    degree: "Bachelor's of Science",
    field: 'Computer Science',
    duration: '2022 – 2026',
    gpa: '3.3 / 4.0',
    honors: 'Final Year Student',
  },
];

export const projects: Project[] = [
  {
    id: 'sketchwise',
    title: 'SketchWise — Your Personal Art Tutor',
    shortDescription: 'Cross-platform React Native app transforming images to line art using GANs with automated video pipelines.',
    description: 'A cutting-edge mobile application built with React Native and Expo Router that handles image vector processing. It includes automated CI/CD workflows, secure user token structures, and asynchronous background pipelines.',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile / AI',
    featured: true,
    techStack: ['React Native', 'Expo Router', 'Python', 'Express.js', 'Firebase Auth', 'GitHub Actions', 'FFmpeg'],
    overview: 'SketchWise acts as a virtual sketch coach. It converts user images into outline drawings using Generative Adversarial Networks (GANs) and plays step-by-step tutorial animations created asynchronously on a backend engine.',
    features: [
      'Converts images into pencil sketches and vector line art using custom GAN networks',
      'Asynchronous background video encoding using optimized custom FFmpeg presets',
      'Secure user token balance and state synchronization using Firebase integrations',
      'Automated app testing and deployment checks powered by GitHub Actions CI/CD workflows',
      'Flexible layouts using cross-platform responsive interface architectures',
    ],
    challenges: [
      'Optimizing automated video pipelines required building an asynchronous processing layer in Python to handle high-fidelity presets without freezing backend operations.',
      'Managing fast token transactions securely was achieved by creating low-latency middleware hooks linked directly to authentication tokens.',
    ],
    screenshots: [
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'internhub',
    title: 'InternHub — Employment Dashboard',
    shortDescription: 'Responsive monitoring application for application metrics, candidate flows, and job data visualization.',
    description: 'A comprehensive, single-page application employment dashboard engineered to provide companies and candidates real-time monitoring of application stages, job board statuses, and workflow metrics.',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS / Analytics',
    featured: true,
    techStack: ['React.js', 'Tailwind CSS', 'Recharts', 'JavaScript', 'Vercel'],
    overview: 'InternHub automates job application tracking. It eliminates scattered spreadsheets by gathering candidate processing statuses, metrics, and analytical insights into a high-performance administrative panel.',
    features: [
      'Interactive visual graphs built using Recharts for pipeline overview analytics',
      'Fluid tracking system mapping applicant paths from screening stages through offers',
      'Dynamic filtering controls for job categories, internal listings, and post listings',
      'Responsive component layout adapting seamlessly across mobile, tablet, and desktop views',
    ],
    challenges: [
      'Ensuring performance efficiency when updating numerous data models simultaneously was solved by implementing modular component structures and declarative state hooks.',
    ],
    screenshots: [
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'tripverse',
    title: 'TripVerse — Travel Planning Platform',
    shortDescription: 'Scalable booking architecture configured via Model-View-Controller patterns.',
    description: 'A deep full-stack travel scheduling application engineered around strict MVC design principles to manage booking details, payment flows, customer queries, and multi-user accounts safely.',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Application / Enterprise',
    featured: true,
    techStack: ['C#', 'ASP.NET Core', 'MVC Architecture', 'SQL Server', 'Bootstrap'],
    overview: 'TripVerse offers automated travel planning workflows. It allows users to browse global itineraries, finalize trip slots, manage reservations, and access persistent records.',
    features: [
      'Strict Model-View-Controller framework pattern for high data isolation and stability',
      'Secure transaction mechanisms and relational database queries built on SQL Server',
      'Comprehensive administrative tools to modify, remove, or update active travel itineraries',
      'Intuitive user profile portals mapping booking history and ticket logs',
    ],
    challenges: [
      'Structuring scalable relationship bounds between complex transactional models required optimized indexing strategies across key SQL database tables.',
    ],
    screenshots: [
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'notely',
    title: 'Notely — Notes Management System',
    shortDescription: 'Clean, full-featured personal notes environment designed with optimized CRUD actions.',
    description: 'A modern, responsive productivity tool that gives users a distraction-free digital workplace to document thoughts, structure to-do groups, and handle continuous data management with ease.',
    thumbnail: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Productivity',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript (ES6)', 'Local Database Systems'],
    features: [
      'Instant create, read, update, and delete actions linked with localized states',
      'Advanced textual filtering to navigate categories and search labels in real time',
      'Minimalist, pixel-perfect user interface tailored for focus and ease of use',
    ],
    screenshots: [
      'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    id: 'canada-prepsolution',
    title: 'Canada PrepSolution',
    shortDescription: 'E-commerce logistics platform optimizing product packaging and shipment workflows.',
    description: 'A dedicated, highly accessible e-commerce operational tool custom-tailored to accelerate logistics center processing, package sorting, shipment verification, and delivery logging.',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce / Logistics',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'Supabase', 'Node.js'],
    features: [
      'Unified tracking framework to manage incoming inventories and package queues',
      'Automated updates linked directly with cloud database tables using Supabase connections',
      'Simplified operational interfaces tailored to prevent logistical errors on warehouse floors',
    ],
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
];