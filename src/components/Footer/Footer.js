import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.footer`
  background-color: #FAFAFA;
  border-top: 1px solid #DFDFDF; /* Light gray border for subtle separation */
  color: #fff;
  text-align: center;
  padding-top: 1rem;
  padding: 2.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;

  p {
    color: #706f6b;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }
  
  a {
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #706f6b;
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <p>
        Designed & Developed by{" "}
        <a href="https://github.com/FaizNoor" target="_blank" rel="noopener noreferrer">
          Faiz Noor
        </a>
      </p>
    </FooterSection>
  );
}

export default Footer;
