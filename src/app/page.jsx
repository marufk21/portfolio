"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vibesta from "./assets/vibesta.jpg";
import streamtalk from "./assets/streamtalk.jpg";
import electrikart from "./assets/electrikart.png";
import infinichat from "./assets/infinichat.jpg";
import f1extension from "./assets/f1extension.png";

// Project data
const projects = [
  {
    id: 1,
    title: "SnapStack",
    link: "#",
    github: "https://github.com/marufk21",
    description: [
      "Spearheaded development of an AI-powered note-taking app delivering real-time AI suggestions boosting user productivity by 35% and improving content quality metrics by 40%.",
      "Engineered a robust, scalable SaaS architecture with Stripe integration, implementing multi-tiered pricing (Free/Pro/Enterprise) and secure webhook processing, resulting in 50% increase in subscription conversions.",
      "Developed a production-grade app with Prisma ORM (data modeling), Cloudinary (media storage), and PostHog (analytics), delivering a responsive UI with dark mode for enhanced usability.",
    ],
    skills: ["React", "shadcn", "Clerk", "PostgreSQL", "OpenAI", "Stripe"],
    image: streamtalk,
  },
  {
    id: 2,
    title: "StreamTalk",
    link: "https://stream-talk.vercel.app/",
    github: "https://github.com/marufk21/StreamTalk",
    description: [
      "Built a real-time video conferencing platform with HD video, live chat and supporting 10+ concurrent users with latency under 200ms.",
      "Upgraded infra from Next.js 7 → 15 for enhanced performance and maintainability.",
      "Optimized real-time reliability by implementing Socket.IO auto-reconnect, reducing reconnection delays by 20s and enhancing user experience.",
    ],
    skills: ["Next.js", "Aceternity UI", "PeerJS", "WebRTC"],
    image: streamtalk,
  },
  {
    id: 3,
    title: "Vibesta",
    link: "https://vibesta.onrender.com",
    github: "https://github.com/marufk21/Vibesta",
    description: [
      "A social media app allows users to sign up, log in, and access personalized features. They can share photos, create profiles, and interact with content through likes and comments in a dynamic feed of posts from people they follow.",
      "It also includes real-time chat messaging for seamless communication with friends and profile customization options, such as updating personal details and profile pictures.",
    ],
    skills: [
      "MERN Stack",
      "axios",
      "shadcn UI",
      "sockets",
      "bcrypt",
      "jwt-tokens",
    ],
    image: vibesta,
  },
  {
    id: 4,
    title: "Electrikart",
    link: "https://electrikart.netlify.app",
    github: "https://github.com/marufk21/ElectriKart",
    description: [
      "An Ecommerce Store with an interactive UI, including carousels and product cards. The Products Page has a sidebar for filtering search results by categories, colors, and price ranges for easy browsing.",
      "Each Single Product Page offers detailed information on functionality, images, descriptions, reviews, and availability.",
      "The Cart Page displays items in the user's cart, including images, prices, quantities, subtotal, and shipping fees, with options to remove items or clear the cart. The Contact Page allows users to provide feedback or file complaints, ensuring effective communication.",
    ],
    skills: ["ReactJS", "Hooks", "Context-API", "React-Router"],
    image: electrikart,
  },
  {
    id: 5,
    title: "InfinityChat",
    link: "https://main--infinichat.netlify.app/",
    github: "https://github.com/marufk21/InfiniChat",
    description: [
      "Infinitychat is an AI chatbot application designed to offer seamless messaging with a modern user interface. Key features include real-time messaging, an attractive user-friendly design, and enhanced functionality through Gemini API integration, ensuring an engaging and efficient chat experience for users.",
    ],
    skills: ["ReactJS", "Tailwind-CSS", "Gemini-API", "Chatbot"],
    image: infinichat,
  },
  {
    id: 6,
    title: "F1-Extension",
    link: "https://github.com/marufk21/F1-Racing-Extension",
    github: "https://github.com/marufk21/F1-Racing-Extension",
    description: [
      "F1 Racing Extension is a browser extension for Formula 1 enthusiasts that provides real-time updates about the races, including race results, schedules, and more. This extension enhances the F1 experience by offering up-to-date information directly in your browser.",
    ],
    skills: ["ReactJS", "Chrome Extensions", "JavaScript"],
    image: f1extension,
  },
];

// Skill Tag Component
const SkillTag = ({ skill, index }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="mt-2 mr-1.5"
  >
    <div
      className="text-accent rounded-full leading-5 flex items-center bg-accent/10 px-3 py-1 font-medium text-xs transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
      role="listitem"
    >
      {skill}
    </div>
  </motion.li>
);

