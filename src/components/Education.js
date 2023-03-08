import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Education = ({ education, onChange}) => {
  return (
    <EducationContainer>
      <p>Education</p>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="universityName"
        placeholder="University name"
        value={education.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={education.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={education.subject}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={education.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={education.to}
      />
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
