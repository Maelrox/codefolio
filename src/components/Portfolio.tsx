import React from 'react';
import PortfolioBox from './PortfolioBox';
import { FaLaptopCode, FaServer, FaNetworkWired, FaCloudflare, FaGamepad, FaBrain } from 'react-icons/fa';

interface PortfolioProps {
  onViewChange: (view: string, tv: string, textureUrl: string, name: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onViewChange }) => {

  const portfolioItems = [
    { icon: <FaServer />, text: 'Backend Development', view: "SpringBoot", textureUrl: "/assets/3d/springboot_background.jpg", tv: "tv4" },
    { icon: <FaLaptopCode />, text: 'Frontend Development', view: "React", textureUrl: "/assets/3d/background-react.jpg", tv: "tv2" },
    { icon: <FaNetworkWired />, text: 'Devops CI/CD', view: "React", textureUrl: "/assets/3d/cicd_background.jpg", tv: "tv2" },
    { icon: <FaCloudflare />, text: 'Devops Infrastructure', view: "NodeJS", textureUrl: "/assets/3d/cloud_background.jpg", tv: "tv3" },
    { icon: <FaGamepad />, text: 'Game Development', view: "SpringBoot", textureUrl: "/assets/3d/3d_unity.jpg", tv: "tv4" },
    { icon: <FaBrain />, text: 'LLM Integrations', view: "NodeJS", textureUrl: "/assets/3d/ai_development.jpg", tv: "tv3" },
  ];

  return (
    <div className="h-[45vh] flex flex-wrap items-center">
      {portfolioItems.map((item, index) => (
        <div className="w-1/3 h-1/2 flex-item flex-shrink-1 flex-grow-1 border-primary-100" key={index} onClick={() => onViewChange(item.view, item.tv, item.textureUrl, item.text)}>
          <PortfolioBox key={index} icon={item.icon} text={item.text} />
        </div>

      ))}
      
    </div>
  );
};

export default Portfolio;