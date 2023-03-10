import React, { useState } from 'react'
import { RefObject } from 'react';
import '../styles/About.css'
import coding from '../assets/coding.svg'

const ArrowDirection = ({ state, id }: { state: number | null, id: number} ) => {
  if (state === id) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${(state === id) ? '#ffffff' : '#000000'}`} className="w-6 h-6 mr-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }

  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${(state === id) ? '#ffffff' : '#000000'}`} className="w-6 h-6 mr-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
}

interface AboutProps {
  aboutRef: RefObject<HTMLDivElement>
}

const About = ({ aboutRef }: AboutProps) => {
  const [accordionID, setAccordionID] = useState<number | null>(null)
  return (
    <div className="bg-white px-4 md:pl-20 pt-20 pb-10 flex flex-col md:flex-row md:h-auto lg:h-auto w-[100vw]" id="about-page" ref={aboutRef}>
      <div className="h-auto w-full md:w-[40vw] pr-4">
        <p className="text-7xl text-[#191919] about-me">About Me?</p>
        <small className="text-[#191919] mt-2 text-lg">I'm a developer based in Cavite, Philippines. I am currently a <span className="text-white bg-[#191919]">Nodejs Developer at Questronix</span>, working with a team of backend and mobile developers for product development at Union Digital. I have over 4 years of industry experience, and have been part of design and development projects. I specialize in <span className="text-white bg-[#191919]">React, Node and Tailwind.</span> <br /> Here are some of my working experiences:
        </small>
        
        <div className="w-auto mt-4">
          <button className={`w-full py-2 text-left border-2 pl-4 accordion-btn flex flex-row justify-between ${(accordionID === 1) ? 'bg-[#191919]' : ''}`} onClick={() => (accordionID !== 1) ? setAccordionID(1) : setAccordionID(null)}>
            <span className={`${(accordionID === 1) ? 'text-white' : 'text-[#191919]'}`}>Questronix Corporation</span>
            <ArrowDirection state={accordionID} id={1} />

          </button>
          <div className={`pl-4 pt-4 about-accordion overflow-hidden text-[#191919] ${(accordionID === 1) ? 'active-accordion h-[65vh] lg:h-[30vh]' : ''}`}>
            <div className="flex flex-row mb-2 space-x-2">
              <div className="flex flex-row mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
                <p>Nodejs Developer</p>
              </div>
              <div className="flex flex-row mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#191919" className="w-6 h-6">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <p>Makati City, PH</p>
              </div>
            </div>
            <ol className="list-decimal list-inside">
              <li>Developed features in payments and transfers service</li>
              <li>Created a backend API for Digital Assets Exchange Project</li>
              <li>Integrated external API for trading features</li>
              <li>Used AWS features to cater backend needs</li>
              <li>Worked under agile methodology in cross-functional teams</li>
              <li>Created a producer and consumer to track transactions with messaging queues</li>
              <li>Implemented and documented an API Tests</li>
            </ol>
            <div className="flex flex-row my-4">
              <span className="mr-4 underline underline-offset-8">Skills Used: </span>
              <div className="flex flex-row space-x-2">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-sequelize-plain"></i>
                <i className="devicon-postgresql-plain"></i>
                <i className="devicon-amazonwebservices-original"></i>
                <i className="devicon-apachekafka-original"></i>
              </div>
            </div>
          </div>
        </div>  
        <div className="w-auto">
          <button className={`w-full py-2 text-left border-2 pl-4 accordion-btn flex flex-row justify-between ${(accordionID === 2) ? 'bg-[#191919]' : ''}`} onClick={() => (accordionID !== 2) ? setAccordionID(2) : setAccordionID(null)}>
          <span className={`${(accordionID === 2) ? 'text-white' : 'text-[#191919]'}`}>The Investor's Podcast</span>
            <ArrowDirection state={accordionID} id={2} />
            </button>
            
            <div className={`pl-4 pt-4 about-accordion overflow-hidden text-[#191919] ${(accordionID === 2) ? 'active-accordion h-[53vh] lg:h-[28vh]' : ''}`}>
              <div className="flex flex-row mb-2 space-x-2">
                <div className="flex flex-row mb-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>
                  <p>Web Developer</p>
                </div>
                <div className="flex flex-row mb-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#191919" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <p>Hummelstown, Pennsylvania, US</p>
                </div>
              </div>
              <ol className="list-decimal list-inside">
                <li>Integrated wireframes designs to front-end components</li>
                <li>Optimized data extraction in backend for better performance</li>
                <li>Developed new user facing features implementing screen sizes accessibility.</li>
                <li>Fetched data from external API on backend</li>
                <li>Created new features, fetched data and ensured the accounting formula outputs the expected results</li>
              </ol>
              <div className="flex flex-row my-4">
                <span className="mr-4 underline underline-offset-8">Skills Used: </span>
                <div className="flex flex-row space-x-2">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-redux-original"></i>
                  <i className="devicon-nodejs-plain"></i>
                  <i className="devicon-express-original"></i>
                  <i className="devicon-mongodb-plain"></i>
                  <i className="devicon-heroku-original"></i>
                  <i className="devicon-sass-original"></i>
                </div>
              </div>
            </div>
        </div>  
        <div className="w-auto">
          <button className={`w-full py-2 text-left border-2 pl-4 accordion-btn flex flex-row justify-between ${(accordionID === 3) ? 'bg-[#191919]' : ''}`} onClick={() => (accordionID !== 3) ? setAccordionID(3) : setAccordionID(null)}>
          <span className={`${(accordionID === 3) ? 'text-white' : 'text-[#191919]'}`}>Coinpass Ltd.</span>
            <ArrowDirection state={accordionID} id={3} />
            </button>
            
            <div className={`pl-4 pt-4 about-accordion overflow-hidden text-[#191919] ${(accordionID === 3) ? 'active-accordion h-[50vh] lg:h-[24vh]' : ''}`}>
              <div className="flex flex-row mb-2 space-x-2">
                <div className="flex flex-row mb-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>
                  <p>JavaScript Developer</p>
                </div>
                <div className="flex flex-row mb-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#191919" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <p>England, UK</p>
                </div>
              </div>
              <ol className="list-decimal list-inside">
                <li>Developed and implemented responsive user interface components</li>
                <li>Met with the CTO on planning the implementation of serverless application</li>
                <li>Migrated previous project to scalable serverless application</li>
                <li>Worked with marketing team to improve search engine crawlers to enhance SEO</li>
              </ol>
              <div className="flex flex-row my-4">
                <span className="mr-4 underline underline-offset-8">Skills Used: </span>
                <div className="flex flex-row space-x-2">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-amazonwebservices-original"></i>
                  <i className="devicon-css3-plain"></i>
                </div>
              </div>
            </div>
        </div> 
        <div className="w-auto">
          <button className={`w-full py-2 text-left border-2 pl-4 accordion-btn flex flex-row justify-between ${(accordionID === 4) ? 'bg-[#191919]' : ''}`} onClick={() => (accordionID !== 4) ? setAccordionID(4) : setAccordionID(null)}>
          <span className={`${(accordionID === 4) ? 'text-white' : 'text-[#191919]'}`}>Gleent Inc.</span>
            <ArrowDirection state={accordionID} id={4} />
            </button>
            
            <div className={`pl-4 pt-4 about-accordion overflow-hidden text-[#191919] ${(accordionID === 4) ? 'active-accordion h-[42vh] lg:h-[26vh]' : ''}`}>
              <div className="flex flex-row mb-2 space-x-2">
                <div className="flex flex-row mb-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>
                  <p>Backend Developer</p>
                </div>
                <div className="flex flex-row mb-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#191919" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <p>Laguna, PH</p>
                </div>
              </div>
              <ol className="list-decimal list-inside">
                <li>Wrote a reusable code in a modular setup application</li>
                <li>Implemented features that tracks user input to database</li>
                <li>Created a feature that tracks the nearby places using third-party API</li>
                <li>Adopted an old project to wordpress project using real-state API</li>
                <li>Created a custom plugin feature</li>
              </ol>
              <div className="flex flex-row my-4">
                <span className="mr-4 underline underline-offset-8">Skills Used: </span>
                <div className="flex flex-row space-x-2">
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-jquery-plain"></i>
                  <i className="devicon-css3-plain"></i>
                  <i className="devicon-wordpress-plain"></i>
                  <i className="devicon-mysql-plain"></i>
                  <i className="devicon-laravel-plain"></i>
                  <i className="devicon-php-plain"></i>
                  <i className="devicon-cakephp-plain"></i>
                </div>
              </div>
            </div>
        </div> 
      </div>
      <div className="md:h-10 w-full md:w-[60vw] px-2 md:px-14 pt-10 flex flex-col md:flex-row flex-wrap">
        <p className="text-[#191919] my-8 text-lg font-semibold border-[#191919] border-b-2">Skills</p>
        {/* <img src={coding} height={300} width={600} className="mx-auto" /> */}
        <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
          <div className="about-skills-div">
            <i className="devicon-nodejs-plain text-[3rem] mr-4"></i>
            <small className="text-left ml-1">Nodejs</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-typescript-plain text-[3rem] mr-4"></i>
            <small className="text-left">TypeScript</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-react-original text-[3rem] mr-4"></i>
            <small className="text-left ml-1">React</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-postgresql-plain text-[3rem] mr-4"></i>
            <small className="text-left ml-1">Postgre</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-mongodb-plain text-[3rem]"></i>
            <small className="text-left ml-1">Mongo</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-amazonwebservices-original text-[3rem]"></i>
            <small className="text-left ml-1">AWS</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-tailwindcss-plain text-[3rem]"></i>
            <small className="text-center">Tailwind</small>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
          <div className="about-skills-div">
            <i className="devicon-sequelize-plain text-[3rem]"></i>
            <small className="text-center">Sequelize</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-apachekafka-original text-[3rem]"></i>
            <small className="text-left ml-1">Kafka</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-express-original text-[3rem]"></i>
            <small className="text-left ml-1">Express</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-javascript-plain text-[3rem]"></i>
            <small className="text-center">JavaScript</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-css3-plain text-[3rem]"></i>
            <small className="text-center">CSS</small>
          </div>
          <div className="about-skills-div">
            <i className="devicon-git-plain text-[3rem]"></i>
            <small className="text-center">Git</small>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center md:space-x-12 flex-wrap mb-6 md:mb-0">
          <div className="about-skills-div">
            <i className="devicon-jest-plain text-[3rem]"></i>
            <small className="text-center">Jest</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About