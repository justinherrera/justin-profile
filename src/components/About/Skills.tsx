import React from "react";

interface Skill {
  icon: string;
  text: string;
}

const skillsData: Skill[] = [
  { icon: "devicon-nodejs-plain", text: "Nodejs" },
  { icon: "devicon-typescript-plain", text: "TypeScript" },
  { icon: "devicon-react-original", text: "React" },
  { icon: "devicon-redux-original", text: "Redux" },
  { icon: "devicon-postgresql-plain", text: "Postgre" },
  { icon: "devicon-mongodb-plain", text: "Mongo" },
  { icon: "devicon-amazonwebservices-original", text: "AWS" },
  { icon: "devicon-tailwindcss-plain", text: "Tailwind" },
  { icon: "devicon-sequelize-plain", text: "Sequelize" },
  { icon: "devicon-apachekafka-original", text: "Kafka" },
  { icon: "devicon-docker-plain", text: "Docker" },
  { icon: "devicon-express-original", text: "Express" },
  { icon: "devicon-javascript-plain", text: "JavaScript" },
  { icon: "devicon-css3-plain", text: "CSS" },
  { icon: "devicon-git-plain", text: "Git" },
  { icon: "devicon-jest-plain", text: "Jest" },
];

const Skills = () => {
  return (
    <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
      {skillsData.map((skill, index) => (
        <div key={index} className="about-skills-div">
          <i className={`${skill.icon} text-[3rem]`} />
          <small className="text-center ">{skill.text}</small>
        </div>
      ))}
    </div>
  );
};

export default Skills;