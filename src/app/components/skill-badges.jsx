import { motion } from "framer-motion";

// Skill Badge Component with Animation
const SkillBadge = ({ skill, index }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="text-accent text-sm bg-accent/10 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground cursor-pointer font-['Inter']"
    role="listitem"
  >
    {skill}
  </motion.li>
);

export default SkillBadge;
