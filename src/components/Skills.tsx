import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
        <div className="about-skills-div">
          <i className="devicon-nodejs-plain text-[3rem] mr-4"></i>
          <small className="text-left ml-1">Nodejs</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-typescript-plain text-[3rem] mr-4"></i>
          <small className="text-left">TypeScript</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-react-original text-[3rem] mr-4"></i>
          <small className="text-left ml-1">React</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-postgresql-plain text-[3rem] mr-4"></i>
          <small className="text-left ml-1">Postgre</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-mongodb-plain text-[3rem] "></i>
          <small className="text-left ml-1">Mongo</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-amazonwebservices-original text-[3rem]"></i>
          <small className="text-left ml-1">AWS</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-tailwindcss-plain text-[3rem]"></i>
          <small className="text-center">Tailwind</small>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
        <div className="about-skills-div">
          <i className="devicon-sequelize-plain text-[3rem]"></i>
          <small className="text-center">Sequelize</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-apachekafka-original text-[3rem]"></i>
          <small className="text-left ml-1">Kafka</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-express-original text-[3rem]"></i>
          <small className="text-left ml-1">Express</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-javascript-plain text-[3rem]"></i>
          <small className="text-center">JavaScript</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-css3-plain text-[3rem]"></i>
          <small className="text-center">CSS</small>
        </div>
        <div className="about-skills-div">
          <i className="devicon-git-plain text-[3rem]"></i>
          <small className="text-center">Git</small>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
        <div className="about-skills-div">
          <i className="devicon-jest-plain text-[3rem]"></i>
          <small className="text-center">Jest</small>
        </div>
      </div>
    </>
  );
};

export default Skills;
