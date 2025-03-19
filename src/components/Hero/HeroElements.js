import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-top: 3rem; 
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 540px;
    margin-top: 7rem;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content */

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  border-radius: 15px;

  h1 {
    font-size: 2.8rem;
    color: #000000;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-top: 0.5rem; /* Add spacing between name and subtitle */
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 600px;
  width: 600px;
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 1.5rem;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color:rgb(61, 61, 60);

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;

/* Name remains fixed, Subtitle appears below */
export const NameWrapper = styled.div`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
  color: #000;
`;

export const SubtitleWrapper = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: rgb(119, 119, 121);
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

