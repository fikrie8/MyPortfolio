import { motion } from 'framer-motion';

const Language = () => {
  const languages = [
    { name: "Malay", level: "Native", percentage: 100 },
    { name: "English", level: "Professional Working Proficiency", percentage: 90 },
    { name: "German", level: "Beginner", percentage: 10 },
  ];

  return (
    <div className="space-y-8 py-2">
      {languages.map((lang, index) => (
        <div key={lang.name} className="space-y-3">
          <div className="flex justify-between items-end">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                {lang.name}
              </h4>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mt-1">
                {lang.level}
              </p>
            </div>
            <span className="text-sm font-medium text-slate-400">{lang.percentage}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${lang.percentage}%` }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
            />
          </div>
        </div>
      ))}

      <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-4">
        * Proficient in technical documentation and international cross-team communication.
      </p>
    </div>
  );
};

export default Language;
