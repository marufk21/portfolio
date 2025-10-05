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
    className="bg-card rounded-xl border border-border p-6 mb-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
    role="article"
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
      <div>
        <h3 className="text-lg font-bold text-foreground">
          {role},{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {company}
          </a>
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{period}</p>
      </div>
    </div>

    <ul className="space-y-2 mb-4" role="list">
      {responsibilities.map((item, idx) => (
        <li key={idx} className="text-muted-foreground flex">
          <span className="text-accent mr-2" aria-hidden="true">
            ›
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <ul className="flex flex-wrap gap-2" role="list">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          className="text-accent text-xs bg-accent/10 px-2 py-1 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          role="listitem"
        >
          {skill}
        </li>
      ))}
    </ul>
  </motion.article>
);

export default ExperienceCard;
