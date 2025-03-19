import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 10;

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  .linkedin, .github {
    font-size: 2.5rem;
    color: rgb(119, 119, 121);
    padding: 0.6rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .linkedin:hover {
    color: rgb(57, 134, 250);
    transform: translateY(-5px);
    background-color: rgba(57, 134, 250, 0.1);
  }

  .github:hover {
    color: #000000;
    transform: translateY(-5px);
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1000px) {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 2rem;
    display: none; /* Hide the social icons on mobile in fixed position */

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    .item + .item {
      margin-left: 2rem;
    }
  }
`;

const MobileFooterSocial = styled.div`
  display: none;
  background-color: #FAFAFA;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    // margin-top: 1.5rem;

    .linkedin, .github {
      font-size: 2.5rem;
      color: rgb(119, 119, 121);
      padding: 0.6rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .linkedin:hover {
      color: rgb(57, 134, 250);
      transform: translateY(-5px);
      background-color: rgba(57, 134, 250, 0.1);
    }

    .github:hover {
      color: #000000;
      transform: translateY(-5px);
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

function FixSocialIcon() {
  return (
    <>
      <SocialContainer>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ul>
            <li className="item">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/faiz-noor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="item">
              <a
                className="github"
                href="https://github.com/faizyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </ScrollAnimation>
      </SocialContainer>

      {/* Social Icons in Footer for Mobile */}
      <MobileFooterSocial>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/faiz-noor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="github"
          href="https://github.com/faizyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </MobileFooterSocial>
    </>
  );
}

export default FixSocialIcon;