// Project Card Component with Animation
const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
    role="article"
    aria-labelledby={`project-title-${project.id}`}
  >
    <div className="flex justify-between items-start">
      <h3
        id={`project-title-${project.id}`}
        className="text-foreground font-bold py-1"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl group"
          aria-label={`View ${project.title} project`}
        >
          <span className="inline-block group-hover:text-accent transition-colors duration-300">
            {project.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 ml-1 translate-y-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </h3>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-accent text-muted-foreground transition-colors duration-300"
        aria-label={`View ${project.title} GitHub repository`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
    </div>

    <ul className="py-3" role="list">
      {project.description.map((desc, idx) => (
        <li key={idx} className="text-sm py-1 text-muted-foreground">
          {desc}
        </li>
      ))}
    </ul>

    <ul className="flex skills flex-wrap mt-3 mb-4" role="list">
      {project.skills.map((skill, idx) => (
        <SkillTag key={idx} skill={skill} index={idx} />
      ))}
    </ul>

    <div className="rounded-lg overflow-hidden border border-border">
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        width={600}
        height={300}
        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
  </motion.article>
);

// Experience Card Component with Animation
const ExperienceCard = ({
  role,
  company,
  period,
  link,
  responsibilities,
  skills,
  index,
}) => (
  <motion.article
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card rounded-xl border border-border p-6 mb-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
    role="article"
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
      <div>
        <h3 className="text-lg font-bold text-foreground">
          {role},{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {company}
          </a>
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{period}</p>
      </div>
    </div>

    <ul className="space-y-2 mb-4" role="list">
      {responsibilities.map((item, idx) => (
        <li key={idx} className="text-muted-foreground flex">
          <span className="text-accent mr-2" aria-hidden="true">
            ›
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <ul className="flex flex-wrap gap-2" role="list">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          className="text-accent text-xs bg-accent/10 px-2 py-1 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          role="listitem"
        >
          {skill}
        </li>
      ))}
    </ul>
  </motion.article>
);

// Skill Badge Component with Animation
const SkillBadge = ({ skill, index }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="text-accent text-sm bg-accent/10 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground cursor-pointer"
    role="listitem"
  >
    {skill}
  </motion.li>
);

// Main Home Component
export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 sm:px-6 py-8 sm:py-12 font-sans md:px-8 md:py-16 lg:px-12 lg:py-0">
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Maruf Khan
            </h1>
            <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-accent">
              Full Stack Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              Frontend-focused Full Stack Engineer with 1+ years of experience
              building scalable SaaS and E-commerce applications using React.js,
              Next.js, and TypeScript. Experienced in delivering SEO-optimized,
              high-performance enterprise dashboards and web applications.
            </p>

            {/* Navigation */}
            <nav
              className="nav hidden lg:block mt-10"
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
                      className={`group flex items-center py-2 w-full text-left transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-accent"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-current={
                        activeSection === item.id ? "location" : undefined
                      }
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                          activeSection === item.id
                            ? "w-12 bg-accent"
                            : "w-8 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground"
                        }`}
                        aria-hidden="true"
                      ></span>
                      <span className="nav-text text-sm font-medium uppercase tracking-wider">
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resume Download */}
            <div className="mt-8">
              <a
                href="https://drive.google.com/drive/folders/1SYKXDHFdwqV2zSI1_TcN5j3dZzdgPNA-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                aria-label="Download resume"
              >
                View Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-4 w-4"
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
            className="ml-1 mt-8 flex items-center space-x-4"
            role="list"
          >
            {[
              {
                name: "GitHub",
                url: "https://github.com/marufk21",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2-.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/marufk21/",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                ),
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/marufique",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-68.51,2.62-202s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202,2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                ),
              },
              {
                name: "Twitter",
                url: "https://x.com/marufique",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 248 204"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      id="white_background"
                      d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                    ></path>
                  </svg>
                ),
              },
            ].map((social, index) => (
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
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              </motion.li>
            ))}
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
              className="sticky top-0 z-20 -mx-4 bg-background/75 backdrop-blur-sm px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              <h2
                id="about-heading"
                className="text-2xl font-bold text-foreground"
              >
                About
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-muted-foreground">
                I'm a Frontend-focused Full Stack Engineer with 1+ years of
                experience building scalable SaaS and E-commerce applications
                using React.js, Next.js, and TypeScript. Experienced in
                delivering SEO-optimized, high-performance enterprise dashboards
                and web applications.
              </p>
              <p className="text-muted-foreground">
                My expertise lies in creating optimized, user-centric
                applications using React.js, Next.js, and MERN. A performance
                enthusiast at heart, I am committed to enhancing user
                experiences by continuously improving application efficiency.
                Alongside my frontend skills, I have a solid understanding of
                backend technologies and DevOps tools, and I am well-versed in
                Problem Solving.
              </p>
              <p className="text-muted-foreground">
                I am constantly exploring new technologies like React Native and
                backend frameworks to broaden my knowledge. As a dedicated
                learner and passionate developer, I enjoy sharing my insights
                through my side projects.
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Connect:</span>{" "}
                +91 8171244560 |{" "}
                <a
                  href="mailto:marufkhan2002@gmail.com"
                  className="text-accent hover:underline"
                >
                  marufkhan2002@gmail.com
                </a>
              </p>
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
              className="sticky top-0 z-20 -mx-4 bg-background/75 backdrop-blur-sm px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              <h2
                id="experience-heading"
                className="text-2xl font-bold text-foreground"
              >
                Experience
              </h2>
            </motion.div>

            <div className="space-y-8">
              <ExperienceCard
                role="Full Stack Developer"
                company="Mojo Web Technology"
                period="Feb 2025 - Sep 2025"
                link="#"
                responsibilities={[
                  "Architected and deployed enterprise web applications with 250+ screens, implementing role-based access control and scalable architectures, enabling seamless multi-user experiences across platforms.",
                  "Designed and engineered high-performance SaaS webapps and marketing landing pages, integrating Strapi CMS for blogs marketing teams to publish and manage blogs independently and improving load times by 30%.",
                  "Established maintainable monorepo architectures with reusable component libraries and standardized design systems, accelerating development velocity by 40% and reducing future maintenance overhead by 30%.",
                  "Implemented scalable full-stack solutions with real-time analytics, AI integration, and payment systems processing subscription management, resulting in 25% increased user engagement and 30% faster rendering performance.",
                  "Enhanced performance and SEO, achieving 95+ Lighthouse scores through code-splitting, lazy loading, and SSG/ISR, and launched high-speed production applications using advanced optimization techniques.",
                ]}
                skills={[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Strapi CMS",
                  "SEO Optimization",
                  "SaaS Architecture",
                ]}
                index={0}
              />

              <ExperienceCard
                role="SDE Intern"
                company="WDMtech Pvt Ltd"
                period="July 2024 - Dec 2024"
                link="#"
                responsibilities={[
                  "Constructed a high-performance e-commerce platform from scratch, boosting user engagement by 25%, reducing rendering time, and increasing mobile traffic by 15% through responsive design and refined frontend architecture.",
                  "Integrated payment solutions and streamlined checkout flows, driving 25% increase in client sales, while collaborating with stakeholders to deliver on-time projects and enhance user satisfaction by 30%.",
                  "Developed the entire application using Backend-as-a-Service (Appwrite), including authentication of admin dashboard, ensuring 99.9% uptime and seamless data flow for product and content management.",
                ]}
                skills={[
                  "JavaScript",
                  "ReactJs",
                  "NextJs",
                  "Tailwind CSS",
                  "HTML/CSS",
                  "Appwrite",
                  "Payment Integration",
                ]}
                index={1}
              />
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
              className="sticky top-0 z-20 -mx-4 bg-background/75 backdrop-blur-sm px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              <h2
                id="projects-heading"
                className="text-2xl font-bold text-foreground"
              >
                Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
            >
              <a
                href="https://github.com/marufk21?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                aria-label="View more projects on GitHub"
              >
                View More Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-4 w-4"
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
              className="sticky top-0 z-20 -mx-4 bg-background/75 backdrop-blur-sm px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              <h2
                id="skills-heading"
                className="text-2xl font-bold text-foreground"
              >
                Technical Skills
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Languages
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "HTML/CSS",
                    "SASS",
                    "Python",
                  ].map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Libraries/Frameworks
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {[
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
                  ].map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Tools
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {[
                    "Git",
                    "npm",
                    "Webpack",
                    "Chrome DevTools",
                    "Postman",
                    "Visual Studio",
                    "Android Studio",
                    "Chrome Extensions",
                  ].map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Platforms/Services
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {[
                    "Figma",
                    "Firebase",
                    "RESTful APIs",
                    "GraphQL",
                    "tRPC",
                    "CI/CD",
                    "Docker",
                    "Linux",
                    "Hosting",
                  ].map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        </main>
      </main>
    </div>
  );
}
