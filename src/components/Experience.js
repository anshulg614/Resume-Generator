import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Experience = () => {
  return (
    <ExperienceContainer>
        <p>Experience</p>
      <Input type="text" placeholder="Position" />
      <Input type="text" placeholder="Company" />
      <Input type="text" placeholder="City" />
      <Input type="text" placeholder="From" />
      <Input type="text" placeholder="To" />
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: #1f1f1f;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Experience;
