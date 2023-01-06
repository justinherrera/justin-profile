import React from 'react'
import '../styles/HomePage.css'
import { SocialIcon } from 'react-social-icons';

interface HomeProps {
  executeScroll: () => void;
}

const HomePage = ({ executeScroll }: HomeProps) => {
  return (
    <div className="bg-[#191919] h-screen w-screen relative">
      <div className="flex flex-col h-full items-center justify-center">
        <p className="text-7xl text-white text-center">Hello. I'm Justin 👨‍💻</p>
        <small className="text-white mt-2 text-lg text-center">JavaScript Developer and Cloud Newbie</small>
        <div className="flex flex-row space-x-4 mt-4">
          <SocialIcon url="https://linkedin.com/in/jaketrent" bgColor="#ffffff" style={{ height: 30, width: 30 }} className="cursor-pointer hover:scale-110 " />
          <SocialIcon network="twitter" bgColor="#ffffff" style={{ height: 30, width: 30 }} className="cursor-pointer hover:scale-110" />
          <SocialIcon network="instagram" bgColor="#ffffff" style={{ height: 30, width: 30 }} className="cursor-pointer hover:scale-110" />
          <SocialIcon network="github" bgColor="#ffffff" style={{ height: 30, width: 30 }} className="cursor-pointer hover:scale-110" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-8 h-8 mr-4 animate-bounce absolute bottom-24 left-[50%] cursor-pointer" onClick={executeScroll}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  )
}

export default HomePage