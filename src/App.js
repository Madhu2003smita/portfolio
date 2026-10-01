import { useState, useEffect } from "react";

const skills = [
  { category: "Frontend", items: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, React Native, Next.js, Tailwind CSS, Context API, Responsive UI" },
  { category: "Backend", items: "Node.js, Express.js, NestJS, .NET, ASP.NET Core, REST API Design & Integration, JWT Authentication, WebSockets, Microservices" },
  { category: "Database", items: "SQL, PostgreSQL (schema design, migrations, query optimization), TypeORM, MongoDB (NoSQL), Redis" },
  { category: "Version Control & DevOps", items: "Git, GitHub, Docker, CI/CD, Postman, Linux, VS Code" },
  { category: "AI / LLM", items: "LLM API Integration, Prompt Design, Structured Outputs, AI Agents, Multi-Agent Systems" },
  { category: "Languages", items: "JavaScript, TypeScript, C#, Python, SQL" },
];

const projects = [
  {
    title: "Task Management System",
    description:
      "Full-stack task management application with JWT authentication and CRUD operations. Built a responsive React.js interface for managing and organizing tasks with filtering and prioritization.",
    github: "https://github.com/Madhu2003smita/task-app",
    live: null,
    tags: ["React.js", "Node.js", "JWT"],
  },
  {
    title: "SUT Price & System Settings API",
    description:
      "REST APIs for SUT pricing and system configuration using NestJS and TypeScript. PostgreSQL persistence with TypeORM entities, repositories, migrations, and upsert operations. Zod-based request validation and configurable system settings with database-backed fallback handling.",
    github: null,
    live: null,
    tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Zod"],
  },
  {
    title: "AI Agent Run Panel",
    description:
      "Real-time React.js interface for visualizing multi-agent system activity and live streaming outputs. Implemented task lifecycle tracking for parallel execution, failures, retries, and cancellations with event-driven UI behavior.",
    github: "https://github.com/Madhu2003smita/agent-run-panel",
    live: "https://69cf445799c452d43a6ac7c1-extraordinary-basbousa-fd9e1f.netlify.app/",
    tags: ["React.js", "Real-time", "Multi-Agent Systems"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Built a real-time messaging application using WebSockets for low-latency, bidirectional communication. Designed a scalable backend architecture to support efficient real-time communication.",
    github: null,
    live: null,
    tags: ["Node.js", "WebSockets", "Real-time"],
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "PearlThoughts",
    period: "Jul 2026 – Present",
    points: [
      "Contribute to backend feature development in an agile team, from implementation through testing, debugging, and maintenance.",
      "Troubleshoot and resolve application issues while collaborating closely with team members on assigned tasks.",
      "Apply backend technologies and team development practices to deliver reliable, maintainable features.",
      "Collaborate with team members to complete assigned project tasks and application updates.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Must Fintech",
    period: "Aug 2025 – Mar 2026",
    points: [
      "Developed scalable Node.js/NestJS backend services with a modular, maintainable architecture.",
      "Designed and implemented RESTful APIs with JWT authentication, input validation, and structured error handling.",
      "Designed data models and optimized queries across PostgreSQL (relational) and MongoDB (NoSQL).",
      "Troubleshot and resolved API and data-layer performance bottlenecks to improve application responsiveness.",
      "Collaborated with frontend and deployment teams in an agile environment to deliver production-ready features on schedule.",
    ],
  },
  {
    role: "Frontend & Mobile Intern",
    company: "Ladybird Web Solution Pvt. Ltd.",
    period: "Jun 2024 – Sep 2024",
    points: [
      "Built cross-platform mobile components using React Native, contributing directly to mobile application features.",
      "Developed responsive web features using HTML, CSS, and JavaScript alongside mobile development work.",
      "Integrated RESTful APIs for frontend and backend data communication across web and mobile surfaces.",
      "Used Context API for frontend state management in component-driven applications.",
      "Assisted with debugging, testing, and performance improvements following structured development practices.",
    ],
  },
];

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Built", value: "10+" },
  { label: "Companies", value: "3" },
  { label: "Technologies", value: "20+" },
];

const navLinks = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

// LinkedIn SVG icon
function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after scrolling 400px
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans" style={{ scrollBehavior: "smooth" }}>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-400 tracking-wide">Madhusmita</span>
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-900 px-6 pb-4 flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-4xl font-bold mb-6 shadow-lg shadow-indigo-500/30">
          MS
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Madhusmita Shial
        </h1>
        <p className="mt-4 text-xl text-indigo-400 font-medium">Full Stack Developer | React.js · Node.js · REST APIs · SQL & NoSQL</p>

        {/* Currently at badge */}
        <span className="mt-3 inline-flex items-center gap-2 text-sm text-green-400 bg-green-900/30 border border-green-700 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Currently at PearlThoughts
        </span>

        <p className="mt-4 text-gray-400 max-w-xl text-base leading-relaxed">
          Full Stack Developer with hands-on experience building responsive React.js and React Native
          front-ends and Node.js/NestJS REST APIs backed by PostgreSQL and MongoDB. Skilled in JWT
          authentication, relational schema design, API integration, and Git-based agile workflows
          with CI/CD and Docker.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Madhu2003smita"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/madhusmita-shial"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
          >
            <LinkedInIcon className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
        <a href="#about" className="mt-16 text-gray-500 hover:text-indigo-400 transition-colors animate-bounce">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-6 rounded"></div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Full Stack Developer with hands-on experience building responsive React.js and React Native
          front-ends and Node.js/Express.js and NestJS REST APIs backed by PostgreSQL and MongoDB.
          Experienced in relational schema design, migrations, query optimization, API design and
          integration, JWT authentication, and Git-based collaborative workflows with CI/CD and Docker.
          Comfortable working in agile teams, debugging production issues, and delivering maintainable,
          well-structured code.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-indigo-500 transition-colors">
              <p className="text-3xl font-extrabold text-indigo-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contact info cards */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-indigo-400 font-semibold">Email</p>
            <p className="text-gray-300 mt-1 break-all">madhusmitabarsa19@gmail.com</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-indigo-400 font-semibold">Phone</p>
            <p className="text-gray-300 mt-1">+91 8114788283</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-indigo-400 font-semibold">Location</p>
            <p className="text-gray-300 mt-1">Bengaluru, India</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-indigo-400 font-semibold">Education</p>
            <p className="text-gray-300 mt-1">B.Tech CSE, CGPA 7.85</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
          <div className="w-12 h-1 bg-indigo-500 mb-8 rounded"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-indigo-500 transition-colors">
                <p className="text-indigo-400 font-semibold text-sm mb-1">{skill.category}</p>
                <p className="text-gray-300 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-8 rounded"></div>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.company} className="relative pl-6 border-l-2 border-indigo-600">
              <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-gray-950"></div>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="w-12 h-1 bg-indigo-500 mb-8 rounded"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded-full border border-indigo-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 text-sm font-medium">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="w-12 h-1 bg-indigo-500 mb-8 rounded"></div>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 flex flex-wrap justify-between gap-3">
            <div>
              <h3 className="text-white font-bold">Bachelor of Technology in Computer Science</h3>
              <p className="text-indigo-400 text-sm mt-1">Gandhi Institute of Excellent Technocrats, Bhubaneswar</p>
              <p className="text-gray-400 text-sm mt-1">CGPA: 7.85 / 10</p>
            </div>
            <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full h-fit">2020 – 2024</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 flex flex-wrap justify-between gap-3">
            <div>
              <h3 className="text-white font-bold">Class XII, CBSE</h3>
              <p className="text-indigo-400 text-sm mt-1">Sulagna Higher Secondary School, Balasore, Odisha</p>
              <p className="text-gray-400 text-sm mt-1">61%</p>
            </div>
            <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full h-fit">2018 – 2020</span>
          </div>
        </div>

        {/* Certifications */}
        <h3 className="text-xl font-bold text-white mt-12 mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-3">
          {["MERN Stack Development – JSpider", "AI Generative Model Workshop"].map((cert) => (
            <span key={cert} className="bg-indigo-900/40 border border-indigo-700 text-indigo-300 px-4 py-2 rounded-lg text-sm">
              🏅 {cert}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-indigo-500 mb-6 rounded mx-auto"></div>
          <p className="text-gray-400 mb-8">
            I'm open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:madhusmitabarsa19@gmail.com"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              madhusmitabarsa19@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/madhusmita-shial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Madhu2003smita"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-indigo-400 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>© 2026 Designed & Built by Madhusmita Shial</p>
      </footer>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
