import React from 'react';
import MainPage from './MainPage'; // Import your animated layout
import './App.css'; // Global styles like fonts or background colors

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 md:p-12">
      <MainPage />
    </div>
  );
}

export default App;
