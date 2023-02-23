import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Education = () => {
  return (
    <EducationContainer>
        <p>Education</p>
      <Input type="text" placeholder="University Name" />
      <Input type="text" placeholder="City" />
      <Input type="text" placeholder="Degree" />
      <Input type="text" placeholder="From" />
      <Input type="text" placeholder="To" />
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Education;
