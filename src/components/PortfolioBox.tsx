import React, { ReactElement, ReactNode } from 'react';

interface PortfolioBoxProps {
  icon: ReactElement | ReactNode;
  text: string;
}

const isReactElement = (element: any): element is ReactElement => {
  return React.isValidElement(element);
};

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ icon, text }) => {
  return (
    <div className="portfolio-box  hover:rotate-y-15 hover:rotate-x-10 hover:translate-z-5 hover:shadow-2xl">
      <div className="items-center max-h-24 mb-4 text-orange">
        {isReactElement(icon) ? React.cloneElement(icon, { size: "3em" }) : icon}
      </div>
      <p className="text-sm text-secondary-100">{text}</p>
    </div>
  );
};

export default PortfolioBox;