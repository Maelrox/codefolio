import React from 'react';

interface PortfolioBoxProps {
  icon: React.ReactNode;
  text: string;
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ icon, text }) => {
  return (
    <div className="border-2 border-white rounded-lg shadow-lg text-center portfolio-box text-white transform transition-transform duration-300 ease-in-out hover:rotate-y-15 hover:rotate-x-10 hover:translate-z-5 hover:shadow-2xl">
      <div className="flex justify-center items-center h-16 mb-4 icon-container">
        {icon}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default PortfolioBox;