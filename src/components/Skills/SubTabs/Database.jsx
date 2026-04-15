import React from 'react';
import { SiMysql, SiSqlite } from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { FaDatabase } from 'react-icons/fa';
import SkillCard from '../SkillCard';

const Database = () => {
  const databases = [
    { name: 'MySQL', icon: <SiMysql />, score: 4, color: '#00758F' },
    { name: 'Oracle', icon: <GrOracle />, score: 3, color: '#C74634' },
    { name: 'SQL Stored Procedure', icon: <FaDatabase />, score: 2, color: '#F80000' },
    { name: 'SQLite 3', icon: <SiSqlite />, score: 3, color: '#90D4F4' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {databases.map((db, i) => (
        <SkillCard 
          key={i} 
          name={db.name} 
          icon={db.icon} 
          score={db.score} 
          color={db.color} 
        />
      ))}
    </div>
  );
};

export default Database;
