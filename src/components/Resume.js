import React from "react";
import styled from "styled-components";

const Resume = ({ education, experience, personal }) => {
  return (
    <ResumeContainer>
      <h2>Resume</h2>
      <div>
        <p>{personal.name}</p>
        <p>{personal.address}</p>
        <p>{personal.email} </p>
        <p>{personal.number}</p>
        <p>
          {education.from} - {education.to}
        </p>
        <p>{education.universityName}</p>
        <p>{education.city}</p>
        <p>
          {education.degree} {education.subject}
        </p>
        <p>
          {education.from} - {education.to}
        </p>
        <p>{experience.position}</p>
        <p>{experience.company}</p>
        <p>{experience.city}</p>
        <p>
          {experience.from} - {experience.to}
        </p>
      </div>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Resume;
