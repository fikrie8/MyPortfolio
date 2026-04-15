import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';

const Projects = () => {
  const projectList = [
    {
      title: "MasterSAM StarGate Portal",
      category: "Enterprise Gateway",
      description: "A centralized web-based gateway to control and audit all user activity to target servers. Features real-time session recording and automated password resets.",
      tech: ["Java", "Spring Boot", "Oracle DB", "React"],
      github: "https://github.com",
      live: "https://your-demo.com",
      image: "/project-images/stargate.jpg" // Add a screenshot here
    },
    {
      title: "Unix Access Controller",
      category: "Security Tool",
      description: "A system-level tool that restricts root privileges based on individual or group policies, ensuring zero-trust access on Unix platforms.",
      tech: ["C", "Bash", "Unix Systems", "Ansible"],
      github: "https://github.com",
      live: null, // Some projects might not have a live demo
      image: "/project-images/unix-tool.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4">
      {projectList.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative bg-white dark:bg-slate-800/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
          {/* Project Preview Image */}
          <div className="relative h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => { e.target.src = "https://placeholder.com"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <FiLayers className="text-blue-400" /> {project.category}
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technical Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tag, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-lg border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all">
                  <FiCode className="text-blue-500" /> {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <FiGithub /> Source Code
              </a>
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl border-2 border-slate-900 dark:border-slate-600 text-slate-900 dark:text-white text-xs font-bold flex items-center justify-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
