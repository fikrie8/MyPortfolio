import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FrontendBackend } from './SubTabs';
import SkillLegend from './SkillLegend';
import Tools from './SubTabs/Tools';
import Database from './SubTabs/Database';

const Skills = () => {
  const [activeSub, setActiveSub] = useState('Frameworks');

  const categories = [
    { id: 'Frameworks', label: 'Languages & Frameworks' },
    { id: 'Tools', label: 'Tools & DevOps' },
    { id: 'Database', label: 'Databases' }
  ];

  return (
    <div className="space-y-8">
      {/* Sub-tab Selection Chips */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveSub(cat.id)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              activeSub === cat.id
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:border-blue-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SkillLegend */}
      <SkillLegend />

      {/* Content Area */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSub === 'Frameworks' && <FrontendBackend />}
            {activeSub === 'Tools' && <Tools />}
            {activeSub === 'Database' && <Database />}
            {/* {activeSub === 'Tools' && <Tools />}*/}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
