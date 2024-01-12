import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Stylesheets/App.css";

const Navigation = () => {
  const location = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);

  const isActiveLink = (pathname) => {
    return pathname === location.pathname ? "actv" : "";
  };
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setNavOpen(false);
  };

  const Navs = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Projects",
      to: "/projects",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark fixed-top"
      data-bs-theme="dark">
      <div className="container-fluid">
        <Link className=" fs-1 navbar-brand mb-0 h1 pixelfont " to="/">
          Sahid Munjavar
        </Link>
        <button
          className={`navbar-toggler navbar-toggle-icon ${
            isNavOpen ? "" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            onClick={handleNavToggle}
            className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarSupportedContent">
          <ul className="navbar-nav ">
            {Navs.map((navItem, index) => (
              <li key={index} className="nav-item">
                <Link
                  onClick={handleNavItemClick}
                  className={` pixelfont fs-2 nlink nav-link ${isActiveLink(
                    navItem.to
                  )}`}
                  to={navItem.to}>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
