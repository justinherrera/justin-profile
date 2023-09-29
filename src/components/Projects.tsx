import React from "react";
import { RefObject } from "react";
import mj_src from "../assets/project_1.png";

interface ProjectsProps {
  projectsRef: RefObject<HTMLDivElement>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <div
      className="bg-[#191919] h-auto md:h-auto w-[100vw] py-12"
      id="projects-page"
      ref={projectsRef}
    >
      <div className="flex flex-col h-full">
        <p className="text-white text-6xl md:text-7xl text-center">
          Recent Works
        </p>
        <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center w-[100%] flex-wrap">
          {/* {[1,2,3,4].map((element) => (
            <div className="works-div flex flex-row mt-10 cursor-pointer transition duration-700 ease-in-out hover:scale-110 text-center md:w-1/3">
              <div className="border-1 p-4 border border-white rounded">
                <p className="text-2xl text-white">Customer Feedback App</p>
                <small className="text-white">Tech Used: React + AWS Serverless (API GW, Lambda, DynamoDB)</small>
                <img src={mj_src} height={300} width={400} />
                <div className="options-div flex flex-row justify-evenly mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6 cursor-pointer hover:border-b-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6 cursor-pointer hover:border-b-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>

              </div>
            </div>
          ))} */}
          <p className="text-white mt-10">Working in Progress...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
