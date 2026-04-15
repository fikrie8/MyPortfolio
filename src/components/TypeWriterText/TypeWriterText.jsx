import { motion } from 'framer-motion';

const TypeWriterText = ({ text, className, delay = 0 }) => {
  // Split the string into individual characters
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: when the overall animation starts
        // staggerChildren: time between each character appearing
        delayChildren: delay,
        staggerChildren: 0.05, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, display: 'none' },
    visible: { 
      opacity: 1, 
      display: 'inline-block' 
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypeWriterText;