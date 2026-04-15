import React from 'react';
import { SiSpringboot, SiJavascript, SiTailwindcss, SiReact, SiC, SiPython, SiPerl, SiGnubash, SiHtml5, SiTypescript, SiIonic, SiAngular, SiXml, SiGradle } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SkillCard from '../SkillCard';

const FrontendBackend = () => {
  const skills = [
    { 
        name: 'Java', 
        icon: <FaJava />, 
        score: 4, 
        color: '#007396'  // Blue
    },
    { 
      name: 'Spring Boot', 
      icon: <SiSpringboot />, 
      score: 4, 
      color: '#6DB33F' // Spring Green
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript />, 
      score: 3, 
      color: '#F7DF1E' , // JS Yellow
    },
    { 
      name: 'React.js', 
      icon: <SiReact />, 
      score: 3, 
      color: '#61DAFB' // React Cyan
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss />, 
      score: 3, 
      color: '#06B6D4' // Tailwind Blue
    },
    { 
      name: 'C', 
      icon: <SiC />, 
      score: 4, 
      color: '#00FFFF'
    },
    { 
      name: 'Python', 
      icon: <SiPython />, 
      score: 2, 
      color: '#3776AB'
    },
    { 
      name: 'Perl', 
      icon: <SiPerl />, 
      score: 2, 
      color: '#004065'
    },
    { 
      name: 'Unix Scripting', 
      icon: <SiGnubash />, 
      score: 3, 
      color: '#293137'
    },
    { 
      name: 'HTML', 
      icon: <SiHtml5 />, 
      score: 3, 
      color: '#FF0000'
    },
    { 
      name: 'Type Script', 
      icon: <SiTypescript />, 
      score: 3, 
      color: '#3178C6'
    },
    { 
      name: 'Ionic Cordova', 
      icon: <SiIonic />, 
      score: 3, 
      color: '#0054e9'
    },
    { 
      name: 'Angular', 
      icon: <SiAngular />, 
      score: 3, 
      color: '#B52E31'
    },
    { 
      name: 'XML', 
      icon: <SiXml />, 
      score: 3, 
      color: '#RRGGBB'
    },
    { 
      name: 'Gradel', 
      icon: <SiGradle />, 
      score: 3, 
      color: '#209BC4'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, i) => (
        <SkillCard 
          key={i} 
          name={skill.name} 
          icon={skill.icon} 
          score={skill.score} 
          color={skill.color} 
        />
      ))}
    </div>
  );
};

export default FrontendBackend;
