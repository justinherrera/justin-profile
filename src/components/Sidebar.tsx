import React, { useState, RefObject } from "react";
import Svg from "./Svg";
import "../styles/Sidebar.css";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  PaperClipIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  scrollToRef: (r: RefObject<HTMLDivElement>) => void;
}

const Sidebar = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  scrollToRef,
}: SidebarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closedMenu = isMenuOpen ? "w-80  w" : "w-0 pl-0";

  return (
    <div
      className={`sidebar-component fixed top-0 right-0 h-screen z-10 shadow-2xl ${closedMenu} bg-[#EAEAEA]`}
    >
      {!isMenuOpen ? (
        <Bars3Icon
          className="w-10 h-8 fixed top-10 right-10 cursor-pointer"
          stroke={isMenuOpen ? "#181D31" : "#EAEAEA"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <XMarkIcon
          className="w-10 h-8 fixed top-10 right-10 cursor-pointer"
          stroke={isMenuOpen ? "#181D31" : "#EAEAEA"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}

      <div className="menu-div flex flex-col justify-center pt-20  h-full">
        <div className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative">
          <HomeIcon className="w-6 h-15 text-gray-500" stroke="#181D31" />
          <a
            className="menu-item text-[#181D31]"
            onClick={() => scrollToRef(homeRef)}
          >
            Home
          </a>
          <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
        </div>
        <div className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative">
          <UserIcon className="w-6 h-15 text-gray-500" stroke="#181D31" />
          <a
            className="menu-item text-[#181D31]"
            onClick={() => scrollToRef(aboutRef)}
          >
            About
          </a>
          <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
        </div>
        <div className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative">
          <PaperClipIcon className="w-6 h-15 text-gray-500" stroke="#181D31" />
          <a
            className="menu-item text-[#181D31]"
            onClick={() => scrollToRef(projectsRef)}
          >
            Projects
          </a>
          <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
        </div>
        <div className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative">
          <EnvelopeIcon className="w-6 h-15 text-gray-500" stroke="#181D31" />
          <a
            className="menu-item text-[#181D31]"
            onClick={() => scrollToRef(contactRef)}
          >
            Contact
          </a>
          <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
        </div>

        {/* {sidebarElements.map(([title, url, path, htmlRef]) => {
          console.log(htmlRef);
          return (
            <div className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative">
              <Svg src={path} className="w-6 h-15" stroke="#181D31" />
              <a
                className="menu-item text-[#181D31]"
                onClick={() => scrollToRef(htmlRef)}
              >
                {title}
              </a>
              <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Sidebar;
