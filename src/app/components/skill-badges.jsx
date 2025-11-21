import { motion } from "framer-motion";

const SkillBadge = ({ skill, index }) => (
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

export default SkillBadge;
