import React from "react";
import "./Stylesheets/AboutPage.css";

export default function AboutPage() {
  return (
    <div className="pagemargin pixelfont">
      <div className="container">
        <h1 className="text-center my-2 display-2">About Me</h1>
        <hr className="hline my-2"></hr>
        <h4 className=" my-4 display-6 fs-2 text-center">
          Here you will find all the info regarding my carrer and my social
          media handles
        </h4>

        <div className="container">
          <div class="row">
            <div className="col-md-6">
              <h1 className="display-6  text-center ">Who Am I?</h1>
              <p className="aboutPara fs-4">
                I am a student in Brunel University that is located in London. I
                am currently studing Computer Science Bsc and I will be
                finishing my course in 2027 with 3 years of college and 1 year
                of Placement.
              </p>
              <p className="fs-4">
                I have been passionate about computers and internet from the
                start as soon as i got my first phone with internet in 2016. I
                started my journey with small things like modding apps through a
                app and from there i got very curious about the things internet
                could do and so during all this year I studied many things like
                cyber security and web development and right now I am studing
                MERN Stack and C++.
              </p>
              <p className="fs-4">
                I also go to gym and i am not a hardcore bodybuilder but i like
                to be fit and do things that would help me get better. I am not
                really a social guy so i dont go out much if it isnt neccessary.
              </p>
            </div>
            <div className="col-md-6">
              <h1 className="display-6  text-center ">Things I have tried</h1>
              <button className="my-3 pixelfont btn btn-dark fs-4 skillsbutton">
                Android development with Java
              </button>
              <button className="my-3 pixelfont btn btn-dark fs-4 skillsbutton">
                Game development with unity
              </button>
              <div>
                <button className="my-3  hcj pixelfont btn btn-dark fs-4 ">
                  html
                </button>
                <button className="   hcj  my-3 pixelfont btn btn-dark fs-4 ">
                  css
                </button>
                <button className="  hcj my-3 pixelfont btn btn-dark fs-4 ">
                  Javascript
                </button>
              </div>
              <div>
                <button className="mern mern1 my-3 pixelfont btn btn-dark fs-4 ">
                  MongoDB
                </button>
                <button className="mern mern1   my-3 pixelfont btn btn-dark fs-4 ">
                  Express Js
                </button>
                <button className="mern mern2 my-3 pixelfont btn btn-dark fs-4 ">
                  React Js
                </button>
                <button className="mern mern2 my-3 pixelfont btn btn-dark fs-4 ">
                  Node Js
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
