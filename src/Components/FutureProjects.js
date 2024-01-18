import React from "react";
import CurrentProjectsLayout from "./CurrentProjectsLayout";

const currentProjects = [
  {
    priority: 3,
    title: "Omegle Full Stack Clone",
    description:
      "This is a Full Stack Omegle Clone using Next JS , TypeScript , Tailwind , WebRTC , Web Socket",
    TechStack: "React JS,TypeScript,Tailwind,WebRTC,WebSockets",
    TimeLeft: "1 Month",
    github: "https://github.com/sahid-m/",
  },
  {
    priority: 1,
    title: "Chat Application",
    description:
      "This is an Chat Application in Next JS , TypeScript , WebSockets ",
    TechStack: "React JS,TypeScript,Tailwind,WebSockets",
    TimeLeft: "10 Days",
    github: "https://github.com/sahid-m/",
  },
  {
    priority: 2,
    title: "New Portfolio For me",
    description:
      "New Portfolio made with TypeScript, Next JS and three.js that has Good UI, and some interactivity",
    TechStack: "Next JS,TypeScript,Tailwind,three.js",
    TimeLeft: "20 Days",
    github: "https://github.com/sahid-m/",
  },
];

export default function FutureProjects() {
  return (
    <div className="pagemargin">
      <div className="d-flex justify-content-center">
        <h1 className="pixelfont display-4">Current On Going Projects</h1>
      </div>
      <div className="container">
        {currentProjects.map((project) => (
          <CurrentProjectsLayout projectObj={project} />
        ))}
      </div>
    </div>
  );
}
