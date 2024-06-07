import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'; // Ensure Tailwind CSS is imported
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App bg-main-gradient h-lvh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;