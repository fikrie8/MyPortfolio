import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiCheckCircle, FiBriefcase } from 'react-icons/fi';

const ExperienceCard = ({ exp, index }) => {
  // Logic to determine if the card is on the left or right (Desktop only)
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-between w-full mb-12 md:mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. SPACER (Desktop) */}
      <div className="hidden md:block w-[45%]" />

      {/* 2. TIMELINE CENTER DOT */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 z-10 transform -translate-x-1/2 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

      {/* 3. CONTENT CARD */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-[48%] pl-10 md:pl-0"
      >
        <div className="p-8 bg-white dark:bg-slate-800/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          
          {/* Header: Type, Industry & Date */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="space-y-3">
              {/* Job Type Badge */}
              <div className="flex">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  exp.type === 'Freelance' 
                    ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' 
                    : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {exp.type}
                </span>
              </div>

              {/* Industry Label (Vertical Stack) */}
              <div className="flex items-center gap-2 text-slate-400">
                <FiBriefcase className="text-xs" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Industry: <span className="text-slate-600 dark:text-slate-300">{exp.industry}</span>
                </span>
              </div>
            </div>

            {/* Date / Period */}
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800 self-start sm:self-auto">
              {exp.period}
            </span>
          </div>

          {/* Job Title & Company */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {exp.role}
            </h3>
            <p className="text-md font-bold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-tight">
              {exp.company}
            </p>
          </div>
          
          {/* Body Content */}
          <div className="space-y-6">
            
            {/* 1. Project Summary */}
                            <div>
                <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    Project Overview
                </h4>
                <div className="border-l-2 border-slate-100 dark:border-slate-700 pl-4">
                    {exp.projectDescription.map((item, i) => {
                    // 1. Handle Spacers
                    if (item.type === 'spacer') {
                        return <div key={i} className="h-6" />;
                    }

                    // 2. Handle Content (Headers and Descriptions)
                    const isHeader = item.type === 'header';
                    
                    return (
                        <div key={i} className="flex items-start gap-2 text-sm mb-1.5">
                        <FiChevronRight 
                            className={`mt-1 shrink-0 ${isHeader ? 'text-blue-600' : 'text-blue-400/40'}`} 
                        />
                        <span className={`leading-relaxed ${
                            isHeader 
                            ? 'font-bold text-slate-900 dark:text-white' 
                            : 'text-slate-600 dark:text-slate-400 italic'
                        }`}>
                            {item.text}
                        </span>
                        </div>
                    );
                    })}
                </div>
                </div>

            {/* 2. Scope of Job (List) */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Scope of Work</h4>
              <ul className="space-y-2">
                {exp.jobScope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <FiChevronRight className="mt-1 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Skills Applied */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Skills Apllied</h4>
              <ul className="space-y-2">
                {exp.skillsApplied.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <FiChevronRight className="mt-1 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Key Contributions (Highlighted Box) */}
            <div className="p-5 bg-blue-50/30 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-800/30">
              <h4 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Key Contributions</h4>
              <ul className="space-y-3">
                {exp.contribution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <FiCheckCircle className="mt-1 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Tech Applied Tags */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Tech Applied</h4>
              <div className="flex flex-wrap gap-2">
                {exp.techApplied.map((skill, i) => (
                  <span key={i} className="text-[10px] px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 font-bold uppercase shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
