import React, { useState } from "react";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg">
              I am a passionate and dedicated developer with a strong background in web technologies...
            </p>
            <p className="text-lg mt-4">
              Throughout my career, I have focused on building scalable and efficient applications...
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="path_to_your_image.jpg" alt="Developer Graphic" className="max-w-xs md:max-w-sm rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
