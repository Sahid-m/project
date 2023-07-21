import "./Stylesheets/ContactPage.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhdu7u9",
        "template_it4tlgr",
        form.current,
        "jMb57gECnI6lfsky4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Email Sent Succesfully");
  };

  return (
    <div className="pagemargin">
      <div className="container">
        <h1 className="pixelfont text-center display-2">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} method="POST">
          <div className="form-group">
            <label htmlFor="name" className="pixelfont display-6">
              Name:&nbsp;
            </label>
            <input
              type="text"
              className=" form-input form-control"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="pixelfont display-6">
              Email:
            </label>
            <input
              type="email"
              className=" form-input form-control"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="pixelfont display-6">
              Message:
            </label>
            <textarea
              className="form-message form-control"
              id="message"
              name="message"
              rows="7"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="pixelfont submitbutton  fs-5 my-3 btn btn-dark"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <h4 className=" pixelfont display-5 fs-3 fw-medium text-center">
          You could also find my other contact details below:
        </h4>
        <div className="my-2">
          <i className="fa-regular fa-2xl fa-envelope"></i>
          <h4 className=" ms-4 display-6 email pixelfont">
            sahidmunjavar.s@gmail.com
          </h4>
        </div>
        <div className="my-2">
          <i className="fa-solid fa-2xl fa-square-phone"></i>
          <h4 className=" ms-4 display-6 email pixelfont">+91 8320809147</h4>
        </div>
      </div>
    </div>
  );
}
