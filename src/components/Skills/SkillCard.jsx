import React, { useState } from 'react';

const SkillCard = ({ name, icon, score, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-6 bg-white dark:bg-slate-800/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 
                 flex flex-col items-center group transition-all duration-500 
                 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 h-full cursor-default"
    >
      {/* ICON CONTAINER - Solid Color with Glow */}
      <div 
        className="text-5xl mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center"
        style={{ 
          // Pure solid color logic - No masking bugs
          color: isHovered ? color : '#94a3b8',
          // Adds a soft "bloom" effect of the brand color on hover
          filter: isHovered ? `drop-shadow(0 0 15px ${color}55)` : 'none'
        }}
      >
        {icon}
      </div>

      {/* NAME */}
      <h5 className="font-bold text-slate-900 dark:text-white mb-5 text-sm tracking-tight text-center">
        {name}
      </h5>

      {/* 5-SLAT PROGRESS BAR */}
      <div className="flex gap-1.5 w-full px-2 mt-auto">
        {[1, 2, 3, 4, 5].map((step) => (
          <div 
            key={step}
            className={`h-1.5 flex-1 min-w-[4px] rounded-full transition-all duration-700 ${
              step <= score 
                ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' 
                : 'bg-slate-100 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
