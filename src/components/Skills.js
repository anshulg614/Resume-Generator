import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Skills = ({ skill, onChange }) => {
  return (
    <ExperienceContainer>
      <p>Skills</p>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="skill1"
        placeholder="Advanced Skills"
        value={skill.skill1}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="skill2"
        placeholder="Intermediate Skills"
        value={skill.skill2}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="skill3"
        placeholder="Novice Skills"
        value={skill.skill3}
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

export default Skills;
