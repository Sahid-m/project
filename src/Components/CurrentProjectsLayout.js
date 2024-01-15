import React from "react";

export default function CurrentProjectsLayout(props) {
  const { priority, title, description, TechStack, TimeLeft, github } =
    props.projectObj;

  const techs = TechStack.split(",");

  console.log(techs);

  return (
    <div className="my-2">
      <div className="card">
        <h5 className="card-header bg-dark text-white">Priority: {priority}</h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text my-2">{description}</p>
          <div className=" my-2 card-text">
            <span className="fw-bold">Tech Stack:</span>
            {techs.map((techItem) => (
              <button className="btn btn-dark mx-1">{techItem}</button>
            ))}
          </div>
          <p className="card-text">
            <span className="fw-bold">Time to make Project : </span>
            {TimeLeft}
          </p>
          <a href={github} className="btn btn-success">
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
}
