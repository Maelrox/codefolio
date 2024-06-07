import React, { useState } from "react";
import logo from '../assets/common/logo-oq.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <header className="bg-main-gradient p-4 flex justify-around items-center">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <div className="text-2xl">
          <Link to="/" className="font-orbitron">CodeFolio</Link>
        </div>
      </div>
      <div className="flex items- space-x-4">
        <button className="md:hidden block" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className={`md:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="block md:inline-block hover:text-gray-400">Portfolio</Link>
          <Link to="/about" className="block md:inline-block hover:text-gray-400">About</Link>
          {/* Further links can be added here */}
        </nav>
      </div>
    </header>

  );
};

export default Header;
