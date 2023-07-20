import React from "react";
import "./Stylesheets/HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="container-fluid homeContainer">
        <div className="CenterDiv">
          <h1 className="display-1 pixelfont ">HI, I AM SAHID MUNJAVAR</h1>
          <p className="fw-light pixelfont introHeading display-6 fs-3">
            I am a Computer Science Student Based in UK
          </p>
          <Link
            to="/project"
            type="button"
            className="pixelfont btn btn-dark Project-button fs-4 px-5"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
