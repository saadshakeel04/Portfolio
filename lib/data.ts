import type { Project, Experience, Education, SkillCategory, SocialLink, NavItem } from './types';

export const personalInfo = {
  name: 'Saad Shakeel',
  title: 'Full Stack Software Engineer',
  tagline: 'Building responsive, scalable web applications with clean code and powerful engineering.',
  email: 'ultrasaad04@gmail.com',
  location: 'Islamabad, Pakistan',
  github: 'https://github.com/saadshakeel04',
  linkedin: 'https://www.linkedin.com/in/saad-shakeel-419063259/',
  instagram: 'https://www.instagram.com/saad.dev04/', 
  resume: '/Saad_Shakeel_Resume.pdf',
  photo: '/me.png', // Feel free to update with your personal image path
  bio: "I'm a Full Stack Software Engineer with hands-on experience building responsive and scalable web applications. I specialize in React.js, Next.js, and Node.js, with a passion for optimizing performance and creating seamless user experiences.",
  about: [
 "I'm Saad Shakeel, a Full Stack Software Engineer with over a year of professional experience building responsive and scalable web applications. I specialize in React.js, Next.js, TypeScript, Node.js, PostgreSQL, GraphQL and modern web technologies, with a strong focus on writing clean, maintainable and efficient code.",
  "I hold a Bachelor's degree in Computer Science from the University of Gujrat and have worked on enterprise applications, full-stack platforms and AI-powered projects. I enjoy building reusable components, integrating APIs and collaborating with cross-functional teams in Agile environments.",
    "Beyond my day-to-day development work, I'm passionate about exploring system design, software architecture, AI-powered applications and modern engineering practices. I'm constantly learning new technologies and refining my skills to build products that create meaningful impact and deliver long-term value."
  ],
  interests: ['AI & Machine Learning', 'DevOps & CI/CD', 'Full Stack Development', 'Mobile App Development'],
  stats: [
    { label: 'Projects Built', value: 20 },
    { label: 'Months Experience', value: 18 },
    { label: 'Technologies', value: 25 },
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
      { name: 'Docker', level: 80 },
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
    location: 'Gujrat, Pakistan',
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
    gpa: '3.4 / 4.0',
  },
];

