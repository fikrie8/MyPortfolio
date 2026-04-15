import { useState } from 'react';
import { motion } from 'framer-motion';
import unimapLogo from '../../../assets/logo/unimap.png';
import psis from '../../../assets/logo/PSIS.png';

const EducationItem = ({ edu, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-slate-950" />

      <div className="flex flex-col sm:flex-row gap-5 items-start">
        
        {/* Emblem Container */}
        <div className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 ${
          imageError 
          ? "bg-white border border-slate-200 shadow-sm" // Placeholder style if error
          : "bg-transparent" // Transparent if image is OK
        }`}>
          {!imageError ? (
            <img 
              src={edu.logo} 
              alt={edu.university} 
              className="w-full h-full object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-[10px] font-bold text-slate-400 text-center uppercase px-1">
              No Logo
            </span>
          )}
        </div>

        {/* Text Content */}
        <div className="space-y-1">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
            {edu.university}
          </h4>
          <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wide">
            {edu.course}
          </p>
          <p className="lex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            CGPA : {edu.cgpa}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">📅 {edu.startDate} — {edu.endDate}</span>
            <span className="flex items-center gap-1">📍 {edu.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const educationData = [
    {
      university: "Universiti Malaysia Perlis (UniMAP)",
      course: "Bachelor of Engineering (Hons.) Computer",
      cgpa: "2.73",
      startDate: "Jun 2010",
      endDate: "Jan 2013",
      logo: unimapLogo, // Ensure this is a transparent PNG
      location: "Arau, Perlis"
    },
    {
      university: "Politeknik Sultan Idris Shah",
      course: "Bachelor of Engineering Electronic(Computer)",
      cgpa: "3.04",
      startDate: "Jun 2016",
      endDate: "Jan 2019",
      logo: psis, // Ensure this is a transparent PNG
      location: "Sabak Bernam, Selangor"
    }
  ];

  return (
    <div className="space-y-10 py-4">
      {educationData.map((edu, index) => (
        <EducationItem key={index} edu={edu} index={index} />
      ))}
    </div>
  );
};

export default Education;
