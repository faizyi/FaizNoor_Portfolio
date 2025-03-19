import { HiMenuAlt4 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; /* Fixed at the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (max-width: 768px) {
    background: rgba(255, 255, 255, 0.9); /* Slightly higher opacity for better visibility */
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #706f6b;
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
  color: #34322d;
  margin-left: 1rem;
`;

export const Logo = styled("div")`
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

