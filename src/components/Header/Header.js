import React from "react";
import { Nav, NavMenu, NavLink, NavBtn, NavRight, Bars } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <div className="NavLeft">
          {/* Mobile: Show "Faiz Noor" */}
          <NavRight>Faiz Noor</NavRight>

          {/* Desktop: Show Navigation Links */}
          <NavMenu>
            <NavLink className="menu-item" to="projects">
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about">
              About
            </NavLink>
            <NavLink className="menu-item" to="contact">
              Contact
            </NavLink>
          </NavMenu>
        </div>

        {/* Resume Button (Hidden in mobile) */}
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="/FaizNoor_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>

        {/* Mobile Hamburger Icon */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
