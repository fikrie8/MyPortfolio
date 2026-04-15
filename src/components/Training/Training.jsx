import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiClock } from 'react-icons/fi';

const Training = () => {
  const trainingData = [
    {
      title: "Javascript 101 Bootcamp",
      provider: "Krenovator",
      year: "2026",
      duration: "5 Hours",
      skills: ["Javascipt"]
    },
    {
      title: "IONIC Mobile Application Development",
      provider: "MDEC / Atas Awan",
      year: "2019",
      duration: "10 Hours",
      skills: ["Mobile application development", "Javascript", "IONIC", "Cordova", "Angular"]
    },
    {
      title: "SCRUM & AGILE Inhouse Training",
      provider: "Comptel Internal Corporate Training",
      year: "2016",
      duration: "2 Days",
      skills: ["SCRUM", "AGILE"]
    },
    {
      title: "DOCKER Inhouse Training",
      provider: "Comptel Internal Corporate Training",
      year: "2016",
      duration: "1 Days",
      skills: ["Docker"]
    },
    {
      title: "MasterSAM Unix Product Owner Inhouse Training",
      provider: "Silverlake MasterSAM Internal Corporate Training",
      year: "2016",
      duration: "5 hours",
      skills: ["C", "Repository Make", "UNIX", "GIT"]
    },
    // Add more training here...
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-4">
      {trainingData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative p-6 bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                <FiBookOpen size={20} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {item.provider}
                </p>
              </div>
            </div>

            {/* Metadata (Year & Duration) */}
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <FiCalendar className="text-blue-500" />
                <span>{item.year}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiClock className="text-emerald-500" />
                <span>{item.duration}</span>
              </div>
            </div>
          </div>

          {/* Tags for Skills Covered */}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span key={i} className="text-[9px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg font-bold uppercase border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Training;
