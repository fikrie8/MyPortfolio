import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiStar, FiZap } from 'react-icons/fi';

const AchievementAndAwards = () => {
  const awards = [
    {
      title: "S.P.A.T.I.C Award(Teamwork & Attitude)",
      organization: "Silverlake MasterSAM Sdn. Bhd",
      date: "2016",
      description: "Recognized for exceptional contribution to the StarGate product launch and resolving critical legacy bugs.",
      icon: <FiAward className="text-amber-600" />,
      color: "border-amber-500/20 bg-amber-50/50 dark:bg-amber-900/10"
    },
    {
      title: "S.P.A.T.I.C Award(Teamwork & Attitude)",
      organization: "MasterSAM Sdn. Bhd",
      date: "2015",
      description: "Recognized for contribution to the MasterSAM Integrated Gateway and MasterSAM UNIX product.",
      icon: <FiAward className="text-amber-400" />,
      color: "border-amber-500/20 bg-amber-50/50 dark:bg-amber-900/10"
    },
    // Add more awards here...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-10">
      {awards.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`p-8 rounded-[2.5rem] border ${item.color} transition-all hover:scale-[1.02] duration-300`}
        >
          <div className="flex items-start gap-6">
            {/* Icon "Trophy" Circle */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-3xl shrink-0">
              {item.icon}
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {item.organization} • {item.date}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                "{item.description}"
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementAndAwards;
