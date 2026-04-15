import { motion } from 'framer-motion';

const DarkModeToggle = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-gray-100 dark:bg-slate-800 shadow-sm border border-gray-200 dark:border-slate-700 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      <motion.span
        initial={false}
        animate={{ rotate: isDark ? 0 : 90, opacity: 1 }}
        className="block text-xl"
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  );
};

export default DarkModeToggle;
