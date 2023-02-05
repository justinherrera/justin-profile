import React, { useState, RefObject } from 'react'
import Svg from './Svg'
import '../styles/Sidebar.css'

interface SidebarProps {
  homeRef: RefObject<HTMLDivElement>
  aboutRef: RefObject<HTMLDivElement>
  projectsRef: RefObject<HTMLDivElement>
  contactRef: RefObject<HTMLDivElement>
  scrollToRef: (r: RefObject<HTMLDivElement>) => void;
}

const Sidebar = ({ homeRef, aboutRef, projectsRef, contactRef, scrollToRef }: SidebarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closedMenu = (isMenuOpen) ? 'w-80  w' : 'w-0 pl-0'
  const menuIcon = (isMenuOpen) ? 'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'

  const icons = {
    home: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
    about: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    services: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
    projects: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    connect: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'

  }

  
  const sidebarElements: any[] = [
    ['Home', '/', icons["home"], homeRef],
    ['About', '/about', icons["about"], aboutRef],
    ['Projects', '/projects', icons["projects"],projectsRef],
    ['Connect', '/connect', icons["connect"],contactRef],
    
  ]
  return (
    <div className={`sidebar-component fixed top-0 right-0 h-screen z-10 shadow-2xl ${closedMenu} bg-[#EAEAEA]`}>
      <Svg src={menuIcon} className="w-10 h-8 fixed top-10 right-10 cursor-pointer" stroke={isMenuOpen ? '#181D31' : '#EAEAEA'} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      <div className="menu-div flex flex-col justify-center pt-20  h-full">
        {sidebarElements.map(([title, url, path, htmlRef]) => {
          console.log(htmlRef)
          return <div className="icon-div flex flex-row space-x-2 pl-8 cursor-pointer relative">
            <Svg src={path} className="w-6 h-15" stroke="#181D31" />
            <a className="menu-item text-[#181D31]" onClick={() => scrollToRef(htmlRef)}>{title}</a>
            <span className="border-bottom-div absolute top-10 text-transparent mt-6"></span>
          </div>
        }
        )}
      </div>
    </div>
  )
}

export default Sidebar