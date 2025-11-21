"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
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

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => (
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
    className="px-4 py-2 bg-secondary/50 hover:bg-accent hover:text-accent-foreground text-muted-foreground rounded-full text-sm font-medium transition-colors duration-300 cursor-default border border-transparent hover:border-accent/20"
    role="listitem"
  >
    {skill}
  </motion.li>
);

export default function SkillsSection() {
  return (
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
  );
}
