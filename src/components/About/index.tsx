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
      className="bg-white px-4 md:pl-8 pt-20 pb-10 flex flex-col md:flex-col lg:flex-row md:h-auto lg:h-auto w-[100vw]"
      id="about-page"
      ref={aboutRef}
    >
      <div className="h-auto w-full md:w-full pr-4">
        <p className="text-6xl md:text-7xl text-[#191919] about-me">
          About Me?
        </p>
        <small className="text-[#191919] mt-2 text-lg">
          I am a passionate developer based in Laguna, Philippines, specializing
          in building web applications using the JavaScript ecosystem. I am currently working as{" "}
          <span className="text-white bg-[#191919]">
            Nodejs Developer at Pointwest Squad Inc.
          </span>
          , where I am involve in backend development. With over 5 years of
          industry experience, I have honed my skills in crafting efficient and
          user-friendly solutions.
          <br /> Here are some of my working experiences:
        </small>
        <div className="mt-2">
          <Accordion />
        </div>
      </div>
      <div className="md:h-full w-full md:w-full px-2 md:px-2 2xl:pt-14 flex flex-col md:flex-row flex-wrap justify-center">
        {/* <p className="text-[#191919] my-8 text-2xl font-semibold border-[#191919]  ">
          Technologies I work with
        </p> */}
        {/* <img src={coding} height={300} width={600} className="mx-auto" /> */}
        <Skills />
      </div>
    </div>
  );
};

export default About;
