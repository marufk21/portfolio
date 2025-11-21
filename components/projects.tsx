"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import snapstack from "@/assets/snapstack.png";
import vibesta from "@/assets/vibesta.png";
import streamtalk from "@/assets/streamtalk.png";
import f1extension from "@/assets/f1.png";

interface Project {
  id: number;
  title: string;
  link: string;
  github: string;
  description: string[];
  skills: string[];
  image: StaticImageData;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "SnapStack",
    link: "https://snackstack-gold.vercel.app/",
    github: "https://github.com/marufk21/snackstack",
    description: [
      "Spearheaded development of an AI-powered note-taking app delivering real-time AI suggestions boosting user productivity by 35% and improving content quality metrics by 40%.",
      "Engineered a robust, scalable SaaS architecture with Stripe integration, implementing multi-tiered pricing (Free/Pro/Enterprise) and secure webhook processing, resulting in 50% increase in subscription conversions.",
      "Developed a production-grade app with Clerk (Authentication), Prisma ORM (data modeling), Cloudinary (media storage), and PostHog (analytics), delivering a responsive UI with dark mode for enhanced usability.",
    ],
    skills: ["React", "shadcn", "Clerk", "PostgreSQL", "OpenAI", "Stripe"],
    image: snapstack,
  },
  {
    id: 2,
    title: "StreamTalk",
    link: "https://stream-talk.vercel.app/",
    github: "https://github.com/marufk21/StreamTalk",
    description: [
      "Built and deployed a real-time video conferencing platform with HD video streaming, live chat, and support for 10+ concurrent users under 200ms latency, leveraging low-latency communication and seamless cross-platform performance.",
      "Upgraded application infra from Next.js 13 → 15 for significantly enhanced performance and maintainability; Optimized real-time reliability by integrating WebRTC with adaptive reconnection and peer recovery mechanisms, reducing connection downtime by 20s and greatly improving user experience.",
    ],
    skills: ["Next.js", "Aceternity UI", "PeerJS", "WebRTC", "Socket.IO"],
    image: streamtalk,
  },
  {
    id: 3,
    title: "Vibesta",
    link: "https://vibesta.onrender.com",
    github: "https://github.com/marufk21/Vibesta",
    description: [
      "Developed a full-featured social media app enabling photo sharing, likes, comments, and personalized feeds for connected users.",
      "Implemented secure authentication, profile customization, and real-time chat for seamless interaction using Socket.io.",
      "Optimized MongoDB queries and API response times, resulting in faster content delivery and smoother user experience.",
    ],
    skills: ["MERN Stack", "axios", "shadcn UI", "Sockets", "bcrypt", "JWT"],
    image: vibesta,
  },
  {
    id: 6,
    title: "F1-Extension",
    link: "https://github.com/marufk21/F1-Racing-Extension",
    github: "https://github.com/marufk21/F1-Racing-Extension",
    description: [
      "Developed a Chrome extension providing real-time Formula 1 race updates, schedules, and results directly in-browser.",
      "Integrated live APIs to fetch up-to-date race data and enhance user engagement during live events.",
      "Optimized extension performance and caching mechanisms to deliver instant data refreshes with minimal bandwidth usage, ensuring a seamless user experience during live race updates.",
    ],
    skills: ["ReactJS", "Chrome Extensions", "JavaScript"],
    image: f1extension,
  },
];

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
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
    className="group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30"
    role="article"
    aria-labelledby={`project-title-${project.id}`}
  >
    <div className="relative h-48 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    <div className="flex flex-col flex-grow p-6">
      <div className="flex justify-between items-start mb-4">
        <h3
          id={`project-title-${project.id}`}
          className="text-xl font-bold text-foreground font-['Inter'] group-hover:text-accent transition-colors duration-300"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            aria-label={`View ${project.title} project`}
          >
            {project.title}
            <LuExternalLink className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </a>
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-1"
          aria-label={`View ${project.title} GitHub repository`}
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>

      <ul className="space-y-2 mb-6 flex-grow" role="list">
        {project.description.map((desc, idx) => (
          <li key={idx} className="text-sm text-muted-foreground flex items-start">
            <span className="mr-2 text-accent mt-1.5 text-[10px]">●</span>
            {desc}
          </li>
        ))}
      </ul>
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
        className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
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
  );
}
