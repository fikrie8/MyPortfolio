import { motion } from 'framer-motion';

const AboutMe = () => {
  // Highlights to show your "Senior" mindset
  const highlights = [
    { title: "Engineering Mindset", desc: "Applying structural problem-solving to software architecture." },
    { title: "Fullstack Mastery", desc: "Seamlessly connecting React frontends with Spring Boot backends." },
    { title: "Clean Code", desc: "Prioritizing maintainability, scalability, and technical debt reduction." }
  ];

  return (
    <div className="space-y-6">
      {/* Intro Text */}
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
        I am a <span className="text-blue-600 dark:text-blue-400 font-bold">Fullstack Developer</span> with 
        a professional background in <span className="font-semibold text-slate-900 dark:text-white">Engineering</span>. 
        I don't just write code; I build systems. My approach combines the precision of engineering with 
        modern web technologies to deliver high-performance, scalable solutions.
      </p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        {highlights.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
          >
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-tighter">
              {item.title}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 italic text-sm border-l-4 border-blue-500 pl-4 py-1">
        "I believe that great software is the result of disciplined engineering and a passion for user experience."
      </p>
    </div>
  );
};

export default AboutMe;
