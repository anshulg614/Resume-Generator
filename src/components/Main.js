import React, { useState } from "react";
import styled from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Resume from "./Resume";
import Skills from "./Skills";
import Project from "./Project";

const Main = () => {
  const [showResume, setShowResume] = useState(false);
  const [education, setEducation] = useState({
    universityName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
    description: "",
  });
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
    description: "",
  });
  const [personal, setPersonal] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
  });
  const [skill, setSkill] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
  });
  const [project, setProject] = useState({
    name: "",
    from: "",
    to: "",
    description: "",
  });

  const handleEducationInputChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleExperienceInputChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    console.log("smth happened");
    setPersonal((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSkillInputChange = (e) => {
    const { name, value } = e.target;
    setSkill((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLoadResume = () => {
    setShowResume(!showResume);
  };

  const handleGenerateResume = () => {
    setEducation((prevState) => ({
      ...prevState,
      universityName: "University of Maryland",
      city: "College Park",
      degree: "Bachelor of Science in Computer Science",
      subject: "Artificial Intelligence",
      from: "August 2017",
      to: "May 2021",
      description:
        "During my time at the University of Maryland, I took a variety of computer science courses and focused on artificial intelligence. I also participated in a number of extracurricular activities related to computer science, such as hackathons and coding competitions.",
    }));

    setExperience((prevState) => ({
      ...prevState,
      position: "Software Engineer",
      company: "Tesla",
      city: "Palo Alto",
      from: "June 2021",
      to: "Present",
      description:
        "As a software engineer at Tesla, I work on developing and improving the software systems used in our electric vehicles. This involves writing code in a variety of languages, collaborating with other engineers, and staying up-to-date with the latest developments in the field.",
    }));

    setPersonal((prevState) => ({
      ...prevState,
      name: "John Smith",
      address: "123 Main Street",
      email: "john.smith@example.com",
      number: "(123) 456-7890",
    }));

    setSkill((prevState) => ({
      ...prevState,
      skill1: "JavaScript, React.js",
      skill2: "Python",
      skill3: "Java",
    }));

    setProject((prevState) => ({
      ...prevState,
      name: "Smart Home Automation System",
      from: "January 2020",
      to: "May 2020",
      description:
        "As part of a class project, I worked on developing a smart home automation system that could be controlled using a smartphone app. The system was built using a Raspberry Pi and various sensors, and I wrote the code for the app in JavaScript and React Native.",
    }));
  };

  return (
    <MainWrapper>
      {!showResume && (
        <>
          <Personal personal={personal} onChange={handlePersonalInputChange} />
          <Education
            education={education}
            onChange={handleEducationInputChange}
          />
          <Experience
            experience={experience}
            onChange={handleExperienceInputChange}
          />
          <Project project={project} onChange={handleProjectInputChange} />
          <Skills skill={skill} onChange={handleSkillInputChange} />
          <ButtonWrapper showResume={showResume} onClick={handleLoadResume}>
            Load Resume
          </ButtonWrapper>
          <GenerateButton onClick={handleGenerateResume}>
            Generate Example
          </GenerateButton>
        </>
      )}
      {showResume && (
        <>
          <Resume
            education={education}
            experience={experience}
            personal={personal}
            project={project}
            skill={skill}
          />
          <ButtonWrapper showResume={showResume} onClick={handleLoadResume}>
            Edit Changes
          </ButtonWrapper>
        </>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: #333333;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWrapper = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  width: 227.5mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  background-color: ${(props) => (props.showResume ? "#0077be" : "#c25c0e")};

  &:hover {
    background-color: ${(props) => (props.showResume ? "#0064a6" : "#b14b0d")};
  }

  &:active {
    background-color: ${(props) => (props.showResume ? "#005380" : "#a03a0c")};
  }
`;

const GenerateButton = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  width: 227.5mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  background-color: #0077be;

  &:hover {
    background-color: #0064a6;
  }

  &:active {
    background-color: #005380";
  }
`;

export default Main;
