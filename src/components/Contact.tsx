import { useState, useRef, RefObject } from 'react';
import calling from '../assets/calling.svg'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

interface ContactProps {
  contactRef?: RefObject<HTMLDivElement>
}

interface AxiosBody {
  service_id: string
  template_id: string
  user_id: string
}

const Contact = ({ contactRef }: ContactProps) => {
  const [inputForm, setInputForm] = useState({
    name: '',
    email: '',
    message: 'Hello'
  })
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = form.current
    emailjs.sendForm("service_glsshy3", "template_r0zpf68", data || "", "OAC9NWYxt00An1stn")
      .then(() => {
        setInputForm({
          name: '',
          email: '',
          message: ''
        })
        notify()
      }).catch(error => {
        console.log(error)
      })
  }

  const notify = () => {
    toast.success('Email Sent', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="bg-white h-screen pt-20 pl-10 md:pl-20 pr-10 md:pr-20" id="contact-page" ref={contactRef}>
      <ToastContainer />
      <p className="text-7xl text-center">Contact Me</p>
      <p className="text-center">Let's work together or drop me a message and say hello</p>
      <div className="pt-10 flex flex-col md:flex-row justify-center">
        <div className="basis-1/2 md:p-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-2">
              <label>Name:</label>
              <input type="text" className="contact-input" name="from_name" value={inputForm.name} onChange={(e) => setInputForm({
                ...inputForm,
                name: e.target.value
              })} required/>
            </div>
            <div className="mb-2">
              <label>Email:</label>
              <input type="email" className="contact-input" name="from_email"  value={inputForm.email} onChange={(e) => setInputForm({
                ...inputForm,
                email: e.target.value
              })} required/>
            </div>
            <div className="">
              <label>Message:</label>
              <textarea name="message" className="contact-input" value={inputForm.message} onChange={(e) => setInputForm({
                ...inputForm,
                message: e.target.value
              })} required/>
              {/* <input type="email" className="block p-2 border rounded border-[#191919] w-[100%]" /> */}
            </div>
            <button type="submit" className="p-2 mt-6 bg-[#191919] text-white rounded hover:bg-white hover:text-[#191919] hover:border-2 hover:border-[#191919]" >Submit</button>
          </form>
          
        </div>
        <div className="basis-1/2 p-8 hidden md:block">
          <img src={calling} height={300} width={600} className="mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Contact