export const projects: Project[] = [
  {
    id: 'sketchwise',
    title: 'SketchWise | Your Personal Art Tutor',
    shortDescription: 'Cross-platform React Native app transforming images to line art using GANs with automated video pipelines.',
    description: 'A cutting-edge mobile application built with React Native and Expo Router that handles image vector processing. It includes automated CI/CD workflows, secure user token structures, and asynchronous background pipelines.',
    thumbnail: '/sketchwise.png',
    category: 'Final Year Project',
    featured: true,
    techStack: ['React Native', 'Open CV', 'Expo Router', 'Python', 'Express.js', 'PostgreSQL', 'Redis', 'FFmpeg'],
    overview: 'SketchWise is a mobile application built with React Native that transforms ordinary images into realistic pencil sketches and generates step-by-step sketching videos to help users learn drawing techniques. The application combines advanced image processing, asynchronous video generation, and secure backend services to deliver an interactive art learning experience. It features automated processing pipelines, a token-based premium usage system and a scalable architecture that supports high-quality media generation while maintaining a responsive user experience. The project is actively evolving, with upcoming features including multiple artistic sketch styles, an interactive tracing mode for guided practice, and additional learning tools to further enhance the digital art education experience.',
    demoVideo: '/sketchwise.mp4',
    features: [
      'Converts images into pencil sketches and vector line art using custom GAN networks',
      'Asynchronous background video encoding using optimized custom FFmpeg presets',
      'Secure user token balance and state synchronization using Firebase integrations',
      'Automated app testing and deployment checks powered by GitHub Actions CI/CD workflows',
      'Flexible layouts using cross-platform responsive interface architectures',
    ],
    challenges: [
       'Designed an asynchronous image and video processing pipeline to generate sketch tutorials without blocking user requests or affecting application performance.',
       'Implemented a secure token-based credit system while maintaining synchronization between the mobile application and backend services.',
    ],
  },
  {
    id: 'internhub',
    title: 'InternHub | Employment Dashboard',
    shortDescription: 'Responsive monitoring application for application metrics, candidate flows, and job data visualization.',
    description: 'A comprehensive, single-page application employment dashboard engineered to provide companies and candidates real-time monitoring of application stages, job board statuses, and workflow metrics.',
    thumbnail: '/internhub.png',
    github: 'https://github.com/saadshakeel04/InternHub-Dashboard',
    liveDemo: 'https://intern-hub-dashboard.vercel.app/',
    category: 'Dashboard / Analytics',
    featured: true,
    techStack: ['React.js', 'Tailwind CSS', 'Recharts', 'JavaScript', 'Local Storage', 'Vite', 'Vercel'],
   overview:
'InternHub is a modern recruitment and internship management dashboard that enables organizations to monitor hiring activities through interactive analytics and real-time statistics. Built with React.js and Recharts, it provides comprehensive insights into candidate applications, internship listings, approval rates and recruitment pipelines using dynamic charts and visual reports. The responsive interface streamlines recruitment workflows while helping administrators make informed hiring decisions through centralized data visualization.',
    features: [
      'Interactive visual graphs built using Recharts for pipeline overview analytics',
      'Fluid tracking system mapping applicant paths from screening stages through offers',
      'Dynamic filtering controls for job categories, internal listings, and post listings',
      'Responsive component layout adapting seamlessly across mobile, tablet, and desktop views',
    ],
    challenges: [
      'Managed complex application state across multiple dashboard modules while minimizing unnecessary component re-renders.',
      'Built reusable and responsive chart components that accurately visualized recruitment metrics across different screen sizes.',
    ],
    gifs: ['/v4.mp4','/v5.mp4','/v6.mp4']
  },
  {
    id: 'tripverse',
    title: 'TripVerse | Travel Planning Platform',
    shortDescription: 'Scalable booking architecture configured via Model-View-Controller patterns.',
    description: 'A deep full-stack travel scheduling application engineered around strict MVC design principles to manage booking details, payment flows, customer queries, and multi-user accounts safely.',
    thumbnail: '/tripverse.png',
    category: 'Enterprise Application',
    demoVideo: '/tripverse.mp4',
    featured: true,
    techStack: ['C#', 'ASP.NET Web', 'MVC Architecture', 'MySQL', 'XAML'],
    overview:
'TripVerse is a full-stack travel planning and booking platform developed using ASP.NET MVC, designed to simplify destination discovery, reservation management and travel planning. The application follows the Model-View-Controller architecture to ensure clean separation of concerns, scalability and maintainable code. It provides secure booking workflows, user account management, administrative controls and efficient database operations for managing destinations, itineraries and travel records.',
    features: [
      'Strict Model-View-Controller framework pattern for high data isolation and stability',
      'Secure transaction mechanisms and relational database queries built on SQL Server',
      'Comprehensive administrative tools to modify, remove, or update active travel itineraries',
      'Intuitive user profile portals mapping booking history and ticket logs',
    ],
    challenges: [
    'Designed a normalized database structure capable of efficiently handling bookings, users, destinations and transaction records.',
    'Implemented secure booking workflows while ensuring data consistency during concurrent reservation requests.',
    ],
  },
  {
    id: 'notely',
    title: 'Notely | Notes Management System',
    shortDescription: 'Clean, full-featured personal notes environment designed with optimized CRUD actions.',
    description: 'A modern, responsive productivity tool that gives users a distraction-free digital workplace to document thoughts, structure to-do groups, and handle continuous data management with ease.',
    thumbnail: '/notely.png',
    github:"https://github.com/saadshakeel04/Notes-Management-System",
    liveDemo:"https://notes-management-system-three.vercel.app/",
    category: 'Productivity Application',
 overview:
'Notely is a modern productivity and notes management platform built with React.js, Vite, Tailwind CSS and Supabase that enables users to securely organize personal knowledge through an intuitive dashboard. The application supports authentication, note creation, editing, search, categorization, pinning, favorites, archiving, trash recovery and customizable themes to deliver a complete note-taking experience. With responsive design, real-time data synchronization and efficient state management. Notely provides a scalable and seamless workspace for managing ideas, tasks and personal information across devices.',
    featured: false,
    techStack: ['React.js', 'Tailwind CSS', 'Supabase JS', 'Framer Motion', 'Vite', 'Vercel'],
    features: [
      'Instant create, read, update, and delete actions linked with localized states',
      'Advanced textual filtering to navigate categories and search labels in real time',
      'Minimalist, pixel-perfect user interface tailored for focus and ease of use',
    ],
    challenges: [
  'Kept frontend state synchronized with Supabase during CRUD operations while providing instant UI updates.',
  'Implemented efficient note searching and category filtering without degrading performance as user data increased.',
],
     gifs: ['/v7.mp4','/v8.mp4','/v9.mp4']
  },
  {
    id: 'canada-prepsolution',
    title: 'Canada Prep Solution',
    shortDescription: 'E-commerce logistics platform optimizing product packaging and shipment workflows.',
    description: 'A dedicated, highly accessible e-commerce operational tool custom-tailored to accelerate logistics center processing, package sorting, shipment verification, and delivery logging.',
    overview: 'Canada Prep Solution is a logistics and warehouse management platform developed with Node.js, Express.js, EJS and MongoDB to streamline package preparation and shipment workflows. The application helps warehouse staff efficiently manage inventory, organize product packaging, verify shipment records and monitor operational processes through an intuitive web interface. By optimizing order handling, package tracking and inventory management, the platform improves workflow efficiency while reducing processing errors in day-to-day logistics operations.',
    thumbnail: '/prep.png',
    github:"https://github.com/WardahFayyaz/PrepWebsite",
    liveDemo:"https://prep-website-xi.vercel.app/",
    category: 'E-commerce Platform',
    featured: false,
    techStack: ['EJS', 'CSS', 'MongoDB', 'Node.js', 'Express.js', 'Vercel'],
    features: [
      'Unified tracking framework to manage incoming inventories and package queues',
      'Automated updates linked directly with cloud database tables using Supabase connections',
      'Simplified operational interfaces tailored to prevent logistical errors on warehouse floors',
    ],
    challenges: [
  'Developed an efficient package preparation workflow that synchronized inventory, order status and shipment data while minimizing processing errors.',
  'Built reusable server-rendered EJS components and optimized Express.js routes to improve maintainability, performance and overall user experience.',
],
     gifs: ['/v1.mp4','/v2.mp4','/v3.mp4']
  },
];