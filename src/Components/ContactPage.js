import React from "react";
import "./Stylesheets/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="pagemargin">
      <div className="container">
        <h1 className="pixelfont text-center display-2">Contact Me</h1>
        <form action="#" method="post">
          <div classNameName="form-group">
            <label htmlFor="name" className="pixelfont display-6">
              Name:&nbsp;
            </label>
            <input
              type="text"
              className=" form-input form-control"
              id="name"
              name="name"
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
              name="email"
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
          <i class="fa-regular fa-2xl fa-envelope"></i>
          <h4 className=" ms-4 display-6 email pixelfont">
            sahidmunjavar.s@gmail.com
          </h4>
        </div>
        <div className="my-2">
          <i class="fa-solid fa-2xl fa-square-phone"></i>
          <h4 className=" ms-4 display-6 email pixelfont">+91 8320809147</h4>
        </div>
      </div>
    </div>
  );
}
