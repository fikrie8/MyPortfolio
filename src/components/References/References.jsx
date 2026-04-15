import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiShield } from 'react-icons/fi';

const References = () => {
  const references = [
    {
      name: "Your Former Manager",
      role: "Engineering Manager",
      company: "Silverlake MasterSAM",
      relation: "Former Supervisor",
    },
    {
      name: "Your Senior Colleague",
      role: "Technical Architect",
      company: "Tech Global Solutions",
      relation: "Technical Lead",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Privacy Note */}
      <div className="flex items-center gap-3 p-4 mb-8 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl text-blue-600 dark:text-blue-400">
        <FiShield className="shrink-0" />
        <p className="text-xs font-medium">
          To respect privacy, contact details are available upon request. Professional profiles are linked below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-white dark:bg-slate-800/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              {/* Profile Avatar Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 text-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FiUser />
              </div>

              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {ref.relation}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {ref.name}
                </h3>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight">
                  {ref.role}
                </p>
                <p className="text-xs text-slate-500 italic">
                  {ref.company}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default References;
