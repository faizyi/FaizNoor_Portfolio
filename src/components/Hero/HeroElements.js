import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-top: 4rem; 
  margin-left: auto;
  display: flex;
  flex-direction: column;

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

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  justify-content: center;
  // background: linear-gradient(145deg, #ffffff, #f3f4f6);
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
    margin-bottom: 1rem;
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

    h5 {
      min-height: 5rem;
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
  margin-top: 1rem;

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
