import React from 'react';
import github from '../assets/home/github.png';
import languageBox from '../assets/home/language-box.png';

interface RepositoryBoxProps {
  technologies: string;
  text: string;
  image: string
}

const RepositoryBox: React.FC<RepositoryBoxProps> = ({ icon, text, technologies, image }) => {
  return (
    <div className="h-64 border-2 border-white rounded-lg shadow-lg text-center text-white transform transition-transform duration-300 ease-in-out hover:rotate-y-15 hover:rotate-x-10 hover:translate-z-5 hover:shadow-2xl flex flex-col">
      <div className="flex justify-center items-center h-1/3 relative">
        <img className='absolute inset-0 w-full h-full object-cover' src={languageBox} alt="Language Container" />
        <img className='relative w-1/3 max-w-20' src={image} alt="Tech Logo" />
      </div>
      <div className="flex flex-col justify-center items-center h-1/3">
        <h3 className='text-sm'>{text}</h3>
        <p className="text-xs mt-2">{technologies}</p>
      </div>
      <div className="flex justify-center items-center h-1/3 mb-3">
        <img className='w-10' src={github} alt="GitHub" />
        <p className="ml-2">View Source Code</p>
      </div>
    </div>
  );
};



export default RepositoryBox;