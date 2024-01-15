import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Stylesheets/HomePage.css";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Sahid Munjavar - Computer Science Student</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Sahid Munjavar, a passionate Computer Science student based in the UK. Explore my projects, skills, and journey in the world of technology."
        />
        <meta
          name="keywords"
          content="Sahid Munjavar, Sahid ,Munjavar, Computer Science, Student, Portfolio, Projects, Skills, Technology, UK"
        />
        <meta name="author" content="Sahid Munjavar" />
      </Helmet>
      <div className="container-fluid homeContainer">
        <div className="CenterDiv">
          <h1 className="display-1 pixelfont ">HI, I AM SAHID MUNJAVAR</h1>
          <p className="fw-light pixelfont introHeading display-6 fs-3">
            I am a Computer Science Student Based in UK
          </p>
          <Link
            to="/projects"
            type="button"
            className="pixelfont btn btn-dark Project-button fs-4 px-5">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
