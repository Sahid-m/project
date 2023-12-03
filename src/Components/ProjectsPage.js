import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import RApp from "../images/SimpleReactApp.png";
import Todo from "../images/TodoApp.png";
import UserLogin from "../images/UserLogin.png";
import Footer from "./Footer.js";
import "./Stylesheets/ProjetsPage.css";

export default function ProjectsPage() {
  return (
    <div className="pagemargin pixelfont">
      <Helmet>
        <title>Sahid Munjavar - Projects</title>
        <meta
          name="description"
          content="Explore the projects created by Computer Science, a Computer Science student based in the UK. From web development to software applications, discover the diverse range of skills and creativity."
        />
        <meta
          name="keywords"
          content="Sahid Munjavar, Sahid , Munjavar, Programming , Programmer , C++ , Javascirpt ,  Projects, Computer Science, Web Development, Software Applications, Skills, Creativity, UK"
        />
        <meta name="author" content="Your Name" />
      </Helmet>
      <div className="container">
        <h1 className="display-2 text-center my-2">My Projects</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <Link to="/project/userauth">
                <img
                  src={UserLogin}
                  className="img-thumbnail"
                  alt="User Authentications"></img>
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
                  alt="User Authentications"></img>
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
                  alt="To-do App in React JS"></img>
                <h1 className="display-5 projecthead">To-do App in React JS</h1>
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
