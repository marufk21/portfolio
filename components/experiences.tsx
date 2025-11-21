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
    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-accent before:to-transparent"
    role="article"
  >
    <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
      <h3 className="text-xl font-bold text-foreground font-['Inter']">
        {role}
        <span className="text-accent mx-2">@</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-colors duration-300"
        >
          {company}
        </a>
      </h3>
      <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full mt-2 sm:mt-0">
        {period}
      </span>
    </div>

    <ul className="space-y-3 mb-6" role="list">
      {responsibilities.map((item, idx) => (
        <li key={idx} className="text-muted-foreground text-base leading-relaxed flex items-start">
          <span className="mr-3 text-accent mt-1.5">›</span>
          {item}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span 
          key={idx}
          className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
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
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} index={index} />
        ))}
      </div>
    </section>
  );
}
