import { useState, useRef, RefObject } from "react";
import ContactForm from "./ContactForm";
import calling from "../assets/calling.svg";

import "react-toastify/dist/ReactToastify.css";

interface ContactProps {
  contactRef?: RefObject<HTMLDivElement>;
}

const Contact: React.FunctionComponent<ContactProps> = ({ contactRef }) => {
  return (
    <div
      className="bg-white h-screen md:h-full py-20 pl-10 md:pl-20 pr-10 md:pr-20"
      id="contact-page"
      ref={contactRef}
    >
      <p className="text-6xl md:text-7xl text-center">Contact Me</p>
      <p className="text-center">
        Let's work together or drop me a message and say hello
      </p>
      <div className="pt-10 flex flex-col md:flex-row justify-center">
        <div className="basis-full xl:basis-1/2 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
