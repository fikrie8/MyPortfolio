import React from 'react';

import { SiGit, SiDocker, SiApachemaven, SiJira, SiPostman, SiLinux, SiPuppet, SiAnsible, SiIntellijidea, SiEclipseide, SiAndroidstudio, SiJenkins, SiApachetomcat, SiVirtualbox, SiCitrix, } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SkillCard from '../SkillCard';
import { FiGitBranch } from 'react-icons/fi';
import { LuTurtle } from 'react-icons/lu';

const Tools = () => {
  const tools = [
    { name: 'Git', icon: <SiGit />, score: 4, color: '#F05032' },
    { name: 'Harvest', icon: <FiGitBranch />, score: 4, color: '#F05032' },
    { name: 'Tortoise', icon: <LuTurtle />, score: 4, color: '#6CAD96' },
    { name: 'Docker', icon: <SiDocker />, score: 2, color: '#1D63ED' },
    { name: 'Maven', icon: <SiApachemaven />, score: 3, color: '#2496ED' },
    { name: 'Puppet', icon: <SiPuppet />, score: 2, color: '#6DB33F' },
    { name: 'Ansible', icon: <SiAnsible />, score: 2, color: '#1D63ED' },
    { name: 'VS Code', icon: <VscVscode />, score: 4, color: '#1e1e1e' },
    { name: 'IntelliJ', icon: <SiIntellijidea />, score: 4, color: '#BD93F9' },
    { name: 'Eclipse', icon: <SiEclipseide />, score: 4, color: '#4A4885' },
    { name: 'Android Studio', icon: <SiAndroidstudio />, score: 3, color: '#9C27B0' },
    { name: 'Jenkins', icon: <SiJenkins />, score: 3, color: '#D33834' },
    { name: 'Postman', icon: <SiPostman />, score: 3, color: '#D33834' },
    { name: 'Tomcat', icon: <SiApachetomcat />, score: 3, color: '#0086b2' },
    { name: 'Unix', icon: <SiLinux />, score: 4, color: '#FFFF00' },
    { name: 'Jira', icon: <SiJira />, score: 4, color: '#0052CC' },
    { name: 'Virtual Box', icon: <SiVirtualbox />, score: 3, color: '#2496ED' },
    { name: 'Citrix', icon: <SiCitrix />, score: 2, color: '#0045DB' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {tools.map((tool, i) => (
        <SkillCard 
          key={i} 
          name={tool.name} 
          icon={tool.icon} 
          score={tool.score} 
          color={tool.color} 
        />
      ))}
    </div>
  );
};

export default Tools;
