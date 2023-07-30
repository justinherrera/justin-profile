import { RefObject } from "react";
import "../../styles/About.css";
import coding from "../assets/coding.svg";
import Accordion from "./Accordion";
import Skills from "./Skills";

const About: React.FunctionComponent<{
  aboutRef: RefObject<HTMLDivElement>;
}> = ({ aboutRef }) => {
  return (
    <div
      className="bg-white px-4 md:pl-20 pt-20 pb-10 flex flex-col md:flex-row md:h-auto lg:h-auto w-[100vw]"
      id="about-page"
      ref={aboutRef}
    >
      <div className="h-auto w-full md:w-[40vw] pr-4">
        <p className="text-7xl text-[#191919] about-me">About Me?</p>
        <small className="text-[#191919] mt-2 text-lg">
          I am a passionate developer based in Cavite, Philippines, specializing
          in building web applications using the MERN (MongoDB, Express, React,
          Node.js) stack. Currently, I am working as a{" "}
          <span className="text-white bg-[#191919]">
            Node.js Developer at CoDev
          </span>
          , where I have been involved in both design and development projects.
          With over 4 years of industry experience, I have honed my skills in
          crafting efficient and user-friendly solutions. My expertise lies in
          leveraging React, Node.js, and Tailwind CSS to create modern and
          responsive interfaces.
          <br /> Here are some of my working experiences:
        </small>
        <div>
          <Accordion />
        </div>
      </div>
      <div className="md:h-10 w-full md:w-[60vw] px-2 md:px-14 pt-10 flex flex-col md:flex-row flex-wrap">
        <p className="text-[#191919] my-8 text-lg font-semibold border-[#191919] border-b-2">
          Skills
        </p>
        {/* <img src={coding} height={300} width={600} className="mx-auto" /> */}
        <Skills />
      </div>
    </div>
  );
};

export default About;
