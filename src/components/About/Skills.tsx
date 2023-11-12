import React, { useState } from "react";

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
  { icon: "devicon-dart-plain", text: "Dart" },
  { icon: "devicon-flutter-plain", text: "Flutter" },
  { icon: "devicon-firebase-plain", text: "Firebase" },
];

const Skills = () => {
  const [isColoredArray, setIsColoredArray] = useState<boolean[]>(
    Array(skillsData.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    const updatedArray = [...isColoredArray];
    updatedArray[index] = true;
    setIsColoredArray(updatedArray);
  };

  const handleMouseLeave = (index: number) => {
    const updatedArray = [...isColoredArray];
    updatedArray[index] = false;
    setIsColoredArray(updatedArray);
  };
  return (
    <div className="w-full flex flex-row justify-center flex-wrap mb-6 md:mb-0">
      {skillsData.map((skill, index) => (
        <div key={skill.icon} className="about-skills-div p-4">
          <i
            className={`${skill.icon} ${
              isColoredArray[index] ? "colored" : ""
            } text-[4rem]`}
            onMouseEnter={(e) => handleMouseEnter(index)}
            onMouseLeave={(e) => handleMouseLeave(index)}
          />
          <small className="text-center ">{skill.text}</small>
        </div>
      ))}
    </div>
  );
};

export default Skills;
