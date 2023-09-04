import React, { useState } from "react";
import { ArrowDirection } from "./ArrowDirection";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  console.log("rendering");
  const [accordionID, setAccordionID] = useState<number>(0);

  const accordionData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
