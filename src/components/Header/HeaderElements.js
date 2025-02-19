import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;
export const Logo = styled('div')`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
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

