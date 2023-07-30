import { RefObject } from "react";
import { SocialIcon } from "react-social-icons";
import TypeAnimationComponent from "./TypeAnimation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

interface HomeProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  scrollToRef: (r: RefObject<HTMLDivElement>) => void;
}

interface IconAttribute {
  readonly url: string;
  readonly network: string;
}

const IconAttributes: IconAttribute[] = [
  {
    url: "https://linkedin.com/in/justin-mohses-herrera-a8316215a/",
    network: "",
  },
  { url: "https://twitter.com/Herrera_Jus", network: "twitter" },
  { url: "https://instagram.com/herrera_jus/", network: "instagram" },
  { url: "https://github.com/justinherrera", network: "github" },
];

const HomePage: React.FunctionComponent<HomeProps> = ({
  scrollToRef,
  homeRef,
  aboutRef,
}) => (
  <div className="bg-[#191919] h-screen w-screen relative" ref={homeRef}>
    <div className="flex flex-col h-full items-center justify-center">
      <p className="text-7xl text-white text-center">Hello. I'm Justin 👨‍💻</p>
      <small className="text-white mt-2 text-lg text-center">
        <TypeAnimationComponent />
      </small>

      <div className="flex space-x-4 mt-4">
        {IconAttributes.map((item, index) => (
          <SocialIcon
            key={index}
            url={item.url}
            target="_blank"
            bgColor="#ffffff"
            style={{ height: 30, width: 30 }}
            className="cursor-pointer hover:scale-110"
          />
        ))}
      </div>
    </div>
    <ArrowDownCircleIcon
      className="w-8 h-8 mr-4 animate-bounce absolute bottom-24 left-[50%] cursor-pointer"
      strokeWidth={1.5}
      stroke="#ffffff"
    />
  </div>
);

export default HomePage;
