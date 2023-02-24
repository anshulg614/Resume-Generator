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
      <ButtonWrapper>Load Resume</ButtonWrapper>
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
  background-color: #333333;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWrapper = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  width: 227.5mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  background-color: #c25c0e;
  color: #eee;

  &:hover {
    background-color: #b14b0d;
  }

  &:active {
    background-color: #a03a0c;
  }
`;

export default Main;
