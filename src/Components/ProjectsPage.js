import React from "react";
import UserLogin from "../images/UserLogin.png";
import RApp from "../images/SimpleReactApp.png";
import { Link } from "react-router-dom";
import "./Stylesheets/ProjetsPage.css";

export default function ProjectsPage() {
  return (
    <div className="pagemargin pixelfont">
      <div className="container">
        <h1 className="display-2 text-center my-2">My Projects</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <Link to="/project">
                <img
                  src={UserLogin}
                  class="img-thumbnail"
                  alt="User Authentications"
                ></img>
                <h1 className="display-5 projecthead">
                  User Authentication System in C++{" "}
                </h1>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <div className="">
              <Link to="/project">
                <img
                  src={RApp}
                  class="img-thumbnail"
                  alt="User Authentications"
                ></img>
                <h1 className="display-5 projecthead">
                  Simple React App For Text Manipulation
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>

          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
