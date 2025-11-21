"use client";

import { motion } from "framer-motion";
import ProjectCard from "./components/project-card";
import ExperienceCard from "./components/experience-card";
import SkillBadge from "./components/skill-badges";
import projectsData from "./data/projects";
import useActiveSection from "./hooks/use-active-section";
import { scrollToSection } from "./utils/scroll-utils";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

// Experience data
const experiences = [
  {
    role: "Frontend Engineer",
    company: "Mojo Web Technology",
    period: "Feb 2025 - Sep 2025",
    link: "#",
    responsibilities: [
      "Architected and developed an enterprise dashboard from 250+ Figma screens into scalable, production-ready code, building user and admin side interfaces with RBAC for seamless multi-user experiences",
      "Designed and engineered high-performance SaaS webapps and marketing landing pages, integrating Strapi CMS for blogs marketing teams to publish and manage blogs independently and improving load times by 40%.",
      "Established maintainable monorepo architectures with reusable component libraries and standardized design systems, accelerating development velocity by 40% and reducing future maintenance overhead by 30%.",
      "Implemented scalable full-stack solutions with real-time analytics, AI integration, and payment systems processing subscription management, resulting in 25% increased user engagement and 30% faster rendering performance.",
      "Enhanced performance and SEO, achieving 95+ Lighthouse scores through code-splitting, lazy loading, and SSG/SSR/ISR, and launched high-speed production applications using advanced optimization techniques.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Strapi CMS",
      "SEO Optimization",
      "SaaS Architecture",
    ],
    index: 0,
  },
  {
    role: "SDE Intern",
    company: "WDMtech Pvt Ltd",
    period: "July 2024 - Dec 2024",
    link: "#",
    responsibilities: [
      "Constructed a high-performance e-commerce platform from scratch, boosting user engagement by 25%, reducing rendering time, and increasing mobile traffic by 15% through responsive design and refined frontend architecture.",
      "Integrated payment solutions and streamlined checkout flows, driving 25% increase in client sales, while collaborating with stakeholders to deliver on-time projects and enhance user satisfaction by 30%.",
      "Streamlined the entire application using Backend-as-a-Service, including authentication of admin dashboard, ensuring 99.9% uptime and seamless data flow for product and content management.",
    ],
    skills: [
      "JavaScript",
      "ReactJs",
      "NextJs",
      "Tailwind CSS",
      "HTML/CSS",
      "Appwrite",
      "Payment Integration",
    ],
    index: 1,
  },
];

// Skills data - Enhanced organization
const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML/CSS", "SASS", "Python"],
  },
  {
    category: "Libraries/Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Tailwind CSS",
      "TanStack Router",
      "Axios",
      "React Query",
      "Zustand",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "React Testing Library",
      "Jest",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "npm",
      "Webpack",
      "Chrome DevTools",
      "Postman",
      "Android Studio",
      "Chrome Extensions",
      "Cursor",
    ],
  },
  {
    category: "Platforms/Services",
    skills: [
      "Figma",
      "Firebase",
      "RESTful APIs",
      "GraphQL",
      "tRPC",
      "CI/CD",
      "Docker",
      "Linux",
      "Hosting",
    ],
  },
];

