import React from 'react';
import HomePage from './pages/HomePage';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
  return (
    <div className="App bg-main-gradient ">
      <HomePage />
    </div>
  );
};

export default App;