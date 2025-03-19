import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.footer`
 padding-top: 3rem;
 background-color: #FAFAFA;

  div {
  border-top: 1px solid #DFDFDF; /* Light gray border for subtle separation */
  text-align: center;
  padding: 1.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  }

  p {
    color: #706f6b;
    font-size: 1rem;
    font-weight: 500;
    margin: 0.3rem 0;
  }
  
  a {
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    font-size: 1rem;

    &:hover {
      color: #706f6b;
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <div>
      <p>
        Designed & Developed by{" "}
        <a href="https://github.com/FaizNoor" target="_blank" rel="noopener noreferrer">
          Faiz Noor
        </a>
      </p>
      <p>© {currentYear} All Rights Reserved</p>
      </div>
    </FooterSection>
  );
}

export default Footer;
