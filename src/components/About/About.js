import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeIn">
            <Image
              src="/faiz.png"
              alt="faiz.png"
            />
         
          <div className="AboutBio">
              Hello! My name is <strong>Faiz Noor</strong>. I am a passionate Web and Mobile Developer originally from Pakistan and currently based in Saudi Arabia. I have a strong foundation in problem-solving, web technologies, and mobile app development.

            <br /><br />

              My journey into technology started with an insatiable curiosity for building innovative solutions. Over time, I honed my skills through dedicated learning and practical projects. These experiences have shaped me into a versatile developer, capable of crafting seamless and efficient web and mobile applications.

            <br /><br />

              I thrive on building meaningful projects that make a positive impact. My interests lie in creating responsive web applications, cross-platform mobile apps, and continuously exploring new technologies to enhance my skill set.
              <div className="tagline2">
                I am proficient with the following technologies:
              </div>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeIn" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
