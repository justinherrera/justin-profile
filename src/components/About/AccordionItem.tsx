import React, { useState } from "react";
import { ArrowDirection } from "./ArrowDirection";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

type AccordionItemProps = {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  skills: string[];
  accordionID: number;
  setAccordionID: React.Dispatch<React.SetStateAction<number>>;
};

const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  id,
  title,
  subtitle,
  content,
  skills,
  accordionID,
  setAccordionID,
}) => {
  const isOpen = accordionID === id;
  console.log(isOpen);
  return (
    <div className="w-auto">
      <button
        className={`w-full py-2 text-left border rounded-lg border-black pl-4 accordion-btn flex flex-row justify-between group  ${
          isOpen ? "bg-[#191919]" : ""
        }`}
        onClick={() => {
          if (accordionID !== id) {
            setAccordionID(id);
          } else {
            setAccordionID(0);
          }
        }}
      >
        <span className={isOpen ? "text-white" : "text-[#191919]"}>
          {title}
        </span>
        <ArrowDirection state={accordionID} id={id} />
      </button>
      <div
        className={`pl-4 pt-4 about-accordion overflow-hidden text-[#191919] ${
          isOpen ? "active-accordion h-auto" : ""
        }`}
      >
        <div className="flex flex-row mb-2 space-x-2">
          <div className="flex flex-row mb-2 space-x-2">
            <ChevronDoubleRightIcon className={`h-6 w-6`} />

            <p>{subtitle}</p>
          </div>
        </div>
        <ol className="list-decimal list-inside h-auto">
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <div className="flex flex-col md:flex-row my-4">
          <span className="mr-4 mb-2 md:mb-0 underline underline-offset-8">
            Skills Used:
          </span>
          <div className="flex flex-row space-x-2 flex-wrap">
            {skills.map((skill) => (
              <small className="mb-2 md:mb-0 border px-2 border-[#191919] rounded-lg ">
                {skill}
              </small>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
