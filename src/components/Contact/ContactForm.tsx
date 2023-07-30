import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEmail } from "../../services/email";

const ContactForm = () => {
  interface Input {
    name: string;
    email: string;
    message: string;
  }
  const [inputForm, setInputForm] = useState<Input>({
    name: "",
    email: "",
    message: "Hello",
  });
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form) {
      const data = form.current as HTMLFormElement;
      useEmail(data)
        .then(() => {
          setInputForm({
            name: "",
            email: "",
            message: "",
          });
          notify();
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  };

  const notify = () => {
    toast.success("Email Sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-2">
          <label>Name:</label>
          <input
            type="text"
            className="contact-input"
            name="from_name"
            value={inputForm.name}
            onChange={(e) =>
              setInputForm({
                ...inputForm,
                name: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="mb-2">
          <label>Email:</label>
          <input
            type="email"
            className="contact-input"
            name="from_email"
            value={inputForm.email}
            onChange={(e) =>
              setInputForm({
                ...inputForm,
                email: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="">
          <label>Message:</label>
          <textarea
            name="message"
            className="contact-input"
            value={inputForm.message}
            onChange={(e) =>
              setInputForm({
                ...inputForm,
                message: e.target.value,
              })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 mt-6 bg-[#191919] text-white rounded hover:bg-white hover:text-[#191919] hover:border-2 hover:border-[#191919]"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
