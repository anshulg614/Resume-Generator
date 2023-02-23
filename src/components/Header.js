import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <BackgroundColor>
        <HeaderContainer>
          <h1>Resume Generator</h1>
        </HeaderContainer>
      </BackgroundColor>
    </>
  );
};

const BackgroundColor = styled.div`
  background-color: #333333;
`;

const HeaderContainer = styled.div`
  font-family: "Zen Tokyo Zoo";
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  height: 20px; /* or any other height value you want */
  margin: 0 auto;
  color: white;
  font-size: 2.2rem;
  padding: 3rem 8rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`;

export default Header;
