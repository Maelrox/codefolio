import React from 'react';
import RepositoryBox from './RepositoryBox';
import nodejs from '../assets/home/nodejs.webp';
import springboot from '../assets/home/springboot.png';
import react from '../assets/home/react.png';
import angular from '../assets/home/angular.png';
import terraform from '../assets/home/terraform.png';
import gpt from '../assets/home/gpt.png';
import jenkins from '../assets/home/jenkins.png';
import unity from '../assets/home/unity.png';

interface RepositoryProps {
  category: string;
}

const Repository: React.FC<RepositoryProps> = ({category}) => {
  const backendProjects = [
    { image: springboot, text: 'Pet Care Suite', technologies: ['Java', 'Kotlin', 'SpringBoot', 'Kafka', 'Postgres', 'Redis', 'Hexagonal Arch', 'Microservices', 'Docker Swarm'], url: 'https://github.com/Maelrox/petcare-services' },
    { image: springboot, text: 'E-Recruitment Ontology', technologies: ['Java', 'Springboot', 'Sparql', 'Apache Jena', 'MySql'], url:'https://github.com/Maelrox/Ontology-it-recruitment' },
    { image: nodejs, text: 'Creature Deck Server', technologies: ['JavaScript', 'Express', 'Websocket', 'Mongo'], url: 'https://github.com/Maelrox/codefolio' },
  ];

  const frontEndProjects = [
    { image: react, text: 'Oscar Quiroz Portfolio', technologies:['TypeScript', 'React', 'Tailwind', 'Three Js'], url: 'https://github.com/Maelrox/codefolio' },
    { image: react, text: 'Pet Care Suite', technologies: ['TypeScript', 'React', 'Tailwind', 'Astro',], url: 'https://github.com/Maelrox/petcare-app'  },
    { image: angular, text: 'E-Recruitment Ontology', technologies: ['TypeScript', 'Angular'], url: 'https://github.com/Maelrox/E-Recruitment-sample'  },
  ];

  const devopsProjects = [
    { image: jenkins, text: 'Pet Care Suite Pipelines', technologies: ['Docker', 'Docker Compose', 'Docker Swarm', 'SonarQube'], url: 'https://github.com/Maelrox/jenkins_cicd'  },
    { image: terraform, text: 'AWS EKS', technologies: ['Terraform', 'Helm', 'AWS EKS', 'EC2', 'Kubernetes', 'Load Balancer', 'K8 Auto-Scaler'], url: 'https://github.com/Maelrox/terraform-eks'  },
  ];

  const desktopProjects = [
  ];

  const gameProjects = [
    { image: unity, text: 'Creature Deck', technologies: ['C#', 'Unity', 'Websocket'], url: 'https://github.com/Maelrox/creature-deck-server'  },
  ];

  const aiProjects = [
    { image: gpt, text: 'Amazon Alexa and ChatGPT integration', technologies: ['JavaScript', 'Lambda', 'AWS', 'Alexa Skills', 'ChatGPT'], url: 'https://github.com/Maelrox/alexa_lambda_chat_gpt'  },
  ];

  const categories = {
    "Backend Development": backendProjects,
    "Frontend Development": frontEndProjects,
    "Devops": devopsProjects,
    "Desktop Development": desktopProjects,
    "Game Development": gameProjects,
    "LLM Integrations": aiProjects
  };

  const repositoryItems = categories[category] || backendProjects;

  return (
    <section className="portfolio bg-main-gradient p-2">
      <h2 className="border-b border-secondary-100 text-secondary-100 mb-4">{category}</h2>
      <div className="grid border-secondary-100 grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-2">
        {repositoryItems.map((item, index) => (
          <RepositoryBox key={index} image={item.image} text={item.text} technologies={item.technologies} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default Repository;  