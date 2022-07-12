import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import data from "./projects.json";
import gsap from "gsap";
import { Element } from "react-scroll";
const Projects = () => {
  useEffect(() => {
    gsap.timeline().to(".glow__project", {
      scrollTrigger: {
        trigger: ".ProjectSection",
        start: "top center",
      },
      textShadow: "0 0 0.5em #d406a8, 1px 1px 0px white",
      ease: "power1.in",
    });
  }, []);
  return (
    <Element name="Projects">
      <section id="ProjectSection" className="ProjectSection section">
        <h1 className="ProjectSection__title glow__project">Projects</h1>
        <div className="ProjectSection__cards">
          {data.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              github={project.githubLink}
              liveLink={project.liveLink}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
        <a href="https://github.com/Enx-dev">
          <button className="btn">View more</button>
        </a>
      </section>
    </Element>
  );
};

export default Projects;
