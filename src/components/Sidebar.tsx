import React, { useState, RefObject } from "react";
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

const Sidebar: React.FC<SidebarProps> = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  scrollToRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`sidebar-component fixed top-0 right-0 h-screen z-10 shadow-2xl ${
        isMenuOpen ? "w-80" : "w-0 pl-0"
      } bg-[#EAEAEA]`}
    >
      {isMenuOpen ? (
        <XMarkIcon
          className="w-10 h-8 fixed top-10 right-10 cursor-pointer"
          stroke="#181D31"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <Bars3Icon
          className="w-10 h-8 fixed top-10 right-10 cursor-pointer"
          stroke="#EAEAEA"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}

      <div className="menu-div flex flex-col justify-center pt-20 h-full">
        {[
          {
            icon: (
              <HomeIcon className="w-6 h-15 text-gray-500" stroke="#181D31" />
            ),
            label: "Home",
            ref: homeRef,
          },
          {
            icon: (
              <UserIcon className="w-6 h-15 text-gray-500" stroke="#181D31" />
            ),
            label: "About",
            ref: aboutRef,
          },
          {
            icon: (
              <PaperClipIcon
                className="w-6 h-15 text-gray-500"
                stroke="#181D31"
              />
            ),
            label: "Projects",
            ref: projectsRef,
          },
          {
            icon: (
              <EnvelopeIcon
                className="w-6 h-15 text-gray-500"
                stroke="#181D31"
              />
            ),
            label: "Contact",
            ref: contactRef,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative"
          >
            {item.icon}
            <a
              className="menu-item text-[#181D31]"
              onClick={() => scrollToRef(item.ref)}
            >
              {item.label}
            </a>
            <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
