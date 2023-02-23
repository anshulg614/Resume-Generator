import React from "react";
import styled from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

const Main = () => {
  return (
    <MainWrapper>
      <Personal />
      <Education />
      <Experience />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Main;
