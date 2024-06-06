import React from 'react';
import RepositoryBox from './RepositoryBox';
import nodejs from '../assets/home/nodejs.png';
import springboot from '../assets/home/springboot.png';

const Portfolio: React.FC = () => {
  const repositoryItems = [
    { image: nodejs, text: 'Creature-deck server', technologies: 'Javascript NodeJS, Express, Websocket' },
    { image: springboot, text: 'CodeFolio', technologies: 'Springboot, Java, Websocket'  },
    { image: springboot, text: 'CodeFolio springboot backend', technologies: 'NodeJS, Express, Websocket'  },
    { image: springboot, text: 'CodeFolio springboot backend', technologies: 'NodeJS, Express, Websocket'  },
    { image: springboot, text: 'CodeFolio springboot backend', technologies: 'NodeJS, Express, Websocket'  },

  ];

  return (
    <section className="portfolio bg-main-gradient p-2">
      <h2 className="text-white border-b border-white pb-2 mb-4">Github Repos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-2">
        {repositoryItems.map((item, index) => (
          <RepositoryBox key={index} image={item.image} text={item.text} technologies={item.technologies} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;