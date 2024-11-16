import React from "react";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-8">About Me</h1>
            <p className="text-lg">
              I am a passionate and dedicated developer with a strong focus on backend technologies. I enjoy learning and growing through my work and am always eager to improve my skills.
            </p>
            <p className="text-lg mt-4">
              Over the course of my career, I have worked on building scalable and efficient applications while staying curious about new technologies, frameworks, and languages. I also have a keen interest in planning, managing, and implementing both local and cloud infrastructure. DevOps has become an integral part of my routine over the past few years, where I’ve gained experience implementing CI/CD pipelines and utilizing IT automation tools to streamline processes.
            </p>
            <p className="text-lg mt-4">
              I am a full-stack developer, and I’ve been using web technologies for several years, creating various websites along the way. However, my main skill is Java. I feel most confident with it and appreciate how Java provides a balance between standardization and customization. Recently, I started exploring Kotlin, a powerful extension of Java, and I’ve really enjoyed using it. That said, I’m not tied to any particular technology and prefer to think of myself as a software engineer.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/oscar-alejandro-quiroz-aguirre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/morgox"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
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
