import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Education = () => {
  return (
    <EducationContainer>
        <p>Education</p>
      <Input type="text" placeholder="University Name" value = {Education.universityName}/>
      <Input type="text" placeholder="City" value = {Education.city}/>
      <Input type="text" placeholder="Degree" value={Education.degree}/>
      <Input type="text" placeholder="From" value={Education.from}/>
      <Input type="text" placeholder="To" value={Education.to}/>
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
  background-color: #1f1f1f;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
`;

export default Education;
