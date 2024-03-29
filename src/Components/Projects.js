import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/Projects.css";

export default function Projects(props) {
  return (
    <div className="pagemargin pixelfont">
      <div className="container">
        <h1 className="text-center display-4">{props.heading}</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              src={props.img}
              className="img-thumbnail"
              alt={props.alt}></img>
            <h1 className="my-3 disap-sm display-5 projecthead text-center">
              {props.heading}
            </h1>
          </div>
          <div className="col-md-6">
            <div>
              <h1 className="display-5 text-center"> Project Description</h1>
              <p className="display-6 fs-3">{props.desc}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={props.gitlink}
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            className=" mx-2 pixelfont btn btn-dark Project-button fs-4 px-5">
            Github
          </a>
          <Link
            to="/projects"
            type="button"
            className="pixelfont btn btn-dark Project-button fs-4 px-5">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
