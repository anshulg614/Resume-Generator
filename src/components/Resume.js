import React from "react";
import styled from "styled-components";

const Resume = ({ education, experience, personal, project, skill }) => {
  return (
    <ResumeContainer>
      <div>
        <PersonalContainer>
          <h1>{personal.name}</h1>
          <p>{personal.address}</p>
          <p>
            {personal.number} | {personal.email}
          </p>
        </PersonalContainer>
        <EducationContainer>
          <h2>Education</h2>
          <Line />
          <h3
            style={{
              justifyContent: "space-between",
              marginTop: "0.1rem",
              display: "flex",
            }}
          >
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {education.universityName}
            </span>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              {education.from} - {education.to}
            </span>
          </h3>
          <p
            style={{
              justifyContent: "space-between",
              marginTop: "0.1rem",
              display: "flex",
            }}
          >
            {education.degree} in {education.subject}
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              {education.city}
            </span>
          </p>
          <p style = {{lineHeight: "1.2" }}>{education.description}</p>
          <h2 style={{ marginTop: "2rem" }}>Experience</h2>
          <Line />
          <h3
            style={{
              justifyContent: "space-between",
              display: "flex",
              marginTop: "0.1rem",
              alignItems: "center",
            }}
          >
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {experience.position}
            </span>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              {experience.from} - {experience.to}
            </span>
          </h3>
          <p
            style={{
              justifyContent: "space-between",
              marginTop: "0.1rem",
              display: "flex",
            }}
          >
            {experience.company}
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              {experience.city}
            </span>
          </p>
          <p style = {{lineHeight: "1.5" }}>{experience.description}</p>
          <h2 style={{ marginTop: "2rem" }}>Projects</h2>
          <Line />
          <h3
            style={{
              justifyContent: "space-between",
              marginTop: "0.1rem",
              display: "flex",
            }}
          >
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {project.name}
            </span>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              {project.from} - {project.to}
            </span>
          </h3>
          <p style = {{lineHeight: "1.5" }}>{project.description}</p>
          <h2 style={{ marginTop: "2rem" }}>Skills</h2>
          <Line />
          <p> Advanced Skills: {skill.skill1} </p>
          <p> Intermediate Skills: {skill.skill2} </p>
          <p> Novice Skills: {skill.skill3} </p>
        </EducationContainer>
      </div>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 800px;
`;

const PersonalContainer = styled.div`
  text-align: center;
  line-height: 0.5;
`;

const EducationContainer = styled.div`
  line-height: 0.5;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid black;
`;

export default Resume;
