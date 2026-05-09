import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import TypeWriterText from './components/TypeWriterText';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AchievementAndAwards from './components/AchievementAndAwards';
import Training from './components/Training';
import References from './components/References';
import Projects from './components/Projects';

const MainPage = () => {
  const [isDark, toggleTheme] = useDarkMode();
  const [activeTab, setActiveTab] = useState('My Profile');

  const TABS = ['My Profile', 'Skills', 'Experience', 'Projects', 'Achievements & Awards', 'Training Attended', 'References'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-blue-200">
      <div className="max-w-5xl mx-auto">
        <main className="px-4 sm:px-8 md:px-12 py-10 md:py-20">

          {/* Navigation / Header */}
          <header className="flex flex-col sm:flex-row justify-between items-start mb-10 md:mb-16 gap-6">
              <div className="space-y-1">
                {/* Responsive Font: 3xl on mobile, 5xl on desktop */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  <TypeWriterText text="Mohd Fikrie bin Muthafa" />
                </h1>
          
                {/* Responsive Text: text-sm on mobile, text-lg on desktop */}
                <p className="text-sm sm:text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  <TypeWriterText text="Fullstack Software Engineer" delay={1.2} />
                </p>
              </div>

        <DarkModeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </header>

        {/* Tab List */}
        <div className="w-full mb-8 md:mb-12 px-4">
          <div className="flex w-full mb-8 md:mb-12 overflow-x-auto no-scrollbar pb-2">
            <nav className="flex p-1 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full border border-slate-200/50 dark:border-slate-700/50 min-w-max mx-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  /* Added whitespace-nowrap so text doesn't wrap to 2 lines */
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer relative whitespace-nowrap ${
                    activeTab === tab ? 'text-blue-600' : 'text-slate-500'
                  }`}
            >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === tab && (
                  <motion.div layoutId="activeTabPill" className="absolute inset-0 bg-white dark:bg-slate-700 shadow-sm rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
            <motion.section
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none"
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                {activeTab}
              </h2>
              
              {activeTab === 'My Profile' && <Profile />}
              {activeTab === 'Skills' && <Skills />}
              {activeTab === 'Experience' && <Experience />}
              {activeTab === 'Projects' && <Projects />}
              {activeTab === 'Achievements & Awards' && <AchievementAndAwards />}
              {activeTab === 'Training Attended' && <Training />}
              {activeTab === 'References' && <References />}
              {/* Other components will go here */}
            </motion.section>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
