import React from "react";
import styled from "styled-components";
import Input from "./Input";
import TextArea from "./TextArea";

const Project = ({ project, onChange }) => {
  return (
    <ExperienceContainer>
      <p>Project</p>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="name"
        placeholder="name"
        value={project.name}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="from"
        placeholder="From"
        value={project.from}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="to"
        placeholder="To"
        value={project.to}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
        value={project.description}
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

export default Project;
