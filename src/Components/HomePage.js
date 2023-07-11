import React from "react";
import "./Stylesheets/HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="container-fluid cfluid"
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="centerdiv">
        <h1 className="sprogram text-xxl">Hi, I am Sahid a Programmer.</h1>
        <div className=" txtbtn ">
          <h6 className="subhead">View My Projects Here : </h6>
          <Link
            type="button"
            to="/project"
            className="bmargin ms-4 me-3 btn btn-outline-dark"
          >
            Projects
          </Link>

          <h6 className="subhead">Contact me :</h6>
          <Link
            type="button"
            to="/contact"
            className="ms-4 bmargin btn btn-outline-dark"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
