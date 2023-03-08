import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Experience = ({ experience, onChange }) => {
  return (
    <ExperienceContainer>
      <p>Experience</p>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="Company"
        value={experience.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={experience.city}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={experience.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={experience.to}
      />
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
