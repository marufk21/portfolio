import { motion } from "framer-motion";

// Enhanced Skill Badge Component with improved styling and animations
const SkillBadge = ({ skill, index }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{
      scale: 1.05,
      y: -3,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.3,
      delay: index * 0.03,
    }}
    className="text-accent text-sm bg-accent/10 px-4 py-2 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground cursor-pointer font-['Inter'] font-medium border border-accent/30 hover:border-accent/50 relative overflow-hidden border-enhanced"
    role="listitem"
  >
    <span className="relative z-10">{skill}</span>
    <motion.span
      className="absolute inset-0 bg-accent opacity-0 hover:opacity-10"
      whileHover={{ opacity: 0.1 }}
      transition={{ duration: 0.2 }}
    />
  </motion.li>
);

export default SkillBadge;
