import React from 'react';

const SkillLegend = () => {
  // Define our proficiency levels
  const levels = [
    { label: "Learning / Practicing", activeCount: 1 },
    { label: "Small progress", activeCount: 2 },
    { label: "Professional / Production", activeCount: 3 },
    { label: "Subject Matter Expert", activeCount: 4 },
    { label: "Certified Specialist", activeCount: 5 },

  ];

  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mb-12 px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800/50 backdrop-blur-sm">
      {levels.map((level, i) => (
        <div key={i} className="flex items-center gap-3">
          
          {/* Legend Visual (3-Slat System) */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step}
                className={`h-1.5 w-4 rounded-sm transition-all duration-500 ${
                  step <= level.activeCount 
                    ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' 
                    : 'bg-slate-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Label text */}
          <span className="text-[10px] uppercase tracking-[0.15em] font-black text-slate-500 dark:text-slate-400">
            {level.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillLegend;
