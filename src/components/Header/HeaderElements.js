import { HiMenuAlt4 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  //   position: fixed; /* Make it fixed */
  // top: 0;
  // width: 80%;
  // padding-right: 3.5rem;
  // margin-right: auto;
  // margin-left: auto;
    @media screen and (max-width: 768px) {
    background: white; /* Ensures visibility on mobile */
        z-index: 10;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  position: fixed; /* Make it fixed */
  top: 0;
  width: 100%;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #706F6B;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: rgb(169, 169, 172);
  }
`;

export const NavRight = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #34322D;
  margin-left: 1rem;
  
  // @media screen and (min-width: 769px) {
  //   display: none; /* Hide in desktop */
  // }
`;

export const Logo = styled('div')`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(HiMenuAlt4)`
  display: none;
  color: rgb(119, 119, 121);
  font-size: 1.8rem;
  cursor: pointer;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const StyledImage = styled.img`
  border-radius: 50%; /* Makes the image round */
  width: 350px; /* Adjust size as needed */
  height: 350px; /* Ensure width and height are equal for a perfect circle */
  object-fit: cover; /* Ensures the image fits nicely within the circle */
  border: 5px solidrgb(41, 38, 38); /* Add a nice border */
  transition: transform 0.3s ease-in-out; /* Smooth hover effect */
  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }
`;

