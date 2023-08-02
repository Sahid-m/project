import React from "react";
import UserLogin from "../images/UserLogin.png";
import RApp from "../images/SimpleReactApp.png";
import { Link } from "react-router-dom";
import "./Stylesheets/ProjetsPage.css";
import Todo from "../images/TodoApp.png";
import Footer from "./Footer.js";

export default function ProjectsPage() {
  return (
    <div className="pagemargin pixelfont">
      <div className="container">
        <h1 className="display-2 text-center my-2">My Projects</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <Link to="/project/userauth">
                <img
                  src={UserLogin}
                  className="img-thumbnail"
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
              <Link to="/project/simplereactapp">
                <img
                  src={RApp}
                  className="img-thumbnail"
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
          <div className="col-md-6">
            <div>
              <Link to="/project/todoapp">
                <img
                  src={Todo}
                  className="img-thumbnail"
                  alt="Todo App in React JS"
                ></img>
                <h1 className="display-5 projecthead">Todo App in React JS</h1>
              </Link>
            </div>
          </div>

          <div className="col-md-6"></div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
