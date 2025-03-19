import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectList } from "../../data/ProjectData";
import { ProjectFilter } from "./ProjectCard/ProjectFilter";
import { FilterButtons } from "./ProjectCard/ProjectCardElements";

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? ProjectList : ProjectList.filter((project) => 
    filter === "web" ? project.category === "web" : project.category === "app"
  );

  // Function to handle button clicks and set the active state
  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <h2 className="SectionTitle">Projects</h2>
          <p className="SectionDescription">
            Learn how different projects handle real-world tasks through step-by-step implementations.
          </p>

          <FilterButtons>
            <button 
              className={`FilterBtn ${filter === "all" ? "active" : ""}`} 
              onClick={() => handleFilterClick("all")}
            >
              All
            </button>
            <button 
              className={`FilterBtn ${filter === "web" ? "active" : ""}`} 
              onClick={() => handleFilterClick("web")}
            >
              Web
            </button>
            <button 
              className={`FilterBtn ${filter === "app" ? "active" : ""}`} 
              onClick={() => handleFilterClick("app")}
            >
              App
            </button>
          </FilterButtons>

          <div className="ProjectsGrid">
            <ProjectCard project={filteredProjects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