// Main Home Component
export default function Home() {
  const activeSection = useActiveSection();

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 sm:px-6 py-8 sm:py-12 font-sans md:px-8 md:py-16 lg:px-12 lg:py-0 relative">
      {/* Background Mesh Effect */}
      <div className="bg-mesh" />

      <main className="lg:flex lg:justify-between lg:gap-8">
        {/* Left Sidebar - Introduction, Navigation, Social Links */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-16 xl:py-24">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="personal_heading"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-['Inter'] mb-3">
              Maruf Khan
            </h1>
            <h2 className="text-xl font-medium text-accent mb-4">
              Full Stack Engineer
            </h2>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Building accessible, pixel-perfect, <br /> high-performance experiences.</p>

            {/* Navigation */}
            <nav
              className="nav hidden lg:block mt-16"
              aria-label="In-page jump links"
            >
              <ul className="space-y-2" role="list">
                {[
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "projects", label: "Projects" },
                  { id: "skills", label: "Skills" },

                ].map((item) => (
                  <li key={item.id} role="listitem">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center py-2 w-full text-left transition-colors duration-300 ${activeSection === item.id
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                      aria-current={
                        activeSection === item.id ? "location" : undefined
                      }
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all duration-300 ${activeSection === item.id
                          ? "w-12 bg-accent"
                          : "w-8 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground"
                          }`}
                        aria-hidden="true"
                      ></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest">
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resume Download */}
            <div className="mt-12">
              <a
                href="https://drive.google.com/drive/folders/1Q9l_nYmgEmbMQPY6OAiZpb9ebory6Ftp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 rounded-full group"
                aria-label="Download resume"
              >
                View Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-1 mt-8 flex items-center space-x-5"
            role="list"
          >
            {[
              {
                name: "GitHub",
                url: "https://github.com/marufk21",
                icon: LuGithub,
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/marufk21/",
                icon: FaLinkedinIn,
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/marufique",
                icon: FaInstagram,
              },
              {
                name: "X",
                url: "https://x.com/marufique",
                icon: FaXTwitter,
              },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  role="listitem"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-accent transition-all duration-300 p-2 rounded-full hover:bg-secondary/50"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <IconComponent className="h-6 w-6" />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </header>

        {/* Main Content */}
        <main className="pt-16 lg:w-2/3 lg:py-16 xl:py-24">
          {/* About Section */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-labelledby="about-heading"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 lg:hidden"
            >
              <h2
                id="about-heading"
                className="text-2xl font-bold text-foreground font-['Inter']"
              >
                About
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 mt-4"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a <span className="text-foreground font-medium">Frontend-focused Full Stack Engineer</span> with 1+ years of
                experience building scalable SaaS and E-commerce applications
                using <span className="text-foreground font-medium">TypeScript, React.js, Next.js, and MERN</span>. Experienced in
                delivering SEO-optimized, high-performance enterprise dashboards
                and web applications while thriving in fast-paced, cross-functional environments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-['Inter'] flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    My Approach
                  </h3>
                  <p className="text-muted-foreground">
                    My expertise lies in building scalable, user-centric, and highly maintainable applications using TypeScript, React.js, Next.js, and the MERN stack. With a strong focus on performance and reliability, I strive to deliver smooth, high-quality user experiences by consistently optimizing application efficiency.
                  </p>
                </div>

                <div className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-['Inter'] flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Continuous Learning
                  </h3>
                  <p className="text-muted-foreground">
                    I am actively exploring AI full-stack development, sharpening my skills with a strong focus on Gen AI technologies. As a curious learner and passionate developer, I enjoy creating side projects that showcase my growth, experiments, and insights in this rapidly evolving space.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary/50 to-transparent rounded-xl p-6 mt-8 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3 font-['Inter']">
                  Let's Connect!
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, creative
                  projects, or potential collaborations.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:marufkhan2002@gmail.com"
                    className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Me
                  </a>
                  <a
                    href="tel:+918171244560"
                    className="inline-flex items-center px-5 py-2.5 bg-transparent border border-border text-foreground font-medium text-sm transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 8171244560
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-labelledby="experience-heading"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 lg:hidden"
            >
              <h2
                id="experience-heading"
                className="text-2xl font-bold text-foreground font-['Inter']"
              >
                Experience
              </h2>
            </motion.div>

            <div className="space-y-12 mt-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} index={index} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-labelledby="projects-heading"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 lg:hidden"
            >
              <h2
                id="projects-heading"
                className="text-2xl font-bold text-foreground font-['Inter']"
              >
                Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              {projectsData.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <a
                href="https://github.com/marufk21?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border border-accent text-accent font-medium text-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/20 rounded-full group"
                aria-label="View more projects on GitHub"
              >
                View More Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-labelledby="skills-heading"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 lg:hidden"
            >
              <h2
                id="skills-heading"
                className="text-2xl font-bold text-foreground font-['Inter']"
              >
                Technical Skills
              </h2>
            </motion.div>

            <div className="space-y-6 mt-8">
              {skillsData.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                >
                  <motion.h3
                    className="text-lg font-bold text-foreground mb-4 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-['Inter']">
                      {skillCategory.category}
                    </span>
                  </motion.h3>
                  <ul className="flex flex-wrap gap-3" role="list">
                    {skillCategory.skills.map((skill, idx) => (
                      <SkillBadge
                        key={`${skillCategory.category}-${skill}`}
                        skill={skill}
                        index={idx}
                      />
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>


        </main>
      </main>
    </div>
  );
}
