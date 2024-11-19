import React from 'react';
import github from '../assets/home/github.png';

interface RepositoryBoxProps {
  technologies: string[];
  text: string;
  image: string
  url: string
}

const RepositoryBox: React.FC<RepositoryBoxProps> = ({ url, text, technologies, image }) => {
  return (
    <div className="h-96 border-2 border-orange shadow-lg text-center transform transition-transform duration-300 ease-in-out hover:rotate-y-15 hover:rotate-x-10 hover:translate-z-5 hover:shadow-2xl flex flex-col">
      <div className="flex justify-center items-center h-1/3 relative bg-white">
        <img className='relative w-1/3 max-w-24 max-h-24 mt-1' src={image} alt="Tech Logo" />
      </div>

      <h3 className="text-sm font-semibold text-secondary-100">{text}</h3>
      <div className="flex flex-col justify-center items-center h-1/3 px-3 mt-1">
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-orange-gradient text-white shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>


      <div className="flex justify-center items-center h-1/3 mb-3">
        <img className='w-10' src={github} alt="GitHub" />
        <p className="ml-2 text-secondary-100"><a target="_blank" href={url}>View Source Code</a></p>
      </div>
    </div>
  );
};



export default RepositoryBox;