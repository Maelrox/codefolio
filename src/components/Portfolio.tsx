import React from 'react';
import PortfolioBox from './PortfolioBox';
import { FaLaptopCode, FaServer, FaNetworkWired, FaCloudflare, FaGamepad, FaBrain } from 'react-icons/fa';

interface PortfolioProps {
  onViewChange: (view: string, tv: string, textureUrl: string, name: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onViewChange }) => {
  // white.jpg 
  const portfolioItems = [
    { icon: <FaServer />, text: 'Backend Development', view: "SpringBoot", textureUrl: "/assets/3d/springboot_background.jpg", tv:"tv4" },
    { icon: <FaLaptopCode />, text: 'Frontend Development', view: "React", textureUrl: "/assets/3d/background-react.jpg", tv:"tv2" },
    { icon: <FaNetworkWired />, text: 'Devops CI/CD', view: "React", textureUrl: "/assets/3d/cicd_background.jpg", tv:"tv2" },
    { icon: <FaCloudflare />, text: 'Devops Infrastructure', view: "NodeJS", textureUrl: "/assets/3d/cloud_background.jpg", tv:"tv3" },
    { icon: <FaGamepad />, text: 'Game Development', view: "SpringBoot", textureUrl: "/assets/3d/3d_unity.jpg", tv:"tv4" },
    { icon: <FaBrain />, text: 'AI Development', view: "NodeJS", textureUrl: "/assets/3d/ai_development.jpg", tv:"tv3" },
  ];

  return (
    <section className="portfolio p-2">
      <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-6 gap-4">
        {portfolioItems.map((item, index) => (
          <div key={index} onClick={() => onViewChange(item.view, item.tv, item.textureUrl, item.text)}>
            <PortfolioBox key={index} icon={item.icon} text={item.text} />
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Portfolio;