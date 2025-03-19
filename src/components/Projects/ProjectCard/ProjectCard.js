import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  ImageWrapper,
  CardContent,
  TechCardContainer,
  TechCard,
  BtnGroup,
  ProjectsGrid
} from "./ProjectCardElements";

function ProjectCard({ project }) {
  return (
    <ProjectsGrid>
      {project.map((list, index) => (
        <ScrollAnimation
          animateIn="fadeIn"
          key={index}
        >
          <Card>
            <ImageWrapper>
              <img src={list.img} alt={list.name} />
            </ImageWrapper>
            <CardContent>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, idx) => (
                  <TechCard key={idx}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                )}
              </BtnGroup>
            </CardContent>
          </Card>

        </ScrollAnimation>
      ))}
    </ProjectsGrid>
  );
}

export default ProjectCard;
