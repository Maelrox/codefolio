import React from 'react';
import RepositoryBox from './RepositoryBox';
import nodejs from '../assets/home/nodejs.webp';
import springboot from '../assets/home/springboot.png';
import react from '../assets/home/react.png';
import terraform from '../assets/home/terraform.png';
import gpt from '../assets/home/gpt.png';
import jenkins from '../assets/home/jenkins.png';
import unity from '../assets/home/unity.png';

interface RepositoryProps {
  category: string;
}

const Repository: React.FC<RepositoryProps> = ({category}) => {
  console.log("category" + category);
  const backendProjects = [
    { image: springboot, text: 'Open Vet Microservices', technologies: 'Springboot, Postgres, Springcloud', url: 'https://github.com/Maelrox/#coming_soon'  },
    { image: nodejs, text: 'Creature-deck WS', technologies: 'NodeJS, Express, Websockets, MongoDB', url: 'https://github.com/Maelrox/codefolio' },
    { image: springboot, text: 'Sparql endpoint for E-Recruitment Ontology', technologies: 'SpringBoot, Apache Jena, Mysql', url:'https://github.com/Maelrox/Ontology-it-recruitment' },
    { image: nodejs, text: 'CodeFolio API', technologies: 'NodeJS, DynamoDB', url: 'https://github.com/Maelrox/creature-deck-server' },
  ];

  const frontEndProjects = [
    { image: react, text: 'CodeFolio web', technologies: 'React, WebGL', url: 'https://github.com/Maelrox/codefolio'  },
    { image: react, text: 'Open Vet web', technologies: 'React', url: 'https://github.com/Maelrox/codefolio'  },
  ];

  const devopsProjects = [
    { image: jenkins, text: 'Jenkins Docker-Compose and Pipelines', technologies: 'React', url: 'https://github.com/Maelrox/jenkins_cicd'  },
  ];

  const infraProjects = [
    { image: terraform, text: 'Infrastructure as code AWS', technologies: 'Terraform, EKS, S2, VPC, EC2, RDS', url: 'https://github.com/Maelrox/codefolio'  },
  ];

  const gameProjects = [
    { image: unity, text: 'Creature Deck', technologies: 'Unity', url: 'https://github.com/Maelrox/creature-deck-server'  },
  ];

  const aiProjects = [
    { image: gpt, text: 'Amazon Alexa and ChatGPT integration', technologies: 'AWS Lambda', url: 'https://github.com/Maelrox/alexa_lambda_chat_gpt'  },
  ];

  const categories = {
    "Backend Development": backendProjects,
    "Frontend Development": frontEndProjects,
    "Devops CI/CD": devopsProjects,
    "Devops Infrastructure": infraProjects,
    "Game Development": gameProjects,
    "AI Development": aiProjects
  };

  const repositoryItems = categories[category] || backendProjects; // Fallback to an backend projects array if category is not found

  return (
    <section className="portfolio bg-main-gradient p-2">
      <h2 className="border-b border-white mb-4">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-2">
        {repositoryItems.map((item, index) => (
          <RepositoryBox key={index} image={item.image} text={item.text} technologies={item.technologies} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default Repository;