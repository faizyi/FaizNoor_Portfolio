import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
  NameWrapper,  // Added for positioning
  SubtitleWrapper, // Added for absolute positioning
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";
import { StyledImage } from "../Header/HeaderElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer id="home">
        <HeroWrapper>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <StyledImage src="/faiz.png" alt="faiz.png" />
            </ScrollAnimation>
          </HeroRight>
          <HeroLeft>
            <NameWrapper>
              {/* Name Animation */}
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Faiz Noor.',
                  () => setShowSubtitle(true),
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
            </NameWrapper>

            {/* Subtitle should not move the name */}
            <SubtitleWrapper>
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Web and Mobile Developer.',
                    1000,
                    'A problem solver.',
                    1000,
                    'An innovative thinker.',
                    1000,
                    "Ok...  I'm running out of ideas...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my projects are really cool, go check them out!",
                    1000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    1000,
                    "Or...",
                    1000,
                    "Or... I could scroll you by force! Muahaha!",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </SubtitleWrapper>
          </HeroLeft>
        </HeroWrapper>

        {/* Scroll Down Animation */}
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>Scroll down</ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
