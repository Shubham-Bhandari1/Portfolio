export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "programming" | "tools" | "other";
  iconName: string;
  iconType: "si" | "fa6" | "tb" | "lu";
  level: number;
  experience: string;
  shortDesc: string;
  detailedDesc: string;
  relatedProjects: string[];
  relevantSkills: string[];
  color: string;
  inOrbit?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "AI & Cloud" | "Web3" | "Developer Tool";
  featured?: boolean;
  image: string;
  thumbnailGradient: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl: string;
  skillsGained: string[];
  badgeColor: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shubham Bhandari",
    role: "Full-Stack Developer | AI & Data Enthusiast",
    typedRoles: [
      "Full-Stack Developer",
      "AI & Data Enthusiast",
      "Next.js & React Developer",
      "Backend & API Engineer",
      "Data Analysis & Semantic Search",
    ],
    tagline:
      "BCA student focused on full-stack development, backend engineering, and AI-driven data applications. Experienced in building REST APIs, authentication systems, database-backed applications, semantic search, and data analysis solutions.",
    location: "Dehradun, India",
    phone: "+91 7819866931",
    availability: "Open to internships, placements, and impactful development opportunities",
    email: "shubhambhndari@gmail.com",
    github: "https://github.com/Shubham-Bhandari1",
    linkedin: "https://www.linkedin.com/in/shubham-bhandari-95642532a",
    twitter: "",
    resumeUrl: "/resume.pdf",
    resumeFilename: "Shubham_Bhandari_Resume.pdf",
  },

  stats: [
    { label: "Featured Projects", value: 3, suffix: "+" },
    { label: "Core Technologies", value: 20, suffix: "+" },
    { label: "Credentials & Awards", value: 5, suffix: "" },
    { label: "Academic Journey", value: 2027, suffix: " (BCA)" },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Tula's University, Dehradun",
    duration: "2024 – 2027",
    currentYear: "2024–2027",
    milestones: [
      {
        year: "2022",
        title: "Passed Class X (Secondary Education)",
        desc: "Built foundational discipline in mathematics, science, and computer basics.",
        badge: "Schooling",
      },
      {
        year: "2024",
        title: "Passed Class XII (Senior Secondary)",
        desc: "Completed senior secondary schooling with strong focus on science and logic.",
        badge: "Higher Secondary",
      },
      {
        year: "2024",
        title: "Joined Tula's University, Dehradun",
        desc: "Pursuing Bachelor of Computer Applications (BCA, 2024–2027).",
        badge: "Undergraduate",
      },
      {
        year: "2024",
        title: "3rd Place in Code Sprint (Utkrisht)",
        desc: "College-wide C programming and competitive coding competition.",
        badge: "Achievement",
      },
      {
        year: "2026",
        title: "Data Analytics Intern — InAmigos Foundation",
        desc: "Hands-on data cleaning, dataset organization, and reporting.",
        badge: "Internship",
      },
      {
        year: "2026",
        title: "Completed Full-Stack Bootcamp & Built Pyramid",
        desc: "Engineered full-stack NestJS/Next.js and AI search architectures.",
        badge: "Engineering",
      },
    ],
  },

  about: {
    bio: [
      "I am Shubham Bhandari, a BCA student and Full-Stack Developer focused on building scalable web architectures, backend systems, and AI-driven data applications. I enjoy applying software engineering and data-driven approaches to solve practical, real-world problems.",
      "My key technical projects include Pyramid (a full-stack task management platform with NestJS & Next.js), an AI-Powered E-Commerce Search Engine (utilizing FastAPI, Elasticsearch, and Sentence Transformers), and LiveCode (a collaborative real-time code editor with isolated Docker execution).",
    ],
    journey:
      "Progressed from core computer science and programming fundamentals in C/C++ to building full-stack applications with TypeScript, Next.js, NestJS, FastAPI, relational databases, Elasticsearch, and AI semantic search.",
    goals:
      "To build production-grade software and data-driven systems, combining strong backend engineering with practical AI/ML search pipelines.",
    currentFocus:
      "Full-stack development, Next.js 14, NestJS, FastAPI, PostgreSQL, Elasticsearch, Sentence Transformers, Docker, and Data Analysis.",
    pillars: [
      {
        title: "Full-Stack Development",
        desc: "Building end-to-end applications across responsive frontend interfaces, NestJS/FastAPI backends, authentication, and cloud deployment.",
        color: "from-cyan-500 to-blue-600",
      },
      {
        title: "AI & Semantic Search",
        desc: "Engineering intelligent search systems with Elasticsearch, Sentence Transformers, NLP, and vector embeddings.",
        color: "from-purple-500 to-indigo-600",
      },
      {
        title: "Data Analysis & Databases",
        desc: "Working with PostgreSQL, MySQL, dataset cleaning, ETL workflows, and data-backed decision support systems.",
        color: "from-emerald-500 to-teal-600",
      },
      {
        title: "Problem Solving & Core CS",
        desc: "Solid foundations in C, C++, Data Structures, Algorithms, REST APIs, Docker containerization, and secure JWT authentication.",
        color: "from-pink-500 to-rose-600",
      },
    ],
  },

  skills: [
    // Languages
    {
      id: "javascript",
      name: "JavaScript",
      category: "programming",
      iconName: "SiJavascript",
      iconType: "si",
      level: 90,
      experience: "Core language",
      shortDesc: "Core language used for interactive full-stack web applications.",
      detailedDesc: "Used for frontend development, async workflows, REST APIs, and full-stack systems.",
      relatedProjects: ["Pyramid", "AI Search Engine", "LiveCode"],
      relevantSkills: ["ES6+", "Async/Await", "Event Loop", "DOM"],
      color: "#F7DF1E",
      inOrbit: true,
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "programming",
      iconName: "SiTypescript",
      iconType: "si",
      level: 86,
      experience: "Production experience",
      shortDesc: "Typed JavaScript for maintainable, type-safe full-stack systems.",
      detailedDesc: "Used in NestJS, Next.js 14, and React projects to ensure robust type safety and clean interfaces.",
      relatedProjects: ["Pyramid", "LiveCode"],
      relevantSkills: ["Generics", "Type Safety", "Interfaces", "Decorators"],
      color: "#3178C6",
      inOrbit: true,
    },
    {
      id: "python",
      name: "Python",
      category: "programming",
      iconName: "SiPython",
      iconType: "si",
      level: 82,
      experience: "Data & Backend",
      shortDesc: "Language for FastAPI backends, data processing, and AI workflows.",
      detailedDesc: "Used to develop FastAPI endpoints, Elasticsearch data indexing, and Sentence Transformers AI search pipelines.",
      relatedProjects: ["AI-Powered E-Commerce Search Engine", "InAmigos Internship"],
      relevantSkills: ["FastAPI", "Sentence Transformers", "Data Analysis", "NLP"],
      color: "#3776AB",
      inOrbit: true,
    },
    {
      id: "cpp",
      name: "C++",
      category: "programming",
      iconName: "SiCplusplus",
      iconType: "si",
      level: 85,
      experience: "Core CS & DSA",
      shortDesc: "Programming language used for algorithms, DSA, and problem solving.",
      detailedDesc: "Strong foundation in data structures, algorithms, STL, and memory management.",
      relatedProjects: ["Code Sprint Utkrisht 3rd Place"],
      relevantSkills: ["DSA", "OOP", "STL", "Problem Solving"],
      color: "#00599C",
      inOrbit: true,
    },
    {
      id: "c",
      name: "C",
      category: "programming",
      iconName: "SiC",
      iconType: "si",
      level: 85,
      experience: "Core CS & Competitions",
      shortDesc: "Foundational procedural language for low-level systems and algorithms.",
      detailedDesc: "Awarded 3rd Place in Code Sprint at Utkrisht college-wide C programming competition.",
      relatedProjects: ["Utkrisht Code Sprint"],
      relevantSkills: ["Pointers", "Memory Allocation", "Algorithms", "Data Structures"],
      color: "#A8B9CC",
      inOrbit: false,
    },

    // Frontend
    {
      id: "react",
      name: "React.js",
      category: "frontend",
      iconName: "SiReact",
      iconType: "si",
      level: 88,
      experience: "Frontend Library",
      shortDesc: "Component-based library for building responsive user interfaces.",
      detailedDesc: "Used in Pyramid, LiveCode, and AI Search Engine with React 18 hooks and state patterns.",
      relatedProjects: ["Pyramid", "AI Search Engine", "LiveCode"],
      relevantSkills: ["Hooks", "Context", "Virtual DOM", "Component Architecture"],
      color: "#61DAFB",
      inOrbit: true,
    },
    {
      id: "nextjs",
      name: "Next.js 14",
      category: "frontend",
      iconName: "SiNextdotjs",
      iconType: "si",
      level: 86,
      experience: "Full-Stack Framework",
      shortDesc: "React framework with App Router, SSR, and Vercel deployment.",
      detailedDesc: "Used to build Pyramid and modern responsive web applications.",
      relatedProjects: ["Pyramid", "LiveCode"],
      relevantSkills: ["App Router", "SSR", "Vercel Deployments", "API Routes"],
      color: "#ffffff",
      inOrbit: true,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      iconName: "SiTailwindcss",
      iconType: "si",
      level: 88,
      experience: "Styling Framework",
      shortDesc: "Utility-first CSS framework for rapid, responsive UI development.",
      detailedDesc: "Used to build sleek, accessible, dark-themed, and responsive web layouts.",
      relatedProjects: ["Pyramid", "LiveCode"],
      relevantSkills: ["Responsive Layouts", "Dark Mode", "Custom Themes", "CSS Grid"],
      color: "#06B6D4",
      inOrbit: true,
    },
    {
      id: "html",
      name: "HTML5",
      category: "frontend",
      iconName: "SiHtml5",
      iconType: "si",
      level: 90,
      experience: "Web Standard",
      shortDesc: "Semantic markup for accessible and structured web layouts.",
      detailedDesc: "Semantic HTML foundations validated through Udemy Full-Stack certification.",
      relatedProjects: ["Pyramid", "LiveCode"],
      relevantSkills: ["Semantic Tags", "Accessibility", "Forms", "SEO"],
      color: "#E34F26",
      inOrbit: true,
    },
    {
      id: "css",
      name: "CSS3",
      category: "frontend",
      iconName: "SiCss3",
      iconType: "si",
      level: 88,
      experience: "Web Styling",
      shortDesc: "Modern styling, flexbox, grid, animations, and transitions.",
      detailedDesc: "Advanced CSS styling, layout algorithms, and glassmorphic designs.",
      relatedProjects: ["Pyramid", "LiveCode"],
      relevantSkills: ["Flexbox", "Grid", "Animations", "Glassmorphism"],
      color: "#1572B6",
      inOrbit: true,
    },

    // Backend
    {
      id: "nestjs",
      name: "NestJS",
      category: "backend",
      iconName: "SiNestjs",
      iconType: "si",
      level: 82,
      experience: "Enterprise Backend",
      shortDesc: "Progressive TypeScript framework for scalable backend architectures.",
      detailedDesc: "Implemented REST API with JWT guest authentication, TypeORM, rate limiting, validation, and Helmet headers in Pyramid.",
      relatedProjects: ["Pyramid"],
      relevantSkills: ["Modules", "Controllers", "Services", "Guards & Interceptors"],
      color: "#E0234E",
      inOrbit: true,
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "backend",
      iconName: "SiFastapi",
      iconType: "si",
      level: 80,
      experience: "Python High-Speed API",
      shortDesc: "Modern, fast web framework for Python APIs and AI services.",
      detailedDesc: "Developed high-speed REST endpoints for AI-Powered E-Commerce Search Engine integrated with Elasticsearch.",
      relatedProjects: ["AI-Powered E-Commerce Search Engine"],
      relevantSkills: ["Pydantic", "Async Endpoints", "OpenAPI", "AI Integration"],
      color: "#009688",
      inOrbit: true,
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      iconName: "SiNodedotjs",
      iconType: "si",
      level: 86,
      experience: "Backend Runtime",
      shortDesc: "JavaScript runtime for building scalable server-side systems.",
      detailedDesc: "Used to build backend APIs, asynchronous services, and data flows.",
      relatedProjects: ["Pyramid", "LiveCode"],
      relevantSkills: ["Async I/O", "REST APIs", "Event Loop", "Middleware"],
      color: "#339933",
      inOrbit: true,
    },
    {
      id: "express",
      name: "Express.js",
      category: "backend",
      iconName: "SiExpress",
      iconType: "si",
      level: 84,
      experience: "Node.js Web Framework",
      shortDesc: "Fast, unopinionated web framework for Node.js REST APIs.",
      detailedDesc: "Used for routing, middleware management, and API design in full-stack projects.",
      relatedProjects: ["LiveCode"],
      relevantSkills: ["Routing", "Middleware", "CORS", "Error Handling"],
      color: "#808080",
      inOrbit: true,
    },
    {
      id: "restapis",
      name: "REST APIs",
      category: "backend",
      iconName: "SiPostman",
      iconType: "si",
      level: 88,
      experience: "API Engineering",
      shortDesc: "Designing, validating, and consuming secure HTTP RESTful endpoints.",
      detailedDesc: "Built comprehensive REST APIs across NestJS, FastAPI, and Express with validation and rate limiting.",
      relatedProjects: ["Pyramid", "AI Search Engine", "LiveCode"],
      relevantSkills: ["CRUD", "HTTP Codes", "Rate Limiting", "Authentication"],
      color: "#FF6C37",
      inOrbit: true,
    },

    // Databases
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      iconName: "SiPostgresql",
      iconType: "si",
      level: 84,
      experience: "Relational Database",
      shortDesc: "Advanced open-source relational database with TypeORM integration.",
      detailedDesc: "Designed relational schema, tenant data isolation, and query optimization for Pyramid.",
      relatedProjects: ["Pyramid"],
      relevantSkills: ["SQL", "TypeORM", "Relational Modeling", "Indexes"],
      color: "#4169E1",
      inOrbit: true,
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "database",
      iconName: "SiMysql",
      iconType: "si",
      level: 82,
      experience: "Relational Database",
      shortDesc: "Structured relational database management system.",
      detailedDesc: "Integrated MySQL database for product catalogue data in AI Search Engine.",
      relatedProjects: ["AI-Powered E-Commerce Search Engine"],
      relevantSkills: ["SQL Queries", "Joins", "Schema Design", "Transactions"],
      color: "#4479A1",
      inOrbit: true,
    },

    // AI & Data
    {
      id: "elasticsearch",
      name: "Elasticsearch",
      category: "other",
      iconName: "SiElasticsearch",
      iconType: "si",
      level: 80,
      experience: "Search & Analytics Engine",
      shortDesc: "Distributed search and analytics engine for high-speed indexing.",
      detailedDesc: "Integrated Elasticsearch for keyword search and typo-tolerant query matching across Amazon product datasets.",
      relatedProjects: ["AI-Powered E-Commerce Search Engine"],
      relevantSkills: ["Fuzzy Search", "Indexing", "Query DSL", "Full-Text Search"],
      color: "#005571",
      inOrbit: true,
    },
    {
      id: "semantic-search",
      name: "Sentence Transformers & NLP",
      category: "other",
      iconName: "SiPython",
      iconType: "si",
      level: 80,
      experience: "AI Semantic Search",
      shortDesc: "Embedding models for vector semantic search and intent understanding.",
      detailedDesc: "Applied Sentence Transformers for semantic query understanding and hybrid search ranking.",
      relatedProjects: ["AI-Powered E-Commerce Search Engine"],
      relevantSkills: ["Vector Embeddings", "Cosine Similarity", "NLP", "Semantic Search"],
      color: "#FFA800",
      inOrbit: true,
    },
    {
      id: "data-analysis",
      name: "Data Analysis",
      category: "other",
      iconName: "SiPython",
      iconType: "si",
      level: 78,
      experience: "InAmigos Internship",
      shortDesc: "Dataset cleaning, organization, analysis, and report creation.",
      detailedDesc: "Cleaned and organized real-world datasets to support business decisions during InAmigos Foundation internship.",
      relatedProjects: ["InAmigos Foundation Internship"],
      relevantSkills: ["Data Cleaning", "Data Exploration", "Reporting", "Analytical Problem Solving"],
      color: "#3776AB",
      inOrbit: true,
    },

    // Tools & DevOps
    {
      id: "docker",
      name: "Docker",
      category: "tools",
      iconName: "SiDocker",
      iconType: "si",
      level: 80,
      experience: "Containerization",
      shortDesc: "Container platform for consistent environments and isolated execution.",
      detailedDesc: "Used Docker for local development environments and isolated sandbox code execution in LiveCode.",
      relatedProjects: ["Pyramid", "AI Search Engine", "LiveCode"],
      relevantSkills: ["Containers", "Docker Compose", "Dockerfiles", "Sandboxing"],
      color: "#2496ED",
      inOrbit: true,
    },
    {
      id: "jwt",
      name: "JWT Authentication",
      category: "tools",
      iconName: "SiJsonwebtokens",
      iconType: "si",
      level: 84,
      experience: "Security & Auth",
      shortDesc: "Token-based authentication, guest sessions, and owner data isolation.",
      detailedDesc: "Implemented secure JWT guest sessions and role/owner data isolation in Pyramid.",
      relatedProjects: ["Pyramid"],
      relevantSkills: ["JWT Tokens", "Passport.js", "Auth Guards", "Data Isolation"],
      color: "#000000",
      inOrbit: true,
    },
    {
      id: "git",
      name: "Git",
      category: "tools",
      iconName: "SiGit",
      iconType: "si",
      level: 88,
      experience: "Version Control",
      shortDesc: "Distributed version control system for tracking code changes.",
      detailedDesc: "Git workflow for branch management, commits, and collaborative coding.",
      relatedProjects: ["All Projects"],
      relevantSkills: ["Branching", "Merging", "Rebasing", "Version Tracking"],
      color: "#F05032",
      inOrbit: true,
    },
    {
      id: "github",
      name: "GitHub",
      category: "tools",
      iconName: "SiGithub",
      iconType: "si",
      level: 88,
      experience: "Open Source & Hosting",
      shortDesc: "Code hosting, collaboration platform, and repository management.",
      detailedDesc: "Maintains open-source repositories, documentation, and project showcases.",
      relatedProjects: ["All Projects"],
      relevantSkills: ["Repositories", "Pull Requests", "Releases", "Collaboration"],
      color: "#ffffff",
      inOrbit: true,
    },
    {
      id: "flutter",
      name: "Flutter & Dart",
      category: "tools",
      iconName: "SiFlutter",
      iconType: "si",
      level: 68,
      experience: "Certification",
      shortDesc: "Cross-platform mobile application development framework.",
      detailedDesc: "Completed certified mobile development program through Tula's Institute / Campus Sutras.",
      relatedProjects: ["Campus Sutras Mobile Dev"],
      relevantSkills: ["Dart", "Widgets", "State Management", "Mobile UI"],
      color: "#02569B",
      inOrbit: false,
    },
  ] as Skill[],

  featuredProject: {
    id: "pyramid",
    title: "Pyramid",
    tagline: "Full-Stack Task Management System",
    category: "Full Stack" as const,
    featured: true,
    image: "/images/projects/task-flow.webp",
    thumbnailGradient: "from-cyan-600/30 via-indigo-600/30 to-purple-600/30",
    demoUrl: "https://task-flow-rust-five.vercel.app/",
    githubUrl: "https://github.com/Shubham-Bhandari1/Task-Flow",
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Vercel",
    ],
    overview:
      "A production-grade full-stack task management platform featuring interactive Kanban and list views, project organization, subtasks, comments, instant search/filtering, and owner-based data isolation.",
    problem:
      "Modern teams and individuals need intuitive, lightning-fast task tracking with zero friction, instant guest access, and rock-solid data isolation.",
    solution:
      "Engineered Pyramid with a modular NestJS backend, TypeORM, PostgreSQL, Helmet security headers, rate limiting, and a fluid Next.js 14 frontend deployed on Vercel.",
    architecture: [
      "Frontend: Next.js 14 App Router, React 18, TypeScript, and Tailwind CSS with instant responsive UI.",
      "Backend: Modular NestJS REST API with Passport JWT guest authentication and TypeORM.",
      "Security & Data: PostgreSQL database with owner-based data isolation, Helmet headers, validation pipes, and rate limiting.",
      "Deployment: Continuous deployment with Vercel and containerized local development via Docker.",
    ],
    features: [
      "Interactive Kanban board and customizable list views",
      "Project creation, hierarchical subtasks, and task comments",
      "Instant keyword search and dynamic task filtering",
      "NestJS REST API with JWT guest authentication and data isolation",
      "Validation pipes, rate limiting, and Helmet security headers",
    ],
    challenges: [
      "Architecting frictionless one-click guest authentication while guaranteeing strict tenant data isolation at the database layer.",
      "Optimizing relational queries with TypeORM and PostgreSQL under dynamic filtering.",
    ],
    metrics: "⚡ Instant Guest Access • Multi-View Kanban • Production Vercel Deploy",
  },

  projects: [
    {
      id: "pyramid",
      title: "Pyramid",
      tagline: "Full-Stack Task Management System",
      category: "Full Stack",
      image: "/images/projects/task-flow.webp",
      thumbnailGradient: "from-purple-600/30 via-pink-600/30 to-indigo-600/30",
      demoUrl: "https://task-flow-rust-five.vercel.app/",
      githubUrl: "https://github.com/Shubham-Bhandari1/Task-Flow",
      techStack: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "TypeORM",
        "PostgreSQL",
        "JWT",
        "Docker",
        "Vercel",
      ],
      overview:
        "A full-stack task management platform built with Kanban and list views, projects, subtasks, comments, search/filtering, and responsive UI.",
      problem:
        "Teams require a structured way to manage complex workflows and subtasks without clunky user interfaces.",
      solution:
        "Built Pyramid combining a high-performance Next.js 14 frontend with a secure NestJS/PostgreSQL backend architecture.",
      architecture: [
        "Frontend: Next.js 14, React 18, TypeScript, and Tailwind CSS.",
        "Backend: NestJS REST API with TypeORM and PostgreSQL.",
        "Security: JWT guest authentication, Helmet security headers, and rate limiting.",
      ],
      features: [
        "Kanban and list views with subtasks and comments",
        "Fast search and multi-attribute filtering",
        "JWT guest authentication with owner data isolation",
        "Production deployment on Vercel",
      ],
      challenges: [
        "Maintaining strict owner-based data isolation for guest sessions.",
      ],
    },
    {
      id: "ai-search-engine",
      title: "AI-Powered E-Commerce Search Engine",
      tagline: "Hybrid Keyword & AI Semantic Search Engine",
      category: "AI & Cloud",
      image: "/images/projects/ai-search-engine.webp",
      thumbnailGradient: "from-cyan-600/30 via-indigo-600/30 to-purple-600/30",
      demoUrl: "",
      githubUrl: "https://github.com/Shubham-Bhandari1/ai-search-engine",
      techStack: [
        "FastAPI",
        "Python",
        "Elasticsearch",
        "Sentence Transformers",
        "MySQL",
        "Docker",
        "React",
        "NLP",
      ],
      overview:
        "An intelligent e-commerce search engine combining keyword search, typo tolerance, and AI semantic search to understand query intent across a dataset of 1,465 Amazon India products.",
      problem:
        "Traditional keyword search fails when users make spelling mistakes or use descriptive phrases instead of exact product titles.",
      solution:
        "Engineered a hybrid search engine utilizing FastAPI, Elasticsearch for fuzzy keyword search, and Sentence Transformers embeddings for deep semantic matching.",
      architecture: [
        "FastAPI REST API layer in Python handling search dispatch and scoring.",
        "Elasticsearch index providing typo tolerance and high-speed retrieval.",
        "Sentence Transformers vector embedding pipeline for semantic comprehension.",
        "MySQL storage and React frontend displaying filtered products from 1,465 Amazon items.",
      ],
      features: [
        "Hybrid search combining keyword search, typo tolerance, and AI semantic search",
        "FastAPI REST endpoints integrated with MySQL, Elasticsearch, and Docker",
        "Product filtering across 1,465 Amazon India products with React frontend",
        "Open-source modular codebase on GitHub",
      ],
      challenges: [
        "Balancing speed and accuracy between dense vector semantic embeddings and BM25 Elasticsearch lexical matching.",
      ],
    },
    {
      id: "livecode",
      title: "LiveCode",
      tagline: "Real-Time Collaborative Code Editor",
      category: "Developer Tool",
      image: "/images/projects/livecode.webp",
      thumbnailGradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
      demoUrl: "",
      githubUrl: "https://github.com/Shubham-Bhandari1/LiveCode",
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Monaco Editor",
        "Xterm.js",
        "Docker",
      ],
      overview:
        "A browser-based collaborative coding environment supporting real-time code editing, project persistence, integrated terminal access, and isolated Docker execution.",
      problem:
        "Collaborative coding environments require synchronized editing, immediate feedback, and secure multi-language execution.",
      solution:
        "Engineered LiveCode with Monaco Editor, Xterm.js interactive terminal, Node.js/Express backend, and Docker-based containerized execution.",
      architecture: [
        "Frontend: React/Next.js interface with Monaco Editor and Xterm.js terminal.",
        "Backend: Node.js and Express.js API services.",
        "Execution: Docker-based isolated code execution containers.",
        "Persistence: Project persistence and collaborative session state.",
      ],
      features: [
        "Real-time browser-based code editing",
        "Interactive embedded terminal with Xterm.js",
        "Docker-based isolated code execution for safe testing",
        "Project persistence and collaborative communication features",
      ],
      challenges: [
        "Executing untrusted code securely inside isolated Docker containers with resource constraints.",
      ],
    },
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Data Analytics Intern",
      company: "InAmigos Foundation",
      location: "Remote",
      duration: "Jun 2026 – Jul 2026",
      type: "Internship",
      description:
        "Worked on data cleaning, organization, and analysis tasks using real-world datasets to support decision-making, preparing concise reports and collaborating with a remote team.",
      achievements: [
        "Worked on data cleaning, organization, and analysis tasks using real-world datasets to support decision-making.",
        "Prepared concise reports and collaborated with a remote team to complete assigned tasks on schedule.",
        "Strengthened analytical, problem-solving, and communication skills through structured project work.",
      ],
      technologies: [
        "Data Analysis",
        "Python",
        "SQL",
        "Reporting",
        "Git",
        "Remote Collaboration",
      ],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-1",
      name: "Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "Aug 2026",
      credentialId: "UC-1b526c1a-0445-4899-a7ed-d2433ff4702c",
      credentialUrl: "https://ude.my/UC-1b526c1a-0445-4899-a7ed-d2433ff4702c",
      skillsGained: [
        "Full-Stack Web Development",
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "React",
        "Node.js & Express",
      ],
      badgeColor: "from-blue-500 to-cyan-500",
    },
    {
      id: "cert-2",
      name: "Data Analytics Internship & Competition Certificate",
      issuer: "InAmigos Foundation",
      date: "Jul 2026",
      credentialUrl: "https://drive.google.com/file/d/13gYewnDLau-WgSpTAGjgCMfn5-iQQByC/view?usp=drive_link",
      skillsGained: ["Data Analytics", "Data Cleaning", "Reporting", "Analytical Problem Solving"],
      badgeColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "cert-3",
      name: "Mobile App Development with Flutter & Dart",
      issuer: "Tula's Institute / Campus Sutras",
      date: "Apr 2026",
      credentialUrl: "https://drive.google.com/file/d/1M60BqKOC4pNekTpiS7qAdzf4iuHawSv4/view?usp=drive_link",
      skillsGained: ["Flutter", "Dart", "Mobile UI", "Cross-Platform Apps"],
      badgeColor: "from-cyan-500 to-blue-600",
    },
    {
      id: "cert-4",
      name: "The Crypto Heist CTF",
      issuer: "ThunderCipher",
      date: "Jul 2026",
      credentialUrl: "https://drive.google.com/file/d/1haQp3bKS0XoEPiGA7YiTk99UeMhOkuFQ/view?usp=drive_link",
      skillsGained: ["Cybersecurity", "CTF Challenges", "Problem Solving", "Cryptography"],
      badgeColor: "from-purple-500 to-indigo-600",
    },
    {
      id: "cert-5",
      name: "3rd Place — Code Sprint at Utkrisht 2024",
      issuer: "Utkrisht (College-Wide)",
      date: "2024",
      credentialUrl: "https://drive.google.com/file/d/1A-yqyzB_qXNBd2YRuBYgPaBBN_pWTykU/view?usp=drive_link",
      skillsGained: ["C Programming", "Competitive Coding", "Algorithms", "DSA"],
      badgeColor: "from-amber-500 to-rose-600",
    },
  ] as Certification[],

  links: {
    github: "https://github.com/Shubham-Bhandari1",
    linkedin: "https://www.linkedin.com/in/shubham-bhandari-95642532a",
    projects: {
      pyramidGithub: "https://github.com/Shubham-Bhandari1/Task-Flow",
      pyramidLive: "https://task-flow-rust-five.vercel.app/",
      aiSearchEngine: "https://github.com/Shubham-Bhandari1/ai-search-engine",
      liveCode: "https://github.com/Shubham-Bhandari1/LiveCode",
    },
    certifications: {
      udemyBootcamp: "https://ude.my/UC-1b526c1a-0445-4899-a7ed-d2433ff4702c",
      dataAnalyticsCertificate: "https://drive.google.com/file/d/13gYewnDLau-WgSpTAGjgCMfn5-iQQByC/view?usp=drive_link",
      flutterDartCertificate: "https://drive.google.com/file/d/1M60BqKOC4pNekTpiS7qAdzf4iuHawSv4/view?usp=drive_link",
      cryptoHeistCTF: "https://drive.google.com/file/d/1haQp3bKS0XoEPiGA7YiTk99UeMhOkuFQ/view?usp=drive_link",
      codeSprintUtkrisht: "https://drive.google.com/file/d/1A-yqyzB_qXNBd2YRuBYgPaBBN_pWTykU/view?usp=drive_link",
    },
  },
};
