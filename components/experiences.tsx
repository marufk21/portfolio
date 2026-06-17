"use client";

import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  link: string;
  responsibilities: string[];
  skills: string[];
  index: number;
}

const experiencesData: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Personal Work",
    period: "Oct 2025 - Present",
    link: "#",
    responsibilities: [
      "Built Snackstack, an AI-powered full-stack SaaS using Next.js, the TanStack ecosystem, and PostgreSQL with Stripe subscription billing and automated test cases using Jest and Playwright.",
      "Developed ShopAI, a RAG-based e-commerce platform with admin dashboard, product management, and a user-facing storefront with chatbot using LangChain, OpenAI embeddings, and pgvector for semantic search.",
      "Developed a real-time video calling app using WebRTC and Socket.IO with chat and reconnection handling, plus optimized performance and SEO across all projects via SSR, lazy loading, and metadata tuning.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "TanStack",
      "LangChain",
      "OpenAI",
      "Stripe",
      "WebRTC",
    ],
    index: 0,
  },
  {
    role: "Full Stack Developer",
    company: "Mojo Web Technology",
    period: "Jan 2025 - Oct 2025",
    link: "#",
    responsibilities: [
      "Converted 250+ Figma screens into production-ready UIs with role-based access for 8+ admin types and implemented a real-time data layer with efficient state handling, reducing redundant API calls by 40%.",
      "Led development of SaaS dashboards and landing pages, integrating CMS for non-tech teams to manage blogs independently, and architected reusable shadcn components with MCP Server, reducing UI development time by 35%.",
      "Achieved 90+ Lighthouse scores through performance optimizations across all metrics using SSR/SSG, managed frontend deployment on Vercel and backend on AWS, and implemented CI/CD pipelines for automated builds.",
      "Enforced monorepo architecture and code review standards, reducing bug regression across sprints and accelerating cross-team development velocity.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "AWS",
      "CI/CD",
      "Monorepo",
      "Figma",
    ],
    index: 1,
  },
  {
    role: "Web Developer Intern",
    company: "WDMtech Pvt Ltd",
    period: "July 2024 - Dec 2024",
    link: "#",
    responsibilities: [
      "Built a mobile-first e-commerce interface covering product listing, cart, and checkout with API integration, cutting average page load time by 25% via lazy loading, code splitting, and image optimization.",
      "Engineered a responsive admin panel for products, orders, and content management, removing developer dependency in daily operations and reducing reported frontend bugs by 50% across 5+ breakpoints.",
      "Defined API contracts with the backend team and validated integrations via Postman, speeding up delivery cycles and ensuring on-time project completion.",
    ],
    skills: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "HTML/CSS",
      "REST APIs",
      "Postman",
      "E-commerce",
    ],
    index: 2,
  },
];

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  link: string;
  responsibilities: string[];
  skills: string[];
  index: number;
}

const ExperienceCard = ({
  role,
  company,
  period,
  link,
  responsibilities,
  skills,
  index,
}: ExperienceCardProps) => (
  <motion.article
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-[1.65rem] border border-border/60 bg-card/85 px-6 py-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
    role="article"
  >
    <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="text-xl font-bold text-foreground font-['Inter']">
        {role}
        <span className="mx-2 text-accent">@</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors duration-300 hover:text-accent"
        >
          {company}
        </a>
      </h3>
      <span className="mt-2 rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground sm:mt-0">
        {period}
      </span>
    </div>

    <ul className="mb-6 space-y-3" role="list">
      {responsibilities.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start text-base leading-relaxed text-muted-foreground"
        >
          <span className="mr-3 mt-1.5 text-accent">&#8250;</span>
          {item}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.article>
);

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-heading sticky top-0 z-20 -mx-4 bg-background/80 px-4 py-3 backdrop-blur-md transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <h2
          id="experience-heading"
          className="text-2xl font-bold text-foreground font-['Inter']"
        >
          Experience
        </h2>
      </motion.div>

      <div className="mt-8 space-y-8">
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} index={index} />
        ))}
      </div>
    </section>
  );
}
