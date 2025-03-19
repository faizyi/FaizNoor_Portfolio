import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectList } from "../../data/ProjectData";
import { ProjectFilter } from "./ProjectCard/ProjectFilter";
function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? ProjectList : ProjectList.filter((project) => 
  filter === "web" ? project.category === "web" : project.category === "app")
  return (
    <>
       <div className="ProjectWrapper" id="projects">
      <div className="Container">
        <h2 className="SectionTitle">Projects</h2>
        <p className="SectionDescription">
          Learn how different projects handle real-world tasks through step-by-step implementations.
        </p>
        <ProjectFilter setFilter={setFilter} />
        <div className="ProjectsGrid">
          {/* {filteredProjects.map((project, index) => ( */}
            <ProjectCard 
            // key={index}
             project={filteredProjects} />
          {/* ))} */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
