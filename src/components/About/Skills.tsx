import React, { useState } from "react";
import "../../styles/Skill.css";

interface Skill {
  icon: string;
  text: string;
}

const skillsData: Skill[] = [
  { icon: "devicon-javascript-plain", text: "JavaScript" },
  { icon: "devicon-react-original", text: "React" },
  { icon: "devicon-nextjs-plain", text: "Nextjs" },
  { icon: "devicon-redux-original", text: "Redux" },
  { icon: "devicon-vitejs-plain", text: "Vite" },
  { icon: "devicon-css3-plain", text: "CSS" },
  { icon: "devicon-tailwindcss-plain", text: "Tailwind" },
  { icon: "devicon-nodejs-plain", text: "Nodejs" },
  { icon: "devicon-denojs-original", text: "Deno" },
  { icon: "devicon-express-original", text: "Express" },
  { icon: "devicon-graphql-plain", text: "GraphQL" },
  { icon: "devicon-typescript-plain", text: "TypeScript" },
  { icon: "devicon-nestjs-plain", text: "Nest" },
  { icon: "devicon-eslint-plain", text: "ESLint" },
  { icon: "devicon-git-plain", text: "Git" },
  { icon: "devicon-postgresql-plain", text: "PostgreSQL" },
  { icon: "devicon-mongodb-plain", text: "Mongo" },
  { icon: "devicon-sequelize-plain", text: "Sequelize" },
  { icon: "devicon-prisma-original", text: "Prisma" },
  { icon: "devicon-jest-plain", text: "Jest" },
  { icon: "devicon-apachekafka-original", text: "Kafka" },
  { icon: "devicon-amazonwebservices-plain-wordmark", text: "AWS" },
  { icon: "devicon-supabase-plain", text: "Supabase" },
  { icon: "devicon-docker-plain", text: "Docker" },
  { icon: "devicon-digitalocean-plain", text: "Digital Ocean" },
  { icon: "devicon-githubactions-plain", text: "Github Actions" },
  { icon: "devicon-nginx-plain", text: "Nginx" },
  
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
        <div key={skill.icon} className="about-skills-div p-4 lg:p-0 xl:p-2 2xl-4">
          <i
            className={`${skill.icon} ${
              isColoredArray[index] ? "colored" : ""
            } text-[4rem]`}
            onMouseEnter={(e) => handleMouseEnter(index)}
            onMouseLeave={(e) => handleMouseLeave(index)}
          />
         
          {
            skill.text.trim().split(/\s+/).length === 2 ? (
              <>
                <small className="text-center ">{skill.text.trim().split(/\s+/)[0]}</small>
                <small className="text-center skill-last-word">{skill.text.trim().split(/\s+/)[1]}</small>
              </>
            ) :
            <>
             <small className="text-center">{skill.text}</small>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default Skills;
