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
        <h3 className="text-lg font-bold text-foreground font-['Inter']">
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


  </motion.article>
);

export default ExperienceCard;
