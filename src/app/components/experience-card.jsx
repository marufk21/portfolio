import { motion } from "framer-motion";

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

export default ExperienceCard;
