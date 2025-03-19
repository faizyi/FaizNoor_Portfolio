import React from "react";
import { AboutWrapper, Image, AboutContent } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <AboutWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeIn">
            <Image src="/faiz.png" alt="Faiz Noor" />
            <AboutContent>
              Hello! My name is <strong>Faiz Noor</strong>. I am a passionate Web and Mobile Developer originally from Pakistan and currently based in Saudi Arabia. 
              <br /><br />
              My journey into technology started with a strong curiosity for building innovative solutions. Over time, I honed my skills through dedicated learning and practical projects.
              <br /><br />
              I love crafting meaningful projects that make an impact, specializing in web applications and mobile app development.
            </AboutContent>
          </ScrollAnimation>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
