import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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
        <FaGithub className="h-5 w-5" />
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

export default ProjectCard;
