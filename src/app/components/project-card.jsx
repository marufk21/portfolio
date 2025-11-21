import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const ProjectCard = ({ project, index }) => (
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

export default ProjectCard;
