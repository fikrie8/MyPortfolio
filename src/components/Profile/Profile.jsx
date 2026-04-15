import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutMe, Contacts, Language, Education } from './SubTabs';
import ProfileImg from '../../assets/images/profile.jpg';

const Profile = () => {
  // Track which section is expanded (About Me is open by default)
  const [expandedSection, setExpandedSection] = useState('About Me');

  const sections = [
    { id: 'About Me', component: <AboutMe /> },
    { id: 'Contacts', component: <Contacts /> },
    { id: 'Language', component: <Language /> },
    { id: 'Education', component: <Education /> }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-10">
      
      {/* LEFT: Portrait Image (Stays static) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/3"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
          <img 
            src={ProfileImg}
            alt="Mohd Fikrie"
            className="w-full h-auto object-cover aspect-[2/3]" 
          />
        </div>
      </motion.div>

      {/* RIGHT: Vertical Accordion List */}
      <div className="flex-1 space-y-4">
        {sections.map((section) => (
          <div 
            key={section.id}
            className="border-b border-slate-200 dark:border-slate-800 pb-2"
          >
            {/* The Accordion Header (The clickable part) */}
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex justify-between items-center py-3 text-left group"
            >
              <span className={`text-lg font-bold transition-colors ${
                expandedSection === section.id ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white'
              }`}>
                {section.id}
              </span>
              
              {/* Animated Plus/Minus or Arrow icon */}
              <motion.span 
                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                className="text-blue-600"
              >
                {expandedSection === section.id ? '−' : '+'}
              </motion.span>
            </button>

            {/* The Animated Content (Collapsible) */}
            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="py-4 px-2">
                    {section.component}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
