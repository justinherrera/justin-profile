import React, { useState } from "react";
import { ArrowDirection } from "./ArrowDirection";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  console.log("rendering");
  const [accordionID, setAccordionID] = useState<number>(0);

  const accordionData = [
    {
      id: 1,
      title: "Pointwest Squad Inc.",
      subtitle: "Nodejs Developer",
      content: [
        "Assigned with developing an enhanced version of an existing software module to improve functionality and user experience.",
        "Designed and implemented a unit test for a specific module, ensuring code reliability and robustness.",
        "Refactored the error handling mechanisms in the backend to improve error detection and response efficiency.",
        "Assigned to develop a new feature requiring frontend integration; additionally authored detailed Swagger documentation for a specific backend API to facilitate easier integration and understanding."
      ],
      skills: [
        "MongoDB",
        "Express",
        "Mocha",
        "Nodejs",
      ],
    },
    {
      id: 2,
      title: "Codev",
      subtitle: "Full-Stack Developer",
      content: [
        "Optimized the backend to reduce loading times by implementing efficient fetching of multiple schemas simultaneously.",
        "Assigned to troubleshoot and resolve issues in the frontend for the company's prior project, focusing on enhancing stability and user experience.",
        "Developed a new backend API designed to streamline the retrieval of essential schemas, significantly reducing data overhead by avoiding unnecessary fetches.",
        "Developed a backend API that populates the assets schema automatically when products are loaded, enhancing data handling efficiency and system responsiveness.",
      ],
      skills: [
        "MongoDB",
        "Express",
        "React",
        "Nodejs",
      ],
    },
    {
      id: 3,
      title: "Questronix Corporation",
      subtitle: "Nodejs Developer",
      content: [
        "Developed features in payments and transfers service",
        "Created a backend API for Digital Assets Exchange Project",
        "Integrated external API for trading features",
        "Used AWS features to cater backend needs",
        "Worked under agile methodology in cross-functional teams",
        "Created a producer and consumer to track transactions with messaging queues",
        "Implemented and documented an API Tests",
      ],
      skills: [
        "JavaScript",
        "NodeJs",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "AWS",
        "Kafka",
      ],
    },
    {
      id: 5,
      title: "The Investor's Podcast",
      subtitle: "Web Developer",
      content: [
        "Integrated wireframes designs to front-end components",
        "Optimized data extraction in backend for better performance",
        "Developed new user facing features implementing screen sizes accessibility.",
        "Fetched data from external API on backend",
        "Created new features, fetched data and ensured the accounting formula outputs the expected results",
      ],
      skills: ["React", "Redux", "Nodejs", "Express", "MongoDB", "Sass"],
    },
    {
      id: 6,
      title: "Coinpass Ltd.",
      subtitle: "JavaScript Developer",
      content: [
        "Developed and implemented responsive user interface components",
        "Met with the CTO on planning the implementation of serverless application",
        "Migrated previous project to scalable serverless application",
        "Worked with marketing team to improve search engine crawlers to enhance SEO",
      ],
      skills: ["React", "AWS", "CSS"],
    },
    {
      id: 7,
      title: "Gleent Inc.",
      subtitle: "Backend Developer",
      content: [
        "Wrote a reusable code in a modular setup application",
        "Implemented features that tracks user input to database",
        "Created a feature that tracks the nearby places using third-party API",
        "Adopted an old project to wordpress project using real-state API",
        "Created a custom plugin feature",
      ],
      skills: [
        "JavaScript",
        "JQuery",
        "CSS",
        "Wordpress",
        "MySQL",
        "Laravel",
        "PHP",
        "CakePHP",
      ],
    },
  ];

  return (
    <>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
          skills={item.skills}
          accordionID={accordionID}
          setAccordionID={setAccordionID}
        />
      ))}
    </>
  );
};

export default React.memo(Accordion);
