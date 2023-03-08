import React from "react";
import styled from "styled-components";

const Resume = ({ education }) => {
  return (
    <ResumeContainer>
      <h2>Resume</h2>
      <div>
        <p>{education.universityName}</p>
        <p>{education.city}</p>
        <p>{education.degree} {education.subject} </p>
        <p>
          {education.from} - {education.to}
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
