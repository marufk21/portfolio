"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiAxios,
  SiReactquery,
  SiRedux,
  SiReacthookform,
  SiZod,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiNpm,
  SiWebpack,
  SiGooglechrome,
  SiPostman,
  SiAndroidstudio,
  SiFigma,
  SiFirebase,
  SiGraphql,
  SiTrpc,
  SiDocker,
  SiLinux,
  SiGithubactions,
} from "react-icons/si";
import { FaServer, FaCode, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { LuMousePointerClick } from "react-icons/lu";

interface Skill {
  name: string;
  icon?: React.ElementType;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "SASS", icon: SiSass },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Libraries/Frameworks",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TanStack Router", icon: FaCode }, // Generic code icon
      { name: "Axios", icon: SiAxios },
      { name: "React Query", icon: SiReactquery },
      { name: "Zustand", icon: FaDatabase }, // Generic state icon
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Zod", icon: SiZod },
      { name: "React Testing Library", icon: SiTestinglibrary },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "npm", icon: SiNpm },
      { name: "Webpack", icon: SiWebpack },
      { name: "Chrome DevTools", icon: SiGooglechrome },
      { name: "Postman", icon: SiPostman },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Chrome Extensions", icon: SiGooglechrome },
      { name: "Cursor", icon: LuMousePointerClick },
    ],
  },
  {
    category: "Platforms/Services",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Firebase", icon: SiFirebase },
      { name: "RESTful APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "tRPC", icon: SiTrpc },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Hosting", icon: FaServer },
    ],
  },
];

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  const Icon = skill.icon;

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
        delay: index * 0.02,
      }}
      className="group flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-accent hover:text-accent-foreground text-muted-foreground rounded-full text-sm font-medium transition-all duration-300 cursor-default border border-transparent hover:border-accent/20 hover:shadow-md hover:shadow-accent/10"
      role="listitem"
    >
      {Icon && (
        <Icon className="w-4 h-4 transition-colors duration-300 group-hover:text-primary" />
      )}
      <span>{skill.name}</span>
    </motion.li>
  );
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mb-8 scroll-mt-0 md:mb-0 lg:mb-0 lg:scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <h2
          id="skills-heading"
          className="text-2xl font-bold text-foreground font-['Inter']"
        >
          Technical Skills
        </h2>
      </motion.div>

      <div className="space-y-8 mt-8">
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 border border-border/50"
          >
            <motion.h3
              className="text-lg font-bold text-foreground mb-6 flex items-center relative pl-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-0 w-1 h-6 bg-primary rounded-full" />
              <span className="font-['Inter'] tracking-tight">
                {skillCategory.category}
              </span>
            </motion.h3>
            <ul className="flex flex-wrap gap-3" role="list">
              {skillCategory.skills.map((skill, idx) => (
                <SkillBadge
                  key={`${skillCategory.category}-${skill.name}`}
                  skill={skill}
                  index={idx}
                />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
