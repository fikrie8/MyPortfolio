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
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-start mb-16">
            <div className="space-y-1">
                <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                {/* Types immediately */}
                    <TypeWriterText 
                        text="Mohd Fikrie bin Muthafa" 
                    />
                </h1>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            {/* Types after a 1.2 second delay */}
                <TypeWriterText 
                    text="Fullstack Developer" 
                    delay={1.2} 
                />
            </p>
        </div>

        <DarkModeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </header>

        {/* Tab List */}
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar justify-center w-full rounded-full mb-12 gap-1 mb-10 bg-gray-100/50 dark:bg-slate-900/50 p=1.5">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                activeTab === tab 
                  ? 'text-white' 
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === tab && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <main className="relative min-h-[450px]">
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
