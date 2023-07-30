import emailjs from "@emailjs/browser";

interface Data {
  name: string;
  email: string;
  message: string;
}

export const useEmail = (data: HTMLFormElement) => {
  return emailjs.sendForm(
    "service_glsshy3",
    "template_r0zpf68",
    data,
    "OAC9NWYxt00An1stn"
  );
};
