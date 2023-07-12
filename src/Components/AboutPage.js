import React from "react";
import "./Stylesheets/AboutPage.css";

export default function AboutPage() {
  return (
    <div>
      <div className="">
        <h1 className="fw-medium justify-content-center d-flex my-2 display-4">
          About Me
        </h1>
        <hr className="hline my-2"></hr>
        <h4 className=" my-4 display-6 fs-4 text-center">
          Here you will find all the info regarding my carrer and my social
          media handles
        </h4>

        <div className="container">
          <div class="row">
            <div class="col-md-6">
              <h1 className="display-6 fw-normal fs-3">Who Am I?</h1>
            </div>
            <div class="col-md-6">.col-6</div>
          </div>
        </div>
      </div>
    </div>
  );
}
