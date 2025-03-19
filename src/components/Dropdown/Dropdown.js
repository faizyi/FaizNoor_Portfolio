import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";

const SiderBar = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(IoIosClose)`
  font-size: 2rem;
  color: #000000;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #706F6B;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(169, 169, 172);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink onClick={toggle} className="menu-item" to="projects">
          Projects
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="about">
          About
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="skills">
          Skills
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="contact">
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn>
        <a
          className="btn PrimaryBtn"
          href="https://linkedin.com/in/faiz-noor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
