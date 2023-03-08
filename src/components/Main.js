import React, { useState } from "react";
import styled from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Resume from "./Resume";

const Main = () => {
  const [showResume, setShowResume] = useState(false);
  const [education, setEducation] = useState({
    universityName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  });

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    console.log("smth happened");
    setEducation(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  
  

  const handleLoadResume = () => {
    setShowResume(!showResume);
  };

  return (
    <MainWrapper>
      {!showResume && (
        <>
          <Personal />
          <Education education={education} onChange={handleInputChange} />
          <Experience />
          <ButtonWrapper showResume={showResume} onClick={handleLoadResume}>
            Load Resume
          </ButtonWrapper>
        </>
      )}
      {showResume && (
        <>
          <Resume education={education} />
          <ButtonWrapper showResume={showResume} onClick={handleLoadResume}>
            Edit Changes
          </ButtonWrapper>
        </>
      )}
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
  color: #fff;
  background-color: ${(props) => (props.showResume ? "#0077be" : "#c25c0e")};

  &:hover {
    background-color: ${(props) => (props.showResume ? "#0064a6" : "#b14b0d")};
  }

  &:active {
    background-color: ${(props) => (props.showResume ? "#005380" : "#a03a0c")};
  }
`;

export default Main;
