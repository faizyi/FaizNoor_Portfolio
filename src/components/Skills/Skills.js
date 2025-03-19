import React from "react";
import { SkillsWrapper, Technologies, Tech, TechImg, TechName } from "./SkillsElements";
import ScrollAnimation from "react-animate-on-scroll";
import { stackList } from "../../data/ProjectData";

function Skills() {
  return (
    <SkillsWrapper id="skills">
      <div className="Container">
        <div className="SectionTitle">Skills & Technologies</div>
        <Technologies>
          {stackList.map((stack, index) => (
            <ScrollAnimation animateIn="fadeIn" key={index}>
              <Tech>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            </ScrollAnimation>
          ))}
        </Technologies>
      </div>
    </SkillsWrapper>
  );
}

export default Skills;
