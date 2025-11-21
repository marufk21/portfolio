"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { useScrollTo } from "@/hooks/use-scroll";

interface IntroSidebarProps {
  activeSection: string;
}

const navigationItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const socialLinks = [
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
];

export default function IntroSidebar({ activeSection }: IntroSidebarProps) {
  const scrollToSection = useScrollTo();
  
  return (
    <header className="lg:sticky lg:top-2 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-12 xl:py-24">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="personal_heading"
      >
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight text-foreground font-['Inter'] mb-3">
          Maruf Khan
        </h1>
        <h2 className="text-xl font-medium text-accent mb-3">
          Software Engineer
        </h2>
        <p className="text-muted-foreground max-w-xs leading-relaxed">
          Building accessible, pixel-perfect, <br /> high-performance experiences.
        </p>

        {/* Navigation */}
        <nav
          className="nav hidden lg:block mt-16"
          aria-label="In-page jump links"
        >
          <ul className="space-y-2" role="list">
            {navigationItems.map((item) => (
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
        {socialLinks.map((social, index) => {
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
  );
}
