"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import snackstack from "@/assets/snackstack.png";
import streamtalk from "@/assets/streamtalk.png";
import shopai from "@/assets/shopai.png";
import f1extension from "@/assets/f1.png";

interface Project {
  id: number;
  title: string;
  tag: string;
  link: string;
  github: string;
  description: string[];
  skills: string[];
  image: StaticImageData;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Snackstack",
    tag: "AI SaaS",
    link: "https://snackstack-gold.vercel.app/",
    github: "https://github.com/marufk21/snackstack",
    description: [
      "Spearheaded development of an AI-powered note-taking app delivering real-time AI suggestions boosting user productivity by 35% and improving content quality metrics by 40%.",
      "Engineered a robust, scalable SaaS architecture with Stripe integration, implementing multi-tiered pricing (Free/Pro/Enterprise) and secure webhook processing, resulting in 50% increase in subscription conversions.",
      "Developed a production-grade app with Clerk (Authentication), Prisma ORM (data modeling), Cloudinary (media storage), and PostHog (analytics), delivering a responsive UI with dark mode for enhanced usability.",
    ],
    skills: ["React", "shadcn", "Clerk", "PostgreSQL", "OpenAI", "Stripe"],
    image: snackstack,
  },
  {
    id: 2,
    title: "ShopAI",
    tag: "E-commerce",
    link: "https://shop-ai-client-azure.vercel.app",
    github: "https://github.com/marufk21/Shop-AI",
    description: [
      "Developed a RAG-based e-commerce platform with a full admin dashboard for product and order management, plus a user-facing storefront and AI chatbot powered by LangChain and OpenAI embeddings.",
      "Implemented semantic product search using pgvector for vector similarity, enabling natural language queries and intelligent product discovery that significantly improves the shopping experience.",
      "Built the entire full-stack application with Next.js, PostgreSQL, and Prisma, delivering a responsive, production-grade platform with optimized performance.",
    ],
    skills: ["Next.js", "LangChain", "OpenAI", "pgvector", "PostgreSQL", "Prisma"],
    image: shopai,
  },
  {
    id: 3,
    title: "StreamTalk",
    tag: "Video Chat",
    link: "https://stream-talk.vercel.app/",
    github: "https://github.com/marufk21/StreamTalk",
    description: [
      "Built and deployed a real-time video conferencing platform with HD video streaming, live chat, and support for 10+ concurrent users under 200ms latency, leveraging low-latency communication and seamless cross-platform performance.",
      "Upgraded application infra from Next.js 13 to 15 for significantly enhanced performance and maintainability; Optimized real-time reliability by integrating WebRTC with adaptive reconnection and peer recovery mechanisms, reducing connection downtime by 20s and greatly improving user experience.",
    ],
    skills: ["Next.js", "Aceternity UI", "PeerJS", "WebRTC", "Socket.IO"],
    image: streamtalk,
  },
  {
    id: 6,
    title: "F1-Extension",
    tag: "Chrome Extension",
    link: "https://github.com/marufk21/F1-Racing-Extension",
    github: "https://github.com/marufk21/F1-Racing-Extension",
    description: [
      "Developed a Chrome extension providing real-time Formula 1 race updates, schedules, and results directly in-browser.",
      "Integrated live APIs to fetch up-to-date race data and enhance user engagement during live events.",
      "Optimized extension performance and caching mechanisms to deliver instant data refreshes with minimal bandwidth usage, ensuring a seamless user experience during live race updates.",
    ],
    skills: ["ReactJS", "WXT"],
    image: f1extension,
  },
];

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    tag: string;
    link: string;
    github: string;
    description: string[];
    skills: string[];
    image: StaticImageData;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-border/60 bg-card/85 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.3)] transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
    role="article"
    aria-labelledby={`project-title-${project.id}`}
  >
    <div className="relative h-48 w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-45" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-card via-card/40 to-transparent" />
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    <div className="flex flex-grow flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3
          id={`project-title-${project.id}`}
          className="flex items-center gap-2 text-xl font-bold text-foreground font-['Inter'] transition-colors duration-300 group-hover:text-accent"
        >
          {project.title}
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
            {project.tag}
          </span>
        </h3>
        <div className="flex items-center gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label={`View ${project.title} project`}
          >
            <LuExternalLink className="h-4 w-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label={`View ${project.title} GitHub repository`}
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ul className="mb-6 flex-grow space-y-2" role="list">
        {project.description.map((desc, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-muted-foreground"
          >
            <span className="mr-2 mt-1.5 text-[10px] text-accent">&#9679;</span>
            {desc}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.skills.map((skill, idx) => (
          <span
            key={idx}
            className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading sticky top-0 z-20 -mx-4 bg-background/80 px-4 py-3 backdrop-blur-md transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <h2
          id="projects-heading"
          className="text-2xl font-bold text-foreground font-['Inter']"
        >
          Projects
        </h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href="https://github.com/marufk21?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center rounded-full border border-accent/70 bg-transparent px-8 py-4 text-sm font-medium text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/20"
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
  );
}
