import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2023 anshulg614</p>
      <Link href="https://github.com/anshulg614" target="_blank">
        <FaGithub />
      </Link>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: #333333;
  color: white;
`;

const Link = styled.a`
  position: relative;
  top: 0.2rem;
  margin-left: 1rem;
  color: "#eee";
  font-size: 2rem;
  &:hover {
    color: "#ccc";
  }
  &:active {
    color: "#aaa";
  }
`;

export default Footer;
